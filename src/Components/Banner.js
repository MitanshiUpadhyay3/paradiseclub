import React from "react";

const Banner = () => {
  return (
    // <div class="main-banner header-text" id="top">
    //     <div class="Modern-Slider">

    //       <div class="item item-1">
    //         <div class="img-fill">
    //             <div class="text-content mt-5">
    //               <h6>"LIVE IN THE LAP OF LUXURY"</h6>
    //               <h4>PARADISE  CLUB</h4>
    //               <p>The Paradise Club is an emerging travel and service provider. It was the concept of leisure and luxury that brought us to the establishment.</p>

    //             </div>
    //         </div>
    //       </div>

    //     </div>
    // </div>



    <div>
      <div className="aa " style={{ height: "50rem" }}>
        
        <video
          src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-coast-with-motorboats-and-a-pier-seen-from-the-5363-large.mp4"
          autoPlay
          muted
          loop
          style={{ height: "50rem" }}
        >
        </video>
          

        <div className="bb col-md-6">
      
          <h6>"LIVE IN THE LAP OF LUXURY"</h6>
          <h4>PARADISE CLUB</h4>
          <p>
            The Paradise Club is an emerging travel and service provider. It was
            the concept of leisure and luxury that brought us to the
            establishment.
          </p>
          
          
        </div>
        <div className="cc"></div>
        </div>
      </div>
    
  );
};

export default Banner;
