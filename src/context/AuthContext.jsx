import { createContext, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router";


import { toast } from "react-toastify";


export const AuthContext = createContext();



export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const navigate = useNavigate()
    const userToken = localStorage.getItem("token");


    const [loginInput, setLoginInput] = useState({ email: "", password: "" });
    const [signupInput, setSignupInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""

    })



    const loginHandler = async (e) => {
        e.preventDefault()
        setIsLoggedIn(false)
        try {
            const response = await axios.post(`/api/auth/login`, loginInput)
            console.log("here i am looking for status", response)
            if (response.status === 200) {

                localStorage.setItem("token", JSON.stringify(response.data.encodedToken))
                localStorage.setItem("isLoggedIn", JSON.stringify(true));

                navigate("/product")
            }
            setIsLoggedIn(true)
            toast.success("Log in Successfull ")


        } catch (e) {
            console.log(e)
            setIsLoggedIn(false)

        }

    }

    const signUpHandler = async (e) => {
        e.preventDefault()

        try {

            const response = await axios.post(`/api/auth/signup`, signupInput)
            if (response.status === 201) {

                localStorage.setItem("token", response.data.encodedToken)
            }


            toast.success("You have successfully Signed up")

            navigate("/login")

        } catch (e) {
            console.log(e)
        }
    }

    const guestLogin = () => {
        setIsLoggedIn(false)
        setLoginInput(
            {
                email: "handsomeHunk@gmail.com",
                password: "adayinparadise",
            }
        )
        setIsLoggedIn(true)
    }


    const logoutHandler = () => {
        localStorage.removeItem("token")
        setIsLoggedIn(false)
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("paymentId")
        navigate("/login")
        setLoginInput(
            {
                email: "",
                password: "",
            }
        )
    }

    return (
        <>
            <AuthContext.Provider value={{ signupInput, setSignupInput, signUpHandler, loginInput, setLoginInput, loginHandler, isLoggedIn, setIsLoggedIn, logoutHandler, guestLogin, userToken }} >
                {children}
            </AuthContext.Provider>
        </>
    )
}