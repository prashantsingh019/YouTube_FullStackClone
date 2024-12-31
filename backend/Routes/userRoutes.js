import {registerNewUser} from "../Controller/userController.js"
export const userRoutes = (app) => {
  app.post('/register',registerNewUser)
}