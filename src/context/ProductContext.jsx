import { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../reducer/reducer";




import axios from "axios";



export const ProductContext = createContext();

const initialState = { filterPriceByRange: 4500, filterProductsByRating: 0, sortBy: "", heroVillainCategory: "", category: { all: true, hero: false, villain: false, antiHero: false }, searchItem: "", filteredProducts: null, cart: [], wishlist: [] }

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
        if (!state.category.hero && !state.category.villain && !state.category.antiHero) {
            return true

        }
        return (
            (state.category.hero && figure.hero) || (state.category.villain && figure.villain) || (state.category.antiHero && figure.antiHero)
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

        // console.log("searched name", state.searchItem.toLowerCase())
        return figure.name.toLowerCase().startsWith(state.searchItem.toLowerCase())
    })

    // const filterBySelectedCategory =   (selectedCategory) => {
    //     if(selectedCategory.type ===  )
    // }













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