import express from "express";
import dotenv from "dotenv";
import { connectDB , closeConnection } from "./Config/DBConfig.js";
import routes from "./Routes/UserRoutes.js";

//Instantiating express
const app = express();
dotenv.config();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database connection
connectDB();

//Routes
app.use("/api/users" , routes);

const port = process.env.PORT || 8000;
const server = app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})  


const shutdown = async () => {
    //This call is important to close the server.
    server.close( async () => {
        //Once the server is closed, we need to close the database connection.
        await closeConnection();
        process.exit(0);
    })
}

process.on("SIGINT" , shutdown);        //When we click ctrl + c
process.on("SIGTERM" , shutdown);       //When host provider terminates the server