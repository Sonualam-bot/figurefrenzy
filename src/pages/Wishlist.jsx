
import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import wishlist from "../assets/wishlist.png"

import { ProductCard } from "./productpage/ProductCard";
import { WishlistContext } from "../context/WishlistContext";
import { Header } from "../header/Header";

export const Wishlist = () => {
    // const { wishlist, addToCart } = useContext(ProductContext)
    const { wishlistItems } = useContext(WishlistContext)
    return (
        <>
            <header >
                <Header />
            </header>
            <div className="product_aside_content" >
                {wishlistItems.length === 0 ? <div className="wishlist_img" > <img src={wishlist} alt="wishlist" />  </div> : wishlistItems?.map((data) => {
                    return (
                        <ProductCard items={data} page="wishlist" />
                    )
                })}
            </div>
        </>
    )
}