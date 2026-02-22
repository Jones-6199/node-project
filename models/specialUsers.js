const mongoose = require("mongoose")

const Schema = mongoose.Schema


const specialUsers = Schema({
    firstName: {
        type: String,
        required: true
    } ,
    lastName: {
        type: String,
        required: true
    }
})


const Special = mongoose.model("SpeseficUser" , specialUsers)


module.exports = Special