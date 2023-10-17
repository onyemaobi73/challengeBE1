import express, {Request, Response} from "express"
import TaskModel from "../model/TaskModel"
import mongoose from "mongoose"
import authModel from "../model/authModel"


export const createTask = async(req:Request, res:Response) => {
try {
    const {email, task, priority} = req.body

    const check = await authModel.findOne({email})
    const tasked = await TaskModel.create({
    task, priority

    })
    check?.task?.push(new mongoose.Types.ObjectId(tasked.id))

    check?.save()
    return res.status(201).json({
        message : "task created",
        data:tasked
    })
} catch (error) {
    return res.status(404).json({
        message :" Error",
        data:error.message
    })
}
}

export const ViewAllTask = async(req:Request, res:Response) => {
try {
    const tasked = await TaskModel.find({})
    return res.status(201).json({
        message : "view all tasked",
        data:tasked
    })
} catch (error) {
    return res.status(404).json({
        message :" Error",
        data:error.message
    })
}
}

export const ViewOneTask = async(req:Request, res:Response) => {
try {
    const {taskID} = req.params
    const tasked = await TaskModel.findById({taskID})
    return res.status(200).json({
        message : "view one tasked",
        data:tasked
    })
} catch (error) {
    return res.status(404).json({
        message :" Error",
        data:error.message
    })
}
}

export const deleteTask = async(req:Request, res:Response) => {
try {
    const {taskID} = req.params
    const tasked = await TaskModel.findByIdAndDelete(taskID)
    return res.status(201).json({
        message : "delete one tasked",
        data:tasked
    })
} catch (error) {
    return res.status(404).json({
        message :" Error",
        data:error.message
    })
}
}