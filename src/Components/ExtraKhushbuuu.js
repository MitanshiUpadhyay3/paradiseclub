import React from 'react'
import { Link } from 'react-router-dom'



const ExtraKhushbuuu = () => {
  return (
    <div>
      <div className="a">
      
        {/* <video src="pexels-mikhail-nilov-6981411 (1080p).mp4" controls></video> */}/
        <video src="https://media.istockphoto.com/id/1573971440/video/closeup-of-colorful-yellow-wagtail-perched-in-the-middle-of-willow-bushes-and-singing-on-a.mp4?s=mp4-640x640-is&k=20&c=5tDYsxf_9IsmrhcYKhjbgtLB8ClcoYBbeEN3VFIoONQ=" autoPlay muted loop ></video>
        
        <div className="b">
       
        <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={require("../images//The-Paradise-Club-Logo-2.png")} alt="" width={220} height={100} />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fleet">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
          
              <li className="nav-item">
                <Link className="nav-link" to="/team">tourist Blogs</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
      </div>
    </div>
  )
}

export default ExtraKhushbuuu
