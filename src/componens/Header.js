

const Header = ({ projectName, projectID, companyLogo }) => {

    return (
        <div className="header">
            
            <img 
                className="header__myloc"
                src="https://myloc.se/wp-content/uploads/2016/11/mylocconstransp..png" 
                alt="MyLoc" 
            />
            
            <div className="header__kund">
                <a className="header__text"> {projectID} - {projectName} </a>

                <img
                    className="companyLogo"
                    src={companyLogo} 
                    // companyLogo 
                    alt={"temp"} 
                />
            </div>
            

        </div>
    )


}

export default Header