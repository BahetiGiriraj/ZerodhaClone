import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";



function NotFound() {
  
  return (
    <>
    <Navbar/>
    <div className="container text-center mt-5 p-5">
      <h1 className="mb-4">404 Page Not Found</h1>
      <p>
       Sorry,the page you are looking does not exist
      </p>
      <Link to="/">
      <button
        style={{ width: "20%", margin: "0 auto", fontSize: "24px" }}
        type="button"
        className="btn btn-primary p-2 mt-4 mb-5 "
      >
        Go Home
      </button>
      </Link>
    </div>
    <Footer/>
    </>
    
  );
}

export default NotFound;
