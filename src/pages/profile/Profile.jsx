
import { NavLink } from "react-router-dom"
import { Header } from "../../header/Header"

export const Profile = () => {

    const toggleActive = ({ isActive }) => {
        return isActive ? "nav_active" : "nav_inactive"
    }

    return (
        <>
            <header >
                <Header />
            </header>
            <div className="profile_navigator" >
                <NavLink className={toggleActive} to="/profile/details" > Profile </NavLink>
                <NavLink className={toggleActive} to="/profile/address" > Address </NavLink>
                <NavLink className={toggleActive} to="/profile/history" > Order History </NavLink>
            </div>


        </>
    )
}