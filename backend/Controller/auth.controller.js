import userModel from "../Model/usersModel.js";
import brcypt from "bcrypt";
import jwt from "jsonwebtoken";
export const registerNewUser = async (req, res) => {
  try {
    const {username,email,password} = req.body;
    const isExist = await userModel.findOne({email});
    if(isExist) return res.status(400).json({message:"user already exists please login"})
    const newUser = new userModel({
    username,
    email,
    password: brcypt.hashSync(password, 10),
    avatar:"",
    channels:[],
   });
   await newUser.save();
    res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    res.status(500).json({ message: `${error}` });
  }
};

export const loginUser = async (req,res) => {
    try{
        const {email,password} = req.body;
        const findUser = await userModel.findOne({email});
        if(!findUser) return res.status(404).json({message:"user not found please register"})
        const isValid = await brcypt.compare(password,findUser.password);
        if(!isValid) return res.status(400).json({message:"entered password is incorrect"});
        let token = jwt.sign({id:findUser["_id"]},"HASHNODE",{expiresIn:"10m"});
        res.status(200).json({
            user:{
                email: findUser.email,
                username:findUser.username
            },
            accestoken:token
        })
    }catch(error){
     console.error(error)
    }
}