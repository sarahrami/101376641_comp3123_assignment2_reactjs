import React, { useContext, useState } from 'react';
import axios from 'axios';
import './user.css'
export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const login = async () => {
        try {
            setLoading(true);
            const response = await axios.post("http://localhost:3004/api/user/login", { username, password });

            if (response.data.status === "true") {
                setError("Successful login.");
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
        <div className='login'>
            <h2>Login</h2>
            
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <p>{error}</p>

            <button onClick={login} disabled={loading}>
                Login
            </button>
            <p className='text'>Don't have an account?</p>
            <button className='register'>
                Signup
            </button>
        </div>
    );
}
