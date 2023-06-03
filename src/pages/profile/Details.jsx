import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { users } from "../../backend/db/users"

import { Profile } from "./Profile"

export const Details = () => {
    const { signupInput, loginInput, logoutHandler } = useContext(AuthContext)
    console.log("this is the signup input", signupInput)


    return (
        <>
            <Profile />
            <div className="user_details_section">
                <p>Name: {signupInput?.firstName || users[0].firstName + " " + users[0].lastName} </p>
                <p>Email: {signupInput?.email || loginInput.email} </p>
                <button onClick={logoutHandler} >Logout</button>
            </div>

        </>
    )
}