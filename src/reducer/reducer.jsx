
import { categories } from "../backend/db/categories";
import { products } from "../backend/db/products";

export const initialState = { categoriesDb: categories, productsDb: products, cart: [], wishlist: [], individualData: products }


export const reducer = (state, action) => {
    const { type, payload } = action;


    switch (type) {
        case "SHOW_ALL_PRODUCTS":
            console.log("all products", payload)
            return { ...state, productsDb: initialState.productsDb }
        case "ADD_TO_CART":
            console.log("ADD_TO_CART", payload)
            console.log("cart", { ...state, cart: [...state.cart, payload.addedItems] })
            return { ...state, cart: [...state.cart, payload.addedItems] }
        case "ADD_TO_WISHLIST":
            console.log("ADD_TO_CART", payload)
            return { ...state, wishlist: [...state.wishlist, payload.addedToWishlist] }
        case "FILTER_HERO":
            console.log("FILTER_HERO", payload)
            return { ...state, productsDb: payload.heroType }

        default:
            throw new Error(`Unknown action type: ${action.type} `)
    }


}