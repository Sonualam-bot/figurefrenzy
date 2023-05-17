
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { ProductCard } from './ProductCard';
import { FilterCard } from './FilterCard';



export const ProductPage = () => {
    const { productsArr, addToCart, addToWishlist } = useContext(ProductContext)
    return (
        <>
            <div className="product_container" >
                <div className="product_main_content">
                    <FilterCard />
                </div>

                <div className="product_aside_content" >
                    {productsArr.map((data) => {

                        return (
                            <ProductCard items={data} handleCart={addToCart} handleWishlist={addToWishlist} />
                        )
                    })}
                </div>

            </div>
        </>
    )
}