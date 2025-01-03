import channelModel from "../Model/channel.js";
import videoModel from "../Model/videoModel.js";
import { v4 as uuidv4 } from 'uuid';
export const createChannel = async (req, res) => {
  try {
    const {
      channelEmail, channelName, description, channelBanner
    } = req.body;
    console.log(channelEmail,channelName,description,channelBanner);
    console.log(channelEmail);
    if (!channelName || !channelEmail)
    return res.status(400).json({ message: "all details are required" });
    const findChannel = await channelModel.findOne({channelEmail});
    if(findChannel){
        return res.status(400).json({message:"you can't create 2 channels with same email id"})
    }
    const channelId = uuidv4();
    const newChannel = new channelModel({
       channelId,
       channelName,
       channelEmail,
       description,
       channelBanner,
       subscribers:0,
       videos:[]
     });
     await newChannel.save();
    res.status(201).json({message:"channel creation successful"})
  } catch (error) {
     res.status(500).json({message:"Internal Server Error"})
  }
};

export const getChannel = async (req,res) => {
    try{
      const { channelEmail } = req.query;
      const findChannel = await channelModel.findOne({channelEmail})
      if(!findChannel) return res.status(404).json({message:"channel not found"})
      res.status(200).json(findChannel);
    }catch(error){
        res.status(500).json({message:"Internal Server Error"});
    }
}

export const getVideos = async (req,res) => {
    try{
       const {channelId} = req.query;
       
       const find = await videoModel.find({channelId:channelId})
       if(!find) return res.status(404).json({message:"no videos found"})
        
       res.status(200).json(find)
    }catch(error){
        res.status(500).json(error)
    }
}