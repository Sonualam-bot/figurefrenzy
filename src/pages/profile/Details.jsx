import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { users } from "../../backend/db/users"

export const Details = () => {
    const { signupInput, loginInput, logoutHandler } = useContext(AuthContext)
    console.log("this is the signup input", signupInput)


    const randomProfileImages = [
        {
            imageUrl: "https://wallpaperaccess.com/full/3301457.jpg"
        },
        {
            imageUrl: "https://i.pinimg.com/736x/f5/d5/06/f5d5067d69dc1fbe115224cd61e4cfd8.jpg"
        },
        {
            imageUrl: "https://yt3.googleusercontent.com/4P9Uts31LmPBgXHgfGpLNgqzS6rsECrVSbo2GfpJaYzeoAxsEIUvZpWNEuI8mPBtYV0HplrpGQ=s900-c-k-c0x00ffffff-no-rj"
        },
        {
            imageUrl: "https://aniyuki.com/wp-content/uploads/2022/03/aniyuki-cute-anime-avatar-profile-picture-22.jpg"
        }
    ]

    const getRandomImageUrl = () => {

        //here i am taking random index from the array
        const randomIndex = Math.floor(Math.random() * randomProfileImages.length)

        //accessing the random object from the array using the randomIndex
        const randomObject = randomProfileImages[randomIndex]

        //retrieve the imageurl property from the randomObject
        const imageUrl = randomObject.imageUrl

        return imageUrl
    }

    const randomImageUrl = getRandomImageUrl()

    console.log(randomImageUrl)


    return (
        <>
            <div className="user_details_section">
                <img src={randomImageUrl} />
                <p>Name: {signupInput?.firstName || users[0].firstName + " " + users[0].lastName} </p>
                <p>Email: {signupInput?.email || loginInput.email} </p>
                <button onClick={logoutHandler} >Logout</button>
            </div>

        </>
    )
}