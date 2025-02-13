export const validateUser = (req , res , next) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/;
    const nameRegex = /^[A-Za-z]+$/;


    if(!req.body.email || !emailRegex.test(req.body.email)){
        return res.status(400).json({ message : "Invalid email address!" });
    }
    if(!req.body.firstName || !nameRegex.test(req.body.firstName)){
        return res.status(400).json({ message : "Invalid first name!" });
    }
    if(!req.body.lastName || !nameRegex.test(req.body.lastName)){
        return res.status(400).json({ message : "Invalid last name!" });
    }
    if(!req.body.age){ 
        return res.status(400).json({ message : "Invalid age!" });  
    }

    next();
}