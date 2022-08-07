import React from "react"
import "../Assets/styles/Login/Login.css"

function Login(props){
    return(
        <div id={props.id} className="login-container">
            <a className="login" href=".main">Login</a>
            <button className="register-btn">Register</button>
        </div>
    )
}

export default Login;