import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="ft1">
        <div class="container">
          <div class="row">
            <div class="col-md-3 footer-item">
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "700",
                  marginBottom: "20px",
                  textDecoration: "underline",
                  color: "#a39e86",
                }}
              >
                THE PARADISE CLUB
              </p>
              <p>
                <h4>Head Office :</h4>
              </p>
              <p>
                301-302, 3rd Floor, Sarthi Complex Above Planet Health, Opp.
                Nutan Bharat Club, DR. Rustom Cama Road,Alkapuri,Vadodara-390007
              </p>
              <ul class="social-icons">
                <li>
                  <a rel="nofollow" href="#" target="_blank">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 footer-item">
              <h4 style={
                {textDecoration: "underline"}
              }>Our Club</h4>
              <p style={{color:"goldenrod"}}>Serene Cottages And Resort</p>

              <p>
                ( A Unit Of The Paradise Club ) Village Bamangam, Padra To
                Ghambhira Highway, Murlidhar Lane, Near Om Petrol Pump, Gujarat
                388520
              </p>
            </div>
            <div class="col-md-3 footer-item">
              <h4 style={
                {textDecoration: "underline"}
              }>Additional Pages</h4>
              <ul class="menu-list">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 footer-item last-item">
              <h4 style={
                {textDecoration: "underline"}
              }>Contact Us</h4>
              <div class="contact-form">
                <form id="contact footer-contact" action="" method="post">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Full Name"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          class="form-control"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="E-Mail Address"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          class="form-control"
                          id="message"
                          placeholder="Your Message"
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          class="filled-button"
                        >
                          Send Message
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
