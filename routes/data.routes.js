const express = require("express")

const {DataModel} =require("../models/Data.model")
const { UserModel } = require("../models/User.model");

const dataRouter = express.Router();


dataRouter.get("/", async (req, res) => {

    const datas =  await DataModel.find({})
    res.send({datas : datas})
})

dataRouter.post("/create", async (req, res) => {
    const {   number ,
        fastName ,
        LastName, 
        email ,
        salary ,
        date 
    
    } = req.body;

    const userID = req.userID;

    const user = await UserModel.findOne({_id : userID})

    const authorEmail = user.email

    const datas =  await DataModel.create({ number ,
        fastName ,
        LastName, 
        email ,
        salary ,
        date 
    
    })
    res.send({datas : datas})
})

dataRouter.patch("/edit/:dataID", async (req, res) => {
    const dataID = req.params.dataID

    const userID = req.userID;

    const user = await UserModel.findOne({_id : userID})
    const userEmail = user.email

    const payload = req.body


    await DataModel.findOneAndUpdate({_id : dataID}, payload)

    res.send({message : `Data item ${dataID} updated`})
})


dataRouter.delete("/delete/:dataID", async (req, res) => {

    const dataID = req.params.dataID

    const userID = req.userID;
    const user = await UserModel.findOne({_id : userID})

    const userEmail = user.email

    await DataModel.findOneAndDelete({_id : dataID})

    res.send({message : `Data item  ${dataID} deleted`})
})


module.exports = {dataRouter}