import React from "react";
import image1 from "./councellingimage.webp";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import card1 from "./card1.jpeg";
import card2 from "./card2.jpeg";
import card3 from "./card3.jpeg";
import card4 from "./card4.jpeg";
import card5 from "./card5.jpeg";

import Contact from "./Contact";
import WhychoosEDucomguy from "./WhychoosEDucomguy";
import WhatpeopleSayAboutus from "./WhatpeopleSayAboutus";
import Succsess from "./Succsess";
import ContactUs from "./ContactUs";

export default function Home() {
  // Function to get styles based on window width
  const getTextContainerStyle = () => {
    const width = window.innerWidth;
    if (width >= 1200) {
      return {
        position: "relative",
        bottom: "500px",
        right: "300px",
        color: "#FFFFFF",
      };
    } else if (width >= 992) {
      return {
        position: "relative",
        bottom: "300px",
        right: "200px",
        color: "#FFFFFF",
      };
    } else if (width >= 768) {
      return {
        position: "relative",
        bottom: "200px",
        right: "100px",
        color: "#FFFFFF",
      };
    } else {
      return {
        position: "relative",
        bottom: "0",
        right: "0",
        color: "#FFFFFF",
      };
    }
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="row p-4">
        <div
          className="col-12 img p-3"
          style={{ maxWidth: "2000px", width: "100%" }}
        >
          <img src={image1} alt="" style={{ width: "100%", height: "auto" }} />
        </div>
      </div>
      {/* <div className="container-fluid text-center mb-4">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-2 mx-3">
            <span>SUCCESSFUL ADMISSIONS</span>
            <hr style={{ height: "5px", backgroundColor: "orange" }} />
            <h3 style={{ color: "blue" }}>5000+</h3>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-3">
            <span>YEARS OF EXPERIENCE</span>
            <hr style={{ height: "5px", backgroundColor: "orange" }} />
            <h3 style={{ color: "blue" }}>14+</h3>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-3">
            <span>TOP COLLEGE PARTNERS</span>
            <hr style={{ height: "5px", backgroundColor: "orange" }} />
            <h3 style={{ color: "blue" }}>200+</h3>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-3">
            <span>SUCCESS RATE</span>
            <hr style={{ height: "5px", backgroundColor: "orange" }} />
            <h3 style={{ color: "blue" }}>99%</h3>
          </div>
        </div>
      </div> */}
      <Succsess/>
      <div className="container about d-flex ">
        <div className="row ">
          <div className="col-12 col-md-6 mb-4  text-center">
            <h1 style={{ color: "rgb(249 115 22)" }}>About us</h1>
            <hr style={{ height: "5px", backgroundColor: "orange" }} />
            <p>
              Educom Guidance is a leading education consultancy, dedicated to
              personalized guidance with a rich 14-year legacy. Specializing in
              MBA admission, Engineering admission, and Medical admissions, we
              acknowledge the complexities of navigating the educational
              landscape. Our seasoned education consultants, with their wealth
              of experience, excel in simplifying intricate processes and
              guiding individuals toward success. We take pride in our extensive
              network, connected with 200+ top colleges and universities in
              India. With over 5000 success stories, Educom Guidance is a
              trusted partner illuminating the path to educational achievement
              in business, engineering, and medicine.
            </p>
          </div>
          <div className="col-12 col-md-6  mt-5">
            <div className="row">
              <div className="col-6 mb-3">
                <img
                  src={img1}
                  alt=""
                  className="img-fluid rounded shadow-sm"
                />
              </div>
              <div className="col-6 mb-3">
                <img
                  src={img2}
                  alt=""
                  className="img-fluid rounded shadow-sm"
                />
              </div>
              <div className="col-6 mb-3">
                <img
                  src={img3}
                  alt=""
                  className="img-fluid rounded shadow-sm"
                />
              </div>
              <div className="col-6 mb-3">
                <img
                  src={img4}
                  alt=""
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3 text-center">
        <div className="row my-4 text-center">
          <span>offer</span>
          <h1 style={{ color: "rgb(249 115 22)" }}>What we offer </h1>
          <hr style={{ height: "5px", backgroundColor: "orange" }} />

          <div className="row mt-4">
            <div className="col-md-6 mt-3">
              <div className="card p-3 shadow-sm">
                <div className="col-12 text-center">
                  <img
                    src={card1}
                    alt=""
                    style={{ height: "100px", width: "100px" }}
                  />
                  <h3>​CAREER COUNSELING</h3>
                </div>
                <div className="col lh-5">
                  <p>
                    Explore meaningful career paths with our career counseling
                    services. Our consultants provide assessments, guidance on
                    career trajectories, and support in developing the skills
                    necessary for success in today's competitive job market.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-3 ">
              <div className="card p-3 shadow-sm">
                <div className="col-12 text-center">
                  <img
                    src={card3}
                    alt=""
                    style={{ height: "100px", width: "100px" }}
                  />
                  <h3>POST-ADMISSION ASSISTANCE</h3>
                </div>
                <div className="col lh-5">
                  <p>
                    Receive guidance on settling into your chosen program and
                    navigating the initial stages of your academic journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6 mt-3">
              <div className="card p-3 shadow-sm">
                <div className="col-12 text-center">
                  <img
                    src={card4}
                    alt=""
                    style={{ height: "100px", width: "100px" }}
                  />
                  <h3>​CAREER COUNSELING</h3>
                </div>
                <div className="col lh-5">
                  <p>
                    Explore meaningful career paths with our career counseling
                    services. Our consultants provide assessments, guidance on
                    career trajectories, and support in developing the skills
                    necessary for success in today's competitive job market.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-3 ">
              <div className="card p-3 shadow-sm">
                <div className="col-12 text-center">
                  <img
                    src={card2}
                    alt=""
                    style={{ height: "100px", width: "100px" }}
                  />
                  <h3>​PERSONALIZED CONSULTATION</h3>
                </div>
                <div className="col lh-5">
                  <p>
                    Recognizing that each educational journey is unique, we take
                    a personalized approach to our consultation services.
                    Whether you're aiming for an MBA, engineering degree, or
                    medical school, our consultants tailor their guidance to
                    meet your specific needs and aspirations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="card p-3 shadow-sm text-center">
              <img
                src={card5}
                alt=""
                style={{ height: "100px", width: "100px", margin: "auto" }}
              />
              <p>
                Our commitment doesn't end with admission – we provide ongoing
                support throughout your academic and professional journey.
              </p>
            </div>
          </div>
        </div>
      </div>
      
     <WhatpeopleSayAboutus/>
      <WhychoosEDucomguy/>
      <ContactUs/>
    </div>
  );
}
