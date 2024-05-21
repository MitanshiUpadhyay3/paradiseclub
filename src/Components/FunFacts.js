import React from 'react'

const FunFacts = () => {
  return (
    <div class="fun-facts">
      <div class="container">
        <div class="more-info-content">
          <div class="row">
            <div class="col-md-6">
              <div class="left-image">
                <img src={require("../images/family.jpg")} class="img-fluid" alt=""/>
              </div>
            </div>
            <div class="col-md-6 align-self-center">
              <div class="right-content">
                
                <h2>Get to know about <em>our Luxury and comfort</em></h2>
                <p>Our colossal network comprises luxurious centric hotels, budget hotels, beach resorts, hilltop holiday homes, forest cottages, and many more accommodation facilities for you. Select for the vast options we have to offer for top-notch comfort and luxury.</p>
                <a href="about.html" class="filled-button">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FunFacts