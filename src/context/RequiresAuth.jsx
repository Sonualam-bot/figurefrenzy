import { useContext } from "react"
import { Navigate } from "react-router"
import { AuthContext } from "./AuthContext"
import { useLocation } from "react-router"

export const RequiresAuth = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext)
    const location = useLocation()
    return (
        isLoggedIn ? children : <Navigate to="/login" state={{ from: location }} />
    )
}