const path = require("path")

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const MONGODB_URI = 
"mongodb+srv://fantastic099:kraken1288@cluster0.i0xae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const mongoose = require("mongoose");


// View engine
app.set("view engine", "ejs");
app.set("views", "views");
// util
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// route
const inputRoute = require("./routes/inputRoute");
const adminRoute = require("./routes/adminRoute");
// Middleware
app.use(inputRoute);
app.use(adminRoute);


mongoose.connect(MONGODB_URI).then((result)=>{
    console.log("Your app running on port 3000")
    app.listen(3000);
}).catch(err =>{
    console.log(err)
})