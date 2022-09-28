const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/Ram").then(()=>{
    console.log("connection succesfully")
})
.catch(error=>{
 console.log(error)
})