import { Router } from "express";
import upload from "../middleware/multerInit.js";
import { cleanFiles, fileInit, handleFileOperation } from "../middleware/fileOp.js";
import { createDBEntry } from "../middleware/dbQueries.js";

const route = Router();

route.post('/submitReportCard', 
    upload.fields([
        { name: "reportCard", maxCount: 1 },
        { name: "logo", maxCount: 1 },
        { name: "fingerprint", maxCount: 1 },
        { name: "audio", maxCount: 1 },
    ]),
    async (request, response) => {
        try {
            /*Recieve Candidate Entry*/
            console.log('Candidate Entry Recieved.')
            
            // console.log(request.body);
            // console.log("files: ");
            // console.log(request.files);

            let {error, reportCardFile, logoFile, fingerprintFile, audioFile} = fileInit(request.files);
            if (error) return response.status(400).send(error);

            let publicSharePath = handleFileOperation(reportCardFile, logoFile, fingerprintFile, audioFile);
            
            const data = request.body;
            Object.assign(data, {
                reportCard: publicSharePath,
                logo: logoFile.path,
                fingerprint: fingerprintFile.path,
                audio: audioFile.path
            })
            console.log(data);

            // Create DB Entry for student
            await createDBEntry(data);

            // Send the generated publicShare.jpg as a response. This is for the candidate to keep
            response.sendFile(publicSharePath, (sendErr) => {
                if (sendErr) {
                console.error('Error sending file:', sendErr.message);
                return response.status(500).send('Error sending file');
                }
        
                // Cleanup uploaded file and output files
                // cleanFiles();
            });

        } catch (error) {
            console.error("Unexpected error:", error.message);
            response.status(500).send("Internal Server Error");            
        }
    }
);

export default route;