const check_login= function (req,res){
    res.status(200).send(req.user)
}

module.exports = check_login