import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const Login = () => {

    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        setErr(false);
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/group");
        }
        catch(err) {
            setErr(true);
        }
        
    }

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">SnowdyDay</span>
                <span className="reg">Login</span>

                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    
                    <button>Login</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>Don't have an account yet? <Link to="/register">Register</Link></p>
            </div>
            
        </div>
    )
};

export default Login