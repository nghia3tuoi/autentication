
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { logOut } from "../../../../redux/requestApi/requestApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAxios } from "../../../../Api/createInstance";
import { loginSuccess } from "../../../../redux/createSlice/authSlice";

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.login?.currenUser)
    const accessToken = user?.accessToken
    const axiosJWT = createAxios(user, dispatch, loginSuccess);
    const handleLogOut = () => {
        logOut(accessToken, dispatch, navigate, user?._id, axiosJWT);
    }

    return (
        <div>
            <nav>
                <div>
                    <Link> Blog</Link>
                    <div >
                        {user ? (<ul >
                            <li>
                                <p aria-current="page" to="">{user.username} {user.admin ? ("(Admin)") : ("(User)")}</p>
                            </li>
                            <li>
                                <button onClick={handleLogOut}>Logout</button>
                            </li>
                        </ul>) :
                            (<ul >
                                <li>
                                    <Link aria-current="page" to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                            </ul>)}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;