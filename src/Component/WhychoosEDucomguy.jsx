import React from 'react'
import logo1 from "./logo1.jpeg";
import logo2 from "./logo2.jpeg";
import logo3 from "./logo3.jpeg";
import logo4 from "./logo4.jpeg";
export default function WhychoosEDucomguy() {
  return (
   <>
   <div className="container">
        <div className="row text-center ">
          <div className="content mt-4">
            <p style={{ color: "rgb(249 115 22)" }}>why us</p>
            <h1>Why Choose Educom Guidance?</h1>
          </div>
          <div className="row mt-4  mx-4">
            <div className="row">
              <div
                className="col-md-5 text-center my-4 me-5 "
                style={{ boxShadow: "0px 0px 4px red" }}
              >
                <img
                  src={logo1}
                  alt=""
                  style={{ height: "100px", width: "100px" }}
                />
                <h4>Extensive Experience</h4>
                <p className="lh-4">
                  With 14 years of experience, we have honed our expertise in
                  education consulting. Our team stays abreast of industry
                  trends and admission requirements, providing the most accurate
                  and relevant advice.
                </p>
              </div>
              <div
                className="col-md-5 text-center my-4 "
                style={{ boxShadow: "0px 0px 4px red" }}
              >
                <img
                  src={logo2}
                  alt=""
                  className="p-3"
                  style={{ height: "100px", width: "100px" }}
                />
                <h4>Vast Network</h4>
                <p className="lh-4">
                  We boast a vast network, connected with 100+ top colleges
                  across India. This network enables us to provide our clients
                  with a diverse range of options and opportunities.
                </p>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-5 text-center my-4 me-5 "
                style={{ boxShadow: "0px 0px 4px red" }}
              >
                <img
                  src={logo3}
                  alt=""
                  className="p-4"
                  style={{ height: "100px", width: "100px" }}
                />
                <h4>Success-driven Strategies</h4>
                <p className="lh-4">
                  We employ success-driven strategies to ensure our clients
                  stand out in the highly competitive admissions landscape. Our
                  consultants work collaboratively with you to enhance your
                  application and interview skills, increasing your likelihood
                  of admission to your preferred program.
                </p>
              </div>
              <div
                className="col-md-5 text-center my-4 "
                style={{ boxShadow: "0px 0px 4px red" }}
              >
                <img
                  src={logo4}
                  alt=""
                  className="p-3"
                  style={{ height: "100px", width: "100px" }}
                />
                <h4>Success Stories</h4>
                <p className="lh-4">
                  Join the ranks of our successful clients who have achieved
                  admission to prestigious programs and institutions. Your
                  success story begins with Educom Guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

   </>
  )
}
