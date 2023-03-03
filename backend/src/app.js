const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs")
require("./db/connect")

const port = process.env.PORT || 30000;

const static_path = path.join(__dirname, "../public");
const temp_path = path.join(__dirname, "../templates/views");
const part_path = path.join(__dirname, "../templates/partials");
// const part_path = path.join(__dirname, "../templates/partial");

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",temp_path)
hbs.registerPartials(part_path);

app.get("/", (req, res) =>{
    res.render("index")
});
app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/register",(req,res)=>{
    res.render("register")
})

app.listen(port, () => {
    console.log(`server is running at port no. ${port}`);
});

