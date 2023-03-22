// create server
const express = require("express")
const app = express()
const _PORT = 3001;

app.use(express.json())

const cors = require("cors")
app.use(cors())
    //conect to DB
const mongoose = require("mongoose")
    // password in my notes on macbook
mongoose.connect("mongodb+srv://jaafar:<password in my notes on macbook>@cluster0.vaudvay.mongodb.net/mernproject?retryWrites=true&w=majority")

//import model user
const UserModel = require('./models/Users')


// get request
app.get("/", async(req, res) => {
    const users = await UserModel.find()
    res.json(users)
})


// Post request
// create User
app.post("/createUser", async(req, res) => {

    const newUser = new UserModel(req.body);
    await newUser.save();

    res.json(req.body)

})
app.listen(_PORT, () => {
    console.log(" Jaafar suliman Full stack the server is running")
})