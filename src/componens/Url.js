const Url = ({ url }) => {

    return (

        <div className="image website">
            <iframe 
                title={url.externalUrl}
                className="image website" 
                src={url.externalUrl}
                scrolling="no" 
                frameBorder="0"
                />
        </div>


    )
}

export default Url

