import heroSection from "../images/heroSection.png"

export const HomePage = () => {
    return (
        <>
            <div className="hero_section">
                <div>
                    <img src={heroSection} alt="hero" />
                </div>
                <div>
                    <h1>Buy your favourite character action figures here</h1>
                    <input type="text" placeholder="Search for an action figure" />
                    <input type="button" value="Search" />
                </div>

            </div>
        </>
    )
}