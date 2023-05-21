import { createContext, useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "../reducer/reducer";

import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [homepageData, setHomepageData] = useState([]);
    // const [selectedItemId, setSelectedItemId] = useState('')


    const showHomepageData = async () => {
        try {
            const response = await axios.get(`/api/products`)
            // const data = await response.json()
            console.log("data and status", response)
            if (response.status === 200) {
                // console.log(data.products.products)
                setHomepageData(response.data.products)
            }
        } catch (e) {
            console.log(e)
        }
    }

    // const selectedProductId = async () => {
    //     try {
    //         const response = await fetch(`/api/products/:productId`)
    //         const data = await response.json()
    //         console.log("productId", data)
    //         setSelectedItemId(data.productId)

    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // async function getCharacters() {
    //     const response = await axios.get("/api/products/:productId")
    //     console.log("trying", response.data)
    // }

    // getCharacters()



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

        // const showAllChar = state.productsDb?.map((figure) => figure)

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
        productsArr: homepageData,
        cart: state.cart,
        wishlist: state.wishlist,
        individualData: state.individualData,
        addToCart,
        addToWishlist,
        filterHeroFigure,
        // selectedItemId,


    }


    useEffect(() => {
        showHomepageData();

    }, [])

    return (
        <>
            <ProductContext.Provider value={value} >
                {children}
            </ProductContext.Provider>
        </>
    )
}