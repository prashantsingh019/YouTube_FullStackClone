import mongoose from "mongoose"

const {Schema,model} = mongoose;

const userSchema = Schema({
 username:{
    type:String,
    required:true,
 },
 email:{
    type:String,
    required:true,
 },
 password:{
    type:String,
    required:true,
 },
 avatar:{
    type:String,
    required:false,
 },
 channels:{
    type:[],
    required:false,
 },
})

const userModel = model('user',userSchema);
export default userModel;













