import videoModel, { commentSchema } from "../Model/videoModel.js"

export const getVideos = async (req,res) => {
  try{
     const videos = await videoModel.find()
     res.status(200).json(videos)
  }catch(error){
    res.status(500).json({message:"Internal Server Error"})
  }
}
export const addVideo = async (req,res) => {
   try{
      const {videoId,title,thumbnailUrl,description,channelId,channelName,view,likes,dislikes,comments} = req.body;
      const newVideo = new videoModel({
         videoId,
         title,
         thumbnailUrl,
         description,
         channelId,
         channelName,
         view,
         likes,
         dislikes,
         comments
      })
      await newVideo.save()
      res.status(201).json({message:"new video uploaded"})
   }catch(error){
      res.status(500).json({message:"Internal Server Error"})
   }
}

export const getVideoById = async (req,res) => {
   try{
      const {id} = req.params;
      const video = await videoModel.findOne({videoId:id});
      console.log(video);
      res.status(200).json(video);
   }catch(error){
      res.status(500).json({message:"Internal Server Error"})
   }
}

export const addComment = async (req,res) => {
   try{
       const {id} = req.params;
       console.log(id);
       const {user,content} = req.body;
       console.log(user,content);
       const video = await videoModel.findOne({videoId:id});
       video.comments.push({
         user,
         content,
         commentDate:new Date()
       })
       await video.save()
       console.log(video.comments);
       res.status(200).json(video.comments);
   }catch(error){
      res.status(500).json({message:"Internal Server Error"})
   }
}

export const editField = async(req,res) => {
   try{
     const videoId = req.params.id;
     const {id} = req.body;
     const getVideo = await videoModel.findOne({videoId:videoId})
     getVideo.videoId = id;
     await getVideo.save()
     res.send(getVideo)
   }catch(error){
     res.status(500).json({message:"Internal Server Error"})
   }
}