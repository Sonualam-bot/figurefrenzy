import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Signup = () => {
    const { signupInput, setSignupInput, signUpHandler } = useContext(AuthContext);


    const handleSignupInput = (e) => {
        const { name, value } = e.target;
        setSignupInput({ ...signupInput, [name]: value })
        console.log({ ...signupInput, [name]: value })
    }



    return (
        <>
            <div className="login-container" >
                <div className="login-card">
                    <h2>Sign up</h2>
                    <form onSubmit={signUpHandler}>
                        <div className="form-data" >
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Son Goku" name="fullName" value={signupInput.fullName} onChange={handleSignupInput} />


                            <label htmlFor="email" > Email</label>
                            <input type="email" placeholder="abc@figureFrenzy.com" name="email" value={signupInput.email} onChange={handleSignupInput} />


                            <label htmlFor="password" >Password</label>
                            <input type="password" placeholder="Enter Password" name="password" value={signupInput.password} onChange={handleSignupInput} />

                            <label htmlFor="Confirm-password"  >Confirm Password</label>
                            <input type="password" placeholder="Confirm Password" name="confirmPassword" value={signupInput.confirmPassword} onChange={handleSignupInput} />


                            <button type="submit">Create Account</button>

                            <p>Already have an account? <NavLink to="/login" >sign in</NavLink>  </p>
                        </div>


                    </form>
                </div>
            </div>
        </>
    )
}