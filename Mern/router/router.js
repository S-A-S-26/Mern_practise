const express=require('express');
const router=express.Router();
const createUser=require('../controller/user')
const login = require('../controller/login')
const validate = require('../middlewares/validator')
const registeration = require('../validators/registeration')
const loginVal = require('../validators/login')
const check_login = require('../controller/check_login')
const checkJwt =require('../middlewares/jwt_validator')


router.get("/router",function(req,res){
    res.send("This is router message")
})

router.post("/create_user",
    validate(registeration),
    createUser 
)

router.post("/login",validate(loginVal),login)

router.get("/check_login",checkJwt,check_login)

module.exports=router;