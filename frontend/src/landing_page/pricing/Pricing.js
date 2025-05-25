
function Pricing() {
    return ( <>
   <div className="container mt-5 p-5">
  <div className="row text-muted text-center">
    <div className="col p-5">
      <img src="media/images/pricingMF.svg" alt="Pricing Visual" style={{width:"90%"}} />
      <h1 className="mt-5">Free equity delivery</h1>
      <p className="mt-4">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
    </div>
    <div className="col p-5">
         <img src="media/images/intradayTrades.svg" alt="Pricing Visual"  style={{width:"90%"}}/>
      <h1 className="mt-5">Intraday and F&O trades</h1>
      <p className="mt-4">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
    </div>
    <div className="col p-5">
         <img src="media/images/pricingMF.svg" alt="Pricing Visual" style={{width:"90%"}} />
      <h1 className="mt-5">Free direct MF</h1>
      <p className="mt-4">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
    </div>
  </div>
</div>

    </> );
}

export default Pricing;