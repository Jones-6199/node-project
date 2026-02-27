const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
var methodOverride = require("method-override");
app.use(methodOverride("_method"));
const allRoutes = require("./routes/allRoutes");
const addUser = require("./routes/addUser");

mongoose
  .connect(
    "mongodb+srv://jones6199:TuEG6BLY5xIKjfec@cluster0.nev1f0f.mongodb.net/all-data?appName=Cluster0",
  )
  .then(() => {
    console.log("Connected to database succesfully");
    app.listen(port, () => {
      console.log(`I'm listening on port ${port}`);
      console.log("You can Find me here http://localhost:4000/");
    });
  })
  .catch(() => {
    console.log("Error connecting to database");
  });

app.use(allRoutes);
app.use(addUser);
