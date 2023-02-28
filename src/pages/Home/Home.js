import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteUser, getAllUsers } from '../../redux/requestApi/requestApi'
import { createAxios } from '../../Api/createInstance'
import { loginSuccess } from '../../redux/createSlice/authSlice'

function Home() {
    const user = useSelector(state => state.auth.login?.currenUser)
    const msg = useSelector(state => state.user?.msg)
    const allUsers = useSelector(state => state.user.users?.allUsers);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const axiosJWT = createAxios(user, dispatch, loginSuccess)
    const handleDelete = (id) => {
        deleteUser(id, user?.accessToken, dispatch, axiosJWT)
    }
    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
        if (user?.accessToken) {
            getAllUsers(user.accessToken, dispatch)
        }
        
    }, [])
    return (
        <ul>
            <p>{msg}</p>
            {allUsers?.map(user => (
                <li key={user._id}>{user.username}
                    <button onClick={() => {
                        handleDelete(user._id)
                    }}
                    >&times;
                    </button>
                </li>
            ))}
            
        </ul>
    )
}
export default Home