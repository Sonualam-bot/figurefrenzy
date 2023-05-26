import { createContext, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

import { toast } from "react-toastify";


export const AuthContext = createContext();



export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const location = useLocation()

    const navigate = useNavigate()


    const [loginInput, setLoginInput] = useState({ email: "", password: "" });
    const [signupInput, setSignupInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""

    })
    // const [signup, setSignup] = useState(false)



    const loginHandler = async (e) => {
        e.preventDefault()
        setIsLoggedIn(false)
        try {
            const response = await axios.post(`/api/auth/login`, loginInput)
            console.log("here i am looking for status", response)
            if (response.status === 200) {

                localStorage.setItem("token", JSON.stringify(response.data.encodedToken))
                localStorage.setItem("isLoggedIn", JSON.stringify(true));
                alert("Login Successfull")
                navigate("/product")
            }
            setIsLoggedIn(true)
            toast.success("Log in Successfull ")

            setLoginInput({

                email: "",
                password: ""

            })

        } catch (e) {
            console.log(e)
            setIsLoggedIn(false)

        }

    }

    const signUpHandler = async (e) => {
        e.preventDefault()

        try {
            console.log("signup handler called")
            const response = await axios.post(`/api/auth/signup`, signupInput)
            if (response.status === 201) {

                localStorage.setItem("token", response.data.encodedToken)
            }
            console.log(response)
            console.log(response.data.encodedToken)


            toast.success("You have successfully Signed up")

            setSignupInput({
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            })

        } catch (e) {
            console.log(e)
        }
    }


    const logoutHandler = () => {
        localStorage.removeItem("token")
        setIsLoggedIn(false)
    }

    return (
        <>
            <AuthContext.Provider value={{ signupInput, setSignupInput, signUpHandler, loginInput, setLoginInput, loginHandler, isLoggedIn, setIsLoggedIn, logoutHandler }} >
                {children}
            </AuthContext.Provider>
        </>
    )
}