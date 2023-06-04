import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Header } from "../../header/Header";
import { toast } from "react-toastify";

import { VscEyeClosed } from "react-icons/vsc"
import { VscEye } from "react-icons/vsc"
import { GiButterToast } from "react-icons/gi";



export const Signup = () => {
    const { signupInput, setSignupInput, signUpHandler } = useContext(AuthContext);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [showPasswordAgain, setShowPasswordAgain] = useState(false);

    const toggleShowPasswordAgain = () => {
        setShowPasswordAgain(!showPasswordAgain);
    }


    const handleSignupInput = (e) => {
        const { name, value } = e.target;
        setSignupInput({ ...signupInput, [name]: value })
        console.log({ ...signupInput, [name]: value })
    }

    const handleCreateAccount = (e) => {
        e.preventDefault();
        if (signupInput.firstName.trim() === "" || signupInput.lastName.trim() === "" || signupInput.email.trim() === "" || signupInput.password.trim() === "" || signupInput.confirmPassword.trim() === "") {
            toast.error("Fill In the details properly")
        } else if (signupInput.password !== signupInput.confirmPassword) {
            setPasswordMatch(false);
            toast.error("Passwords Do Not Match");
        } else {
            setPasswordMatch(true);
            signUpHandler(e);
        }
    };


    return (
        <>
            <header className="App-header">
                <Header />
            </header>
            <div className="login-container" >
                <div className="login-card">
                    <h2>Sign up</h2>
                    <form onSubmit={signUpHandler}>
                        <div className="form_data" >
                            <label htmlFor="firstName">First name</label>
                            <input type="text" placeholder="Son Goku" name="firstName" value={signupInput.firstName} onChange={handleSignupInput} required />

                            <label htmlFor="lastName"  >last Name</label>
                            <input type="text" placeholder="Lastname" name="lastName" value={signupInput.lastName} onChange={handleSignupInput} required />


                            <label htmlFor="email" > Email</label>
                            <input type="email" placeholder="abc@figureFrenzy.com" name="email" value={signupInput.email} onChange={handleSignupInput} required />


                            <label htmlFor="password" >Password</label>

                            <input type={showPasswordAgain ? "text" : "password"} placeholder="Enter Password" name="password" value={signupInput.password} onChange={handleSignupInput} required />
                            <span

                                type="button"
                                className="show-hide-password-button_signup"
                                onClick={toggleShowPasswordAgain}
                            >
                                {showPasswordAgain ? <VscEyeClosed /> : <VscEye />}
                            </span>



                            <label htmlFor="password" >Confirm Password</label>
                            <input type="password" placeholder="Confirm Password" name="confirmPassword" value={signupInput.confirmPassword} onChange={handleSignupInput} required />


                            {/* {!passwordMatch && <p className="password-match-error">Passwords do not match</p>} */}

                            <button type="submit" onClick={handleCreateAccount}  >Create Account</button>

                            <p>Already have an account? <NavLink to="/login" >sign in</NavLink>  </p>

                        </div>


                    </form>
                </div>
            </div>
        </>
    )
}