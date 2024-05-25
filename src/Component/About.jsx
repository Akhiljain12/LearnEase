import React from "react";
import img1 from "./about.jpg";

import EED1 from "./EED1.jpeg";
import EED2 from "./EED4.jpeg";
import EED3 from "./EED2.jpeg";
import EED4 from "./EED5.jpeg";
import is01 from "./Is01.jpeg";
import is02 from "./is02.jpeg";
import is03 from "./is03.jpeg";
import WhychoosEDucomguy from "./WhychoosEDucomguy";
import ConsultingServices from "./ConsultingServices";
import ContactUs from "./ContactUs";

export default function About() {
  return (
    <>
      <div className="EA container-fluid d-flex flex-column justify-content-center align-items-center position-relative">
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
          }}
        ></div>
        <div className="row p-1">
          <div
            className="col-12 img-fluid p-3 position-relative"
            style={{ maxWidth: "2000px", width: "100%" }}
          >
            <img
              src={img1}
              alt=""
              style={{ width: "100%", height: "auto", opacity: "0.7" }}
            />
          </div>
        </div>
      </div>
      <div className="container mt-n5">
        {" "}
        {/* Adjust margin top here */}
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h1 className="card-title">
                  <span style={{ color: "rgb(249, 115, 22)" }}>01.</span>{" "}
                  STRATEGIC
                </h1>
                <p className="card-text">
                  We at Educom Guidance use strategic methods to train our
                  students to get into their dream colleges.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h1 className="card-title">
                  <span style={{ color: "rgb(249, 115, 22)" }}>02.</span>{" "}
                  PROFESSIONAL
                </h1>
                <p className="card-text">
                  Our team is highly professional in terms of trainings. We give
                  unbiased guidance to the students and make sure that they get
                  what they want from us.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h1 className="card-title">
                  <span style={{ color: "rgb(249, 115, 22)" }}>03.</span> LOYAL
                </h1>
                <p className="card-text">
                  We are 100% loyal to our customers. If we are unable to get
                  you your dream college, your money will be refunded.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 text-center">
        <h6 style={{ color: "rgb(249, 115, 22)" }}>PROVEN SUCCESS</h6>
        <h1>What Sets Us Apart?</h1>
        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={EED1}
                className="card-img-top  mx-auto my-4"
                alt=""
                style={{ height: "50px", width: "50px" }}
              />
              <div className="card-body">
                <h3 className="card-title">Expert Guidance</h3>
                <p className="card-text">
                  Our consultants are experts in their respective fields,
                  offering insights and advice rooted in a deep understanding of
                  the evolving educational landscape.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={EED2}
                className="card-img-top  mx-auto my-4"
                alt=""
                style={{ height: "50px", width: "50px" }}
              />
              <div className="card-body">
                <h3 className="card-title">Personalized Approach</h3>
                <p className="card-text">
                  Recognizing the uniqueness of each student, we tailor our
                  guidance to individual strengths, aspirations, and academic
                  goals, ensuring a personalized and effective strategy.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={EED3}
                className="card-img-top  mx-auto my-4"
                alt=""
                style={{ height: "50px", width: "50px" }}
              />
              <div className="card-body">
                <h3 className="card-title">Holistic Support</h3>
                <p className="card-text">
                  We go beyond the conventional by providing holistic support
                  throughout the educational journey. From academic planning to
                  career counseling, we are committed to nurturing every aspect
                  of a student's growth.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={EED4}
                className="card-img-top mx-auto my-4"
                alt=""
                style={{ height: "50px", width: "50px" }}
              />
              <div className="card-body">
                <h3 className="card-title">Industry Knowledge</h3>
                <p className="card-text">
                  With our finger on the pulse of educational trends, we offer
                  up-to-date information and strategies, keeping students ahead
                  of the curve in a competitive academic environment. Success
                  Stories: Our track record of success speaks for itself. Many
                  students have realized their academic dreams under our
                  guidance, securing admissions to prestigious institutions and
                  excelling in their chosen fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 text-center">
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src={is01}
                className="card-img-top mx-auto mt-2"
                alt="Image"
                style={{ height: "50px", width: "50px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Heading 1</h5>
                <p className="card-text">Some description goes here.</p>
                <p className="card-text">Number: 123</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src={is02}
                className="card-img-top mx-auto mt-2"
                alt="Image"
                style={{ height: "50px", width: "50px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Heading 2</h5>
                <p className="card-text">Some description goes here.</p>
                <p className="card-text">Number: 456</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src={is03}
                className="card-img-top mx-auto mt-2"
                alt="Image"
                style={{ height: "50px", width: "50px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Heading 3</h5>
                <p className="card-text">Some description goes here.</p>
                <p className="card-text">Number: 789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container mt-5 text-center bg-primary"
        style={{ height: "auto", minHeight: "500px" }}
      >
        <div className="mt-4">
          <h6 style={{ color: "rgb(249, 115, 22)" }}>Our</h6>
          <h1>Vision & Mission</h1>
        </div>

        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h1 className="card-title">
                    <span style={{ color: "rgb(249, 115, 22)" }}>01.</span>{" "}
                    VISION
                  </h1>
                  <p className="card-text">
                    Our vision is to be a beacon of transformative education,
                    inspiring a global community of learners to reach new
                    heights of knowledge and innovation. We envision a future
                    where education transcends boundaries, empowers diverse
                    perspectives, and becomes the catalyst for positive change,
                    creating a world where every individual can contribute
                    meaningfully to society.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h1 className="card-title">
                    <span style={{ color: "rgb(249, 115, 22)" }}>02.</span>{" "}
                    MISSION
                  </h1>
                  <p className="card-text">
                    Our mission is to empower individuals, fostering academic
                    excellence and a lifelong love for learning. We provide
                    personalized guidance and holistic support, aiming to equip
                    students with the tools they need to surpass their potential
                    and succeed in their academic endeavors, preparing them for
                    a future of continuous growth and achievement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhychoosEDucomguy />
      <div className="container text-center lh-3 mt-5">
        <h1>HOW WE CAN HELP YOU</h1>
        <p>
          Whether you're navigating college admissions, seeking career guidance,
          or exploring opportunities for further education, we are here to
          simplify the process. Our commitment is to empower you to make
          informed decisions that align with your aspirations and lead to a
          successful and fulfilling academic journey. In essence, as Education
          Consultants, we are your partners in educational empowerment,
          dedicated to guiding you toward a future of academic excellence and
          personal growth.
        </p>
      </div>
      <ConsultingServices/>
      <ContactUs/>
    </>
  );
}
