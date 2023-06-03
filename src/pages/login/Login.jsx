import { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useLocation } from "react-router-dom"
import { Header } from "../../header/Header";

import { VscEyeClosed } from "react-icons/vsc"
import { VscEye } from "react-icons/vsc"

export const Login = () => {
    const { loginInput, setLoginInput, loginHandler, isLoggedIn, setIsLoggedIn, logoutHandler, guestLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleLoginInput = (e) => {
        const { name, value } = e.target;
        setLoginInput({ ...loginInput, [name]: value });
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <header className="App-header">
                <Header />
            </header>
            <div className="login-container">
                <div className="login-card">
                    <h2>Sign in</h2>
                    <form onSubmit={loginHandler}>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={loginInput.email}
                                onChange={handleLoginInput}
                                placeholder="abc@figureFrenzy.com"
                            />
                            <label htmlFor="password">Password</label>
                            <div className="password-input">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={loginInput.password}
                                    onChange={handleLoginInput}
                                    placeholder="Enter password"
                                />
                                <span
                                    type="button"
                                    className="show-hide-password-button"
                                    onClick={toggleShowPassword}
                                >
                                    {showPassword ? <VscEyeClosed /> : <VscEye />}
                                </span>
                            </div>
                            <button type="submit">Log In</button>
                            <button onClick={guestLogin}>Login As A Guest</button>
                            <p>
                                Don't have an account? <NavLink to="/signup">sign up</NavLink>{" "}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
