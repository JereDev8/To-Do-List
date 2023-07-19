import mongoose from "mongoose";

const schema= new mongoose.Schema({
    description:{
        type: String,
        required: true,
    },
    completed:{
        type: Boolean,
        default: false
    }
    
})

const TaskModel = mongoose.models?.tasks || mongoose.model('tasks', schema) 

export default TaskModel