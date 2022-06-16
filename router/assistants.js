import express from "express";
import Assistant from "../models/Assistants.js";



const router=express.Router();

//**************************************** *//

// create => POST ()
// 0Route Add Assistant
// 0 Method POST
// àdata : req.body
// pATH : HTTP:/localhost:5000/api/Assistant/AddAssistants
router.post("/AddAssistants",async (req,res)=>{
    try {
        // before we save the Assistant we should check if the Assistants dont exist in the DB
        const findAssistant = await Assistant.findOne({email:req.body.email})
        if (findAssistant) {
            return res.status(400).send({ msg:"email should be unique"})
        }
        // new Assistant 
        // save it in database
        const newAssistants= new Assistant({...req.body});
        await newAssistants.save();
        //send success
        res.send({msg:"add route", newAssistants});
    } catch (error) {
        res.status(400).send({msg:"Assistant not saved", error});
    }
})

// create => GET ()
// 0Route GET All Assistant
// @ Method GET
// @data : 
// PATH : HTTP:/localhost:5000/api/Assistant/AllAssistants

router.get("/AllAssistants",async (req,res)=>{
    try {
        const Assistantslist = await Assistant.find();
        res.send({Assistantslist , msg :"get all Assistant"})
    } catch (error) {
        res.status(400).send({msg:"can not get ", error})
    }

})


// create => GET ()
// 0Route GET by ID
// @ Method GET
// @data : ID req.params
// PATH : HTTP:/localhost:5000/api/Assistant/Client

router.get('/getOne/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const findAssistant = await Assistant.findById(id)
        res.send({msg:"get the Assistant",findAssistant})
    } catch (error) {
        res.status(400).send({msg: "can note  get then contact" ,error})
    }
})
export default router;

// create => UPDATE ()
// 0Route UPDATE client
// @ Method UPDATE
// @data : ID req.parms * req.body
// PATH : HTTP:/localhost:5000/api/Assistant/update/:id

router.put('/update/:id',async(req,res)=>{
    try {
        const {id} = req.params
        await Assistant.updateOne({_id:id} , {$set :{...req.body}})
        res.send({msg:"update scc"})
    } catch (error) {
        res.status(400).send({msg: "can note  update the Assistant" ,error})
    }
})