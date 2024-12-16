import { connect } from "mongoose";

const connection = async (uri: string): Promise<void> => {
  try {
    connect(uri);
    console.log("Database connected successfully");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connection;
