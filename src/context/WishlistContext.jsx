import axios from "axios"
import { createContext, useState } from "react"

export const WishlistContext = createContext()



export const WishlistProvider = ({ children }) => {

    const [wishlistItems, setWishlistItems] = useState([])

    const fetchUserWishlist = async (product, userToken) => {
        try {
            const response = await axios.post(`/api/user/wishlist`, {
                product
            }, {
                headers: {
                    authorization: userToken
                }
            })
            console.log("this is the wishlist ", response.data.wishlist)
            setWishlistItems(response.data.wishlist)

        } catch (e) {
            console.log(e)
        }
    }


    return (
        <>
            <WishlistContext.Provider value={{ wishlistItems, fetchUserWishlist }} >
                {children}
            </WishlistContext.Provider>
        </>
    )
}