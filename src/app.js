import express from "express";
import noteModel from "../models/node.model.js";

const app = express()
app.use(express.json())

app.post("/notes",async(req,res)=>{
   const data =  req.body
 await noteModel.create({
    title : data.title,
    description : data.description
   })
   res.status(201).json({
    message : "Note created"
   })
})

app.get("/notes",async(req,res)=>{
  const notes =  await noteModel.find()
  res.status(200).json({
    message : "Notes Fetched",
    notes : notes
  })
})


 app.delete("/notes/:id", async(req,res)=>{
    const id = req.params.id 
    await noteModel.findOneAndDelete({
        _id : id
    })
    res.status(200).json({
        message : "Note Deleted"
    })
 })

 app.patch("/notes/:id",async(req,res)=>{
    const id = req.params.id
    const description = req.body.description
    await noteModel.findOneAndUpdate({_id:id },{description:description})
    res.status(200).json({
        message : "Note Updated"
    })
 })


export default app