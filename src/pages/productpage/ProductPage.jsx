
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { ProductCard } from './ProductCard';
import { FilterCard } from './FilterCard';



export const ProductPage = () => {
    const { filterPriceByRangeInput, addToCart, addToWishlist } = useContext(ProductContext)
    // console.log("productArr", typeof productsArr)
    return (
        <>
            {/* <h2>Showing All Products</h2> */}
            <div className="product_container" >
                <div className="product_main_content">
                    <FilterCard />
                </div>


                <div className="product_aside_content" >
                    {filterPriceByRangeInput?.map((data) => {

                        return (
                            <ProductCard key={data._id} items={data} handleCart={addToCart} handleWishlist={addToWishlist} />
                        )
                    })}
                </div>

            </div>
        </>
    )
}