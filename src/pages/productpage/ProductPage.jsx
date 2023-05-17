import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

import { AiOutlineStar } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";

export const ProductPage = () => {
    const { productsArr } = useContext(ProductContext)
    return (
        <>
            <div className="product_container" >
                <div className="product_main_content">
                    <div className='product_filter_container' >
                        <h2>Filters</h2>
                        <NavLink className="product_navlink" >Clear</NavLink>
                    </div>

                    <h2 className='product_price_title' >Price</h2>
                    <div className='product_slider_value' >
                        <p>0</p>
                        <p>150</p>
                        <p>200</p>
                    </div>
                    <input className='product_slider' type='range' />

                    <h2>Category</h2>
                    <div className='product_category' >
                        <div> <input type='checkbox' />Hero Figure</div>
                        <div> <input type='checkbox' />Villain Figure</div>
                    </div>


                    <h2>Rating</h2>
                    <div className='product_rating' >
                        <div>
                            <input type='radio' name='radio' /> 4 Stars & above
                        </div>
                        <div>
                            <input type='radio' name='radio' /> 3 Stars & above
                        </div>
                        <div>
                            <input type='radio' name='radio' /> 2 Stars & above
                        </div>
                        <div>
                            <input type='radio' name='radio' /> 1 Stars & above
                        </div>
                    </div>

                    <h2>Sort By</h2>
                    <div className='product_sort' >
                        <div>
                            <input type="radio" name="sort" />Price-Low to High
                        </div>
                        <div>
                            <input type="radio" name="sort" />Price-Low to High
                        </div>

                    </div>
                </div>


                <div className="product_aside_content" >
                    {productsArr.map(({ id, name, details, price, originalPrice, category, instock, discount, type, rating, image_url }) => {
                        return (
                            <div className='product_aside_content_figures' key={id} >
                                <img src={image_url} alt='figure' />
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
                                <button className='wishlist_button' ><IoIosHeartEmpty className='wish_icon' /></button>
                                <button className='add_button'> <span>Add to Cart</span> </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}