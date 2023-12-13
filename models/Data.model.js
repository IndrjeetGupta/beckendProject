const mongoose = require("mongoose")

const dataSchema = mongoose.Schema({
    number : String,
    fastName : String,
    LastName : String,
    email : String,
    salary : String,
    date : String,
})

const DataModel = mongoose.model("data", dataSchema)
module.exports = {DataModel}

