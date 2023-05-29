import { createContext, useState } from "react"
import axios from "axios";
import { toast } from "react-toastify"

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


    const deleteUserCartItems = async (productId, userToken) => {
        console.log("this is product id", productId)
        try {
            const response = await axios.delete(`/api/user/cart/${productId}`, {
                headers: {
                    authorization: userToken
                }
            })

            console.log("deleting from cart", response)
            setCartItems(response.data.cart)


        } catch (e) {
            console.log(e)
        }

    }

    const incrementUserCartQuantity = async (productId, type, userToken) => {
        console.log("this is product id for incremnet", productId, userToken)
        try {
            const response = await axios.post(`/api/user/cart/${productId}`, {
                action: {
                    type: type
                }
            }, {
                headers: {
                    authorization: userToken
                }
            })
            console.log("this is the increment btn", response.data.cart)
            setCartItems(response.data.cart)

        } catch (e) {
            console.log(e)
        }
    }


    const totalPrice = cartItems?.reduce((acc, curr) => (acc + curr.price) * curr.qty, 0)

    const totalDiscount = cartItems?.reduce((acc, curr) => (acc + curr.discount) * curr.qty, 0)

    const deliveryCharge = 99

    const finalPrice = totalPrice - totalDiscount + deliveryCharge


    // useEffect(() => {
    //     fetchUserCart()
    // }, [])

    return (
        <>
            <CartContext.Provider value={{ fetchUserCart, cartItems, deleteUserCartItems, incrementUserCartQuantity, totalPrice, totalDiscount, deliveryCharge, finalPrice }}  >
                {children}
            </CartContext.Provider>

        </>
    )
}