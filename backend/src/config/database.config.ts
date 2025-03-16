import mongoose from "mongoose";
import { config } from "./app.config";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("Connected to MongoDB Database");
  } catch (error) {
    console.log("Error connecting to MongoDB Database");
    process.exit(1);
  }
};
