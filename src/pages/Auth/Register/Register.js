import {useState} from 'react'
import {useNavigate} from'react-router-dom'
import { useDispatch } from'react-redux';
import { registerUser } from '../../../redux/requestApi/requestApi';

function RegisterUser() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = {
            username,
            password,
            email
        }
        registerUser(newUser, dispatch, navigate)
    }
    return (
        <div>
            <form className="form" onSubmit={handleRegister}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="username" id="username" value={username} onChange={e => {
                        setUsername(e.target.value)
                    }} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={e => {
                        setPassword(e.target.value)
                    }} />
                </div>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" aria-describedby="emailHelp" value={email} onChange={e => {
                        setEmail(e.target.value)
                    }} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterUser;