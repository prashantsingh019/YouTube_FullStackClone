import userModel from "../Model/usersModel.js";

export const registerNewUser = async (req,res) => {
    try{
        const{userId, username,email,password,avatar,channels} = req.body;
        const newUser = new userModel({
            userId, 
            username,
            email,
            password,
            avatar,
            channels
        })
         await newUser.save(); 
         res.status(200).json({message:"User added successfully"});
        }catch(error){
            res.status(500).json({message:`${error}`});
        }
}