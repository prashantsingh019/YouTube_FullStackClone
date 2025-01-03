import { createChannel, getChannel,getVideos } from "../Controller/channel.control.js";

export const channelRoutes = (app) => {
    app.post('/channel/create',createChannel);
    app.get('/channel/',getChannel);
    app.get('/channel/video',getVideos);
}