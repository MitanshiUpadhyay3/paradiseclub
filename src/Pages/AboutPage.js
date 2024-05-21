import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
// import FunFacts from '../Components/FunFacts'

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <Hero title="About" />
      {/* <FunFacts/> */}
      <div class="fun-facts">
        <div class="container">
          <div class="more-info-content">
            <div class="row">
              <div class="col-md-6">
                <div class="left-image">
                  <img
                    src={require("../images/about1.jpg")}
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-6 align-self-center">
                <div class="right-content">
                  <h2>
                    ABOUT <em>PARADISE CLUB</em>
                  </h2>
                  <p>
                    We at The Paradise Club are certain to offer best in class
                    services that will give you an experience of endless joy
                    with your family and friends. Be good to yourself by
                    allowing us to care for all your luxury needs as we serve
                    you with the finest. The Paradise Club is a
                    multi-destination holiday concept created with a perception
                    to provide modern lifestyle, leisure, sports, and
                    entertainment opportunities by establishing world-class
                    clubs devoted to improving the quality of urban life.
                  </p>

                  <a href="about.html" class="filled-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fun-facts">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="left-content">
                <h3>
                  <em>Mission</em>
                </h3>
                <p>
                  To establish long lasting relationship with our customers by
                  exceeding their expectations and offering them good living
                  experience.
                </p>
                <br />
                <h3>
                  <em>VISION</em>
                </h3>
                <p>
                  To create astounding experience for travelers by combining
                  outstanding and quality services at affordable rates.
                </p>
                <br />
                <h3>
                  <em>WHY CHOOSE US</em>
                </h3>
                <p>
                  -Pocket friendly holiday packages
                  <br />
                  -Vacations at affordable cost.
                  <br />
                  -Free breakfast to all the guests at the property.
                  <br />
                  -Flight booking at a reasonable price.
                </p>
                <br />
              </div>
            </div>
            <div class="col-md-6 align-self-center">
              <div class="row">
                <div class="col-md-6">
                  <div class="count-area-content">
                    <div class="count-digit">100000</div>
                    <div class="count-title">Miles driven</div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="count-area-content">
                    <div class="count-digit">1280</div>
                    <div class="count-title">Happy clients</div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="count-area-content">
                    <div class="count-digit">12</div>
                    <div class="count-title">Cities</div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="count-area-content">
                    <div class="count-digit">26</div>
                    <div class="count-title">5 star Resorts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
