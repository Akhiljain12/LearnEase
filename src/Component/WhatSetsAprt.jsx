import React from 'react'
import img11 from "./EED1.jpeg";
import img2 from "./EED2.jpeg";
import img3 from "./EED3.jpeg";
import img4 from "./EED4.jpeg";

export default function WhatSetsAprt() {
  return (
    <>
       <div className="container text-center d-flex flex-column justify-content-center align-items-center">
        <h1 className="mt-5" style={{ color: "rgb(249 115 22)" }}>
          What Sets Us Apart?
        </h1>
        <div className="col-12 col-md-6  mt-4">
          <div className="row">
            <div className="col-6 mb-3 d-flex flex-column px-5">
              <img src={img11} alt="" className="img-fluid rounded shadow-sm" />
              <span>14+ Experience</span>
            </div>
            <div className="col-6 mb-3 d-flex flex-column px-5">
              <img src={img2} alt="" className="img-fluid rounded shadow-sm" />
              <span>Connected With 100+ Top Colleges</span>
            </div>
            <div className="col-6 mb-3 d-flex flex-column px-5">
              <img src={img3} alt="" className="img-fluid rounded shadow-sm" />
              <span>5000+ Successful Stories</span>
            </div>
            <div className="col-6 mb-3 d-flex flex-column px-5">
              <img src={img4} alt="" className="img-fluid rounded shadow-sm" />
              <span>Various Courses</span>
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
    </>
  )
}
