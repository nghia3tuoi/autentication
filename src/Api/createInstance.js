import axios from "axios";
import jwt_decode from "jwt-decode";

export const refreshToken = async(id) => {
    try {
        const res = await axios.post("http://localhost:7000/v1/auth/refresh",{
            withCredentials: true,
        })
    return res.data
    } catch (error) {
        return error
    }
}
export const createAxios = (user, dispatch, stateSuccess) => {
    axios.defaults.withCredentials = true;
    const newInstance = axios.create();
    newInstance.interceptors.request.use(
        async(config) => {
            let date = new Date()
            const decodedToken = jwt_decode(user?.accessToken)
            if (decodedToken.exp < date.getTime() / 1000) {
                const data = await refreshToken()
                const refreshUser = {
                    ...user,
                    accessToken: data.accessToken
                }
                dispatch(stateSuccess(refreshUser));
                config.headers["token"] = "Bearer " + data.accessToken
            }
            return config
        },
        (err) => {
            return Promise.reject(err)
        }
    )
    return newInstance
}


