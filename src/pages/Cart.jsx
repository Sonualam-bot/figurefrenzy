
import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"

import { AiOutlineStar } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";

import { ProductCard } from "./productpage/ProductCard";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
    const { cart, addToWishlist } = useContext(ProductContext)
    const { cartItems } = useContext(CartContext)
    return (
        <>
            <div className="product_aside_content" >
                {cartItems?.map((data) => {
                    {/* const { _id, name, details, price, originalPrice, category, instock, discount, type, rating, image_url } = data; */ }
                    return (
                        <ProductCard items={data} handleWishlist={addToWishlist} page="cart" />
                    )
                })}
            </div>
        </>
    )
}