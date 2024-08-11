const validate = (schema)=> (async(req,res,next)=>{
    try {
        console.log("validateee")
        const body =await schema.parseAsync(req.body)
        req.body = body
        next()
    } catch (error) {
        console.log("error---",error.errors)
        res.status(401).json({message:error.errors[0].message})
    }
})

module.exports = validate