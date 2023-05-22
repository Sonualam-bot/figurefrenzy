
export const reducer = (state, action) => {

    const { type, payload } = action;


    switch (type) {
        case "SHOW_ALL_PRODUCTS":
            console.log("all products", payload)
        // return { ...state, productsDb: }
        case "ADD_TO_CART":
            console.log("ADD_TO_CART", payload)
            console.log("cart", { ...state, cart: [...state.cart, payload.addedItems] })
            return { ...state, cart: [...state.cart, payload.addedItems] }
        case "ADD_TO_WISHLIST":
            console.log("ADD_TO_CART", payload)
            return { ...state, wishlist: [...state.wishlist, payload.addedToWishlist] }
        case "FILTER_HERO":
            console.log("FILTER_HERO", payload)
            return { ...state, filteredHero: payload.heroType }

        case "FILTER_PRICE_BY_RANGE":
            console.log("from paylaod", payload)
            return { ...state, filterPriceByRange: payload }
        case "SORT_LOW_TO_HIGH":
            return { ...state, sortBy: payload }
        case "HERO_TYPE":
            console.log("HERO_TYPE", { ...state.category, hero: !state.category.hero })
            return { ...state, category: { ...state.category, hero: !state.category.hero } }
        case "VILLAIN_TYPE":
            return { ...state, category: { ...state.category, villain: !state.category.villain } }
        case "FILTER_BY_RATING":
            return { ...state, filterProductsByRating: payload }
        case "CLEAR":
            return { ...state, filterPriceByRange: 4500, filterProductsByRating: 0, sortBy: "", heroVillainCategory: "", category: { hero: false, villain: false }, cart: [], wishlist: [] }
        case "SEARCH_ITEM":
            // console.log("SEARCH_ITEM", payload)
            return { ...state, searchItem: payload }

        default:
            throw new Error(`Unknown action type: ${action.type} `)
    }


}