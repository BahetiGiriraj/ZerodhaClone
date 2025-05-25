

function Inverstment() {
    return ( 
        <div className="container text-center mt-5 p-5">
            <h1 className="mb-5">Investment options with Zerodha demat account</h1>
            <div className="row p-5">
                <div className="col-6 d-flex mb-5">
                    <img src="media/images/stocks-acop.svg"/>
                    <p><h1>Stocks</h1>Invest in all <br/> exchange-listed securities</p>
                    
                </div>
                <div className="col-6 d-flex mb-5">
                    <img src="media/images/mf-acop.svg"/>
                    <p><h1>Mutual funds</h1>Invest in  <br/>commission-free direct mutual funds</p>
                </div>
                <div className="col-6 d-flex mt-4">
                    <img src="media/images/ipo-acop.svg"/>
                    <p><h1>IPO</h1>Apply to the  <br/> latest IPOs instantly via UPI</p>
                </div>
                <div className="col-6 d-flex mt-4">
                    <img src="media/images/fo-acop.svg"/>
                    <p><h1>Futures & options</h1>Hedge and mitigate <br/> market risk through simplified F&O trading</p>
                </div>
            </div>
            <button style={{width:"20%" , margin: "0 auto" , fontSize: "24px"}} type="button" className="btn btn-primary p-2 mt-4 mb-5 ">Explore Inverstment</button>
        </div>
     );
}

export default Inverstment;