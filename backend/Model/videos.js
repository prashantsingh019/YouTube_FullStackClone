import mongoose from "mongoose";

const {Schema,model} = mongoose;
const commentSchema = Schema({
    commentId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    timestamp:{
        type:String,
        required:true
    },
})
const videoSchema = Schema({
    videoId:{
        type:String,
        required:true},
    title:{
        type:String,
        required:true},
    thumbnailUrl:{
        type:String,
        required:true},
    description:{
        type:String,
        required:true},
    channelId:{
        type:String,
        required:true},
    uploader:{
        type:String,
        required:true},
    views:{
        type:Number,
        required:true},
    likes:{
        type:Number,
        required:true},
    dislikes:{
        type:Number,
        required:true},
    uploadDate:{
    type:String,
    required:true
    },
    comments:[commentSchema]
})

const videoModel = model('video',videoSchema);
export default videoModel;
