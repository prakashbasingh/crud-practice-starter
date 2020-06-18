import axios from "axios";


// /a token is a hassed value that we assign certain authorization with that token
// authentication is validation(here password and username is waht exactly what it should be )
//authorization is allowance what we can do
export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")

    return axios.create({
        baseURL: "http://localhost:5000/api",
        headers : {
            authorization: token
        }
    })

}