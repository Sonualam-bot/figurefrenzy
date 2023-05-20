import { createContext, useState } from "react"
import axios from "axios";


export const AuthContext = createContext();



export const AuthContextProvider = ({ children }) => {

    const userToken = localStorage.getItem("token")
    // console.log(userToken)


    const [loginInput, setLoginInput] = useState({ email: "", password: "" });
    const [signupInput, setSignupInput] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""

    })

    const loginHandler = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(`/api/auth/login`, loginInput)
            localStorage.setItem("token", JSON.stringify(data.encodedToken))
            console.log(data.encodedToken)
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

        // console.log("signup handler called")
        // axios.post(`/api/auth/signup`, signupInput)
        //     .then((res) => {
        //         console.log(res)
        //         console.log(res.data.encodedToken)
        //     })

        try {
            console.log("signup handler called")
            const { data } = await axios.post(`/api/auth/signup`, signupInput)
            localStorage.setItem("token", JSON.stringify(data.encodedToken))
            // console.log(res)
            console.log(data.encodedToken)
            setSignupInput({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""
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