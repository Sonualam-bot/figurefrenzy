import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { CartContext } from "../../context/CartContext";

export const Login = () => {
    const { loginInput, setLoginInput, loginHandler } = useContext(AuthContext);
    const { fetchUserDetails } = useContext(CartContext)

    const handleLoginInput = (e) => {
        const { name, value } = e.target;
        setLoginInput({ ...loginInput, [name]: value })
        console.log({ ...loginInput, [name]: value })
    }


    const guestLogin = () => {
        setLoginInput(
            {
                email: "adarshbalika@gmail.com",
                password: "adarshbalika",
            }
        )

    }

    return (
        <>
            <div className="login-container" >
                <div className="login-card">
                    <h2>Sign in</h2>
                    <form onSubmit={loginHandler} >
                        <div className="form-data" >
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