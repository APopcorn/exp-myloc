

const Header = ({ slides }) => {

    return (
        <div className="start__header">
            

            <img 
                className="header__myloc logo"
                src="https://myloc.se/wp-content/uploads/2016/11/mylocconstransp..png" 
                alt="MyLoc" 
            />
            
            <div className="header__kund logo">
                <a> {"P09002414"} -{"VallPark"} </a>

                <img
                    className="logo"
                    src={"https://myloc.se/wp-content/uploads/2016/11/mylocconstransp..png"} 
                    alt={"temp"} 
                />
            </div>
            

        </div>
    )


}

export default Header