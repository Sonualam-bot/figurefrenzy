import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useParams } from "react-router";

import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import { IndividualContext } from "./IndividualContext";
import { categoryContext } from "../homepage/CategoryContext";

export const Individual = () => {
    // const { productId } = useParams();
    const { addToWishlist, addToCart } = useContext(ProductContext);
    // const { isLoading } = useContext(categoryContext)
    // console.log("individusalData", individualData)

    const { selecteditem, indiLoader } = useContext(IndividualContext)



    // console.log(selecteditem)

    const { _id, name, details, price, originalPrice, category, instock, discount, type, rating, image_url } = selecteditem


    // const getSelectedItemDetail = individualData?.find((selectedFigure) => selectedFigure._id === +productId)
    // console.log(getSelectedItemDetail)

    return (
        <>
            {!indiLoader ?
                <div className="individual_data" >
                    <div className="individual_img_and_price" >
                        <div className="individual_img" >
                            <img src={image_url} alt="figure" />
                            <p className="individual_rating"  > <AiOutlineStar className="rating_icon" /> {rating} </p>
                            <button onClick={() => addToWishlist(selecteditem)} className="individual_wishlist_btn" ><IoIosHeartEmpty className='wish_icon' /></button>
                        </div>
                    </div>


                    <div className="individual_details" >
                        {/* <p> {getSelectedItemDetail?.category} </p> */}
                        <h2>{name}</h2>
                        <div className='individual_productPrice' >
                            <p className="individual_price" >&#x20b9;{price}  <del><span>&#x20b9;{originalPrice}</span>  </del>  </p>
                            <p>{discount}% OFF</p>
                        </div>


                        {/* <div className="individual_name_price">
                        
                    </div> */}

                        <hr className="individualPage_hr" />

                        <p className="individual_details_stockdesc" > <b> Availability: </b> {instock ? "In Stock" : "Out of Stock"} </p>
                        <p className="individual_details_stockdesc" > <b> Description:</b> {details} </p>
                        <button className='add_button' onClick={() => addToCart(selecteditem)} >Add to Cart</button>

                        {/* <div className="individual_availability_details" >
                       
                    </div> */}



                    </div>

                </div >
                : <h3>Item is Loading...</h3>

            }


        </>
    )
}