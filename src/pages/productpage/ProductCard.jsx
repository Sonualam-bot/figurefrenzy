import { AiOutlineStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'


import { useContext } from "react";
import { IndividualContext } from "../individualPage/IndividualContext";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import { AuthContext } from "../../context/AuthContext";

export const ProductCard = ({ items, handleCart, handleWishlist, page }) => {




    const { getProductId } = useContext(IndividualContext);
    const { fetchUserCart, cartItems, deleteUserCartItems, incrementUserCartQuantity } = useContext(CartContext);
    const { fetchUserWishlist, wishlistItems, deleteUserWishlisItems } = useContext(WishlistContext);
    const { userToken } = useContext(AuthContext)



    const navigate = useNavigate()

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

    const isItemInWishlist = wishlistItems.some((wishlistItem) => wishlistItem._id === _id)
    const isItemInCart = cartItems.some((cartItem) => cartItem._id === items._id);

    // console.log("this is cartItems qty", items.name)

    return (
        <>
            <div className="product_aside_content_figures" key={_id}>
                <NavLink to="/individual" onClick={() => getProductId(_id)}>
                    <div className="image_scale_div" >
                        <img src={image_url} alt="products" />
                    </div>

                </NavLink>

                <div className="product_category_name">
                    <div className="product_rating_category">
                        <p>{category}</p>
                        <p className="product_rating_figures">
                            <span>
                                {" "}
                                <AiOutlineStar className="product_rating_icon" />
                            </span>{" "}
                            <span>{rating}</span>{" "}
                        </p>
                    </div>

                    <h4> {name} </h4>
                </div>

                <div className="productPrice">
                    <p>
                        &#x20b9;{price}
                        <del className="del">&#x20b9;{originalPrice} </del>{" "}
                    </p>
                    <p>({discount}% off)</p>
                </div>

                {page !== "wishlist" && (

                    <div>
                        {isItemInWishlist ?
                            <button className="wishlist_button" onClick={() => {
                                deleteUserWishlisItems(items._id, userToken)
                                toast.error("Removed From Wishlist")
                            }} >
                                <AiFillHeart className="wish_icon2" />
                            </button> :


                            <button
                                onClick={() => {
                                    fetchUserWishlist(items, userToken);
                                    // setIsInWishlist(true)
                                    toast.success("Added To Wishlist ")
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

                    userToken ? (
                        <button className="add_button" onClick={() => {
                            if (isItemInCart) {
                                navigate("/cart")
                            } else {
                                fetchUserCart(items, userToken);
                                // setAddedToCart(true)
                                toast.success(" Added To Cart ")

                            }


                        }
                        }>
                            {" "}
                            <span>{isItemInCart ? "Go To Cart" : "Add to Cart"}</span>{" "}
                        </button>
                    ) : (
                        <button className="add_button" onClick={() => navigate("/login")} >
                            <span>Add To Cart</span>
                        </button>
                    )

                )}

                {page === "cart" && (

                    <div>
                        <div className="increment_decrement_cart_quantity" >
                            <button className="remove_button_incDec" onClick={() => {
                                if (items.qty <= 1) {
                                    deleteUserCartItems(items._id, userToken) &&
                                        toast.error("Removed From Cart")


                                } else {
                                    incrementUserCartQuantity(items._id, "decrement", userToken) &&
                                        toast.error("Item qty decreased")
                                }
                            }}

                            > - </button>
                            <span>{items.qty}</span>
                            <button className="remove_button_incDec" onClick={() => {
                                incrementUserCartQuantity(items._id, "increment", userToken)
                                toast.success("Item qty increased")
                            }} > + </button>

                        </div>
                        <button className="remove_button" onClick={() => {
                            deleteUserCartItems(items._id, userToken)
                            toast.error("Removed From Cart")
                        }} >
                            {" "}
                            <span> Remove From Cart</span>{" "}
                        </button>
                    </div>



                )}



                {page === "wishlist" && (

                    <button className="wishlist_button" onClick={() => {
                        deleteUserWishlisItems(items._id, userToken)
                        toast.error("Removed From Wishlist")
                    }} >
                        <AiFillHeart className="wishlist_button wish_icon2" />
                    </button>
                )}




            </div>
        </>
    );
};
