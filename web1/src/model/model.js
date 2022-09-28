const mongoose = require("mongoose")

const registerSchema =  new mongoose.Schema({
    name:{
        type:String,
        require:true

    },
    gmail:{
        type:String,
        require:true
    },
    password:{
        type:Number,
        require:true
    }
    
})
const employregister =  new mongoose.model("Register", registerSchema);

module.exports = employregister;