
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";



export const ProductCard = ({ items, handleCart, handleWishlist, page }) => {
    // console.log(data)
    const { _id, name, details, price, originalPrice, category, instock, discount, type, rating, image_url } = items;

    return (
        <>
            <div className='product_aside_content_figures' key={_id} >
                <NavLink to={`/individual/${_id}`} >
                    <img src={image_url} alt='figure' />
                </NavLink>

                <div className='product_category_name' >
                    <div className="product_rating_category" >
                        <p>{category}</p>
                        <p className='product_rating_figures'><p> <AiOutlineStar className="product_rating_icon" /></p>  <p>{rating}</p>  </p>
                    </div>

                    <h4> {name} </h4>
                </div>

                {/* <p>{details} </p> */}
                <div className='productPrice' >
                    <p>&#x20b9; {price}<sub>  <del className="del" >M.R.P {originalPrice}  </del> </sub> </p>
                    <p>({discount}% off)</p>
                </div>

                {page !== "wishlist" && <button onClick={() => handleWishlist(items)} className='wishlist_button' ><AiOutlineHeart className='wish_icon' /></button>}
                {page !== "cart" && <button className='add_button' onClick={() => handleCart(items)} > <span>Add to Cart</span> </button>}
            </div>
        </>
    )
}

