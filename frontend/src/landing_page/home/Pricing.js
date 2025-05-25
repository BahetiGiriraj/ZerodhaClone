import { Link } from "react-router-dom";

function Pricing() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-4">
                    <h1 className="mb-4">Unbeatable pricing</h1>
                    <p className="mb-5">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <Link to="/pricing" style={{textDecoration:"none"}}>See pricing &rarr;</Link>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center ">
                        <div className="col p-4 border">
                            <h1>&#8377;0</h1>
                            <p>Free equity delivery and <br/>direct mutual funds</p>
                        </div>
                        <div className="col p-4  border ">
                            <h1>&#8377;20</h1>
                            <p> Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
     );
}

export default Pricing;