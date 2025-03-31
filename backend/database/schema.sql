-- CREATE DATABASE;
CREATE DATABASE "collegeProject";

-- CONNECT TO  DATABASE;
\c "collegeProject"

-- USE TABLE data;
CREATE TABLE data (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    rollNo VARCHAR(50) NOT NULL UNIQUE,
    institute VARCHAR(50) NOT NULL,
    yearOfPassing VARCHAR(50) NOT NULL,
    dgpa DECIMAL NOT NULL,
    phone INTEGER NOT NULL,
    reportCard VARCHAR(255) NOT NULL,
    logo VARCHAR(255) NOT NULL,
    fingerprint VARCHAR(255) NOT NULL,
    audio VARCHAR(255) NOT NULL,
    transactionID VARCHAR(255),
    transactionHash VARCHAR(255)
);

-- DELETE TABLE;
DROP TABLE data;

SELECT * FROM data;