import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Header } from "../../header/Header";

import { AiFillHeart } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { IndividualContext } from "./IndividualContext";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";


export const Individual = () => {

    const { fetchUserWishlist, deleteUserWishlisItems, wishlistItems } = useContext(WishlistContext)
    const { fetchUserCart, deleteUserCartItems, cartItems } = useContext(CartContext)

    const { selecteditem, indiLoader } = useContext(IndividualContext)
    const { userToken } = useContext(AuthContext)



    const [addedToCart, setAddedToCart] = useState(false);
    const [isInWishlistItem, setIsInWishlistItem] = useState(false)

    const { _id, name, details, price, originalPrice, category, instock, discount, type, rating, image_url } = selecteditem;

    const isItemInWishlist = wishlistItems.some((wishlistItem) => wishlistItem._id === _id)

    const isItemInCart = cartItems.some((cartItem) => cartItem._id === _id);


    // useEffect(() => {
    //     const isItemInCart = cartItems.some((cartItem) => cartItem._id === items._id);
    //     setAddedToCart(isItemInCart);

    //     const isItemInWishlist = wishlistItems.some((wishlistItem) => wishlistItem._id === _id)
    //     setIsInWishlistItem(isItemInWishlist)
    // }, [wishlistItems]);


    return (
        <>
            <header>
                <Header />
            </header>
            {!indiLoader ?
                <div className="individual_data" >
                    <div className="individual_img" >

                        <img src={image_url} alt="figure" />

                        {isItemInWishlist ?
                            <button onClick={() => {
                                deleteUserWishlisItems(_id, userToken)
                                toast.success("Removed From Wishlist")

                            }} className="individual_wishlist_btn" >
                                <AiFillHeart style={{ color: "red" }} />

                            </button> :
                            <button
                                onClick={() => {
                                    fetchUserWishlist(selecteditem, userToken)
                                    toast.success("Added To Wishlist")
                                }} className="individual_wishlist_btn" >
                                <AiFillHeart className="wish_null_hover" />

                            </button>}


                    </div>


                    <div className="individual_details" >
                        <p className="individual_category" > {category} </p>
                        <h2 >{name}</h2>
                        <p className="individual_type" > {type} </p>


                        <p className="individual_rating"  >Rating : <AiOutlineStar className="rating_icon" /> {rating} </p>




                        {/* <hr className="individualPage_hr" /> */}

                        <p className="individual_details_stockdesc" >
                            <b> Availability: </b> {instock ? "In Stock" : "Out of Stock"}
                        </p>
                        <p className="individual_details_stockdesc" >
                            <b> Description:</b> {details}
                        </p>


                        <div className='individual_productPrice' >
                            <p className="individual_price" >
                                &#x20b9;{price}  <span>&#x20b9;{originalPrice}</span>
                            </p>
                            <p>{discount}% OFF</p>
                        </div>

                        {isItemInCart ?
                            <button className="remove_button" onClick={() => {
                                deleteUserCartItems(_id, userToken)
                                toast.success("Removed From Cart")
                            }} >
                                {" "}
                                <span> Remove From Cart</span>{" "}
                            </button> :
                            <button className="add_button_individual" onClick={() => {
                                fetchUserCart(selecteditem, userToken)
                                toast.success("Added To Cart")
                            }} >
                                <span> Add to Cart</span>
                            </button>}







                    </div>

                </div >
                : <h3>Item is Loading...</h3>

            }


        </>
    )
}