import React from "react";

const Video = () => {
  return (
    <div>
      <div className="aa " style={{ height: "50rem" }}>
        <video
          src="https://media.istockphoto.com/id/1573971440/video/closeup-of-colorful-yellow-wagtail-perched-in-the-middle-of-willow-bushes-and-singing-on-a.mp4?s=mp4-640x640-is&k=20&c=5tDYsxf_9IsmrhcYKhjbgtLB8ClcoYBbeEN3VFIoONQ="
          autoPlay
          muted
          loop
          style={{ height: "50rem" }}
        ></video>

       <div className="bb">
       {/* <div class="Modern-Slider">
          <div class="item item-1">
            <div class="img-fill">
              <div class="text-content mt-5"> */}
                <h6>"LIVE IN THE LAP OF LUXURY"</h6>
                <h4>PARADISE CLUB</h4>
                <p>
                  The Paradise Club is an emerging travel and service provider.
                  It was the concept of leisure and luxury that brought us to
                  the establishment.
                </p>
              {/* </div>
            </div>
          </div>
        </div> */}
        hello
       </div>
      </div>
    </div>
  );
};

export default Video;
