import { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../reducer/reducer";



import axios from "axios";


export const ProductContext = createContext();

const initialState = { filterPriceByRange: 4500, filterProductsByRating: 0, sortBy: "", heroVillainCategory: "", category: { hero: false, villain: false }, searchItem: "", cart: [], wishlist: [] }

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

    const filterPriceByRangeInput = homepageData?.filter((figure) => {
        console.log("state.filterPriceByRange", state.filterPriceByRange)
        return Math.floor(figure.price) <= state.filterPriceByRange
    })

    const sortByPrice = filterPriceByRangeInput?.sort((a, b) => {
        if (state.sortBy === "lowToHigh") {
            console.log(a.price - b.price);
            return a.price - b.price;
        } else if (state.sortBy === "highToLow") {
            console.log(b.price - a.price);
            return b.price - a.price;
        }

    });

    const filterBySelectedCategory = sortByPrice?.filter((figure) => {
        if (!state.category.hero && !state.category.villain) {
            return true

        }
        return (
            (state.category.hero && figure.hero) || (state.category.villain && figure.villain)
            // figure
        )

    })

    const filterProductsBySelectedRating = filterBySelectedCategory?.filter((figure) => {
        return figure.rating >= parseFloat(state.filterProductsByRating)
    })


    const searchedProducts = filterProductsBySelectedRating?.filter((figure) => {
        if (state.searchItem === "") {
            return true
        }

        console.log("searched name", state.searchItem.toLowerCase())
        return figure.name.toLowerCase().includes(state.searchItem.toLowerCase())
    })





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
        const filterHero = homepageData?.filter((figure) => figure.type === "hero")

        console.log(homepageData?.filter((figure) => figure.type === "hero"))

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
        state,
        dispatch,
        filterPriceByRangeInput,
        // sortByPrice,
        homepageData,
        filterBySelectedCategory,
        filterProductsBySelectedRating,
        searchedProducts,



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