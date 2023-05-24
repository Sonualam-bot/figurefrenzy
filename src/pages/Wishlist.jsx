
import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"


import { ProductCard } from "./productpage/ProductCard";
import { WishlistContext } from "../context/WishlistContext";

export const Wishlist = () => {
    // const { wishlist, addToCart } = useContext(ProductContext)
    const { wishlistItems } = useContext(WishlistContext)
    return (
        <>
            <div className="product_aside_content" >
                {wishlistItems.length === 0 ? <h2>Your wishlist is empty.</h2> : wishlistItems?.map((data) => {
                    return (
                        <ProductCard items={data} page="wishlist" />
                    )
                })}
            </div>
        </>
    )
}