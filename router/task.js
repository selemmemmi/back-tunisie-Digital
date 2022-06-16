import express from "express";
import Task from "../models/Task.js";



const router=express.Router();

//**************************************** *//


// create => POST ()
// 0Route Add task
// 0 Method POST
// àdata : req.body
// pATH : HTTP:/localhost:5000/api/task/AddTask
router.post("/AddTask",async (req,res)=>{
    try {
        // before we save the Task we should check if the Tasks dont exist in the DB
        const findTask = await Task.findOne({name:req.body.name})
        if (findTask) {
            return res.status(400).send({ msg:"Task should be unique"})
        }
        // new task 
        // save it in database
        const newTask= new Task({...req.body});
        await newTask.save();
        //send success
        res.send({msg:"add route", newTask});
    } catch (error) {
        res.status(400).send({msg:"Task not saved", error});
    }
})


// create => GET ()
// 0Route GET All Task
// @ Method GET
// @data : 
// PATH : HTTP:/localhost:5000/api/task/AllTasks

router.get("/AllTasks",async (req,res)=>{
    try {
        const tasktlist = await Task.find();
        res.send({tasktlist , msg :"get all Tasks"})
    } catch (error) {
        res.status(400).send({msg:"can not get ", error})
    }

})




export default router;