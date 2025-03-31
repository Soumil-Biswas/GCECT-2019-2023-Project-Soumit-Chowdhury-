import { pool } from "../database/database";

let student;

export const createDBEntry = async(data) => {
    /*Create entry in Server-side Database*/
    await pool.query(
        'INSERT INTO data (name, rollNo, institute, yearOfPassing, dgpa, phone, reportCard, logo, fingerprint, audio) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
        [
            data.name, 
            data.rollNo, 
            data.institute, 
            data.yearOfPassing, 
            data.dgpa,
            data.phone,
            data.reportCard,
            data.logo,
            data.fingerprint,
            data.audio
        ]
    );
    console.log("Database push complete.");
}

export const findStudent = async(data) => {
    const {rows} = await pool.query(
        'SELECT * FROM data WHERE name = $1 AND rollNo = $2', [data.name, data.rollNo]
    );

    if (rows.length > 0) student = rows[0];

    return student;
}

export const getReportCard = () => {
    if (student) {
        return student.reportCard;
    }
}

export const checkDGPA = async(data) => {
    const {rows} = await pool.query(
        'SELECT (yearOfPassing, dgpa) FROM data WHERE name = $1 AND rollNo = $2', [data.yearOfPassing, data.dgpa]
    );

    return (rows.length !== 0);
}

export const getFingerprint = () => {
    if (student) {
        return student.fingerprint;
    }
}

export const getAudio = () => {
    if (student) {
        return student.audio;
    }
}

export const enterTransaction = async(reportCard, transactionID, hash) => {
    const {rows} = await pool.query(
        'UPDATE data SET reportCard = $1, transactionID = $2, transactionHash= $3 WHERE rollNo = $4 RETURNING *',[ reportCard, transactionID, hash, student.rollNo]
    );

    if (rows) return rows;

    return false;
}

export const getTransaction = async(transactionID) => {
    const {rows} = await pool.query(
        'SELECT transactionHash FROM data WHERE transactionID = $1',[transactionID]
    )

    if (rows.length > 0) return rows[0];

    return false;
}