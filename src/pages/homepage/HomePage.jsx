
import { useContext } from "react";


import { Spinner } from "../../loaders/Spinner";


import { categoryContext } from "./CategoryContext";

import { NavLink } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { Header } from "../../header/Header";
import { Footer } from "./Footer";

export const HomePage = () => {
    const { category } = useContext(categoryContext);
    const { dispatch } = useContext(ProductContext)


    return (
        <>
            <header>
                <Header />
            </header>
            <div className="body-div" >


                <div className="hero_section">
                    <img src="https://cdn.shopify.com/s/files/1/0550/2337/0490/files/my-capricorn-friend-slider-home_0_1512x529.jpg?v=1638376375" alt="hero" />
                    <div className="hero_section_content" >
                        <h1>Buy your favourite character action figures here</h1>
                    </div>

                </div>


                {/* categories section */}
                <div className="hero_category_title" >Categories to Choose From</div>

                <div className="hero_categories" >
                    {category.length < 1 ? <div className="spinner_homepage" >
                        <Spinner />
                    </div> : category?.map(({ _id, type, title, description, image_url }) => {
                        return (

                            <NavLink to="/product" className="hero_nav_link" onClick={() => dispatch({ type: type })}>
                                <li className="hero_categories_card" key={_id} value={title}  >
                                    <img src={image_url} alt="chitrrr" />
                                    <div className="hero_text" >
                                        <h3> {title} </h3>
                                    </div>
                                </li>
                            </NavLink>
                        )
                    })}
                </div>

                {/* footer section */}
                <div className="footer_section" >
                    <Footer />
                </div>
            </div >

        </>
    )
}