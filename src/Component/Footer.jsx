import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="container-fluid bg-dark mt-5 text-white">
      <div className="container p-3 px-4">
        <div className="row align-items-start">
          <div className="col-md-4 mb-4">
            <div className="logo-info">
              <div className="my-5">
                <img className="me-2" src="" alt="LOGO" />
                <span className="fs-6 ms-2" style={{ color: "#00ADE6" }}>
                  Educom Guidence
                </span>
              </div>
              <p className="mt-2">
                Educom Guidance is a company dedicated to education consultants for personalized guidance.
              </p>
            </div>
            <div className="contact-info">
              <p className="mt-2">
                <CiLocationOn className="fs-5" style={{ color: "#00ADE6" }} />{" "}
                5th Floor, Dhananjay Plaza, near Chellaram Diabetes Hospital,
                Bavdhan, Pune, Maharashtra 411021
              </p>
              <p className="mt-2">
                <CiMail className="fs-5" style={{ color: "#00ADE6" }} />{" "}
                educomguidance@gmail.com
              </p>
              <p className="mt-2">
                <BsTelephone className="fs-5" style={{ color: "#00ADE6" }} />{" "}
                +91-8188808878
              </p>
            </div>
            <div className="social-media-buttons">
              <button
                className="btn btn-primary m-2"
                style={{ backgroundColor: "#00ADE6", borderColor: "#00ADE6" }}
              >
                <FaFacebook className="fs-4" />
              </button>
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "#00ADE6", borderColor: "#00ADE6" }}
              >
                <FaInstagram className="fs-4" />
              </button>
            </div>
          </div>
          <div className="col-md-7 ps-md-5 mb-4">
            <div className="row">
              <div className="col-12 col-sm-6">
                <h4 style={{ color: "#00ADE6" }}>Useful Links</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="footer-link">
                      Direct Admission
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="footer-link">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="footer-link">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-6">
                <h4 style={{ color: "#00ADE6" }}>Consultation</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="footer-link">
                      Engineering Admission
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="footer-link">
                      Management Admission
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="footer-link">
                      Medical Admission
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <h4 style={{ color: "#00ADE6" }}>Our Location</h4>
                <div className="mt-3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15132.825956762215!2d73.7700009!3d18.5195687!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2be605e24f36d%3A0x2731c509fcd368f3!2sChellaram%20Hospital%20-%20Diabetes%20Care%20%26%20Multispeciality!5e0!3m2!1sen!2sin!4v1715926087802!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="text-center mt-3">
              Copyright © 2023 Educom Guidance | Powered by{" "}
              <Link className="fs-6" to="/" style={{ color: "#FFFFFF" }}>
                Bajaj Technologies
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
