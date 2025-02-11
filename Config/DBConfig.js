import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/practiceDb";
const connectDB = async () => {
    try{
        await mongoose.connect(MONGO_URL , {
            maxPoolSize: 10,        //To maintain up to 10 connections.
            serverSelectionTimeoutMS: 5000   //To time out after 5Sec.
        });
        console.log("Database connected Successfully!");
    }catch( err ){
        console.log("Error in connecting database!");
        process.exit(1);
    }
}

mongoose.connection.on("connected" , () => {
    console.log("Database connected successfully!");
});

mongoose.connection.on("error" , (err) => { 
    console.log("Error in connecting database!");
    process.exit(1);    
});

mongoose.connection.on("disconnected" , () => {
    console.log("Database disconnected!");
});

const closeConnection = async () => {
    await mongoose.connection.close();
}

export { connectDB , closeConnection };