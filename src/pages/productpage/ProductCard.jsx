import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import axios from "axios";
import { useContext } from "react";
import { IndividualContext } from "../individualPage/IndividualContext";
import { CartContext } from "../../context/CartContext";

export const ProductCard = ({ items, handleCart, handleWishlist, page }) => {
    const { getProductId } = useContext(IndividualContext)
    const { fetchUserCart } = useContext(CartContext)


    const userToken = localStorage.getItem("token");

    // console.log(data)
    const {
        _id,
        name,
        details,
        price,
        originalPrice,
        category,
        instock,
        discount,
        type,
        rating,
        image_url,
    } = items;

    // useEffect(() => {
    //     console.log("selecteditem", selecteditem)
    // }, [getProductId])

    return (
        <>
            <div className="product_aside_content_figures" key={_id}>
                <NavLink to="/individual" onClick={() => getProductId(_id)}>
                    <img src={image_url} alt="products" />
                </NavLink>

                <div className="product_category_name">
                    <div className="product_rating_category">
                        <p>{category}</p>
                        <p className="product_rating_figures">
                            <p>
                                {" "}
                                <AiOutlineStar className="product_rating_icon" />
                            </p>{" "}
                            <p>{rating}</p>{" "}
                        </p>
                    </div>

                    <h4> {name} </h4>
                </div>

                {/* <p>{details} </p> */}
                <div className="productPrice">
                    <p>
                        &#x20b9; {price}
                        <sub>
                            {" "}
                            <del className="del">M.R.P {originalPrice} </del>{" "}
                        </sub>{" "}
                    </p>
                    <p>({discount}% off)</p>
                </div>

                {page !== "wishlist" && (
                    <button
                        onClick={() => handleWishlist(items)}
                        className="wishlist_button"
                    >
                        <AiOutlineHeart className="wish_icon" />
                    </button>
                )}
                {page !== "cart" && (
                    <button className="add_button" onClick={() => fetchUserCart(items, userToken)}>
                        {" "}
                        <span>Add to Cart</span>{" "}
                    </button>
                )}
            </div>
        </>
    );
};
