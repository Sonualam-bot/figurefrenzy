import { createContext, useEffect, useState } from "react"
import axios from "axios";

export const CartContext = createContext();


export const CartContextProvider = ({ children }) => {


    const [cartItems, setCartItems] = useState([])

    const fetchUserCart = async (product, userToken) => {
        try {
            const response = await axios.post(`/api/user/cart`, {
                product
            }, {
                headers: {
                    authorization: userToken
                }
            })

            console.log('fetching useer cred', response.data.cart)
            setCartItems(response.data.cart)

        } catch (e) {
            console.log(e)
        }
    }

    // useEffect(() => {
    //     fetchUserCart()
    // }, [])

    return (
        <>
            <CartContext.Provider value={{ fetchUserCart, cartItems }}  >
                {children}
            </CartContext.Provider>

        </>
    )
}