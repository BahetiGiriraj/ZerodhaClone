

function Brokeage() {
    return ( 
        <>
       <div className="container-fluid m-5 p-5">
        <div className="row">
            <h1>Charges explained</h1>
            <div className="col-5 mt-5 text-muted ">
                <h5 className="mb-4">Securities/Commodities transaction tax</h5>
                <p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                <p>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                <h5 className="mb-4">Transaction/Turnover Charges</h5>
                <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                <p>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                <p>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                <p>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                <p>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
            </div>
            <div className="col-1"></div>
            <div className="col-5 mt-5 text-muted ">
                <h5 className="mb-4">GST</h5>
                <p>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                <h5>SEBI Charges</h5>
                <p>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                <h5 className="mb-4">DP (Depository participant) charges</h5>
                <p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                <p>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                <p>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                <h5 className="mb-4">Pledging charges</h5>
                <p>₹30 + GST per pledge request per ISIN.</p>
            </div>
        </div>
       </div>
        </>
     );
}

export default Brokeage;