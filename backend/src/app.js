const express = require("express");
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors())
const studentRoute = require("./routes/student.routes")

app.use("/api/student", studentRoute)

module.exports = app