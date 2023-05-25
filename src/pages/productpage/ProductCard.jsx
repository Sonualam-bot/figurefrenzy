import { AiOutlineStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";

import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { IndividualContext } from "../individualPage/IndividualContext";
import { CartContext, incrementUserCartQuantity } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

export const ProductCard = ({ items, handleCart, handleWishlist, page }) => {
    const [addedToCart, setAddedToCart] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(false)




    const { getProductId } = useContext(IndividualContext);
    const { fetchUserCart, cartItems, deleteUserCartItems, incrementUserCartQuantity } = useContext(CartContext);
    const { fetchUserWishlist, wishlistItems, deleteUserWishlisItems } = useContext(WishlistContext);


    const userToken = localStorage.getItem("token");

    const navigate = useNavigate()

    useEffect(() => {
        const isItemInCart = cartItems.some((cartItem) => cartItem._id === items._id);
        setAddedToCart(isItemInCart);

        const isItemInWishlist = wishlistItems.some((wishlistItem) => wishlistItem._id === items._id)
        setIsInWishlist(isItemInWishlist)
    }, [cartItems, items, wishlistItems]);






    // console.log("this is the btn text", btnText)
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



    // console.log("this is cartItems qty", items.name)

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

                    <div>
                        {isInWishlist ?
                            <button className="wishlist_button" >
                                <AiFillHeart className="wish_icon2" />
                            </button> :


                            <button
                                onClick={() => {
                                    fetchUserWishlist(items, userToken);
                                    setIsInWishlist(true)
                                }
                                }
                                className="wishlist_button"

                            >
                                <AiFillHeart className="wish_icon" />
                            </button>
                        }
                    </div>
                )}
                {page !== "cart" && (

                    <button className="add_button" onClick={() => {
                        if (addedToCart) {
                            navigate("/cart")
                        } else {
                            fetchUserCart(items, userToken);
                            setAddedToCart(true)

                        }


                    }
                    }>
                        {" "}
                        <span>{addedToCart ? "Go To Cart" : "Add to Cart"}</span>{" "}
                    </button>
                )}

                {page === "cart" && (

                    <div>
                        <div className="increment_decrement_cart_quantity" >
                            <button className="remove_button_incDec" onClick={() => {
                                if (items.qty <= 1) {
                                    deleteUserCartItems(items._id, userToken)

                                } else {
                                    incrementUserCartQuantity(items._id, "decrement", userToken)
                                }
                            }}

                            > - </button>
                            <span>{items.qty}</span>
                            <button className="remove_button_incDec" onClick={() => incrementUserCartQuantity(items._id, "increment", userToken)} > + </button>

                        </div>
                        <button className="remove_button" onClick={() => deleteUserCartItems(items._id, userToken)} >
                            {" "}
                            <span> Remove From Cart</span>{" "}
                        </button>
                    </div>



                )}



                {page === "wishlist" && (

                    <button className="wishlist_button" onClick={() => deleteUserWishlisItems(items._id, userToken)} >
                        <AiFillHeart className="wishlist_button wish_icon2" />
                    </button>
                )}




            </div>
        </>
    );
};
