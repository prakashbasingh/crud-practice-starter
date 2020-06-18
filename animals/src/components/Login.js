import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"

export default function Login(props) {
    // How can we log in? What do we need to do?
    const [login, setLogin] = useState({
        username: "",
        password: "",
    })
    const handleChange = (event) => {
        event.preventDefault();//not significant but significant in submithandle
        setLogin({
            ...login,
            [event.target.name]: event.target.value 
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosWithAuth()
        .post("login", login)
        .then(response => {
            console.log(response, "What is the response")
            localStorage.setItem("token", response.data.payload)
            props.history.push("/creatures")
        })
        .catch(error => console.log(`login error: ${error.response}`))
    }

    return (
        <div>
            <h1>Welcome to the Safari App!</h1>
            <h2>I can't show you more until you log in. Please build out a login.</h2>
            <form className= "forms-style" onSubmit={handleSubmit}>
                <label>Username</label>
                    <input className= "input"
                            type= "text"
                            name= "username"
                            value= {props.username}
                            onChange={handleChange}
                 />

                <label>Password</label>
                    <input className="input"
                        type= "password"
                        name= "password"
                        value= {props.password}
                        onChange={handleChange}
                    />
                <button className="start">Login</button>
            </form>
        </div>
    )
}