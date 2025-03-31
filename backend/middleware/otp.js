import twilio from "twilio";
import redis from "redis";

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

export const sendOTP = async (phoneNumber, otp) => {
    try {
        const message = await client.messages.create({
            body: `Your OTP for login is: ${otp}`,
            from: process.env.TWILIO_PHONE,
            to: phoneNumber,
        });
        console.log("OTP Sent: ", message.sid);
        return true;
    } catch (error) {
        console.error("Error sending OTP:", error);
        return false;
    }
};

export const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
};

const redisClient = redis.createClient();

export const saveOTP = async (userID, otp) => {
    await redisClient.setEx(`otp:${userID}`, 300, otp); // Expiry: 5 min
};

export const verifyOTP = async (userID, otp) => {
    const storedOTP = await redisClient.get(`otp:${userID}`);
    if (storedOTP === otp) {
        await redisClient.del(`otp:${userID}`);
        return true;
    }
    return false;
};

export const sendTransactionID = async (phoneNumber, transactionID, transactionAmount) => {
    try {
        const message = await client.messages.create({
            body: `The Transaction ID for your Scholarship of ${transactionAmount}/- is ${transactionID}`,
            from: process.env.TWILIO_PHONE,
            to: phoneNumber,
        });
        console.log("Transaction ID Sent: ", message.sid);
        return true;
    } catch (error) {
        console.error("Error sending OTP:", error);
        return false;
    }
}