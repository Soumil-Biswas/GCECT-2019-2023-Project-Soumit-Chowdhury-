import fs from "fs";
import { dataHiding, shareGeneration } from '../middleware/javaFunctions.js';

export const fileInit = (files) => {
    // Ensure the "Report_Card" field is present
    let errormsg;
    if (!files || !files.reportCard) {
        errormsg = "reportCard file is required.";
    }
    if (!files.logo) {
        errormsg = "logo file is required.";
    }
    if (!files.fingerprint) {
        errormsg = "fingerprint file is required.";
    }
    if (!files.audio) {
        errormsg = "audio file is required.";
    }
    if (errormsg) return {error : errormsg};

    // Hide these file in the base report card
    const reportCardFile = files.reportCard[0]; // Extract the uploaded file
    const logoFile = files.logo[0]; // Extract the uploaded file
    const fingerprintFile = files.fingerprint[0]; // Extract the uploaded file
    const audioFile = files.audio[0]; // Extract the uploaded file

    return {reportCardFile, logoFile, fingerprintFile, audioFile}
}

export const handleFileOperation = async (reportCardFile, logoFile, fingerprintFile, audioFile) => {
    console.log("Hiding Uni Logo...");
    const stego1 = await dataHiding(reportCardFile.path, logoFile.path);
    // console.log("Hiding Fingerprint...");
    // const stego2 = await dataHiding(stego1, fingerprintFile.path);
    // console.log("Hiding Audio...");
    // const stego3 = await dataHiding(stego2, audioFile.path);
    
    // const publicSharePath = await shareGeneration(stego3);
    const publicSharePath = await shareGeneration(stego1);

    return publicSharePath;
}

export const cleanFiles = () => {
    try {
        fs.unlinkSync(reportCardFile.path); // Remove the uploaded Report_Card file
        fs.unlinkSync(logoFile.path);
        fs.unlinkSync(fingerprintFile.path);
        fs.unlinkSync(audioFile.path);
    } catch (cleanupErr) {
        console.error("Cleanup error:", cleanupErr.message);
    }
}

export const hideTransaction = async (originalSharePath, fingerprintFile) => {
    let fingerprint2Path = fingerprintFile.path;

    const stego = await dataHiding(originalSharePath, fingerprint2Path);

    const publicSharePath = await shareGeneration(stego1);

    return publicSharePath;
}