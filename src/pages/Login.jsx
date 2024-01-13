import React from "react";
import Add from "../img/add.png";

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">SnowdyDay</span>
            <span className="reg">Register</span>

            <form>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                
                <button>Sign In</button>
            </form>
            <p>Don't have an account yet? Register</p>
            </div>
            
        </div>
    )
};

export default Login