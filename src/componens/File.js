
const File = ({ slide }) => {

    return (
        <>
            {(() => {
              switch (slide.file.name.split('.').slice(-1)[0]) {
                case 'png':
                case 'jpeg':
                case 'JPG':
                case 'pdf':
                  return <img 
                    className="image" 
                    src={slide.file.url} 
                    alt="image"
                    />

                default:
                  return <div> Not supported file type </div>
              }
            })()}
            
        </>
    )
}


export default File

