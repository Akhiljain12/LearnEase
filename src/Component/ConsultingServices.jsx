import React from "react";
import { Link } from "react-router-dom";

export default function ConsultingServices() {
  return (
    <>
      <div className="container mt-5">
        <div className="row text-center ">
          <h6 style={{ color: "rgb(249 115 22)" }}>DON’T SETTLE FOR LESS</h6>
          <h1>Our Consulting Services</h1>
        </div>
        <div className="row text-center g-4">
        <div
          className="col-12 col-md-4"
          style={{
            backgroundColor: "rgb(249, 115, 22)",
            color: "white",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2>
            Management <br /> Admission
          </h2>
          <p className="mt-3">
            The management field continues to be one of the most sought-after
            fields in India, if not the most sought-after. This makes the
            Medical Courses all the more important.
          </p>
          <Link to={"/EngeeniringAdmission"}>
          <button
            className="btn btn-light"
            style={{
              backgroundColor: "white",
              color: "black",
              border: "none",
            }}
          >
            Learn more
          </button>
          </Link>
         
        </div>
        <div
          className="col-12 col-md-4"
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "40px 20px", // Increased padding to increase height
            borderRadius: "8px",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2>
            Engineering <br /> Admission
          </h2>
          <p className="mt-3">
            Around 35-45 lakh people enrol in B Tech courses every year. This
            leads to increased competition for courses as well as confusion
            regarding the Engineering course in India.
          </p>
          <Link to={"/managemnet"}
            className="btn btn-light"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
            }}
          >
            Learn more
            </Link>
        </div>
        <div
          className="col-12 col-md-4"
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2>
            Medical<br /> Admission
          </h2>
          <p className="mt-3">
            Every year, thousands of students across the country vie for
            admissions into medical schools in India. Hence the competition
            for getting into a medical program is high.
          </p>
          <Link to={"/madical"}>
          <button
            className="btn btn-light"
            style={{
              backgroundColor: "white",
              color: "black",
              border: "none",
            }}
          >
            Learn more
          </button>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}
