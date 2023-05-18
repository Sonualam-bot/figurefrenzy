import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const addToCart = (figure) => {
        const addedItems = state.cart.find(({ _id }) => _id === figure._id)

        console.log("addedItems", addedItems)

        if (!addedItems) {
            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    addedItems: figure
                }
            })
        }
    }

    const addToWishlist = (figure) => {
        const addedToWishlist = state.wishlist.find(({ _id }) => _id === figure._id)

        if (!addedToWishlist) {
            dispatch({
                type: "ADD_TO_WISHLIST",
                payload: {
                    addedToWishlist: figure
                }
            })
        }
    }

    const filterHeroFigure = (e) => {
        const filterHero = state.productsDb?.filter((figure) => figure.type === "hero")

        const showAllChar = state.productsDb?.map((figure) => figure)

        if (e.target.checked) {
            dispatch({
                type: "FILTER_HERO",
                payload: {
                    heroType: filterHero
                }
            })
        } else {
            dispatch({
                type: "SHOW_ALL_PRODUCTS",
                // here payload not needed as we are displaying the original array in the reducer
                // payload: {
                //     showAllData: showAllChar
                // }
            })
        }
    }


    const value = {
        categories: state.categoriesDb,
        productsArr: state.productsDb,
        cart: state.cart,
        wishlist: state.wishlist,
        individualData: state.individualData,
        addToCart,
        addToWishlist,
        filterHeroFigure
    }
    return (
        <>
            <ProductContext.Provider value={value} >
                {children}
            </ProductContext.Provider>
        </>
    )
}