
import { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { ProductCard } from './ProductCard';
import { FilterCard } from './FilterCard';
import { categoryContext } from "../homepage/CategoryContext";

import { Spinner } from "../../loaders/Spinner";
import { Header } from "../../header/Header";

import { VscFilter } from 'react-icons/vsc'

export const ProductPage = () => {
    const { state, homepageData, searchedProducts, addToCart, addToWishlist } = useContext(ProductContext)
    const { filteredProducts, isLoading } = useContext(categoryContext)


    const [isFilterOpen, SetIsFilterOpen] = useState(false);
    const toggleFilter = () => {
        SetIsFilterOpen(!isFilterOpen);
    };

    return (
        <>
            <header className="App-header">
                <Header page="product" />
            </header>
            {/* <h2>Showing All Products</h2> */}
            <div className="filter_icon" >
                <VscFilter onClick={toggleFilter} />
            </div>


            <div className="product_container">
                <div className={`product_main_content ${isFilterOpen ? "show_Filters" : ""}`}>
                    <FilterCard />
                </div>


                <div className="product_aside_content" >
                    {!isLoading ?

                        searchedProducts.map((data) => (
                            <ProductCard key={data._id} items={data} handleCart={addToCart} handleWishlist={addToWishlist} />
                        ))

                        : (
                            <div className="spinner" >
                                <Spinner />
                            </div>

                        )}



                </div>

            </div>

        </>
    )
}