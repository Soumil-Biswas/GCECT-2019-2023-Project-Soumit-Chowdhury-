import fs from "fs";
import { dataHiding, shareGeneration } from '../middleware/javaFunctions.js';

let uploadedFiles;

const MAX_SIZES = {
  logo: 150 * 1024,         // 150 KB
  fingerprint: 150 * 1024,  // 150 KB (example)
  audio: 150 * 1024,        // 150 KB (example)
};

export const checkFileSizes = (files) => {
    let errormsg;

    if (files.logo.size > MAX_SIZES.logo) {
        errormsg = "logo file should not exceed 10KB.";
    }
    if (files.fingerprint.size > MAX_SIZES.fingerprint) {
        errormsg = "fingerprint file should not exceed 10KB.";
    }
    if (files.audio.size > MAX_SIZES.audio) {
        errormsg = "audio file should not exceed 10KB.";
    }
    if (errormsg) return {error : errormsg};

    return {error : null};
}

// Check if all required Files are present
export const fileInit = (files) => {
    uploadedFiles = files;
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

// Hnadle Incoming Files. Zip secret files, and embed them in Report Card
export const handleFileOperation = async (reportCardFile, logoFile, fingerprintFile, audioFile) => {
    console.log("Hiding Uni Logo...");
    const stego1 = await dataHiding(reportCardFile.path, logoFile.path);
    console.log("Hiding Fingerprint...");
    const stego2 = await dataHiding(stego1, fingerprintFile.path);
    console.log("Hiding Audio...");
    const stego3 = await dataHiding(stego2, audioFile.path);
    
    console.log("Generating Public and Private shares...")
    const publicSharePath = await shareGeneration(stego3);
    // const publicSharePath = await shareGeneration(stegoImagePath);

    return publicSharePath;
}

// Clean Files from File System
export const cleanFiles = () => {
    try {
        fs.unlinkSync(uploadedFiles.reportCard[0].path); // Remove the uploaded Report_Card file
        fs.unlinkSync(uploadedFiles.logo[0].path);
        fs.unlinkSync(uploadedFiles.fingerprint[0].path);
        fs.unlinkSync(uploadedFiles.audio[0].path);
    } catch (cleanupErr) {
        console.error("Cleanup error:", cleanupErr.message);
    }
}

// Embed Transaction Data into Report Card
export const hideTransaction = async (originalSharePath, fingerprintFile) => {
    let fingerprint2Path = fingerprintFile.path;

    const stego = await dataHiding(originalSharePath, fingerprint2Path);

    const publicSharePath = await shareGeneration(stego);

    return publicSharePath;
}