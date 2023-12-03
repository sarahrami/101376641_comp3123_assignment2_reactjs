const express = require("express")
const userRoutes = require("./routes/user")
const empRoutes = require("./routes/employees")
const mongoose = require('mongoose')
const cors = require('cors');


const app = express()

const SERVER_PORT = 3004

app.use(cors());
app.use(express.json())
app.use(express.urlencoded());

const DB_CONNECTION_STRING = "mongodb+srv://sarahrami97:L6IvGrNT0RXgqxDn@cluster0.umsf83y.mongodb.net/fall2023_comp3123?retryWrites=true&w=majority"
mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use("/api/user/", userRoutes)
app.use("/api/emp/", empRoutes)


app.get("/", (req, res) => {
    res.send("<h1>Welcome to your Express.js application for Assignment 1 from COMP3123</h1>");
});

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})