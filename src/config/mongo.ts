import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI = "mongodb://localhost:27017/todo_app";
    await mongoose.connect(mongoURI);
    console.log("MOngoDB Connected");
  } catch (err: any) {
    console.log(err.message);
    process.exit(1);
  }
};

export default connectDB;
/**
 * You'll call this connectDB function once in your
 *  main server file (src/main.ts) to establish the
 *  connection when the app starts.
 */
