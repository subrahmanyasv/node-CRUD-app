import express from "express";
import { User } from "../Model/SchemaModel.js";

//Middleware to handle all routes.
const router = express.Router();

//Router to get all users.
router.get("/" , async ( req , res ) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch( err ){
        res.status(500).json({ message : err.message });
    }
})


//Router to get a single user.
router.get("/:id" , async ( req , res ) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch( err ){
        res.status(500).json({ message : err.message });
    }
})

//Router to create a new user.
router.post("/" , async ( req , res ) => {
    try{
        const user = await User.create(req.body);
        res.status(200).send("User created successfully");
    }catch( err ){
        res.status(500).json({ message : err.message });
    }
})

//Router to delete a user.
router.delete("/:id" , async ( req , res ) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).send("User deleted successfully");
    }catch( err ){
        res.status(500).json({ message : err.message });
    }
})


//Router to update a user.
router.patch("/:id" , async ( req , res ) => {   
    try{
        const user = await User.findByIdAndUpdate(req.params.id , req.body , { new : true });
        res.status(200).send("User updated successfully");
    }catch( err ){
        res.status(500).json({ message : err.message });
    }
})

export default router;
    