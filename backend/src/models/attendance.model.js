const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    Name: String,
    RegID: String,
    attendance: Boolean
})

const studentModel = mongoose.model("students", studentSchema)

module.exports = studentModel