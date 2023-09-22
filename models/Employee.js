const  mongoose = require('mongoose')

//creating schema for our table

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
// creeating modal

const EmployeeModel = mongoose.model('employees', EmployeeSchema)
module.exports = EmployeeModel