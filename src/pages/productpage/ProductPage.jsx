
import { useContext, useEffect } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { ProductCard } from './ProductCard';
import { FilterCard } from './FilterCard';
import { categoryContext } from "../homepage/CategoryContext";

import { Spinner } from "../../loaders/Spinner";
import { Header } from "../../header/Header";



export const ProductPage = () => {
    const { state, homepageData, searchedProducts, addToCart, addToWishlist } = useContext(ProductContext)
    const { filteredProducts, isLoading } = useContext(categoryContext)
    // console.log("productArr", typeof productsArr)



    // if (isLoading) {
    //     return <p style={{ margin: '0 auto', fontWeight: "700", fontSize: "5rem" }} >Loading.....</p>
    // }

    // if (filteredProducts.length === 0) {
    //     return <p>No products to display</p>
    // }



    return (
        <>
            <header className="App-header">
                <Header page="product" />
            </header>
            {/* <h2>Showing All Products</h2> */}
            <div className="product_container" >
                <div className="product_main_content">
                    <FilterCard />
                </div>


                <div className="product_aside_content" >
                    {!isLoading ?

                        searchedProducts.map((data) => (
                            <ProductCard key={data._id} items={data} handleCart={addToCart} handleWishlist={addToWishlist} />
                        ))

                        : (
                            <Spinner />
                        )}



                </div>

            </div>
        </>
    )
}