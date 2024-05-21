import React, { useState } from 'react';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('tabs-1');

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="more-info">
      <div className="container">
        <div className="section-heading">
          <h2>Why choose us?</h2>
          
        </div>

        <div className="row" id="tabs">
          <div className="col-md-4">
            <ul>
              <li>
                <a href="#tabs-1" onClick={() => handleTabClick('tabs-1')}>
                Pocket friendly holiday packages... <br/>
                 
                </a>
              </li>
              <li>
                <a href="#tabs-2" onClick={() => handleTabClick('tabs-2')}>
                Vacations at affordable cost. <br/>
                  
                </a>
              </li>
              <li>
                <a href="#tabs-3" onClick={() => handleTabClick('tabs-3')}>
                Free breakfast to all the guests at the property.<br/>
                  
                </a>
              </li>
            </ul>

            <br/>

            <div className="text-center">
              <a href="blog.html" className="filled-button">Read More</a>
            </div>

            <br/>
          </div>

          <div className="col-md-8">
            <section className="tabs-content">
              <article id="tabs-1" style={{ display: activeTab === 'tabs-1' ? 'block' : 'none' }}>
                <img src={require("../images/hotel5.jpg")} alt="" style={{height: "25rem"}}/>
               
                <p>"Indulge in luxury beneath the sun-kissed skies, where every stay becomes an unforgettable escape. Welcome to our sanctuary of elegance and relaxation, where dreams meet reality."</p>
              </article>
              <article id="tabs-2" style={{ display: activeTab === 'tabs-2' ? 'block' : 'none' }}>
                <img src={require("../images/hotel2.jpeg")} alt="" style={{height: "25rem"}}/>
                <p>"Indulge in luxury beneath the sun-kissed skies, where every stay becomes an unforgettable escape. Welcome to our sanctuary of elegance and relaxation, where dreams meet reality."</p>
              </article>
              <article id="tabs-3" style={{ display: activeTab === 'tabs-3' ? 'block' : 'none' }}>
                <img src={require("../images/hotel4.jpg")} alt="" style={{height: "25rem"}}/>
                <p> "Indulge in luxury beneath the sun-kissed skies, where every stay becomes an unforgettable escape. Welcome to our sanctuary of elegance and relaxation, where dreams meet reality."
                </p>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
