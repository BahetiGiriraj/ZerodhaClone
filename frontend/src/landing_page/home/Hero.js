
import { Link } from "react-router-dom";

export default function Hero() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="heroimg"  className="mb-5"/>
                 <h1 className="mt-5  " >Invest in everything</h1>
                 <p className="font-weight-light mt-2  fs-3">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                 <Link to="/signup">
                  <button style={{width:"20%" , margin: "0 auto" , fontSize: "24px"}} type="button" className="btn btn-primary p-2 mt-4 mb-5 ">Sign up for free</button>
                 </Link>
                
            </div>
        </div>        
     );
}

