import { Link } from "react-router-dom";
function Team() {
    return ( 
        <>
        <div className="container mt-5">
            <h1 style={{paddingLeft:"695px"}}>People</h1>
            <div className="row p-5">
                <div className="col-6 mt-5 text-center">
                    <img src="media/images/nithinKamath.jpg" alt="nithinkamathimage" className="rounded-circle"/>
                    <div className="mt-4 ">
                        <p className="fs-5">Nithin Kamath</p>
                        <p className="fs-6">Founder, CEO</p>
                    </div>
                    
                </div>
                <div className="col-6 mt-5 fs-5 lh-lg p-5">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <Link to="https://nithinkamath.me" target="_blank" style={{textDecoration:"none"}} >Homepage</Link> / <Link to="https://tradingqna.com/u/nithin/summary" target="_blank" style={{textDecoration:"none"}}>TradingQnA</Link> / <Link to="https://x.com/Nithin0dha" target="_blank" style={{textDecoration:"none"}}>Twitter</Link></p>
                </div>
            </div>
        </div>
        </>
     );
}

export default Team;