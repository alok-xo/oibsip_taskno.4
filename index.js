const express = require("express"); //importing express
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");

const app = express(); //calling express method
app.use(express.json()); //this will just transfer the data that we're passing from frontend to backend that will transfer in to json format
app.use(cors());

//creating connection with mongodb
//to create the connection 👇
// mongoose.connect('mongodb://localhost:27017') //sometime the local host doesnt work so writing the local IP adress instead of that
mongoose.connect("mongodb://127.0.0.1:27017/employee1"); //here connecting the connection string (from mongodb pasted the connection string)
//employee1 is the database name

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("incorrect password");
      }
    } else {
        res.json('no record found')
    }
  });
});

app.post("/Signup", (req, res) => {
  //req is the data coming from frontend, res is we're sending back to the frontend
  EmployeeModel.create(req.body) //data coming from frontend are now in req.body
    .then((employees1) => res.json(employees1))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running fine");
});
