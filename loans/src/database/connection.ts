import "dotenv/config";
import mongoose from "mongoose";

const MONGO_DB_URL = "mongodb://localhost:27018/Loan";

export const connection = (mongoURI = process.env.MONGO_URI || MONGO_DB_URL) =>
  mongoose.connect(mongoURI);
