import express from "express";
import mongoose from "mongoose";
import { routes } from "./Routes/videoRoutes.js";


const app = express();
const port = 3000;
import cors from "cors"
import { userRoutes } from "./Routes/userRoutes.js";
app.use(express.json())
app.use(cors())
app.listen(port,() => {
   console.log(`Server is currently running on port ${port}`);
})

const uri = "mongodb+srv://prakul:prakul@cluster0.qhlea.mongodb.net/Youtube_DataBase";
mongoose.connect(uri)
const dataBase = mongoose.connection;
dataBase.on('open',()=>{
    console.log("Database Connected")
})
dataBase.on('error',()=>{
    console.log("Database not Connected")
})


routes(app)
userRoutes(app)