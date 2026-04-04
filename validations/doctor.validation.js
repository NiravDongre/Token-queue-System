const { z } = require("zod")

 const ProtectedSign = z.object({
    email: z
    .email()
    .max(200, {message: "You can't have more than 300 letters"}),
    
    username: z
    .string()
    .max(40, {message: "You can't have more than 40 letters"})
    .min(3, {message: "You can't put two words"}),

    password: z
    .string()
    .max(40, {message: "You can only put maximum 40 letters"})
    .min(6, {message: "Put minimum 6 letters"})
})

 const ProtectedAuth = z.object({
    username: z
    .string()
    .max(40, {message: "You can't have more than 40 letters"})
    .min(3, {message: "You can't put two words"}),

    password: z
    .string()
    .max(40, {message: "You can only put maximum 40 letters"})
    .min(6, {message: "Put minimum 6 letters"})
 })

module.exports = { ProtectedSign, ProtectedAuth }
