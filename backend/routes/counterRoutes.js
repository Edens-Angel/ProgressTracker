const express = require("express");
const router = express.Router()
const CounterModel = require("../models/Counter")

router.get("/", async (req, res) => {
    try{
        const counters = await CounterModel.find();
        res.status(200).json(counters)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post("/", async (req, res) => {
    const counter = CounterModel({
        id: req.body.id,
        value: req.body.value
    })

    try {
        const savedCounter = await counter.save()
        res.status(201).json(savedCounter)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const counter = await CounterModel.findOne({id: id})
        if (counter == null){
            res.status(404).json({message: "not found"})
        }
        res.status(200).json(counter)
    } catch (err){
        res.status(500).json(err)
    }
})

router.patch("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const newCounter = await CounterModel.updateOne({id: id} ,{$set: {value: req.body.value}})
        res.status(201).json(newCounter)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const deletedCounter = await CounterModel.deleteOne({id: id})
        
        if (deletedCounter == null){
            res.status(204).json({message: `The counter with id: ${id} does not exist`})
        }
        res.status(202).json(deletedCounter)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports = router