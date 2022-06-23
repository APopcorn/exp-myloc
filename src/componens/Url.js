

const Url = ({ url }) => {

    return (

        <div className="image website">
            <iframe 
                className="image website" 
                src={url.externalUrl}
                scrolling="no" 
                frameBorder="0"
                
                >

            </iframe>
        </div>


    )
}

export default Url

