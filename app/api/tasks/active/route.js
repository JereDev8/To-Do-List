import TaskModel from "@/app/models/Task";
import connectDB from "@/utils/db"
import { NextResponse } from "next/server";

export const GET = async (request)=>{
    await connectDB();
    const activeTasks= await TaskModel.find({completed: false})
    return NextResponse.json({tasksActive: activeTasks, message:'Incompleted Tasks'})
}