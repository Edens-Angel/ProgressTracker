const bodyParser = require("body-parser")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv/config")

const app = express()
const PORT = 3000
// middleware
app.use(bodyParser.json())
app.use(cors())

// routes
const counterRoutes = require("./routes/counterRoutes")

app.use("/counter", counterRoutes)


// database connection
const dbName = "progress"
dbString = `mongodb+srv://admin:${process.env.dbPassword}@cluster0.1oo9i.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(dbString, { 
    useNewUrlParser: true,
    useUnifiedTopology: true  
}, (err, db)=>{
    if (err) throw err
    console.log("connected with db!");
})


app.get("/", (req, res) => {
    res.status(200).send("req")
})

app.post("/", (req, res)=> {
    console.log(req.body);
})

app.listen(PORT, () => {
    console.log("listening to port 3000");
})