import { Link } from "react-router-dom";

function Stats() {
    return ( 
        <div className="container  p-5">
            <div className="row p-5">
                <div className="col-6 p-5  ">
                    <h1 className="mb-5">Trust with confidence</h1>
                    <h3>Customer-first always</h3>
                    <p className="mb-4 text-muted">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h3>No spam or gimmicks</h3>
                    <p className="mb-4 text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h3>The Zerodha universe</h3>
                    <p className="mb-4 text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3>Do better with money</h3>
                    <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6 p-5">
                    <img src="media/images/ecosystem.png" alt="stats ecosystem" style={{width:"100%"}} className="mt-5"/>
                    <div className="text-center">
                        <Link to="/product" className="mx-5" style={{textDecoration:"none"}}>Explore our product &rarr;</Link>
                        <Link to="#" style={{textDecoration:"none"}}>Try kite demo &rarr;</Link>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;