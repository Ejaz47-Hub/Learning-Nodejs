import mongoose from "mongoose";

async function connectDB() {
    await mongoose.connect('mongodb+srv://Ejazahmed:Ejazahmed786@cluster0.emizavg.mongodb.net/?appName=Cluster0')
    console.log("Connecetd to db");
    
}

export default connectDB;