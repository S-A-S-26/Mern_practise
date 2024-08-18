const jwt = require('jsonwebtoken')
const User = require('../models/user')

const checkJwt=async function (req,res,next){
    let token = req.header('Authorization')
    console.log("check jwt",token)
    try {
        if (!token){
            res.status(401).json({msg:"Invalid Token1"})
        }else{
            token = token.replace("Bearer","").trim()
            const user = jwt.verify(token,process.env.JSECRET)
            console.log("user jwt",user)
            const dbUser = await User.findOne({email:user.email}).select({
                password:0
            })
            console.log("db user",dbUser)
            req.user=dbUser
            next()
       
        }
    } catch (error) {
        res.status(401).json({msg:"Invalid Token3"})
    }
}

module.exports = checkJwt