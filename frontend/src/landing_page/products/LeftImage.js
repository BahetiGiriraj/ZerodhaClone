

function LeftImage({imageURL , productName , productDescription , tryDemo , learnMore , googlePlay , appStore , }) {
    return ( 
        <>
        <div className="container mb-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src={imageURL} />
                </div>
                <div className="col-6 p-5">
                    <h1>{productName}</h1>
                    <p> {productDescription} </p>
                    <div className="mt-4  " >
                        <a  className="text-decoration-none" href={tryDemo}>Try Demo &rarr;</a>
                        <a className="text-decoration-none" href={learnMore} style={{marginLeft:"50px"}}>Learn More &rarr;</a>
                    </div>
                    <div className="mt-5">
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>
                    <a href={appStore} ><img src="media/images/appstoreBadge.svg" style={{marginLeft:"50px"}}/></a>
                    </div> 
                </div>
            </div>
        </div>
        </>
     );
}

export default LeftImage;