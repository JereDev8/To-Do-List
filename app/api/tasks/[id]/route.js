import TaskModel from "@/app/models/Task";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";



export const DELETE = async (request, { params })=>{
    const {id} = params;
    await connectDB();
    try {
        await TaskModel.findByIdAndDelete({_id: id})
        return NextResponse.json({message: `Task deleted`})    
    } catch (error) {
        console.log(error)
    }
    
}

export const PUT = async (request, {params})=>{
    const {id} = params;
    console.log(id)
    await connectDB();
    try {
        const task= await TaskModel.findById({_id:id})
        await TaskModel.findByIdAndUpdate({_id:id}, {completed: !task.completed })
        return NextResponse.json({message:`Task ${id} edited`})
    } catch (error) {
        console.log(error)
    }
    
}