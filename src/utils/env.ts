import dotenv from "dotenv";
dotenv.config();

const env = (key: string): string => process.env[key] || "";

export default env;
