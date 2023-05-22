import { NavLink } from "react-router-dom"

import { useContext } from "react"
import { ProductContext } from "../context/ProductContext";
// import { Login } from "../pages/login/Login";



export const Header = () => {
    const { state, dispatch, cart, wishlist } = useContext(ProductContext)
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
                    <NavLink to="/cart" className="nav_links" >Cart ({cart.length})   </NavLink>
                    <NavLink to="/wishlist" className="nav_links" >Wishlist ({wishlist.length}) </NavLink>
                    <NavLink className="nav_links nav_button" to="/login" >Login</NavLink>
                </div>

            </div>
        </>
    )
}