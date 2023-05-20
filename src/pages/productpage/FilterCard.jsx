import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';


export const FilterCard = () => {
    const { filterHeroFigure } = useContext(ProductContext)
    return (
        <>
            <div className='product_filter_main_container' >
                <div className='product_filter_container' >
                    <h2>Filters</h2>
                    <NavLink className="product_navlink" >Clear</NavLink>
                </div>
                <hr />
                <p> Showing { } of { } products </p>
                <hr />

                <h2 className='product_price_title  filters_heading ' >Price</h2>
                <div className='product_slider_value' >
                    <p>0</p>
                    <p>150</p>
                    <p>200</p>
                </div>
                <input className='product_slider' type='range' />
                <hr />

                <h2 className="filters_heading" >Category</h2>
                <div className='product_category' >
                    <div> <input className="padding_bottom" type='checkbox' onClick={filterHeroFigure} />Hero Figure</div>
                    <div> <input className="padding_bottom" type='checkbox' />Villain Figure</div>
                </div>

                <hr />


                <h2 className="filters_heading" >Rating</h2>
                <div className='product_rating' >
                    <div>
                        <input className="padding_bottom" type='radio' name='radio' /> 4 Stars & above
                    </div>
                    <div>
                        <input className="padding_bottom" type='radio' name='radio' /> 3 Stars & above
                    </div>
                    <div>
                        <input className="padding_bottom" type='radio' name='radio' /> 2 Stars & above
                    </div>
                    <div>
                        <input className="padding_bottom" type='radio' name='radio' /> 1 Stars & above
                    </div>
                </div>

                <hr />

                <h2 className="filters_heading" >Sort By</h2>
                <div className='product_sort' >
                    <div>
                        <input className="padding_bottom" type="radio" name="sort" />Price-Low to High
                    </div>
                    <div>
                        <input className="padding_bottom" type="radio" name="sort" />Price-Low to High
                    </div>

                </div>
            </div>
        </>
    )
}