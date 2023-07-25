import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../../types/types"


const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return {
        logged: !!user,
        user,
    }
}


export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {}, init)


    const login = (name = '') => {
        const user = { name }

        dispatch({
            type: types.login,
            payload: user
        })

        localStorage.setItem('user', JSON.stringify(user))
    }

    const logout = () => {
        localStorage.removeItem('user')
        dispatch({
            type: types.logout
        })
    }

    return (
        <AuthContext.Provider value={{ state, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}