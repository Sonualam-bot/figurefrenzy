import { NavLink } from "react-router-dom"

import { useContext, useState } from "react"
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.png"

import { useNavigate } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi"

import { BiUserCircle } from "react-icons/bi";

import { AiOutlineShopping, AiOutlineHome, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineLogin } from "react-icons/ai"

export const Header = ({ page }) => {
    const { state, dispatch } = useContext(ProductContext)
    const { cartItems } = useContext(CartContext)
    const { wishlistItems } = useContext(WishlistContext)
    const { isLoggedIn, loginHandler, logoutHandler } = useContext(AuthContext)

    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const userToken = localStorage.getItem("token");

    const navigate = useNavigate()

    return (
        <>
            <div className="nav_section" >
                <div className="nav_container">
                    <div className="nav_header">
                        <img src={logo} alt="logo" />
                        <h1> <span className="figure_F" to="/" >F</span>
                            {/* <span className="frenzy" >Frenzy</span>  */}
                        </h1>
                        <div className="half_figure_name" >
                            <h1><span className="figure_igure" to="/" >igure</span>
                                {/* <span className="frenzy" >Frenzy</span>  */}

                            </h1>
                            <h1> <span className="figure_renzy" to="/" >renzy</span>
                                {/* <span className="frenzy" >Frenzy</span>  */}
                            </h1>
                        </div>

                    </div>
                    {/* <div className="hero_section_content" > */}

                    {/* <div className="search_button" > */}
                    {page === "product" && (<input className="hero_section_content_input" type="text" value={state.searchItem} placeholder="Search for an action figure" onChange={(e) => dispatch({ type: "SEARCH_ITEM", payload: e.target.value })} />)}


                    <div className="hamburger"  > <GiHamburgerMenu onClick={toggleMenu} /> </div>


                    <div className={`nav_aside ${isMenuOpen ? "show" : ""}`}    >
                        <NavLink to="/" className="nav_links" ><AiOutlineHome /></NavLink>
                        <NavLink to="/product" className="nav_links" >  <AiOutlineShopping />  </NavLink>
                        <NavLink to="/cart" className="nav_links nav_quantity " >
                            <p className="cart_quantity">
                                <AiOutlineShoppingCart />
                                <div className="cart_length">{userToken ? cartItems.length : 0} </div>
                            </p>

                        </NavLink>
                        <NavLink to="/wishlist" className="nav_links nav_quantity " >
                            <p className="wish_quantity" >
                                <AiOutlineHeart className="wishIcon" />

                                <div className="wishlist_length" >{userToken ? wishlistItems.length : 0} </div>
                            </p>

                        </NavLink>

                        {isLoggedIn ?
                            <NavLink className="nav_links nav_button" to="/profile/details" > <BiUserCircle /> </NavLink> :
                            <NavLink className="nav_links nav_button" to="/login" > <AiOutlineLogin /> </NavLink>}
                    </div>

                </div>
            </div>
        </>
    )
}