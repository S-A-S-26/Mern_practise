const z = require('zod')

const loginVal = z.object({
    email:z
    .string({message:"Email Required"})
    .email({message:"Invalid Email"})
    .trim(),
    password:z
    .string({message:"Password is Required"})
    .trim()
    .min(3,{message:"Password at least 3 letters"})
    .max(255,{message:"Password max 255 letters"})
})

module.exports = loginVal