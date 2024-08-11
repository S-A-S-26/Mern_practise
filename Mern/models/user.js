const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.methods.genJwt= async function (next){
    const user = this

    return jwt.sign({
            _id  : user._id.toString(),
            email : user.email,
        },
            process.env.JSECRET,
        {
            expiresIn : "10d"
        }
    )
}

const User =new mongoose.model('User',userSchema)
//do not declare here as it is after the schema is taken into use so the method is not yet processed in to the User model 
module.exports = User