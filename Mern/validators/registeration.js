zod = require('zod')

const registeration= zod.object({
    name:zod
    .string({message:"Name is Required"})
    .trim()
    .min(3,{message:"Min 3 char required"})
    .max(255,{message:"Max 255 char allowed"}),
    password:zod
    .string({message:"Password Required"})
    .trim()
    .min(3,{message:"Password at least 3 letters"})
    .max(10,{message:"Password max len 10 letters"}),
    email:zod
    .string({message:"Email is Required"})
    .email()
    .trim()
})

module.exports = registeration