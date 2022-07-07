const Url = ({ slide }) => {

    return (

        <div className="image website">
            <iframe 
                title={slide.externalUrl}
                className="image website" 
                src={slide.externalUrl}
                scrolling="no" 
                frameBorder="0"
                />
        </div>


    )
}

export default Url

