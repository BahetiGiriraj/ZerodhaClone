
function RightImage({productTitle , productDesrc , learnMore , imageURL }) {
    return ( 
        <>
        <div className="container ">
            <div className="row">
                <div className="col-6 mt-5" style={{paddingTop:"120px"}}>
                    <h1> {productTitle} </h1>
                    <p>{productDesrc}</p>
                    <div>
                        <a className="text-decoration-none" href={learnMore}>Learn More &rarr;</a>
                    </div>
                </div>
                <div className="col-6 mb-5">
                    <img src={imageURL}/>
                </div>
            </div>
        </div>
        </>
     );
}

export default RightImage;