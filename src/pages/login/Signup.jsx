import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Header } from "../../header/Header";


export const Signup = () => {
    const { signupInput, setSignupInput, signUpHandler } = useContext(AuthContext);
    const navigate = useNavigate()


    const handleSignupInput = (e) => {
        const { name, value } = e.target;
        setSignupInput({ ...signupInput, [name]: value })
        console.log({ ...signupInput, [name]: value })
    }



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
                            <label htmlFor="firstName">Name</label>
                            <input type="text" placeholder="Son Goku" name="firstName" value={signupInput.firstName} onChange={handleSignupInput} required />

                            <label htmlFor="lastName"  >lastName</label>
                            <input type="text" placeholder="lastName" name="lastName" value={signupInput.lastName} onChange={handleSignupInput} required />


                            <label htmlFor="email" > Email</label>
                            <input type="email" placeholder="abc@figureFrenzy.com" name="email" value={signupInput.email} onChange={handleSignupInput} required />


                            <label htmlFor="password" >Password</label>
                            <input type="password" placeholder="Enter Password" name="password" value={signupInput.password} onChange={handleSignupInput} required />




                            <button type="submit"   >Create Account</button>

                            <p>Already have an account? <NavLink to="/login" >sign in</NavLink>  </p>

                        </div>


                    </form>
                </div>
            </div>
        </>
    )
}