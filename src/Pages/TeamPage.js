import React from 'react'
import Hero from '../Components/Hero'

const TouristBlog = () => {
  return (
    <div>
        <Hero title="Tourist Blog"/>
        <div class="team" style={{ margin: "0" }}>
      <div class="container">
        <div class="row tourPara">
          <div className="col-md-6">
            <h2>TOURIST DESTINATIONS TO EXPLORE IN ASIA</h2>
          <p>Asia is the most populous and largest continent, both in terms of people and land area. Asia is a diversified region with a multicultural population that coexists peacefully. This amount of geographical, religious, and cultural variety, all merging into a magnificent composite, can be found in no other part of the globe.</p>
          <p>There is so much to see and do in this country that you could easily spend months exploring it. But don’t worry, we’ve made it easier for you to plan your trip by compiling a list of the top spots to visit in Asia.</p>
          </div>
          <div className="col-md-6">
              <div className="imgTour ">
              <img src={require("../images/hotel3.avif")} alt=""/>
              </div>
          </div>
          </div>




          <div className="row">
          <div class="col-md-4">
            <div class="team-item">
              {/* <img src={require("../images/offer-1-720x480.jpg")} alt=""/> */}
              <div class="down-content">
                <h4><a href="#">5 Unique Boutique Hotels in India</a></h4>
                {/* <span>Co-Founder</span> */}
                <p>India is a country with so many different cultures, languages, and religions. It’s no wonder that there are so many boutique hotels in India to choose from! From the luxurious Taj Mahal Palace Hotel in Mumbai to the quaint Kodaikanal Lake Resort near Chennai, you’re sure to find what you’re</p>
                <br/>
                <br/>

                <p>
                  <a href="#"><span><i class="fa fa-linkedin"></i></span></a>
                </p>
              </div>
            </div>
          </div>


          <div class="col-md-4">
            <div class="team-item">
              {/* <img src={require("../images/team-image-2-646x680.jpg")} alt=""/> */}
              <div class="down-content">
                <h4><a href="#">Top 5 Places to Visit in Australia for a Holiday</a></h4>
                {/* <span>Chief Marketing Officer</span> */}
                <p>Australia, located between the Pacific and Indian oceans, is  smallest continent but the largest country in Oceania and  world's sixth-largest country. There are numerous things to explore in the country, whether it is exploring the picturesque , spotting species that are not seen in the rest of the</p>
                <br/>
                <br />
                <p>
                  <a href="#"><span><i class="fa fa-linkedin"></i></span></a>
                </p>
              </div>
            </div>
          </div>


          <div class="col-md-4">
            <div class="team-item">
              {/* <img src={require("../images/team-image-3-646x680.jpg")} alt=""/> */}
              <div class="down-content">
                <h4><a href="#">Most Romantic Honeymoon Destination In The World</a></h4>
                {/* <span>Financial Analyst</span> */}
                <p>After months of preparation, you've tied the knot! After all the craziness of the wedding—finding a location, getting your dress to the tailor, obsessing over logistics, and dealing with that one cousin who always gets high at weddings—the last thing you want to think about is preparing your honeymoon.</p>
                <br />
                <p>
                  <a href="#"><span><i class="fa fa-linkedin"></i></span></a>
                </p>
              </div>
            </div>
          </div>
        </div>








        <div className="row my-5">
          <div className="col-md-2"></div>
        <div class="col-md-4">
            <div class="team-item">
              {/* <img src={require("../images/offer-1-720x480.jpg")} alt=""/> */}
              <div class="down-content">
                <h4><a href="#">Tourist Destinations to Explore in Asia</a></h4>
                {/* <span>Co-Founder</span> */}
                <p>Asia is the most populous and largest continent, both in terms of people and land area. Asia is a diversified region with a multicultural population that coexists peacefully. This amount of geographical, religious, and cultural variety, all merging into a magnificent composite, can be found in no other part of</p>
                <br />
                <p>
                  <a href="#"><span><i class="fa fa-linkedin"></i></span></a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="team-item">
              {/* <img src={require("../images/offer-1-720x480.jpg")} alt=""/> */}
              <div class="down-content">
                <h4><a href="#">A Day Trip From Mumbai to Matheran</a></h4>
                {/* <span>Co-Founder</span> */}
                <p>Matheran requires no introduction. The smallest hill station in India is a favourite weekend retreat located a little over 90 kilometers from Mumbai and 120 kilometers from Pune. The Indian Ministry of Environment and Forest has designated it as an eco-sensitive zone. However, the unique reason to visit Matheran is</p>

                <p>
                  <a href="#"><span><i class="fa fa-linkedin"></i></span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TouristBlog