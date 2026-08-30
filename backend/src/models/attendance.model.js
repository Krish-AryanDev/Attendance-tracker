const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    Name: String,
    RegID: Number,
    attendance: Boolean
})

const studentModel = mongoose.model("students", studentSchema)

module.exports = studentModel