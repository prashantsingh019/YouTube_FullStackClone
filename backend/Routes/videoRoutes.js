import {addVideo,getVideos,getVideoById,addComment,editField} from "../Controller/videoController.js"


export const routes = (app) => {
  app.get('/api/',getVideos)
  app.post('/video',addVideo)
  app.get('/watch/:id',getVideoById);
  app.post('/watch/:id',addComment);
  app.post('/watch/edit/:id',editField)
}