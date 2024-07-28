

import express from "express";
import { connectDB } from "./db/db.js";
const app=express()



// (async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URL}`)
//     }catch(error){
//         console.error("ERROR:",error)
//         throw error
//     }
// })()
app.get("/", (req, res) => {
    res.send("Server is Running!");
  });
app.listen(process.env.PORT, () => {
    console.log(`App runing on port ${process.env.PORT}`);
  });

  connectDB();