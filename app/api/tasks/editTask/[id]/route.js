import TaskModel from "@/app/models/Task";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const PUT = async (request, {params})=>{
    const {newDescription} = await request.json()
    const {id} = params;
    await connectDB()
    await TaskModel.findByIdAndUpdate({_id: id}, {description: newDescription});
    return NextResponse.json({message: 'Task updated'})
} 