import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useParams } from "react-router";

import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";

export const Individual = () => {
    const { figureId } = useParams();
    const { individualData, addToWishlist, addToCart } = useContext(ProductContext);

    const getSelectedItemDetail = individualData?.find((selectedFigure) => selectedFigure._id === figureId)
    console.log(getSelectedItemDetail)

    return (
        <>
            <div className="individual_data" >
                <div className="individual_img_and_price" >
                    <div className="individual_img" >
                        <img src={getSelectedItemDetail?.image_url} alt="figure" />
                        <p className="individual_rating"  > <AiOutlineStar className="rating_icon" /> {getSelectedItemDetail?.rating} </p>
                        <button onClick={() => addToWishlist(getSelectedItemDetail)} className="individual_wishlist_btn" ><IoIosHeartEmpty className='wish_icon' /></button>
                    </div>
                </div>


                <div className="individual_details" >
                    {/* <p> {getSelectedItemDetail?.category} </p> */}
                    <h2>{getSelectedItemDetail?.name}</h2>
                    <div className='individual_productPrice' >
                        <p className="individual_price" >&#x20b9;{getSelectedItemDetail?.price}  <del><span>&#x20b9;{getSelectedItemDetail?.originalPrice}</span>  </del>  </p>
                        <p>{getSelectedItemDetail?.discount}% OFF</p>
                    </div>


                    {/* <div className="individual_name_price">
                        
                    </div> */}

                    <hr className="individualPage_hr" />

                    <p className="individual_details_stockdesc" > <b> Availability: </b> {getSelectedItemDetail?.instock ? "In Stock" : "Out of Stock"} </p>
                    <p className="individual_details_stockdesc" > <b> Description:</b> {getSelectedItemDetail?.details} </p>
                    <button className='add_button' onClick={() => addToCart(getSelectedItemDetail)} >Add to Cart</button>

                    {/* <div className="individual_availability_details" >
                       
                    </div> */}



                </div>

            </div >


        </>
    )
}