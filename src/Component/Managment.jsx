import React from "react";
import img1 from "./management.jpg";
import img11 from "./EED1.jpeg";
import img2 from "./EED2.jpeg";
import img3 from "./EED3.jpeg";
import img4 from "./EED4.jpeg";
import Succsess from "./Succsess";
import WhatSetsAprt from "./WhatSetsAprt";
import Top1 from "../Component/TopCollage/Top1.jpg";
import Top2 from "../Component/TopCollage/Top2.jpg";
import Top3 from "../Component/TopCollage/Top3.jpg";
import Top4 from "../Component/TopCollage/Top4.jpg";
import Top5 from "../Component/TopCollage/Top5.jpg";
import Top6 from "../Component/TopCollage/Top6.jpg";
import Top7 from "../Component/TopCollage/Top7.jpg";
import Top8 from "../Component/TopCollage/Top8.jpg";
import Top9 from "../Component/TopCollage/Top9.jpg";
import Top10 from "../Component/TopCollage/Top10.jpg";
import Top11 from "../Component/TopCollage/Top11.jpg";
import Top12 from "../Component/TopCollage/Top12.jpg";
import Top13 from "../Component/TopCollage/Top13.jpg";
import Top14 from "../Component/TopCollage/Top14.jpg";
import Top15 from "../Component/TopCollage/Top15.jpg";
import Top16 from "../Component/TopCollage/Top16.jpg";
import WhychoosEDucomguy from "./WhychoosEDucomguy";
import WhatpeopleSayAboutus from "./WhatpeopleSayAboutus";
import  ConsultingServices from "./ConsultingServices";
// import Contact from "./Contact";
import ContactUs from "./ContactUs";

