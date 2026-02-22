const mongoose = require("mongoose")

const Schema = new mongoose.Schema


/* define my schema */
const userSchema = new mongoose.Schema({
    email: String,
    password: String
})


/* create module */
const User = mongoose.model("Userr", userSchema)


/* export module to use it on index.js */
module.exports = User