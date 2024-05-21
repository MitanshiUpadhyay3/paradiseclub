import React from "react";

const Offers = () => {
  return (
    <div class="services">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h1>OUR SERVICES</h1>
            </div>
          </div>
          <div class="col-md-4">
            {/* hotel */}
            <div class="service-item">
              <img src={require("../images/hotel2.jpeg")} alt="" />
              <div className="card-body">
                <h5 style={{ textAlign: "center"}}>Hotel Booking</h5>
                <p className="content" style={{ textAlign: "center" }}>
                  Our colossal network comprises luxurious centric hotels,
                  budget hotels, beach resorts, hilltop holiday homes, forest
                  cottages, and many more accommodation facilities for you.
                  Select for the vast options we have to offer for top-notch
                  comfort and luxury.
                </p>
                <button>More Information</button>
              </div>
            </div>
            {/* <p
              className="service-name"
              style={{ textAlign: "center", fontSize: "20px", color: "white" }}
            >
              Hotels
            </p> */}

            {/* flight */}
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <img src={require("../images/flights.jpeg")} alt="" />
              <div className="card-body">
                <h5 style={{ textAlign: "center" }}>Flights</h5>
                <p className="content" style={{ textAlign: "center" }}>
                  The best option to book an airline ticket is online. You just
                  have to visit our website and book your flight tickets in just
                  one click. We have affordable fares and attractive deals as
                  well, so that you and your pocket both stay happy.
                </p>
                <button>More Information</button>
              </div>
            </div>
            {/* <p
              className="service-name"
              style={{ textAlign: "center", fontSize: "20px", color: "white" }}
            >
              Flights
            </p> */}

            {/* cruise */}
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <img src={require("../images/cruise.jpg")} alt="" />
              <div className="card-body">
                <h5 style={{ textAlign: "center" }}>Cruise</h5>
                <p className="content" style={{ textAlign: "center" }}>
                  Cruise travels are lavish and astounding, it offers a once in
                  lifetime experience. But many of us think that crous travels
                  are expensive, no need to worry, as we have great and
                  appealing cruise packages for all types of vessels available.
                </p>
                <button>More Information</button>
              </div>
            </div>
            {/* <p
              className="service-name"
              style={{ textAlign: "center", fontSize: "20px", color: "white" }}
            >
              Cruise
            </p> */}
          </div>
        </div>

        <div className="row my-5">
          <div className="col-md-1"></div>

          {/* Pickup */}
          <div className="col-md-4">
            <div class="service-item">
              <img src={require("../images/pickup.jpg")} alt="" />
              <div className="card-body">
                <h5 style={{ textAlign: "center" }}>Pickups and Drop</h5>
                <p className="content" style={{ textAlign: "center" }}>
                  For any traveller, commuting to the airport or railway station
                  is vital. When booking with us, we offer complimentary
                  (depending on the property terms & conditions) pickup and drop
                  services with all our packages, so that you have a
                  satisfactory stay.
                </p>
                <button>More Information</button>
              </div>
            </div>
            {/* <p
              className="service-name"
              style={{ textAlign: "center", fontSize: "20px", color: "white" }}
            >
              Pickups and Drop
            </p> */}

            {/* packages */}
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div class="service-item">
              <img src={require("../images/packages.jpeg")} alt="" />
              <div className="card-body">
                <h5 style={{ textAlign: "center" }}>Holiday Packages</h5>
                <p className="content" style={{ textAlign: "center" }}>
                  Breaking through various holiday destinations, we have all
                  sorts of holiday packages. Our organisation has it all, from
                  budget to luxury packages, from honeymoon packages to family
                  holidays, we also offer custom made packages.
                </p>
                <button>More Information</button>
              </div>
            </div>
            {/* <p
              className="service-name"
              style={{ textAlign: "center", fontSize: "20px", color: "white" }}
            >
              Holiday Packages
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
