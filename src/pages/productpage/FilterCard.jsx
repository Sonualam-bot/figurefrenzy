import { NavLink } from 'react-router-dom';


export const FilterCard = () => {
    return (
        <>
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
        </>
    )
}