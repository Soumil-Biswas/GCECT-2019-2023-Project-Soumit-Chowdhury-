import { exec } from "child_process";
import path from "path";
import fs from "fs";
import { fileURLToPath } from 'url';

// Get the current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.resolve("backend\\output");

export const executeJava = (javaCommand) => {
    return new Promise((resolve, reject) => {
        exec(javaCommand, (error, stdout, stderr) => {
            if (error) {
                console.error('Error executing Java program:', error.message);
                reject(error);
                return;
            }

            if (stderr) {
                console.error('Java program error:', stderr);
                reject(new Error(stderr));
                return;
            }

            console.log('Java program output:', stdout);
            resolve(stdout); // Resolve the promise when execution is complete
        });
    });
};

export const dataHiding = async (coverImgpath, secretImgpath) => {
    const stegoCoverPath = path.join(outputDir, "stego-cover.png");

    const classpath = path.resolve(__dirname, '../Data_hiding');
    // Command to run the Java program
    const javaCommand = `java -Xmx4G -cp "${classpath}" EmbedData "${coverImgpath}" "${secretImgpath}" "${outputDir}"`;

    try {
        await executeJava(javaCommand); // Wait for Java execution to complete
        console.log("Java execution finished.");
    } catch (error) {
        console.error("Java execution failed:", error);
        throw error; // Re-throw error so caller can handle it
    }

    return stegoCoverPath;
}

export const shareGeneration = async (inputFilePath) => {
    const publicSharePath = path.join(outputDir, "publicshare.png");    
    
    // Ensure the output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    const classpath = path.resolve(__dirname, '../Share_generation');
    // Command to run the Java program
    const javaCommand = `java -Xmx4G -cp "${classpath}" ShareGenerator generateShares "${inputFilePath}" "${outputDir}"`;

    try {
        await executeJava(javaCommand); // Wait for Java execution to complete
        console.log("Java execution finished.");
    } catch (error) {
        console.error("Java execution failed:", error);
        throw error; // Re-throw error so caller can handle it
    }

    return publicSharePath;
}

export const shareMerging = async (publicSharePath) => {
    const privateSharePath = path.join(outputDir, "privateshare.png");

    const classpath = path.resolve(__dirname, '../Share_generation');
    // Command to run the Java program
    const javaCommand = `java -Xmx4G -cp "${classpath}" ShareGenerator generateOriginal "${publicSharePath}" "${privateSharePath}"`;

    try {
        await executeJava(javaCommand); // Wait for Java execution to complete
        console.log("Java execution finished.");
    } catch (error) {
        console.error("Java execution failed:", error);
        throw error; // Re-throw error so caller can handle it
    }

    return true;
}

export const originalSharePath = path.join(outputDir, "originalshare.png");    // In case the orignal share is needed. Delete otherwise.