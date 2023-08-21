const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

// @desc Register new user
// @route POST /api/user 
// @access Public 

const registerUser= asyncHandler( async (req,res)=>{

const {email,name,password}=req.body

if (!name || !email || !password){
    res.status(400)
    throw new Error('please fill all fields')
}

// check if user exist 

const userExists=await User.findOne({email})

if(userExists){
    res.status(400)
    throw new Error('this user is allready exist')
}

// hash password 
const salt = await bcrypt.genSalt(10)
const hashedPassword= await bcrypt.hash(password, salt)

const user = await User.create({
    email,
    name,
    password:hashedPassword,
})

if(user){
    res.status(201).json({
        _id:user.id,
        name:user.id,
        email:user.email,
    })
}else{
    res.status(400)
    throw new Error('user Data invalid')
}



    res.json({message:'register user'})
})

// @desc authenticate new user
// @route POST /api/user/login 
// @access Public 

const loginUser=asyncHandler( async(req,res)=>{
    res.json({message:'Login user'})
})

// @desc get user data
// @route POST /api/user/me
// @access Public 

const getMe=asyncHandler( async(req,res)=>{
    res.json({message:'User data display'})
})


module.exports={
    registerUser,
    loginUser,
    getMe,
}