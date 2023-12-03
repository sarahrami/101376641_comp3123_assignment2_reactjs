import React, {useState} from 'react';
import axios from 'axios';

export default function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const signup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("http://localhost:3004/api/user/signup", { username, email, password });

            if (response.data.status === "true") {
                setError(response.data.message);
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
        <div className='signUp'>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <p>{error}</p>

        <button onClick={signup} disabled={loading}>
            Sign up
        </button>
    </div>
  )
}
