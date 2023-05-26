
import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"

import { AiOutlineStar } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";

import { ProductCard } from "./productpage/ProductCard";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";


export const Cart = () => {
    // const { cart, addToWishlist } = useContext(ProductContext)
    const { cartItems } = useContext(CartContext)

    const { isLoggedIn } = useContext(AuthContext)

    const totalPrice = cartItems?.reduce((acc, curr) => (acc + curr.price) * curr.qty, 0)

    const itemOriginalPrice = cartItems?.reduce((acc, curr) => (acc + curr.originalPrice) * curr.qty, 0);

    const deliveryCharge = 99

    const totalAmount = totalPrice + deliveryCharge

    const savedAmount = itemOriginalPrice - totalPrice

    // const itemPrice = cartItems[0].price
    // console.log("items price", itemPrice)

    // console.log(' Price', cartItems)


    return (
        <>
            <h1 style={{ margin: "0 auto" }} >My Cart</h1>


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
                        <h1 style={{ marginTop: "0px", textAlign: "center" }} >Product Details</h1>
                        <hr />

                        <div className="price_details">
                            <h3>Price</h3>
                            <h3> {totalPrice} </h3>
                        </div>
                        <hr />
                        <div className="price_details">
                            <h3>Delivery Charge</h3>
                            <h3> {deliveryCharge}  </h3>
                        </div>
                        <hr />
                        <div className="price_details">
                            <h3>Total Amount</h3>
                            <h3> {totalAmount} </h3>
                        </div>
                        <hr />

                        <p>You saved {savedAmount} on this order</p>
                        <button className="remove_button" >Place order</button>
                        {/* </div> */}



                    </div>
                </div>
            }
        </>
    )
}