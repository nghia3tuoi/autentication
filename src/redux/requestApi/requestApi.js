import axios from 'axios'
import { loginStart, loginSuccess, loginFail, registerStart, registerFail, registerSuccess, logOutStart, logOutSuccess, logOutFailed} from '../createSlice/authSlice'
import { deleteUsersFailed, deleteUsersStart, deleteUsersSuccess, getUsersFailed, getUsersStart, getUsersSuccess } from '../createSlice/userSlice';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:7000/v1/auth/login", user);
        dispatch(loginSuccess(res.data))
        navigate("/")
    } catch (err) {
        dispatch(loginFail())
    }
}
export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
        await axios.post("http://localhost:7000/v1/auth/register", user)
        dispatch(registerSuccess())
        navigate("/login")
    } catch (err) {
        dispatch(registerFail())
    }
}
//api getUsers
export const getAllUsers = async (accessToken, dispatch) => {

    dispatch(getUsersStart())
    try {
        const res = await axios.get("http://localhost:7000/user", {
            headers: {
                token: `Bearer ${accessToken}`
            }
        })
        dispatch(getUsersSuccess(res.data))
    } catch (error) {
        dispatch(getUsersFailed())
    }
}
// api Delete users
export const deleteUser = async (id, accessToken, dispatch, axiosJWT) => {
    dispatch(deleteUsersStart())
    try {
        const res = await axiosJWT.delete(`http://localhost:7000/user/${id}`, {
            headers: {
                token: `Bearer ${accessToken}`
            }
        })
        dispatch(deleteUsersSuccess(res.data))
    } catch (error) {
        dispatch(deleteUsersFailed(error.response.data))
    }
}
// api logout users  
export const logOut = async(accessToken, dispatch, navigate, id, axiosJWT) => {
    dispatch(logOutStart())
    try {
        await axiosJWT.post(`http://localhost:7000/v1/auth/logout/`, id, {
            headers: {token: `Bearer ${accessToken}`}
        })
        dispatch(logOutSuccess(null))
        navigate("/login")
    } catch (error) {
        dispatch(logOutFailed())
    }
}
