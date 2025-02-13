import express from "express";
import { User } from "../Model/SchemaModel.js";
import { validateUser } from "../Modules/validateUser.js";

//Middleware to handle all routes.
const router = express.Router();

//Router to get all users.
router.get("/" , async ( req , res ) => {
    try{
        const users = await User.find();
        if(!users){
            return res.status(200).json({ message : "User not found!" });
        }
        res.status(200).json(users);
    }catch( err ){
        res.status(500).json({ message : err.message });
    }
})


//Router to get a single user.
router.get("/:id" , async ( req , res ) => {
    try{
        const user = await User.findById(req.params.id);
        if( !user ){
            return res.status(200).json({ message : "User not found!" });
        }
        res.status(200).json(user);
    }catch( err ){
        res.status(500).json({ message : err.message });
    }
})

//Router to create a new user.
router.post("/" , validateUser , async ( req , res ) => {
    try{
        const data = {
            firstName : String(req.body.firstName).trim(),
            lastName : String(req.body.lastName).trim(),
            email : String(req.body.email).trim(),
            age: Number(req.body.age)
        }
        const user = await User.create(req.body);
        res.status(200).json({ message : `User created successfully with id: ${user._id}` });
    }catch( err ){
        res.status(500).json({ message : err.message });
    }
})

//Router to delete a user.
router.delete("/:id" , async ( req , res ) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message : `User deleted successfully with id: ${user._id}` });
    }catch( err ){
        res.status(500).json({ message : err.message });
    }
})


//Router to update a user.
router.patch("/:id" , async ( req , res ) => {   
    try{
        const user = await User.findByIdAndUpdate(req.params.id , req.body , { new : true });
        res.status(200).json({ message : `User updated successfully with id: ${user._id}` });
    }catch( err ){
        res.status(500).json({ message : err.message });
    }
})

export default router;
    