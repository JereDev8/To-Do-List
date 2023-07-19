import connect from "@/utils/db"
import TaskModel from "@/app/models/Task"
import { NextResponse } from "next/server"


export const GET = async (request)=>{
    try {
        await connect()
        const tasks= await TaskModel.find({});
        return new NextResponse(JSON.stringify(tasks),{status:200})
    } catch (error) {
        return new NextResponse('Database Error', {status:500})
    }
}

export const POST = async (request, response)=>{
    let data= await request.json();
    await connect();
    await TaskModel.create({description: data.description})
    return NextResponse.json({message:'Task Created'})
}

export const DELETE = async (request)=>{
    await TaskModel.deleteMany({completed:true})
    return NextResponse.json({message:'Completed tasks deleted'})
}