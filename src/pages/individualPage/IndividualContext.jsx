import { createContext, useState } from "react";

export const IndividualContext = createContext();

export const IndividualProvider = ({ children }) => {

    const [selecteditem, setSelectedItem] = useState({});
    const [indiLoader, setIndiLoader] = useState(true)

    const getProductId = async (productId) => {
        try {
            setIndiLoader(true)
            const response = await fetch(`/api/products/${productId}`);
            const { product } = await response.json();
            console.log("this is product ki id", product)
            setSelectedItem(product);
            setIndiLoader(false)
        } catch (e) {
            console.log(e);
            setIndiLoader(false)
        }
    };

    return (
        <>
            <IndividualContext.Provider value={{ getProductId, selecteditem, indiLoader }} >
                {children}
            </IndividualContext.Provider>
        </>
    )
}