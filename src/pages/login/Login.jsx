import { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
// import { CartContext } from "../../context/CartContext";
import { useLocation } from "react-router-dom"

export const Login = () => {
    const { loginInput, setLoginInput, loginHandler, isLoggedIn, setIsLoggedIn, logoutHandler } = useContext(AuthContext);





    const handleLoginInput = (e) => {
        const { name, value } = e.target;
        setLoginInput({ ...loginInput, [name]: value })
        console.log({ ...loginInput, [name]: value })
    }


    const guestLogin = () => {
        setIsLoggedIn(false)
        setLoginInput(
            {
                email: "adarshbalika@gmail.com",
                password: "adarshbalika",
            }
        )
        setIsLoggedIn(true)
    }

    return (
        <>
            <div className="login-container" >


                <div className="login-card">
                    <h2>Sign in</h2>

                    <form onSubmit={loginHandler} >
                        <div className="form_data" >
                            <label htmlFor="email" > Email</label>
                            <input type="email" name="email" value={loginInput.email} onChange={handleLoginInput} placeholder="abc@figureFrenzy.com" />
                            <label htmlFor="password" >Password</label>
                            <input type="password" name="password" value={loginInput.password} onChange={handleLoginInput} placeholder="Enter password" />
                            <button type="submit" >Log In</button>
                            <button onClick={guestLogin} > Login As A Guest</button>
                            <p>Don't have an account? <NavLink to="/signup" >sign up</NavLink>  </p>
                        </div>


                    </form>



                </div>


            </div>
        </>
    )
}