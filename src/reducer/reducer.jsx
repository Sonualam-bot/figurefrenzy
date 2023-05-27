
export const reducer = (state, action) => {

    const { type, payload } = action;


    switch (type) {
        case "SHOW_ALL_PRODUCTS":
            // console.log("all products", payload)
            // if (action.payload !== "SHOW_ALL_PRODUCTS") {
            //     state.category.SHOW_ALL_PRODUCTS = Object.values(state.category).every(
            //         (value) => value === false
            //     );
            // }
            return { ...state, all: state.category.all }




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
        case "ANTI_HERO_TYPE":
            return { ...state, category: { ...state.category, antiHero: !state.category.antiHero } }
        case "FILTER_BY_RATING":
            return { ...state, filterProductsByRating: payload }
        case "CLEAR":
            return { ...state, filterPriceByRange: 4500, filterProductsByRating: 0, sortBy: "", heroVillainCategory: "", category: { all: true, hero: false, villain: false }, cart: [], wishlist: [] }
        case "SEARCH_ITEM":
            // console.log("SEARCH_ITEM", payload)
            return { ...state, searchItem: payload }

        default:
            throw new Error(`Unknown action type: ${action.type} `)
    }


}