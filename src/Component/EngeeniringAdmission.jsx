import React from "react";
import img1 from "./EA-1.jpg";

import png1 from "./png1.png";
import png2 from "./png2.png";
import png3 from "./png3.png";
import png4 from "./png4.png";
import png5 from "./png5.png";
import png6 from "./png6.png";

import Imageslider from "./Imageslider";
import logo1 from "./logo1.jpeg";
import logo2 from "./logo2.jpeg";
import logo3 from "./logo3.jpeg";
import logo4 from "./logo4.jpeg";
import Contact from "./Contact";
import Topcollages from "./Topcollages";
import WhatSetsAprt from "./WhatSetsAprt";
import WhatpeopleSayAboutus from "./WhatpeopleSayAboutus";
import WhychoosEDucomguy from "./WhychoosEDucomguy";
import ConsultingServices from "./ConsultingServices";
import ContactUs from "./ContactUs";

export default function EngeeniringAdmission() {
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
    <>
      <div className="EA container-fluid d-flex flex-column justify-content-center align-items-center">
        <div className="row p-1">
          <div
            className="col-12 img p-3"
            style={{ maxWidth: "2000px", width: "100%" }}
          >
            <img src={img1} alt="" style={{ width: "100%", height: "auto" }} />
          </div>
        </div>
        <div className="container-fluid text-center mb-4">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3 ">
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
        </div>
      </div>
      <WhatSetsAprt/>
      <div className="container mt-4 text-center">
        <h1 style={{ color: "rgb(249 115 22)" }}>FEW WORDS ABOUT US</h1>
        <p className="mt-4 lh-3">
          Welcome to Educom Guidance, we’re specialized Engineering Admission
          Consultation! Our skilled Engineering Consultants are here to expertly
          navigate you through the intricate process of securing admission to
          premier engineering colleges. Whether it's crafting a compelling
          application or mastering entrance exams, our personalized support
          maximizes your chances of success. Let our Engineering Consultants
          assist you in unlocking the doors to your promising future in
          engineering – reach out to us today! We have Dedicated expert team
          specialized in management consultation, engineering consultation,
          medical consultation, and other Courses in India.
        </p>
      </div>
      <div className="container mt-5 text-center">
        <h6 style={{ color: "rgb(249 115 22)" }}>
          TYPES OF ENGINEERING COURSES
        </h6>
        <h1>Engineering Branches</h1>
        <p className="mt-4 lh-3">
          Engineering encompasses various specialized branches, each offering
          distinct fields of study and career paths. Some common engineering
          branches include:
        </p>
        .
      </div>
      <div className="slider">{/* <Imageslider/> */}</div>
      <div className="container text-center d-flex flex-column justify-content-center align-items-center">
        <h6 className="mt-5" style={{ color: "rgb(249 115 22)" }}>
          ENTRANCE EXAMS
        </h6>
        <h1>Engineering Entrance Exams</h1>
        <div className="col-12 col-md-6  mt-4">
          <div className="row">
            <div className="col-6 mb-3 d-flex flex-column px-5">
              <img src={png1} alt="" className="img-fluid rounded shadow-sm" />
              <span>JEE Advance</span>
            </div>
            <div className="col-6 mb-3 d-flex flex-column px-5">
              <img src={png2} alt="" className="img-fluid rounded shadow-sm" />
              <span>UPSEE</span>
            </div>
            <div className="col-6 mb-3 d-flex flex-column px-5">
              <img src={png3} alt="" className="img-fluid rounded shadow-sm" />
              <span>VITEEE</span>
            </div>
            <div className="col-6 mb-3 d-flex flex-column px-5">
              <img src={png4} alt="" className="img-fluid rounded shadow-sm" />
              <span>JEE Main</span>
            </div>
            <div className="col-6 mb-3 d-flex flex-column px-5">
              <img src={png5} alt="" className="img-fluid rounded shadow-sm" />
              <span>MET</span>
            </div>
            <div className="col-6 mb-3 d-flex flex-column px-5">
              <img src={png6} alt="" className="img-fluid rounded shadow-sm" />
              <span>MH CET</span>
            </div>
            {/* <div className="col-6 mb-3">
                <div>
                <img
                  src={img2}
                  alt=""
                  className="img-fluid rounded shadow-sm"
                />
                </div>
                <p>14+ Experience</p>
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
              </div> */}
          </div>
        </div>
      </div>
        <Topcollages/>

        <WhychoosEDucomguy/>
         <WhatpeopleSayAboutus/>
         <ConsultingServices/>
        <ContactUs/>
    </>
  );
}
