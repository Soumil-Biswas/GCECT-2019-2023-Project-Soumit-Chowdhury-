import { Router } from "express";
import { unHashTransaction } from "../middleware/bcrypt";
import { getTransaction } from "../middleware/dbQueries";

const route = Router();


route.get('/transaction', async (req, res) => {
    /* 
        Input will be the transaction ID and transaction amount
        Match input transac ID with the one hashed and stored in the db
        If success: Output will be a success message
    */
    try {
        // Create Hash with ID and Amount
        const {transactionID, transactionAmount} = request.body;

        try {
            
            const transactionHash = await getTransaction(transactionID);
            const verified = await unHashTransaction(transactionID, transactionHash);

            if (verified) response.status(200).send("Scholarship has been paid for.");

        } catch (error) {
            return res.status(404).send('Incorrect Transaction ID');
        }
    } catch (error) {
        console.error("Unexpected error:", error.message);
        response.status(500).send("Internal Server Error"); 
    }   
});

export default route;