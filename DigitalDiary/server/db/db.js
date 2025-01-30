import mongoose from "mongoose";

// change 
////////////////////////////////////////////
import dotenv from "dotenv";
dotenv.config();

const mongoURi = process.env.MONGODB_URI
///////////////////////////////////////////

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURi);     // change
    
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process if the connection fails
  }
};

export default connectToMongoDB;
