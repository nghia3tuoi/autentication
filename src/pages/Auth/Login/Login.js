import { useState } from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../redux/requestApi/requestApi";

function LoginUser() {
    const [username, seUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const newUser = {
            username,
            password
        }
        loginUser(newUser, dispatch, navigate);
    };

    //
    
    //
    return (
        <div>
            <form className="form" onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="username" id="username" value={username} onChange={(e) => {
                        seUsername(e.target.value);
                    }} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginUser;