function Footer() {
  return (
    <div
      className="container-fluid border-top "
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
            <div>
                <i className="fa-brands fa-x-twitter"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa-brands fa-square-facebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa-brands fa-instagram"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <hr  />
            <div>
                <i className="fa-brands fa-youtube"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa-brands fa-telegram"></i>
            </div>
            
          </div>
          <div className="col d-flex flex-column mr-5 " style={{ textDecoration: "none" }}>
            <p className="mb-4">Company</p>
            <a href="#">About</a> <br />
            <a href="#">Philosophy</a> <br />
            <a href="#">Press & media</a> <br />
            <a href="#">Careers</a> <br />
            <a href="#">Zerodha Cares (CSR)</a> <br />
            <a href="#">Zerodha.tech</a> <br />
            <a href="#">Open source</a>
            <br />
          </div>
          <div className="col  d-flex flex-column ">
            <p>Support</p>
            <a href="">Contact us</a> <br />
            <a href="">Support portal</a>
            <br />
            <a href="">How to file a complaint?</a>
            <br />
            <a href="">Status of your complaints</a>
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <a href="">Downloads</a>
            <br />
          </div>
          <div className="col  d-flex flex-column ">
            <p>Account</p>
            <a href="">Open demat account </a> <br />
            <a href="">Fund transfer</a> <br />
            <a href="">Referral program</a> <br />
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
        <div className="d-flex justify-content-evenly text-muted mb-5" >
            <a href="" >NSE </a>
            <a href="">BSE </a>
            <a href="">MCX</a>
            <a href="">Terms & conditions</a>
            <a href="">Policies & procedures </a>
            <a href="">Privacy policy </a>
            <a href="">Disclosure </a>
            <a href="">For investor's attention</a> 
            <a href="">Investor charter</a>
        </div>
      </div>

    </div>
  );
}

export default Footer;