export default function Managment() {
  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <div className="row p-1">
          <div
            className="col-12 img p-3"
            style={{ maxWidth: "3000px", width: "100%" }}
          >
            <img src={img1} alt="" style={{ width: "100%", height: "auto" }} />
          </div>
        </div>
        <Succsess />
        <WhatSetsAprt />
        <div className="container mt-4 text-center">
          <h6 style={{ color: "rgb(249 115 22)" }}>TOP COLLEGES</h6>
          <h1>Top Management Colleges</h1>
          <p className="mt-4 lh-3">
            hoosing an MBA offers a dynamic skill set, fostering leadership and
            effective communication. The program provides extensive networking
            opportunities, connecting individuals with industry leaders
            globally. In terms of career scope, an MBA opens doors to diverse
            opportunities, from corporate leadership to entrepreneurship, with
            widespread recognition and value among employers. Ultimately, opting
            for an MBA is a strategic investment in professional growth,
            offering transformative experiences that propel individuals toward
            leadership roles and fulfilling careers. Our expert consultants are
            dedicated to guiding you every step of the way. We assist in
            selecting the finest institutes and provide support to secure
            admission to your dream college. We have an expert team specialized
            in management consultation,engineering consultation, and medical &
            pharma consultation in India.
          </p>
          {/* <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
            <div className="row my-3 ">
              <div className="col-5">
                <img src={Top1} alt="" style={{height:"200px", width:"400px"}} />
              </div>
              <div className="col-5">
                <img src={Top2} alt="" style={{height:"200px", width:"400px"}} />
              </div>
              
            </div>
            <div className="row my-3 ">
              <div className="col-5">
                <img src={Top3} alt="" style={{height:"200px", width:"400px"}} />
              </div>
              <div className="col-5">
                <img src={Top4} alt="" style={{height:"200px", width:"400px"}} />
              </div>

            <div className="row my-3 ">
              <div className="col-5">
                <img src={Top5} alt="" style={{height:"200px", width:"400px"}} />
              </div>
              <div className="col-5">
                <img src={Top6} alt="" style={{height:"200px", width:"400px"}} />
              </div>
            </div>
            <div className="row my-3 ">
              <div className="col-5">
                <img src={Top7} alt="" style={{height:"200px", width:"400px"}} />
              </div>
              <div className="col-5">
                <img src={Top8} alt="" style={{height:"200px", width:"400px"}} />
              </div>
            </div>
            <div className="row my-3 ">
              <div className="col-5">
                <img src={Top9} alt="" style={{height:"200px", width:"400px"}} />
              </div>
              <div className="col-5">
                <img src={Top10} alt="" style={{height:"200px", width:"400px"}} />
              </div>
            </div>
            <div className="row my-3 ">
              <div className="col-5">
                <img src={Top11} alt="" style={{height:"200px", width:"400px"}} />
              </div>
              <div className="col-5">
                <img src={Top12} alt="" style={{height:"200px", width:"400px"}} />
              </div>
            </div>
            <div className="row my-3 ">
              <div className="col-5">
                <img src={Top13} alt="" style={{height:"200px", width:"400px"}} />
              </div>
              <div className="col-5">
                <img src={Top14} alt="" style={{height:"200px", width:"400px"}} />
              </div>
            </div>
            <div className="row my-3 ">
              <div className="col-5">
                <img src={Top15} alt="" style={{height:"200px", width:"400px"}} />
              </div>
              <div className="col-5">
                <img src={Top16} alt="" style={{height:"200px", width:"400px"}} />
              </div>
            </div>
            </div>
          </div> */}
          <div className="container my-5 p-5">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <div
                  className="image-wrapper"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={Top1}
                    alt="Image 1"
                    className="img-fluid"
                    style={{
                      height: "300px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="image-wrapper"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={Top2}
                    alt="Image 2"
                    className="img-fluid"
                    style={{
                      height: "300px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="image-wrapper"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={Top3}
                    alt="Image 3"
                    className="img-fluid"
                    style={{
                      height: "300px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="image-wrapper"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={Top4}
                    alt="Image 4"
                    className="img-fluid"
                    style={{
                      height: "300px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="image-wrapper"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={Top5}
                    alt="Image 5"
                    className="img-fluid"
                    style={{
                      height: "300px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="image-wrapper"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={Top6}
                    alt="Image 6"
                    className="img-fluid"
                    style={{
                      height: "300px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="image-wrapper"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={Top7}
                    alt="Image 7"
                    className="img-fluid"
                    style={{
                      height: "300px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="image-wrapper"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={Top8}
                    alt="Image 8"
                    className="img-fluid"
                    style={{
                      height: "300px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="image-wrapper"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={Top9}
                    alt="Image 7"
                    className="img-fluid"
                    style={{
                      height: "300px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="image-wrapper"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={Top10}
                    alt="Image 8"
                    className="img-fluid"
                    style={{
                      height: "300px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="image-wrapper"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={Top11}
                    alt="Image 7"
                    className="img-fluid"
                    style={{
                      height: "300px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="image-wrapper"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={Top12}
                    alt="Image 8"
                    className="img-fluid"
                    style={{
                      height: "300px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="image-wrapper"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={Top13}
                    alt="Image 7"
                    className="img-fluid"
                    style={{
                      height: "300px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="image-wrapper"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={Top14}
                    alt="Image 8"
                    className="img-fluid"
                    style={{
                      height: "300px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="image-wrapper"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={Top15}
                    alt="Image 7"
                    className="img-fluid"
                    style={{
                      height: "300px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="image-wrapper"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={Top1}
                    alt="Image 8"
                    className="img-fluid"
                    style={{
                      height: "300px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4 text-center">
          <h6 style={{ color: "rgb(249 115 22)" }}>ENTRANCE EXAMS</h6>
          <h1>Management Entrance Exams</h1>
          <div className="row bg-primary d-flex justify-content-center align-items-center" style={{height:"300px"}}>
            <div className="row">

                <div className="col  border border-1 mx-1 d-flex justify-content-center align-items-center" style={{height:"100px",backgroundColor:"#FFFFFF",color:"rgb(249 115 22)"}}>
                      CAT
                </div>
                <div className="col  border border-1 mx-1 d-flex justify-content-center align-items-center" style={{height:"100px",backgroundColor:"#FFFFFF",color:"rgb(249 115 22)"}}>
                XAT
                </div>
                <div className="col  border border-1 mx-1 d-flex justify-content-center align-items-center" style={{height:"100px",backgroundColor:"#FFFFFF",color:"rgb(249 115 22)"}}>
                GMAT
                </div>
                <div className="col  border border-1 mx-1 d-flex justify-content-center align-items-center" style={{height:"100px",backgroundColor:"#FFFFFF",color:"rgb(249 115 22)"}}>
                MAH CET
                </div>
                <div className="col  border border-1 mx-1 d-flex justify-content-center align-items-center" style={{height:"100px",backgroundColor:"#FFFFFF",color:"rgb(249 115 22)"}}>
                SNAP
                </div>
                <div className="col  border border-1 mx-1 d-flex justify-content-center align-items-center" style={{height:"100px",backgroundColor:"#FFFFFF",color:"rgb(249 115 22)"}}>
                NMAT
                </div>
                
              
            </div>
          </div>
        </div>
        <WhychoosEDucomguy/>
        <WhatpeopleSayAboutus/>
        < ConsultingServices/>
        {/* <Contact/> */}
        <ContactUs/>
      </div>
    </>
  );
}
