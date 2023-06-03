
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



    const itemOriginalPrice = cartItems?.reduce((acc, curr) => (acc + curr.originalPrice) * curr.qty, 0);





    // const savedAmount = itemOriginalPrice - totalPrice



    const itemName = cartItems?.map(({ name, qty, price }) => {
        return (
            < div style={{ display: "flex", justifyContent: "space-between", gap: "15rem" }} >
                <p> {name} ({qty}) </p>
                <p> &#x20B9; {price * qty} </p>
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
                {cartItems?.length === 0 ? "Cart is Empty" :

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
                            {/* <div className="price_container_inner"> */}
                            <h1 style={{ marginTop: "0px", textAlign: "center" }} >Cart Price Details</h1>
                            <hr />

                            <div className="price_details">
                                <p> {itemName}  </p>
                                {/* <h3>&#x20B9; {Math.round(totalPrice)} </h3> */}
                            </div>
                            <hr />
                            {/* <div className="price_details">
                            <p>Delivery Charge</p>
                            <h3>&#x20B9; {deliveryCharge}  </h3>
                        </div>
                        <hr /> */}
                            <div className="price_details">
                                <p>Total Amount</p>
                                <h3>&#x20B9; {Math.round(totalPrice)} </h3>
                            </div>
                            <hr />

                            {/* <p>You saved &#x20B9; {Math.round(savedAmount)} on this order</p> */}
                            <button className="remove_button" onClick={() => navigate("/checkout")}> Checkout Page </button>
                            {/* </div> */}



                        </div>
                    </div>
                }
            </div>
        </>
    )
}