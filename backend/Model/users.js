import mongoose from "mongoose"

const {Schema,model} = mongoose.model;

const userSchema = Schema({
 userId:{
    type:String,
    required:true,
 }  ,
 username:{
    type:String,
    required:true,
 },
 email:{
    type:String,
    required:true,
 }   ,
 password:{
    type:String,
    required:true,
 },
 avatar:{
    type:String,
    required:true,
 },
 channels:{
    type:[],
    required:true,
 },
})

const userModel = model('user',userSchema);
export default userModel;













