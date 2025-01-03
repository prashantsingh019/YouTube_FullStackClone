import {addVideo,getVideos,getVideoById,addComment,editField, likeVideo} from "../Controller/videoController.js"
import { verifyToken } from "../MiddleWare/verifyToken.js"


export const routes = (app) => {
  app.get('/api/',verifyToken,getVideos)
  app.post('/video',addVideo)
  app.get('/watch/:id',getVideoById);
  app.post('/watch/:id',addComment);
  app.post('/watch/edit/:id',editField)
  app.post('/video/like',likeVideo)
}