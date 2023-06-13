import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { categoryContext } from "../homepage/CategoryContext";




export const FilterCard = () => {
    const { state, dispatch, homepageData } = useContext(ProductContext);

    const { filteredProducts } = useContext(categoryContext)


    const sortingHandler = (e) => {
        dispatch({
            type: "SORT_LOW_TO_HIGH",
            payload: e.target.value
        })
    }





    return (
        <>

            <div className='product_filter_main_container' >
                <div className='product_filter_container' >
                    <h2>Filters</h2>
                    <NavLink className="product_navlink" onClick={() => dispatch({ type: "CLEAR" })}  >Clear</NavLink>
                </div>
                <hr />
                <p>Showing {filteredProducts?.length} of {homepageData?.length} products</p>
                <hr />

                <div>
                    <input className="hero_section_content_input_again" type="text" value={state.searchItem} placeholder="Search for an action figure" onChange={(e) => dispatch({ type: "SEARCH_ITEM", payload: e.target.value })} />
                </div>
                <hr className="below_inputBox_hr" />


                <h2 className='product_price_title  filters_heading' >Price</h2>
                <div className='product_slider_value' >
                    <p> ₹4500 & Below </p>
                </div>
                <input className='product_slider' max="4500" min="200" step="100" type='range' value={state.filterPriceByRange} onChange={(e) => dispatch({ type: "FILTER_PRICE_BY_RANGE", payload: e.target.value })} />
                <hr />

                <h2 className="filters_heading" >Category</h2>
                <div className='product_category' >

                    <div>
                        <input className="padding_bottom" type='checkbox' checked={state.category.all} onClick={() => dispatch({ type: "SHOW_ALL_PRODUCTS" })} />All
                    </div>


                    <div>
                        <input className="padding_bottom" type='checkbox' value="hero" checked={state.category.hero} onClick={() => dispatch({ type: "HERO_TYPE" })} />Hero Figure
                    </div>
                    <div>
                        <input className="padding_bottom" type='checkbox' value="villain" checked={state.category.villain} onClick={() => dispatch({ type: "VILLAIN_TYPE" })} />Villain Figure
                    </div>
                    <div>
                        <input className="padding_bottom" type='checkbox' value="antiHero" checked={state.category.antiHero} onClick={() => dispatch({ type: "ANTI_HERO_TYPE" })} />Anti-Hero Figure
                    </div>
                </div>

                <hr />


                <h2 className="filters_heading" >Rating</h2>
                <div className='product_rating' >
                    <div>
                        <input className="padding_bottom" type='radio' name='radio' value="4" checked={state.filterProductsByRating === "4"} onChange={(e) => dispatch({ type: "FILTER_BY_RATING", payload: e.target.value })} /> 4 Stars & above
                    </div>
                    <div>
                        <input className="padding_bottom" type='radio' name='radio' value="3" checked={state.filterProductsByRating === "3"} onChange={(e) => dispatch({ type: "FILTER_BY_RATING", payload: e.target.value })} /> 3 Stars & above
                    </div>
                    <div>
                        <input className="padding_bottom" type='radio' name='radio' value="2" checked={state.filterProductsByRating === "2"} onChange={(e) => dispatch({ type: "FILTER_BY_RATING", payload: e.target.value })} /> 2 Stars & above
                    </div>
                    {/* <div>
                        <input className="padding_bottom" type='radio' name='radio' /> 1 Stars & above
                    </div> */}
                </div>

                <hr />

                <h2 className="filters_heading" >Sort By</h2>
                <div className='product_sort' >
                    <div>
                        <input className="padding_bottom" type="radio" name="sort" value="lowToHigh" checked={state.sortBy === "lowToHigh"} onClick={sortingHandler} />Price-Low to High
                    </div>
                    <div>
                        <input className="padding_bottom" type="radio" name="sort" value="highToLow" checked={state.sortBy === "highToLow"} onClick={sortingHandler} />Price-High to Low
                    </div>

                </div>


            </div>


        </>
    )
}