function DematAccount() {
  return (
    <div className="container-fluid mb-5">
      <div className="container text-center p-4">
        <h1>Steps to open a demat account with Zerodha</h1>
        <div className="row p-5 mt-5">
          <div className="col-6">
            <img src="media/images/steps-acop.svg" />
          </div>
          <div className="col-6 fs-4">
            <div className="d-flex align-items-center mb-3">
              <span className="border rounded-circle p-2 me-3">01</span>
              <span>Enter the requested details</span>
            </div>
            <hr />
            <div className="d-flex align-items-center mb-3">
              <span className="border rounded-circle p-2 me-3">02</span>
              <span>Complete e-sign & verification</span>
            </div>
            <hr />
            <div className="d-flex align-items-center mb-3">
              <span className="border rounded-circle p-2 me-3">03</span>
              <span>Start investing!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DematAccount;
