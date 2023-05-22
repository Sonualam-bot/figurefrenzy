import heroSection from "../../pages/../images/heroSection3.png";
import { useContext } from "react";

import { AiFillGithub } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"


import { categoryContext } from "./CategoryContext";
import { HomePageSlider } from "./HomePageSlider";

export const HomePage = () => {
    const { category } = useContext(categoryContext);
    return (
        <>
            <div className="body-div" >
                {/* <HomePageSlider /> */}

                {/* hero section container */}
                <div className="hero_section">


                    <div className="hero_aside_content" >
                        {/* hero section img */}
                        <div className="hero_img" >
                            <img src={heroSection} alt="hero" />
                        </div>


                        {/* hero section title content */}
                        <div className="hero_section_content" >
                            <h1>Buy your favourite character action figures here</h1>
                            {/* <div className="search_button" >
                                <input className="hero_section_content_input" type="text" placeholder="Search for an action figure" />
                                <button className="hero_section_content_button" >Search</button>
                            </div> */}
                            <p>The most complete action figures More than 1000 <br /> collectible action figure ready to collect</p>
                        </div>
                    </div>
                </div>


                {/* categories section */}
                <div className="hero_category_title" >Categories to Choose From</div>

                <div className="hero_categories" >
                    {category.map(({ _id, type, description, image_url }) => {
                        return (

                            <li className="hero_categories_card" key={_id} >
                                <img src={image_url} alt="chitrrr" />
                                <div className="hero_text" >
                                    <h3> {type} </h3>
                                    <p> {description} </p>
                                </div>

                            </li>
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