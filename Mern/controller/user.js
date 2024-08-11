const User = require('../models/user');
const bcrypt= require('bcrypt')

const createUser=async (req,res)=>{
    console.log("Creating user")
    if (!req.body){
        console.log("nobody create user")
        return res.status(404).send({message:'Not Data!'}) 
    }
    const {email} = req.body;
    try {
        const user = await User.findOne({email:email})
        console.log("user",user,email)
        if (user){
            console.log("user already exist")
            return res.status(400).send({message: 'User already exists'})
        }else{
            const salt= await bcrypt.genSalt(10) 
            const hashPassword = await bcrypt.hash(req.body.password,salt)
            const newUser=await User.create({...req.body, password:hashPassword})
            console.log("newUser",newUser)
            if (newUser){
                console.log("user created successfully")
                return res.status(201).send({user:newUser,token:await newUser.genJwt(),_id:newUser._id.toString()})
            }
        }
    } catch (error) {
       console.log("error creating user",error)
       return res.status(500).send({message: 'Error creating user'})
    }
}

module.exports = createUser