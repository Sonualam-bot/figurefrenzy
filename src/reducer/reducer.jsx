
import { categories } from "../backend/db/categories";
import { products } from "../backend/db/products";

export const initialState = { categoriesDb: categories, productsDb: products, cart: [], wishlist: [] }


export const reducer = (state, action) => {
    const { type, payload } = action;


    switch (type) {
        case "ADD_TO_CART":
            console.log("ADD_TO_CART", payload)
            console.log("cart", { ...state, cart: [...state.cart, payload.addedItems] })
            return { ...state, cart: [...state.cart, payload.addedItems] }
        case "ADD_TO_WISHLIST":
            console.log("ADD_TO_CART", payload)
            return { ...state, wishlist: [...state.wishlist, payload.addedToWishlist] }

        default:
            throw new Error(`Unknown action type: ${action.type} `)
    }


}