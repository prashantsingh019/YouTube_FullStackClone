import mongoose from "mongoose";

const {Schema,model} = mongoose;

const channelSchema =  Schema({
    channelId:{
        type:String,
        required:true
    },  
    channelName :{
        type:String,
        required:true
    },
    owner         :{
        type:String,
        required:true
    },
    description   :{
        type:String,
        required:true
    },
    channelBanner :{
        type:String,
        required:true
    },
    subscribers:{
        type:Number,
        required:true
    },
    videos:["video01","video02"]
})

const channelModel = model('channel',channelSchema);
export default channelModel;
