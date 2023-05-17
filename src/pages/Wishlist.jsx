
import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"


import { ProductCard } from "./productpage/ProductCard";

export const Wishlist = () => {
    const { wishlist, addToCart } = useContext(ProductContext)
    return (
        <>
            <div className="product_aside_content" >
                {wishlist.map((data) => {
                    return (
                        <ProductCard items={data} handleCart={addToCart} page="wishlist" />
                    )
                })}
            </div>
        </>
    )
}