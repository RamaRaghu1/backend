import mongoose from "mongoose";
import { DB_NAME } from "../constants";


const connectDB=async()=>{
    try{
await mongoose.connect(`${process}`)
    }catch(error){
        console.log("MONGODB connection error", error)
process.exit(1)
    }
}