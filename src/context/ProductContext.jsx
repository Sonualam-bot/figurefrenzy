import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);



    const value = {
        categories: state.categoriesDb,
        productsArr: state.productsDb
    }
    return (
        <>
            <ProductContext.Provider value={value} >
                {children}
            </ProductContext.Provider>
        </>
    )
}