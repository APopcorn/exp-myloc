

const Header = ({ projectName, companyLogo }) => {

    return (
        <div className="start__header">
            
            <img 
                className="header__myloc logo"
                src="https://myloc.se/wp-content/uploads/elementor/thumbs/myloc-classic-transparent-pdttoah26385ojlt9o5o2ci2ctdbgkhua8c7excf0g.png" 
                alt="MyLoc" 
            />
            
            <div className="header__kund logo">
                <a> {projectName} </a>

                <img
                    className="logo"
                    src={"https://www.traineeguiden.se/uploads/media/logo_image/0001/01/jm-logo_logo_image_wide.png"} 
                    // companyLogo 
                    alt={"temp"} 
                />
            </div>
            

        </div>
    )


}

export default Header