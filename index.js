const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.set("view engine" , "ejs")
app.use(express.static("public"))




 

const User = require("./models/users");
const Special = require("./models/specialUsers")





















mongoose
  .connect(
    "mongodb+srv://jones6199:RcKPNfK8QBePnkZO@cluster0.nev1f0f.mongodb.net/all-data?appName=Cluster0",
  )
  .then(() => {  
    console.log("Connected to database succesfully");
    app.listen(port, () => {
      console.log(`I'm listening on port ${port}`);
      console.log("You can Find me here http://localhost:4000/")
    });
  })
  .catch(() => {
    console.log("Error connecting to database");
  });

app.post("/", (req, res) => {
  const newUser = new User(req.body);

  console.log(req.body);
  res.sendFile("/views/succes.html", { root: __dirname });

  newUser
    .save()
    .then(() => {
      console.log("User saved to database");
    })
    .catch(() => {
      console.log("Error saving user to database");
    });
});




/* home */
app.get("/", (req, res) => {
  res.render("index" )
});   
/* home */


/*  view user */
app.get("/user/view.html", (req, res) => {
  res.render("view" )
});   
/*  view user */


/* edit user  */
app.get("/user/edit.html", (req, res) => {
  res.render("edit" )
});   

/*  edit user */



app.get("/user/add.html", (req, res) => {
  res.render("add" )
});   
































