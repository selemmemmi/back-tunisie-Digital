import express from "express";
import Client from "../models/Client.js";


const router=express.Router();

//**************************************** *//

// create => POST ()
// 0Route Add Client
// 0 Method POST
// àdata : req.body
// pATH : HTTP:/localhost:5000/api/AddClient
router.post("/AddClient",async (req,res)=>{
    try {
        // before we save the Client we should check if the Clients dont exist in the DB
        const findClient = await Client.findOne({email:req.body.email})
        if (findClient) {
            return res.status(400).send({ msg:"email should be unique"})
        }
        // new user 
        // save it in database
        const newClient= new Client({...req.body});
        await newClient.save();
        //send success
        res.send({msg:"add route", newClient});
    } catch (error) {
        res.status(400).send({msg:"Client not saved", error});
    }
})

// create => GET ()
// 0Route GET All Client
// @ Method GET
// @data : 
// PATH : HTTP:/localhost:5000/api/Client/AllClients

router.get("/AllClients",async (req,res)=>{
    try {
        const clientlist = await Client.find();
        res.send({clientlist , msg :"get all client"})
    } catch (error) {
        res.status(400).send({msg:"can not get ", error})
    }

})


// create => GET ()
// 0Route GET by ID
// @ Method GET
// @data : ID req.params
// PATH : HTTP:/localhost:5000/api/Client/Client

router.get('/getOne/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const findClient = await Client.findById(id)
        res.send({msg:"get the contact",findClient})
    } catch (error) {
        res.status(400).send({msg: "can note  get then contact" ,error})
    }
})
export default router;

// create => UPDATE ()
// 0Route UPDATE client
// @ Method UPDATE
// @data : ID req.parms * req.body
// PATH : HTTP:/localhost:5000/api/Client/update/:id

router.put('/update/:id',async(req,res)=>{
    try {
        const {id} = req.params
        await Client.updateOne({_id:id} , {$set :{...req.body}})
        res.send({msg:"update scc"})
    } catch (error) {
        res.status(400).send({msg: "can note  update the client" ,error})
    }
})