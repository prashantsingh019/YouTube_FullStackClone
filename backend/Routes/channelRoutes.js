import { createChannel } from "../Controller/channel.control";

export const channelRoutes = (app) => {
    app.post('/channel/',createChannel);
}