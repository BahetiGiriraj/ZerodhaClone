import {Link} from "react-router-dom"

function OpenAccount() {
  return (
    <div className="container text-center mt-5 p-5">
      <h1 className="mb-4">Open a Zerodha account</h1>
      <p>
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <Link to="/signup ">
       <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ width: "20%", margin: "0 auto", fontSize: "24px" }}
        type="button"
        className="btn btn-primary p-2 mt-4 mb-5 "
      >
        Sign up for free
      </button>
      </Link>
     
    </div>
  );
}

export default OpenAccount;
