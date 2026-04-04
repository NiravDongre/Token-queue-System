const { z } = require("zod");

 const UserValidation = z.object({
    username: z
    .string()
    .max(40, {message: "You can't have more than 40 letters"})
    .min(3, {message: "You can't put two words"}),

    age: z
    .number()
    .max(100)
    .min(1),

    symptoms: z
    .string()
    .max(400)
    .min(3)
})

module.exports = UserValidation
 