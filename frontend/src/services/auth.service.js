import { apiFetch } from "./api";

export async function signupUser({firstName,lastName,email,password}) {
    return await apiFetch("/users/create", {
        method:"POST",
        body:JSON.stringify({firstName,lastName,email,password})
    })
}




export async function loginUser({email,password}) {
    const response = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({email,password}),

    });

    const {accessToken, firstName, lastName} = response.data

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);

    return response;
    
}