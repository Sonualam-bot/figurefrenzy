import { NavLink } from "react-router-dom"

import { useContext } from "react"
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { AuthContext } from "../context/AuthContext";
// import { Login } from "../pages/login/Login";

import { HiOutlineUserCircle } from "react-icons/hi"

export const Header = () => {
    const { state, dispatch } = useContext(ProductContext)
    const { cartItems } = useContext(CartContext)
    const { wishlistItems } = useContext(WishlistContext)
    const { isLoggedIn, loginHandler, logoutHandler } = useContext(AuthContext)

    const userToken = localStorage.getItem("token");

    return (
        <>
            <div className="container">
                <div className="row_header">
                    <h1> <span className="figure" >Figure</span><span className="frenzy" >Frenzy</span> </h1>
                </div>
                {/* <div className="hero_section_content" > */}

                {/* <div className="search_button" > */}
                <input className="hero_section_content_input" type="text" value={state.searchItem} placeholder="Search for an action figure" onChange={(e) => dispatch({ type: "SEARCH_ITEM", payload: e.target.value })} />
                {/* <button className="hero_section_content_button" >Search</button> */}
                {/* </div> */}

                {/* </div> */}
                <div className="row_aside">
                    <NavLink to="/" className="nav_links" >Home</NavLink>
                    <NavLink to="/product" className="nav_links" >Shop</NavLink>
                    <NavLink to="/cart" className="nav_links" >Cart ({userToken ? cartItems.length : 0})   </NavLink>
                    <NavLink to="/wishlist" className="nav_links" >Wishlist ({userToken ? wishlistItems.length : 0}) </NavLink>
                    {/* <NavLink className="nav_links nav_button" to="/login"> Log In </NavLink> */}
                    {isLoggedIn ? <NavLink className="nav_links nav_button" to="/profile" > <HiOutlineUserCircle /> </NavLink> : <NavLink className="nav_links nav_button" to="/login" >Log In</NavLink>}

                    <NavLink className="nav_links nav_button" to="/mock-api">Mock-Mock</NavLink>
                </div>

            </div>
        </>
    )
}