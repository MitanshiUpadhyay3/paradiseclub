import React from "react";

const Gallery = () => {
  return (
    <div className="main">
      <div className="container">
        {/* <div className="row">
          <div className="col-md-4">
            <div className="service-item">
              <img src={require('../images/product-1-720x480.jpg')} alt=""/>
              <div className="down-content">
                <h4>Lorem ipsum dolor sit amet</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from <sup>$</sup>120 per weekend</span>
                </div>
                <p>
                  <i className="fa fa-user" title="passegengers"></i> 5 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-briefcase" title="luggages"></i> 4 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-sign-out" title="doors"></i> 4 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-cog" title="transmission"></i> A
                </p>
                <a href="#" data-toggle="modal" data-target="#exampleModal" className="filled-button">Book Now</a>
              </div>
            </div>

            <br/>
          </div>

          <div className="col-md-4">
            <div className="service-item">
              <img src={require("../images/product-2-720x480.jpg")} alt=""/>
              <div className="down-content">
                <h4>Lorem ipsum dolor sit amet</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from <sup>$</sup>120 per weekend</span>
                </div>
                <p>
                  <i className="fa fa-user" title="passegengers"></i> 5 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-briefcase" title="luggages"></i> 4 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-sign-out" title="doors"></i> 4 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-cog" title="transmission"></i> A
                </p>
                <a href="#" data-toggle="modal" data-target="#exampleModal" className="filled-button">Book Now</a>
              </div>
            </div>

            <br/>
          </div>

          <div className="col-md-4">
            <div className="service-item">
              <img src={require("../images/product-3-720x480.jpg")} alt=""/>
              <div className="down-content">
                <h4>Lorem ipsum dolor sit amet</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from <sup>$</sup>120 per weekend</span>
                </div>
                <p>
                  <i className="fa fa-user" title="passegengers"></i> 5 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-briefcase" title="luggages"></i> 4 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-sign-out" title="doors"></i> 4 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-cog" title="transmission"></i> A
                </p>
                <a href="#" data-toggle="modal" data-target="#exampleModal" className="filled-button">Book Now</a>
              </div>
            </div>

            <br/>
          </div>

          <div className="col-md-4">
            <div className="service-item">
              <img src={require("../images/product-4-720x480.jpg")} alt=""/>
              <div className="down-content">
                <h4>Lorem ipsum dolor sit amet</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from <sup>$</sup>120 per weekend</span>
                </div>
                <p>
                  <i className="fa fa-user" title="passegengers"></i> 5 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-briefcase" title="luggages"></i> 4 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-sign-out" title="doors"></i> 4 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-cog" title="transmission"></i> A
                </p>
                <a href="#" data-toggle="modal" data-target="#exampleModal" className="filled-button">Book Now</a>
              </div>
            </div>

            <br/>
          </div>

          <div className="col-md-4">
            <div className="service-item">
              <img src={require("../images/product-5-720x480.jpg")} alt=""/>
              <div className="down-content">
                <h4>Lorem ipsum dolor sit amet</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from <sup>$</sup>120 per weekend</span>
                </div>
                <p>
                  <i className="fa fa-user" title="passegengers"></i> 5 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-briefcase" title="luggages"></i> 4 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-sign-out" title="doors"></i> 4 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-cog" title="transmission"></i> A
                </p>
                <a href="#" data-toggle="modal" data-target="#exampleModal" className="filled-button">Book Now</a>
              </div>
            </div>

            <br/>
          </div>

          <div className="col-md-4">
            <div className="service-item">
              <img src={require("../images/product-6-720x480.jpg")} alt=""/>
              <div className="down-content">
                <h4>Lorem ipsum dolor sit amet</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from <sup>$</sup>120 per weekend</span>
                </div>
                <p>
                  <i className="fa fa-user" title="passegengers"></i> 5 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-briefcase" title="luggages"></i> 4 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-sign-out" title="doors"></i> 4 &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-cog" title="transmission"></i> A
                </p>
                <a href="#" data-toggle="modal" data-target="#exampleModal" className="filled-button">Book Now</a>
              </div>
            </div>

            <br/>
          </div>
        </div> */}
        <div className="gallery-grid">
          <figure className="gallery-frame">
            <img
              className="gallery-img"
              src="https://theparadiseclub.in/wp-content/gallery/accommodations/goa-beach-2.jpg"
              alt="symbol image"
              title="symbol image"
            />
            <figcaption  className="caption">Goa Beach</figcaption>
          </figure>
          <figure className="gallery-frame">
            <img
              className="gallery-img"
              src="https://theparadiseclub.in/wp-content/gallery/accommodations/Boat-Trip-in-Goa.jpg"
              alt="symbol image"
              title="symbol image"
            />
            <figcaption className="caption">Boat Trip in Goa</figcaption>
          </figure>
          <figure className="gallery-frame">
            <img
              className="gallery-img"
              src="https://theparadiseclub.in/wp-content/gallery/accommodations/Untitled-design-5-min.jpg"
              alt="symbol image"
              title="symbol image"
            />
            <figcaption className="caption">Baga Beach</figcaption>
          </figure>
          <figure className="gallery-frame">
            <img
              className="gallery-img"
              src="https://theparadiseclub.in/wp-content/gallery/accommodations/goa.jpg"
              alt="symbol image"
              title="symbol image"
            />
            <figcaption className="caption">Panji</figcaption>
          </figure>
          <figure className="gallery-frame">
            <img
              className="gallery-img"
              src="https://theparadiseclub.in/wp-content/gallery/accommodations/goa1.png"
              alt="symbol image"
              title="symbol image"
            />
            <figcaption className="caption">Kerala</figcaption>
          </figure>
          <figure className="gallery-frame">
            <img
              className="gallery-img"
              src="https://theparadiseclub.in/wp-content/gallery/accommodations/Fort-Aguada.jpg"
              alt="symbol image"
              title="symbol image"
            />
            <figcaption className="caption">Fort Aguada</figcaption>
          </figure>
          <figure className="gallery-frame">
            <img
              className="gallery-img"
              src="https://theparadiseclub.in/wp-content/gallery/accommodations/Cruise_Panji_Goa_-_panoramio.jpg"
              alt="symbol image"
              title="symbol image"
            />
            <figcaption className="caption">Cruise in Goa</figcaption>
          </figure>
          <figure className="gallery-frame">
            <img
              className="gallery-img"
              src="https://lh3.googleusercontent.com/proxy/bgXV_xWUGhmPx2QFH5Ne723KIAnQl6WBlkGzfh5scoeqeBfiDnojl6aL6nsfpThPB9CGVFOqiUCgkEeS5GnhzH86usNBSq4G589A0bSLAGOZ1336vauYhFe38iBBsmYjU1UI3HLhoVoiS6ushNIItxPJbiId298=s1360-w1360-h1020"
              alt="symbol image"
              title="symbol image"
            />
            <figcaption className="caption">Dudhsagar Lake</figcaption>
          </figure>
          <figure className="gallery-frame">
            <img
              className="gallery-img"
              src="https://www.keralatourism.org/images/destination/large/kovalam20131031105847_236_1.jpg"
              alt="symbol image"
              title="symbol image"
            />
            <figcaption className="caption">Kovalam Beach</figcaption>
          </figure>
          <figure className="gallery-frame">
            <img
              className="gallery-img"
              src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQVFNvZkZJNIHANC2wkI2onVIto-K0H_hXCDMBC1L3OkSl7CfhugUgeKYa6T9J8ydOjQJ5BswCt4-2gwhj6cuDwF-JtpL9Ie6Q23fhVmQ"
              alt="symbol image"
              title="symbol image"
            />
            <figcaption className="caption">Kochi</figcaption>
          </figure>
          <figure className="gallery-frame">
            <img
              className="gallery-img"
              src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTRunjt77N6q2pkHrLD5TOqLR2OtZ4UhQr2HSykkASzFZSOJgAB-P4ZsmXCGo64eNRAbnbFNA3oRZTlZjHdc3rAI0tGiBvJrpuVCD0TOw"
              alt="symbol image"
              title="symbol image"
            />
            <figcaption className="caption">Munnar</figcaption>
          </figure>
          <figure className="gallery-frame">
            <img
              className="gallery-img"
              src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT4fALnFFR5dyT6x63pcguMoyefUc1HQg1RyHwI6Ag1n4g65il5bbMJ5RbxKzt7lZYezMQewCpoIuh6cg-M8JtOeMWcC4vJvPDO54O5WA"
              alt="symbol image"
              title="symbol image"
            />
            <figcaption className="caption">Ooty</figcaption>
          </figure>
        </div>

        <br />
        <br />

        
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Gallery;
