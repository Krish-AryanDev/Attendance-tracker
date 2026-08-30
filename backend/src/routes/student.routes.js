const express = require("express")
const studentModel = require("../models/attendance.model")

const router = express.Router()

router.post("/upload-student", async(req, res) => {
    try{
        const {Name, RegID} = req.body

        const newStudent = await studentModel.create({
            Name: Name,
            RegID: RegID,
            attendance: true
        })

        res.status(201).json({
            "message" : "student data upload successfully",
            newStudent
        })
    }catch(e) {
        res.status(500).json({
            "message" :  "could not upload student data",
            "error" : e.message
        })
    }
})



module.exports = router