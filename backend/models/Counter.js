const mongoose = require("mongoose")

const CounterSchema = mongoose.Schema({
    id: Number,
    value: Number,
})

module.exports = mongoose.model("counter", CounterSchema)