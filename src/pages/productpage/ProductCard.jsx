
import { AiOutlineStar } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
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
                    <p>{category}</p>
                    <h4> {name} </h4>
                </div>

                {/* <p>{details} </p> */}
                <div className='productPrice' >
                    <p>&#x20b9; {price}<sub>  <del>M.R.P {originalPrice}  </del> </sub> </p>
                    <p>({discount}% off)</p>
                </div>
                <p className='product_rating_figures' > <AiOutlineStar /> {rating} </p>
                {page !== "wishlist" && <button onClick={() => handleWishlist(items)} className='wishlist_button' ><IoIosHeartEmpty className='wish_icon' /></button>}
                {page !== "cart" && <button className='add_button' onClick={() => handleCart(items)} > <span>Add to Cart</span> </button>}
            </div>
        </>
    )
}

