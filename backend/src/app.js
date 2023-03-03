const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs")
require("./db/connect")
const User = require("./models/user")
const {json} = require("express")
const port = process.env.PORT || 30000;

const static_path = path.join(__dirname, "../public");
const temp_path = path.join(__dirname, "../templates/views");
const part_path = path.join(__dirname, "../templates/partials");
// const part_path = path.join(__dirname, "../templates/partial");

app.use(express.json())
app.use(express.urlencoded({extended:false}))

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
// This is the user post data 

app.post("/register", async (req,res)=> {
try{
     const password = req.body.password;
     const cpasswoed = req.body.confirmpassword;
     const phonenumber = req.body.phonenumber;
     const username = req.body.username;
     if(password === cpasswoed){
         const registerUser = new Register({

            phonenumber : req.body.phonenumber,
             username : req.body.username, 
             password : req.body.password,
             cpasswoed : req.body.confirmpassword,
             
         })

         const userregistered = await registerUser.save();
         res.status(201).render("index")
     }
     else {
        res.send("Password are not matching")
     }
} catch (error) {
    res.status(400).send("user create",error)
}
})



app.listen(port, () => {
    console.log(`server is running at port no. ${port}`);
});

