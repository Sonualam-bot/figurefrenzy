import { Details } from "./Details"
import { Address } from "./Address"
import { NavLink } from "react-router-dom"
import { useState } from "react"

export const Profile = () => {

    const [userDetails, setUserDetails] = useState("one")


    const tabs = {
        one: <Details />,
        two: <Address />
    }

    const handleUserProfileDetails = (e) => {
        setUserDetails(e.target.value)
    }


    return (
        <>
            <div className="profile_main_container" >
                <div className="details_container"  >
                    <button onClick={handleUserProfileDetails} value="one" > user Details </button>
                </div>
                <div className="address_container"  >
                    <button onClick={handleUserProfileDetails} value="two" >Address</button>
                </div>
            </div>
            <div className="user_details_address_container" >
                <p>{tabs[userDetails]}</p>
            </div>

        </>
    )
}