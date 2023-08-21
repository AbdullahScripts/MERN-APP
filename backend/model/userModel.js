const mongoose=require('mongoose')

const userSchema= mongoose.Schema({
    name:{
        type:String,
required:[true,'please add Your name']
    },
    email:{
        type:String,
required:[true,'please add Your email adress'],
unique:true
    },
    password:{
        type:String,
required:[true,'please add a Suitable password']
    },
},{
    timestamps:true
})


module.exports=mongoose.model("User",userSchema)

