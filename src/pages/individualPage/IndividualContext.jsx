import { createContext, useState } from "react";

export const IndividualContext = createContext();

export const IndividualProvider = ({ children }) => {

    const [selecteditem, setSelectedItem] = useState({});

    const getProductId = async (productId) => {
        try {
            const response = await fetch(`/api/products/${productId}`);
            const { product } = await response.json();
            setSelectedItem(product);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <IndividualContext.Provider value={{ getProductId, selecteditem }} >
                {children}
            </IndividualContext.Provider>
        </>
    )
}