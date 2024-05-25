import React from "react";
import img1 from "./madical.jpg";
import WhatSetsAprt from "./WhatSetsAprt";
import WhatpeopleSayAboutus from "./WhatpeopleSayAboutus";
import WhychoosEDucomguy from "./WhychoosEDucomguy";
import ConsultingServices from "./ConsultingServices";
import Contact from "./Contact";
import Succsess from "./Succsess";
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
import ContactUs from "./ContactUs";
export default function Madical() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="row p-1 mt-3">
        <div
          className="col-12 img p-3"
          style={{ maxWidth: "2000px", width: "100%" }}
        >
          <img src={img1} alt="" style={{ width: "100%", height: "auto" }} />
        </div>
      </div>
      <Succsess />
      <WhatSetsAprt />
      <div className="container text-center  mt-5 lh-3">
        <h1>FEW WORDS ABOUT US</h1>
        <p className="mt-3 text-center p-4">
          Embark on a transformative journey to medical success by decoding the
          intricacies of <b>MBBS admissions</b> with our expert guidance.
          Visualize having seasoned <b>medical consultants</b> as your trusted
          allies, lighting the way through the competitive world of medical
          admissions. In this nuanced landscape, our guidance becomes the
          empowering key, allowing you to navigate the process with confidence.
          Beyond academic excellence, our consultants offer personalized advice,
          tailored to your unique strengths and aspirations, from selecting the
          ideal path to meticulously crafting your application. With a
          commitment to your success, our dedicated team provides comprehensive
          support throughout the admission journey, offering insights and
          unwavering assistance to make you stand out. Benefit from the
          extensive experience of our consultants, rooted in industry knowledge,
          and join the ranks of successful medical enthusiasts who've entrusted
          us to guide them to their dream paths. Explore the gateway to your
          medical dreams today and open the door to your entry into the realm of
          healing!
        </p>
      </div>

      <div className="container text-center  mt-5 lh-3">
        <h5 style={{color:"rgb(249 115 22)"}}>COURSES</h5>
        <h1>Types Of Medical Courses</h1>
        <p className="mt-3 text-center p-4">
          f you’re looking to pursue a career in the medical field, then you’ll
          need to know about the four most popular and useful courses. These are
          the ones that will give you the best chance at having a successful
          career and learning what is needed to become successful in the medical
          industry.
        </p>
      </div>
      {/* <div className="container mt-4 text-center">
        <div
          className="row bg-primary d-flex justify-content-center align-items-center"
          style={{ height: "700px" }}
        >
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="row mt-3">
              <div
                className="col-3  border border-1 mx-2 d-flex justify-content-center align-items-center"
                style={{
                  height: "200px",
                  backgroundColor: "#FFFFFF",
                  color: "rgb(249 115 22)",
                }}
              >
               Medicine (MBBS): Bachelor of Medicine, Bachelor of Surgery
              </div>
              <div
                className="col-4  border border-1 mx-2 d-flex justify-content-center align-items-center"
                style={{
                  height: "200px",
                  backgroundColor: "#FFFFFF",
                  color: "rgb(249 115 22)",
                }}
              >
                Ayurveda (BAMS): Bachelor of Ayurvedic Medicine and Surgery
              </div>
              <div
                className="col-4 p-3 border border-1 mx-2 d-flex justify-content-center align-items-center"
                style={{
                  height: "200px",
                  backgroundColor: "#FFFFFF",
                  color: "rgb(249 115 22)",
                }}
              >
                Homeopathy (BHMS): Bachelor of Homeopathic Medicine and Surgery
              </div>
            </div>
            <div className="row mt-3">
              <div
                className="col-3  border border-1 mx-2 d-flex justify-content-center align-items-center"
                style={{
                  height: "200px",
                  backgroundColor: "#FFFFFF",
                  color: "rgb(249 115 22)",
                }}
              >
               Pharmacy (BPharm): Bachelor of Pharmacy
              </div>
              <div
                className="col-4  border border-1 mx-2 d-flex justify-content-center align-items-center"
                style={{
                  height: "200px",
                  backgroundColor: "#FFFFFF",
                  color: "rgb(249 115 22)",
                }}
              >
               Dentistry (BDS): Bachelor of Dental Surgery
              </div>
              <div
                className="col-4 p-3 border border-1 mx-2 d-flex justify-content-center align-items-center"
                style={{
                  height: "200px",
                  backgroundColor: "#FFFFFF",
                  color: "rgb(249 115 22)",
                }}
              >
                Nursing (BSc Nursing): Bachelor of Science in Nursing
              </div>
            </div>
            <div className="row mt-3">
              <div
                className="col-3  border border-1 mx-auto d-flex justify-content-center align-items-center"
                style={{
                  height: "200px",
                  backgroundColor: "#FFFFFF",
                  color: "rgb(249 115 22)",
                }}
              >
                CAT
              </div>
              
            </div>
           
          </div>
        </div>
      </div> */}
      <div className="container mt-4 text-center">
      <div
        className="row bg-primary d-flex justify-content-center align-items-center"
        style={{ minHeight: "700px" }}
      >
        <div className="col-12">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-4 mt-3">
              <div
                className="border border-1 d-flex justify-content-center align-items-center"
                style={{
                  height: "200px",
                  backgroundColor: "#FFFFFF",
                  color: "rgb(249 115 22)",
                }}
              >
                Medicine (MBBS): Bachelor of Medicine, Bachelor of Surgery
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-3">
              <div
                className="border border-1 d-flex justify-content-center align-items-center"
                style={{
                  height: "200px",
                  backgroundColor: "#FFFFFF",
                  color: "rgb(249 115 22)",
                }}
              >
                Ayurveda (BAMS): Bachelor of Ayurvedic Medicine and Surgery
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-3">
              <div
                className="border border-1 d-flex justify-content-center align-items-center"
                style={{
                  height: "200px",
                  backgroundColor: "#FFFFFF",
                  color: "rgb(249 115 22)",
                }}
              >
                Homeopathy (BHMS): Bachelor of Homeopathic Medicine and Surgery
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-3">
              <div
                className="border border-1 d-flex justify-content-center align-items-center"
                style={{
                  height: "200px",
                  backgroundColor: "#FFFFFF",
                  color: "rgb(249 115 22)",
                }}
              >
                Pharmacy (BPharm): Bachelor of Pharmacy
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-3">
              <div
                className="border border-1 d-flex justify-content-center align-items-center"
                style={{
                  height: "200px",
                  backgroundColor: "#FFFFFF",
                  color: "rgb(249 115 22)",
                }}
              >
                Dentistry (BDS): Bachelor of Dental Surgery
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-3">
              <div
                className="border border-1 d-flex justify-content-center align-items-center"
                style={{
                  height: "200px",
                  backgroundColor: "#FFFFFF",
                  color: "rgb(249 115 22)",
                }}
              >
                Nursing (BSc Nursing): Bachelor of Science in Nursing
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4  mb-3 mt-3">
              <div
                className="border border-1 d-flex justify-content-center align-items-center"
                style={{
                  height: "200px",
                  backgroundColor: "#FFFFFF",
                  color: "rgb(249 115 22)",
                }}
              >
                Medical Laboratory Technology (BMLT): Bachelor of Medical Laboratory Technology
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      <WhychoosEDucomguy />
      <WhatpeopleSayAboutus />
      <ConsultingServices />
      <ContactUs/>
    </div>
  );
}
