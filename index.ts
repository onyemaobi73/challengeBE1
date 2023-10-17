import express,{Application} from "express"
import cors from "cors"
import user from "./router/authRouter"
import tasked from "./router/taskRouter"
import mongoose from "mongoose";
const URL: string = "mongodb://127.0.0.1:27017/AntDB";

const port:number = 1192
const app:Application = express()
app.use(express.json())
app.use(cors())

app.use("/api", user)
app.use("/api", tasked)
const server = app.listen(port, () => {
    mongoose.connect(URL).then(() => {
      console.log("connected...🚀🚀🚀");
    });
  });

process.on("uncaughtException", (error)=>{
    console.log("due to uncaughtException", error)
    process.exit(1)
})

process.on("unhandledRejection",(err:Error) => {
    console.log("due to unhandledRejection", err)
    server.close(() => {
        process.exit(1)
    })
})