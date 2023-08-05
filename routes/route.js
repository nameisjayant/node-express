const express = require('express')
const router = express.Router()
const Model = require('../models/model')

router.post('/add',async(req,res)=>{
    const data = new Model({
        name : req.body.name,
        age : req.body.age
    })
    try{
        const dataToSave = await data.save()
      res.status(200).json(dataToSave)
    
    }catch(error){
        res.status(400).json({message: error.message})
    }
})

router.get('/user',async (req,res)=>{
    try{
        const data = await Model.find()
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/user/:id', async (req,res)=>{
    try{
        const data = await Model.findById(req.params.id)
    res.json(data)
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

router.delete('/user/:id',async (req,res)=>{
    try{
        const deleted = await Model.findByIdAndDelete(req.params.id)
        res.send(`Document with ${deleted.name} is deleted..`)
    }catch(error){
        res.status(400).json({message : error.message})
    }
})

router.put('/user/:id',async (req,res)=>{
    try{
        const id = req.params.id
        const updateData = req.body
        const options = {new:true}
        const result = await Model.findByIdAndUpdate(
            id,updateData,options
        )
        res.status(200).json(result)
    }catch(error){
        res.status(400).json({message : error.message})
    }
})

module.exports = router