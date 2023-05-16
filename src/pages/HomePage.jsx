import heroSection from "../images/heroSection.png"

export const HomePage = () => {
    return (
        <>
            <div className="hero_section"></div>
            <div className="hero_aside_content" >
                <div className="hero_img" >
                    <img src={heroSection} alt="hero" />
                </div>
                <div className="hero_section_content" >
                    <h1>Buy your favourite character action figures here</h1>
                    <div className="search&button" >
                        <input className="hero_section_content_input" type="text" placeholder="Search for an action figure" />
                        <button className="hero_section_content_button" >Search</button>
                    </div>

                    <p>The most complete action figures More than 1000 <br /> collectible action figure ready to collect</p>
                </div>
            </div>


        </>
    )
}