
import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"

import { AiOutlineStar } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";

import { useNavigate } from "react-router";

import { ProductCard } from "./productpage/ProductCard";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { Header } from "../header/Header";


export const Cart = () => {
    // const { cart, addToWishlist } = useContext(ProductContext)
    const { cartItems, totalPrice } = useContext(CartContext)

    const { isLoggedIn } = useContext(AuthContext)

    const navigate = useNavigate()


    const itemName = cartItems?.map(({ name, qty, price }) => {
        return (
            < div className="price_details1"  >
                <p> {name} ({qty}) </p>
                <p> &#x20B9; {Math.round(price * qty)} </p>
            </div >


        )
    })


    return (
        <>
            <header className="App-header">
                <Header page="product" />
            </header>
            <h1 className="cart_page_name" > My Cart ({cartItems.length}) </h1>


            <div >
                {cartItems?.length === 0 ? <p className="cart_page_name" >Cart is Empty</p> :

                    <div className="cart_price_details" >


                        <div className="cart_content" >

                            {cartItems?.map((data) => {
                                {/* const { _id, name, details, price, originalPrice, category, instock, discount, type, rating, image_url } = data; */ }
                                return (
                                    <ProductCard items={data} page="cart" />
                                )
                            })}
                        </div>
                        <div className="price_container" >

                            <h1 style={{ marginTop: "0px", textAlign: "center" }} >Cart Price Details</h1>
                            <hr />

                            <div >
                                <p> {itemName}  </p>

                            </div>
                            <hr />

                            <div className="price_details">
                                <p>Total Amount</p>
                                <h3>&#x20B9; {Math.round(totalPrice)} </h3>
                            </div>
                            <hr />


                            <button className="remove_button" onClick={() => navigate("/checkout")}> Checkout </button>




                        </div>
                    </div>
                }
            </div>
        </>
    )
}