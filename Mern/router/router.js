const express=require('express');
const router=express.Router();
const createUser=require('../controller/user')
const login = require('../controller/login')
const validate = require('../middlewares/validator')
const registeration = require('../validators/registeration')
const loginVal = require('../validators/login')


router.get("/router",function(req,res){
    res.send("This is router message")
})

router.post("/create_user",
    validate(registeration),
    createUser 
)

router.post("/login",validate(loginVal),login)
module.exports=router;