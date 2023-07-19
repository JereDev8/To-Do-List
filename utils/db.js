import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect('mongodb+srv://JereUser:sesquin2863@jere-back.paqom6v.mongodb.net/todo?retryWrites=true&w=majority');
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;