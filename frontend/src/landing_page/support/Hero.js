function Hero() {
  return (
    <>
      <div
        className="container-fluid p-5 "
        style={{ backgroundColor: "#387dd1" }}
      >
        <div className="container p-5">
          <div className="row text-light fs-4">
            <div className="col-6">Support Portal</div>
            <div className="col-6 text-end">Track tickets</div>
          </div>
          <div className="row mt-5 g-3 ">
            <div className="col-6 text-light  ">
              <h3>
                Search for an answer or browse help topics to create a ticket
              </h3>
              <div className="input-group mb-3 text-center mt-5">
                <form className="form-control pe-5 rounded">
                  <input
                    type="text"
                    className="form-control pe-5 rounded "
                    placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
                    style={{
                      padding: "20px",
                      border: "none",
                      outline: "none",
                      borderRadius: "8px",
                      boxShadow: "none",
                    }}
                  />
                  <button
                    type="button"
                    className="position-absolute"
                    style={{
                      top: "50%",
                      right: "15px",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      color: "#999",
                      fontSize: "18px",
                      cursor: "pointer",
                    }}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="d-flex justify-content-between  ">
                <span><a className="text-light" href="">Track account opening  </a> </span>
                <span><a className="text-light" href="">Track segment activation </a></span>
                <span><a className="text-light" href="">Intraday </a></span>
                <span><a className="text-light" href="">Kite user manual </a></span>
              </div>
            </div>
            <div className="col-6 text-light  p-5">
              <p className="fs-4">Featured</p>
              <p className="fs-5">
                1. &nbsp;
                <a className="text-light" href="">
                  Latest Intraday leverages and Square-off timings
                </a>{" "}
              </p>
              <p className="fs-5">
                2. &nbsp;
                <a className="text-light" href="">
                  Offer for sale (OFS) – May 2025
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
