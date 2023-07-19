import TaskModel from "@/app/models/Task";
import connectDB from "@/utils/db"
import { NextResponse } from "next/server";

export const GET = async (request)=>{
    await connectDB();
    const completedTasks= await TaskModel.find({completed: true})
    return NextResponse.json({tasksCompleted: completedTasks, message:'Completed Tasks'})
}