import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { ProductContext } from "../../context/ProductContext";

export const categoryContext = createContext();

export const CategoryProvider = ({ children }) => {

    const { searchedProducts } = useContext(ProductContext)

    const [category, setCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const categoryToShow = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.get(`/api/categories`)

            // console.log("this is response", data.categories)
            setCategory(data.categories)
            setIsLoading(false)



        } catch (e) {
            console.log(e)
            setIsLoading(false)
        }

    }

    const selectedCategoryId = async (categoryId) => {
        console.log("thisis category id", categoryId)
        try {
            setIsLoading(true)
            const { data } = await axios.get(`/api/categories/${categoryId}`);

            // const { category } = await response.json();
            // console.log(category)
            setSelectedCategory(data.category)
            setIsLoading(false)

        } catch (e) {
            console.log(e);
            setIsLoading(false)
        }
    }


    const filteredProducts = searchedProducts?.filter((product) => {

        if (!selectedCategory || Object.keys(selectedCategory).length === 0) {
            return product
        }
        return product.type === selectedCategory.type;
    });
    console.log("filteredProducts", filteredProducts)



    useEffect(() => {
        categoryToShow();


    }, [])

    return (
        <>
            <categoryContext.Provider value={{ category, selectedCategory, selectedCategoryId, filteredProducts, isLoading }} >
                {children}
            </categoryContext.Provider>
        </>
    )
}