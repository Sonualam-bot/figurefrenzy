
import { useContext, useEffect } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { ProductCard } from './ProductCard';
import { FilterCard } from './FilterCard';
import { categoryContext } from "../homepage/CategoryContext";



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
            {/* <h2>Showing All Products</h2> */}
            <div className="product_container" >
                <div className="product_main_content">
                    <FilterCard />
                </div>


                <div className="product_aside_content" >
                    {!isLoading ? (
                        filteredProducts === null ? (
                            searchedProducts.map((data) => (
                                <ProductCard key={data._id} items={data} handleCart={addToCart} handleWishlist={addToWishlist} />
                            ))
                        ) : filteredProducts.length === 0 ? (
                            <p>No products to display</p>
                        ) : (
                            filteredProducts.map((data) => (
                                <ProductCard key={data._id} items={data} handleCart={addToCart} handleWishlist={addToWishlist} />
                            ))
                        )
                    ) : (
                        <p style={{ margin: '0 auto', fontWeight: '700', fontSize: '5rem' }}>Loading.....</p>
                    )}
                </div>

            </div>
        </>
    )
}