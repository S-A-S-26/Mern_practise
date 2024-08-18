const bcrypt=require('bcrypt')
const User = require('../models/user')

const login = async function(req,res){
    if (!req.body){
        console.log("not req body for login")
        return res.status(400).send("No login data submitted")
    }
    const user =await User.findOne({email:req.body.email})
    const reqPassword= req.body.password
    if (user){
        const passCheck =await bcrypt.compare(reqPassword,user.password)
        if (passCheck){
            res.status(200).json({msg:"Login Sucessfull",token:await user.genJwt(),_id:user.id})
        }else{
            res.status(403).json({msg:"Incorrect Password"})
        }
    }else{
        res.status(404).json({msg:"User does not exist"})
    }

}


module.exports = login