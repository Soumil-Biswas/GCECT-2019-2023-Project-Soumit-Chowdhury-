import express from "express";
import dotenv from 'dotenv';
import uniRouter from "./routes/uniRouter.js";
import officeRouter from "./routes/officeRouter.js";
import studentRouter from "./routes/studentRouter.js";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

// app.use(express.json({limit: '100mb'}));

app.use("/UniversityPortal", uniRouter);
app.use("/ScholarshipPortal", officeRouter);
app.use("/StudentPortal", studentRouter);


// Run when Starting server
app.get("/", (req, res) => {
    res.send("Server is ready.");
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`)
})