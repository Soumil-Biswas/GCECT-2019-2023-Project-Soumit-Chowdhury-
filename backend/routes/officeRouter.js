import { Router } from "express";
import { checkDGPA, findStudent, getFingerprint, getAudio, getReportCard, enterTransaction } from "../middleware/dbQueries";
import { generateOTP, saveOTP, sendOTP, sendTransactionID, verifyOTP } from "../middleware/otp";
import { dataHiding, originalSharePath, shareMerging } from "../middleware/javaFunctions";
import upload from "../middleware/multerInit";
import { hashTransaction } from "../middleware/bcrypt";
import { hideTransaction } from "../middleware/fileOp";

const route = Router();

// STEP 1: GET STUDENT DATA

route.get('/StudentOTP', async (request, response) => {
    /* 
        Input will be the Roll number and name of the university 
        If the student exists:
            Output will be successfully sending an OTP
    */
    try {
        const data = request.body;

        const student = await findStudent(data);
    
        if(!student) {
            return res.status(404).send('User not found')
        }
        
        const otp = generateOTP();
        await saveOTP(data.name, otp);
        // Send OTP to phone number
        const sent = await sendOTP(student.phone, otp);
        if (!sent) return response.status(500).send("Failed to send OTP");

        response.status(200).send("OTP sent successfully");
    } catch (error) {
            console.error("Unexpected error:", error.message);
            response.status(500).send("Internal Server Error");            
    }    
});

route.get('/Student', async (request, response) => {
    /* 
        Input will be the OTP
        If correct OTP: 
            Get the public and private share from the system
            Get the original file by merging shares
            (I know we need to use a hash function to retrieve the items, but we're too far down for that)
            EXtract College logo from the original file:
            If Success:    
                Output will be a success message
    */
   try {
    const data = request.body;

    const verified = await verifyOTP(data.name, data.otp);

    if(!verified) return response.status(500).send("Invalid or expired OTP");
    
    const reportCard = getReportCard();

    const merged = await shareMerging(reportCard);

    if(!merged) return response.status(500).send("Incorrect Report Card Fetched");

    response.status(200).send("Student Verified");
    
   } catch (error) {
    console.error("Unexpected error:", error.message);
    response.status(500).send("Internal Server Error"); 
   }
});

// STEP 2: FINGERPRINT

route.get('/FingerInfo', async (request, response) => {
    /* 
        Input will be the Student's year of passing and DGPA
        If the Info matches:
            Output will be a success message
    */
    try {
        const data = request.body;

        const studentMatched = await checkDGPA(data);
    
        if(!studentMatched) {
            return res.status(404).send('Student Values do not match')
        }

        response.status(200).send("Student Information Verified");
    
    } catch (error) {
        console.error("Unexpected error:", error.message);
        response.status(500).send("Internal Server Error"); 
    }

});

route.get('/Finger', 
    upload.fields([
        {name: "fingerprint", maxCount: 1},
    ]),
    async (request, response) => {
    /* 
        Input will be the fingerprint image

        EXtract Fingerprint from the original file:
        If extracted finger and input finger matches:    
            Output will be a success message
    */
    try {
        const inputFingerprint = request.files.fingerprint;

        const fingerprint = getFingerprint();

        // Now this is the part where you use MATLAB to compare Fingerprints

        let verifyFinger;

        if(verifyFinger){
            return res.status(404).send('Student fingerprint does not match')
        }

        response.status(200).send("Student fingerprint matched");
    
    } catch (error) {
        console.error("Unexpected error:", error.message);
        response.status(500).send("Internal Server Error"); 
    }

});

//  STEP 3: AUDIO

route.get('/Audio', 
    upload.fields([
        {name: "audio", maxCount: 1},
    ]),
    async (request, response) => {
    /* 
        Input will be the Audio image
         
        EXtract Audio from the original file:
        If extracted Audio and input Audio matches:    
            Output will be a success message
    */
    try {
        const inputAudio = request.files.audio;

        const audio = getAudio();

        // Now this is the part where you use MATLAB to compare audio

        let verifyAudio;

        if(verifyAudio){
            return res.status(404).send('Student audio does not match')
        }

        response.status(200).send("Student audio matched");
    } catch (error) {
        console.error("Unexpected error:", error.message);
        response.status(500).send("Internal Server Error"); 
    }
   
});

// STEP 4: TRANSACTION ID

route.post('/transaction', 
    upload.fields([
        {name: "fingerprint2", maxCount: 1},
    ]),
    async (request, response) => {
    /* 
        Input will be the transaction ID, transaction amount and Fingerprint image of opposite hand
        Hash the transc ID
        Store it in the database for now (Because we dont have a function to hide text in Report card)
        HIde the fingerprint in the report card orginal share.
        create new public and private shares and store them in the db
        Send a message to candidate's mobile number to confirm transaction with ID and amount
        Output will be a success message
    */
    try {
        // Create Hash with ID and Amount
        const {transactionID, transactionAmount} = request.body;

        const hash = hashTransaction(transactionID, transactionAmount);

        // Embed Fingerprint

        let fingerprint2 = request.files.fingerprint2[0];

        const publicSharePath = hideTransaction(originalSharePath, transactionID, fingerprint2);

        // Enter updated report card and transaction ID to DB

        const transactionEntered = await enterTransaction(publicSharePath, hash);

        if(!transactionEntered) {
            return res.status(404).send('Error saving transaction to database.')
        }

        // Send SMS to student
        const student = await findStudent(data);
        const sent = await sendTransactionID()(student.phone, transactionID, transactionAmount);
        if (!sent) return response.status(500).send("Failed to send SMS to student");

        response.status(200).send("Transaction Saved");
    } catch (error) {
        console.error("Unexpected error:", error.message);
        response.status(500).send("Internal Server Error"); 
    }

});

export default route;