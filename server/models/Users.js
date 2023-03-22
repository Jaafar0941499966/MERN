const { Schema, model } = require("mongoose")
const Userschema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
})
const UserModel = model("users", Userschema)
module.exports = UserModel