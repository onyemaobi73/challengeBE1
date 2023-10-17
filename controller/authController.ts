import {Request, Response} from "express"
import authModel from "../model/authModel"
import  bcrypt from "bcrypt"

export const createUser =async(req:Request, res:Response)=>{
    try {
        const {name, email, password}= req.body

        const user = await authModel.create({
            name, email, password
        })

        return res.status(201).json({
            message:"success",
            data:user
        })
    } catch (error:any) {
        return res.status(404).json({
            message:"error",
            data:error.message
        })
    }

}

export const getUser =async(req:Request, res:Response)=>{
    try {

        const user = await authModel.find()

        return res.status(201).json({
            message:"success",
            data:user
        })
    } catch (error:any) {
        return res.status(404).json({
            message:"error",
            data:error.message
        })
    }

}

export const getOneUser =async(req:Request, res:Response)=>{
    try {
const {userID}= req.params
        const user = await authModel.findById(userID)

        return res.status(201).json({
            message:"success",
            data:user
        })
    } catch (error:any) {
        return res.status(404).json({
            message:"error",
            data:error.message
        })
    }

}

export const deleteUser =async(req:Request, res:Response)=>{
    try {
const {userID}= req.params
        const user = await authModel.findByIdAndDelete(userID)

        return res.status(201).json({
            message:"deleted success",
            data:user
        })
    } catch (error:any) {
        return res.status(404).json({
            message:"error",
            data:error.message
        })
    }

}

export const SignInUser =async(req:Request, res:Response)=>{
    try {const {email, password}= req.body

        const user = await authModel.findOne({email})

        if (user) {
            const passwordCheck = await bcrypt.compare(password, user.password!)

            if (passwordCheck) {
                return res.status(201).json({
                    message : "view one",
                    data:user
                })
            } else {
                return res.status(404).json({
                    message: " Error with password"
                })
            }
        } else {
            return res.status(404).json({
                message : "Error with user"
            })
        }
    } catch (error) {
        return res.status(404).json({
            message:"error",
        })
    }

}