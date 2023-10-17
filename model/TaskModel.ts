import mongoose from "mongoose";

interface iTask{
    email:string
    task:string
    priority:string
}

interface iTaskData extends iTask, mongoose.Document {}
const taskModel = new mongoose.Schema<iTaskData>(
    {
        email:{
            type:String,
            unique:true,
            trim:true
        },
        task:{
            type:String
        },
        priority:{
            type:String
        },
    },
    {timestamps:true}
)

export default mongoose.model<iTaskData>("tasks", taskModel)