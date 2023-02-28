import Home from "../pages/Home/Home"
import RegisterUser from "../pages/Auth/Register/Register"
import Login from "../pages/Auth/Login/Login";
import { HeaderOnly } from "../components/Layout"
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/register', component: RegisterUser, layout: HeaderOnly},
    {path: '/login', component: Login, layout: HeaderOnly},
]
const privateRoutes = []

export {publicRoutes, privateRoutes}