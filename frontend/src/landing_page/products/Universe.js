import { Link } from "react-router-dom";
function Universe() {
  return (
    <>
      <div className="container text-center">
        <h1 className="text-center fs-1" style={{ color: "#444" }}>
          The Zerodha Universe
        </h1>
        <p className="fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row">
          <div className="col-4 p-5">
            <img
              src="media/images/zerodhafundhouse.png"
              style={{ width: "50%" }}
              className="mb-4"
            />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              src="media/images/sensibullLogo.svg"
              style={{ width: "50%" }}
              className="mb-4"
            />
            <p>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              src="media/images/tijori.svg"
              style={{ width: "40%" }}
              className="mb-4"
            />
            <p>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 p-5">
            <img
              src="media/images/streakLogo.png"
              style={{ width: "50%" }}
              className="mb-4"
            />
            <p>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              src="media/images/smallcaseLogo.png"
              style={{ width: "50%" }}
              className="mb-4"
            />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              src="media/images/dittoLogo.png"
              style={{ width: "30%" }}
              className="mb-4"
            />
            <p>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
        <Link to="/signup">
          <button
            style={{ width: "20%", margin: "0 auto", fontSize: "24px" }}
            type="button"
            className="btn btn-primary p-2 mt-4 mb-5 "
          >
            Sign up for free
          </button>
        </Link>
      </div>
    </>
  );
}

export default Universe;
