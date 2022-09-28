const express = require("express")

const port = 3000
const path  = require("path");
const employregister = require("./model/model");
const staticPath = path.join(__dirname,"../public")
const imgpath =  path.join(__dirname,"../public/img.jpg")
const loginpath = path.join(__dirname,"../public/login.html")
console.log(imgpath)
require("./db/mongoose")
require("./model/model")
const app = express();
app.use(express.static(imgpath))
app.use(express.static(staticPath))
app.use(express.static(loginpath))
app.set("view engine", "hbs")
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.get("/",(req,res)=>{
    res.send()
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.post("/login",async(req,res)=>{
    console.log("ram")
    try{
     const data = new  employregister({
        name :req.body.name,
        gmail: req.body.gmail,
        password : req.body.password
     })
     const userData =  await data.save()
     console.log(userData)

    res.status(201).render("index")
    } catch(error){
        console.log(error)
    }
})

app.get("/contact",(req,res)=>{
    res.send("")
})
app.listen("3000",()=>{
    console.log(`server listning at ${port}` )
})