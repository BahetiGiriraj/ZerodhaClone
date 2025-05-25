function Awards() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6 mt-5 p-5">
                    <img src="media/images/largestBroker.svg" alt="awardimage"/>
                </div>
                <div className="col-6 p-5">
                    <h1>Largest stock Broker in India</h1>
                    <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all retial order volumes in Inida daily by trading and investing in: </p>
                    <div className="row">
                        <div className="col-6 p-1">
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commedity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6 p-1">
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li>< p>Bends and Growth</p></li>
                            </ul>
                        </div>
                        <img src="media/images/pressLogos.png" alt="news" className="mt-4 " />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards;