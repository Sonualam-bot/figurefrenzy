import { NavLink } from "react-router-dom"

import { useContext } from "react"
import { ProductContext } from "../context/ProductContext";



export const Header = () => {
    const { cart, wishlist } = useContext(ProductContext)
    return (
        <>
            <div className="container">
                <div className="row_header">
                    <h1> <span className="figure" >Figure</span><span className="frenzy" >Frenzy</span> </h1>
                </div>
                <div className="row_aside">
                    <NavLink to="/" className="nav_links" >Home</NavLink>
                    <NavLink to="/product" className="nav_links" >Shop</NavLink>
                    <NavLink to="/cart" className="nav_links" >Cart ({cart.length})   </NavLink>
                    <NavLink to="/wishlist" className="nav_links" >Wishlist ({wishlist.length}) </NavLink>
                    <button className="nav_links nav_button "  >Login</button>
                </div>

            </div>
        </>
    )
}