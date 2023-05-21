import { createContext, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router";


export const AuthContext = createContext();



export const AuthContextProvider = ({ children }) => {

    // const userToken = localStorage.getItem("token")
    // console.log(userToken)

    const navigate = useNavigate()


    const [loginInput, setLoginInput] = useState({ email: "", password: "" });
    const [signupInput, setSignupInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""

    })

    const guestLogin = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika"
    }

    const loginHandler = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`/api/auth/login`, loginInput)
            console.log("here i am looking for status", response)
            if (response.status === 200) {

                localStorage.setItem("token", response.data.encodedToken)
                alert("Login Successfull")
                navigate("/product")
            } else {
                setLoginInput({

                    email: "adarshbalika@gmail.com",
                    password: "adarshbalika"

                })
            }
            setLoginInput({

                email: "",
                password: ""

            })
        } catch (e) {
            console.log(e)
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

    return (
        <>
            <AuthContext.Provider value={{ signupInput, setSignupInput, signUpHandler, loginInput, setLoginInput, loginHandler }} >
                {children}
            </AuthContext.Provider>
        </>
    )
}