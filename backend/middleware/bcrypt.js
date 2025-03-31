import bcrypt from "bcryptjs";

export const hashTransaction = async(input, key) => {
    const hash = await bcrypt.hash(input, key);
    return hash;
}

export const unHashTransaction = async(input, hash) => {
    return await bcrypt.compare(input, hash);
}