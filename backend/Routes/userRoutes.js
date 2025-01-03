import {registerNewUser,loginUser} from "../Controller/auth.controller.js"
export const userRoutes = (app) => {
  app.post('/register/',registerNewUser)
  app.post('/login/',loginUser)
}