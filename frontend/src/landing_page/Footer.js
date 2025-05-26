import "./Footer.css"

function Footer() {
  return (
    <div
      className="container-fluid border-top"
      style={{ backgroundColor: "#fbfbfb" }}
    >
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="zerodhaLogo"
              style={{ width: "50%" }}
              className="mb-3"
            />
            <p>
              &copy; 2010 - 2025, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
            <div >
              <i className="fa-brands fa-x-twitter  "></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="fa-brands fa-square-facebook "></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="fa-brands fa-instagram "></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="fa-brands fa-linkedin-in "></i>
            </div>
            <hr />
            <div>
              <i className="fa-brands fa-youtube"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>

          <div className="col d-flex flex-column mr-5">
            <p className="mb-4">Company</p>
            <a href="#" style={{ textDecoration: "none" }}>
              About
            </a>{" "}
            <br />
            <a href="#" style={{ textDecoration: "none" }}>
              Philosophy
            </a>{" "}
            <br />
            <a href="#" style={{ textDecoration: "none" }}>
              Press & media
            </a>{" "}
            <br />
            <a href="#" style={{ textDecoration: "none" }}>
              Careers
            </a>{" "}
            <br />
            <a href="#" style={{ textDecoration: "none" }}>
              Zerodha Cares (CSR)
            </a>{" "}
            <br />
            <a href="#" style={{ textDecoration: "none" }}>
              Zerodha.tech
            </a>{" "}
            <br />
            <a href="#" style={{ textDecoration: "none" }}>
              Open source
            </a>
            <br />
          </div>

          <div className="col d-flex flex-column">
            <p>Support</p>
            <a href="" style={{ textDecoration: "none" }}>
              Contact us
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Support portal
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              How to file a complaint?
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Status of your complaints
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Z-Connect blog
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Downloads
            </a>
            <br />
          </div>

          <div className="col d-flex flex-column">
            <p>Account</p>
            <a href="" style={{ textDecoration: "none" }}>
              Open demat account{" "}
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Fund transfer
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Referral program
            </a>{" "}
            <br />
          </div>
        </div>

        <div className="mt-5 text-small text-muted">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>

        <div className="d-flex justify-content-evenly mb-5">
          <a href="" className=" footer-link text-muted" >
            NSE{" "}
          </a>
          <a href="" className=" footer-link text-muted" >
            BSE{" "}
          </a>
          <a href="" className=" footer-link text-muted" >
            MCX
          </a>
          <a href="" className=" footer-link text-muted" >
            Terms & conditions
          </a>
          <a href="" className=" footer-link text-muted" >
            Policies & procedures{" "}
          </a>
          <a href="" className=" footer-link text-muted" >
            Privacy policy{" "}
          </a>
          <a href="" className=" footer-link text-muted" >
            Disclosure{" "}
          </a>
          <a href="" className=" footer-link text-muted" >
            For investor's attention
          </a>
          <a href="" className=" footer-link text-muted" >
            Investor charter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
