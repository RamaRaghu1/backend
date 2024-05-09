import mongoose from "mongoose";
import {DB_NAME} from "./constants";

import express from "express";
const app=express()



(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URL}`)
    }catch(error){
        console.error("ERROR:",error)
        throw error
    }
})()

