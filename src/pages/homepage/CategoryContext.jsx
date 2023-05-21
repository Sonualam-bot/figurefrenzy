import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const categoryContext = createContext();

export const CategoryProvider = ({ children }) => {

    const [category, setCategory] = useState([])

    const categoryToShow = async () => {
        try {
            const { data, status } = await axios.get(`/api/categories`)
            if (status === 200) {
                console.log("this is response", data.categories)
                setCategory(data.categories)

            }

        } catch (e) {
            console.log(e)
        }

    }


    useEffect(() => {
        categoryToShow()
    }, [])

    return (
        <>
            <categoryContext.Provider value={{ category }} >
                {children}
            </categoryContext.Provider>
        </>
    )
}