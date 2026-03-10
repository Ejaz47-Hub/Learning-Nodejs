//Creating server
import express from "express";
const app = express()
const notes = []
app.use(express.json())

app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.status(201).json({message:"note created"})
    
})

app.get("/notes",(req,res)=>{
    res.status(200).json({message:"Sucessfull",
        notes: notes
    })
})

export default app;