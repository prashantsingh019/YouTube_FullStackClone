import mongoose from "mongoose";

const {Schema,model} = mongoose;

const channelSchema =  Schema({
    channelId   :{
        type:String,
        required:true
    },  
    channelName :{
        type:String,
        required:true
    },
    channelEmail  :{
        type:String,
        required:false
    },
    description   :{
        type:String,
        required:false
    },
    channelBanner :{
        type:String,
        required:false,
    },
    subscribers:{
        type:Number,
        default:0
    },
    videos:["1OAjeECW90E"]
})

const channelModel = model('channel',channelSchema);
export default channelModel;
