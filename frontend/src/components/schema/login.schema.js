import {z} from "zod";


export const LoginSchema = z.object({
    email: z.email({
        message: "Invalid email format"
    }),
    password: z.string()
})