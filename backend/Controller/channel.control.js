import channelModel from "../Model/channel";

export const createChannel = async (req, res) => {
  try {
    const {
      channelId,
      channelName,
      channelEmail,
      description,
      channelBanner,
      subscribers,
      videos,
    } = req.body;
    if (!channelId || !channelName || !channelEmail)
    return res.status(400).json({ message: "all details are required" });
    const findChannel = channelModel.findOne({channelEmail});
    if(findChannel){
        return res.status(400).json({message:"you can't create 2 channels with same email id"})
    }
    const newChannel = new channelModel({
      channelId,
      channelName,
      channelEmail,
      description,
      channelBanner,
      subscribers,
      videos,
    });
    await newChannel.save();
    res.status(201).json({message:"channel creation successful"})
  } catch (error) {
    res.status(500).json({message:"Internal Server Error"})
  }
};
