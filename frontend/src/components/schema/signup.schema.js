import {z} from "zod";



const passwordValidation = new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/);



export const SignUpSchema = z.object({
    firstName:z.string().min(3, {
        message: "First name must be at least 3 characters"
    }).max(100, {
        message:"First name cannot be more than 100 characters"
    }),
    lastName:z.string().max(100, {
        message:"Last name cannot be more than 100 characters"
    }),
    email:z.email({
        message: "Please enter a valid email address"
    }),
    password: z.string().regex(passwordValidation, {
        message: "Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character (!@#$%^&*)"
    })

})