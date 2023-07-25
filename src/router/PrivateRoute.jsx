import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthContext)

    const { pathname, search } = useLocation()
    const lastPath = pathname + search
    localStorage.setItem('lastPath', lastPath)

    return (logged) ? <Navigate to={'/'} /> : children
}
