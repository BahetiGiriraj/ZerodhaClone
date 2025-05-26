import { Link } from "react-router-dom";
function Hero() {
    return ( 
        <>
        <div className="container mt-3 p-4 text-muted"  >
            <div className="text-center p-5" >
                <p className="fs-1">Zerodha Products</p>
                <p className="fs-4">Sleek, modern, and intuitive trading platforms</p>
                <p className="fs-5">Check out our <Link  to="/pricing" className="text-decoration-none">investment offerings &rarr;</Link> </p>
            </div> <hr/>
            
        </div>
        </>
     );
}

export default Hero;