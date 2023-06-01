import heroSection from "../../pages/../images/heroSection3.png";
import { useContext } from "react";

import { AiFillGithub } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

import { Spinner } from "../../loaders/Spinner";


import { categoryContext } from "./CategoryContext";

import { NavLink } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { Header } from "../../header/Header";

export const HomePage = () => {
    const { category, selectedCategory } = useContext(categoryContext);
    const { dispatch } = useContext(ProductContext)

    console.log("this is the selected category", selectedCategory)

    // const filteredProducts = homepageData.filter((product) => {
    // Replace "categoryKey" with the actual key representing the category in your product object
    //     return product.categoryKey === selectedCategory;
    //   });

    return (
        <>
            <header>
                <Header />
            </header>
            <div className="body-div" >
                {/* <HomePageSlider /> */}

                {/* hero section container */}
                <div className="hero_section">

                    <img src="https://cdn.shopify.com/s/files/1/0550/2337/0490/files/my-capricorn-friend-slider-home_0_1512x529.jpg?v=1638376375" alt="hero" />

                    {/* hero section title content */}
                    <div className="hero_section_content" >
                        <h1>Buy your favourite character action figures here</h1>

                        {/* <p>The most complete action figures More than 1000  collectible action figure ready to collect</p> */}
                    </div>
                    {/* </div> */}
                </div>


                {/* categories section */}
                <div className="hero_category_title" >Categories to Choose From</div>

                <div className="hero_categories" >
                    {category.length === 0 ? <h2>Categories are loading</h2> : category?.map(({ _id, type, title, description, image_url }) => {
                        return (

                            <NavLink to="/product" className="hero_nav_link" onClick={() => dispatch({ type: type })}>
                                <li className="hero_categories_card" key={_id} value={title}  >
                                    {/* {console.log(type)} */}
                                    <img src={image_url} alt="chitrrr" />
                                    <div className="hero_text" >
                                        <h3> {title} </h3>
                                        {/* <p> {description} </p> */}
                                    </div>
                                </li>
                            </NavLink>
                        )
                    })}
                </div>

                {/* footer section */}
                <div className="footer_section" >
                    <div className="footer_section_content" >
                        <h1> <AiFillGithub /> </h1>
                        <h1> <AiFillTwitterCircle /> </h1>
                        <h1> <AiFillInstagram /> </h1>

                    </div>
                </div>
            </div >

        </>
    )
}