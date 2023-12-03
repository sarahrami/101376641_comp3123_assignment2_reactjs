import React, {useState} from 'react';
import axios from 'axios';
import "./css/user.css";
import { Link } from "react-router-dom";

export default function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const signup = async (event) => {
        event.preventDefault(); 
        if (!username || !email || !password) {
            setError("Please fill in all fields");
            return;
        }
        try {
            setLoading(true);
            const response = await axios.post("http://localhost:3004/api/user/signup",
             { username, email, password });

            if (response.data.status === "true") {
                setError(response.data.message);
                window.location.href = "/";
            } else {
                setError(response.data.message);
            }

        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    };

  return (
        <div className='signup'>
            <h2>Sign up</h2>
        <label>Username</label>
        <input type="text" value={username} required onChange={(e) => setUsername(e.target.value)} />

        <label>Email</label>
        <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <p>{error}</p>
    
            <button onClick={signup} disabled={loading}>
                Sign up
            </button>
            <p style={{alignSelf: 'center', color: 'black'}}>Already got an account?</p>
            <Link to='/' style={{alignSelf: 'center', textDecoration: 'none'}}>
                Login
            </Link>
     
    </div>
  )
}
