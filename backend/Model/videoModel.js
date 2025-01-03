import mongoose from "mongoose";

const {Schema,model} = mongoose;
export const commentSchema = Schema({
    user:{
        type:String,
        required:true,
    },
    content:{
        type: String, 
        required: true
    },
    commentDate:{
        type:Date,
        default:Date.now
    }
})
const videoSchema = Schema({
    videoId:{
      type:String,
      required:true,
    },
    title:{
      type:String,
      required:true,
    },
    thumbnailUrl:{
      type:String,
      required:true,
    },
    description:{
      type:String,
      required:false,
    },
    channelId:{
        type:String,
        required:true,
    },
    channelName:{
        type:String,
        required:true
    },
    view:{
        type:Number,
        required:true
    },
    likes:{
        type:Number,
        required:true
    },
    dislikes:{
        type:Number,
        required:true
    },
    uploadDate:{
        type:Date,
        default:Date.now
    },
    comments:[commentSchema],
    category:{
        type:String,
        default:false
    }
})

const videoModel = model("video",videoSchema);
export default videoModel;

