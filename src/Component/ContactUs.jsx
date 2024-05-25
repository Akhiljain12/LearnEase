import React, { useState } from "react";
import "./ContactUs.css";
import { CiLocationOn } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import axios from "axios";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: [],
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevFormData) => {
        const newCourse = checked
          ? [...prevFormData.course, value]
          : prevFormData.course.filter((course) => course !== value);
        return { ...prevFormData, course: newCourse };
      });
    } else {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // Submit form
      console.log("Form submitted:", formData);
      // Clear form data after submission if needed
      let prom= new Promise((res,rej)=>{
        //  let response=Formservices.postAdmissionData(formData);
        let response=axios.post("http://localhost:8000/postcontact",formData)
         res(response)
         rej()
      })
      prom.then((res)=>{
         alert("data is posted");
      }).catch(()=>{
        alert("something is wrong");
      })
      setFormData({
        name: "",
        phone: "",
        email: "",
        course: [],
        message: "",
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <div className="container-fluid  mt-5 p-0 mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15132.825956762215!2d73.7700009!3d18.5195687!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2be605e24f36d%3A0x2731c509fcd368f3!2sChellaram%20Hospital%20-%20Diabetes%20Care%20%26%20Multispeciality!5e0!3m2!1sen!2sin!4v1715926087802!5m2!1sen!2sin"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 border p-4 shadow-border">
            <h1>GET IN TOUCH</h1>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group mt-3 mb-4">
                <label htmlFor="name" className="f-bold">Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name && "is-invalid"}`}
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Shubham Bajaj"
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                <p className="light">This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.</p>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="phone" className="f-bold">Phone Number</label>
                <input
                  type="text"
                  className={`form-control ${errors.phone && "is-invalid"}`}
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="89XXXXXXXX"
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                <p className="light">This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.</p>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="email" className="f-bold">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email && "is-invalid"}`}
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="shubham@gmail.com"
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                <p className="light">This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.</p>
              </div>
              <div className="form-group mb-4">
                <label className="f-bold">Course Looking For</label>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input custom-border-black"
                    name="course"
                    id="engineering"
                    value="Engineering"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="engineering">
                    Engineering
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="course"
                    id="medical"
                    value="Medical"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="medical">
                    Medical
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="course"
                    id="BA LLB/ LLM"
                    value="BA LLB/ LLM"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="BA LLB/ LLM">
                    BA LLB/ LLM
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="course"
                    id="MBA/PGDM/MMS"
                    value="MBA/PGDM/MMS"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="MBA/PGDM/MMS">
                    MBA/PGDM/MMS
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="course"
                    id="BBA/BBM"
                    value="BBA/BBM"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="BBA/BBM">
                    BBA/BBM
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="course"
                    id="B Com./ M Com."
                    value="B Com./ M Com."
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="B Com./ M Com.">
                    B Com./ M Com.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="course"
                    id="B Pharma / M Pharma"
                    value="B Pharma / M Pharma"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="B Pharma / M Pharma">
                    B Pharma / M Pharma
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="course"
                    id="BCA/MCA/BSc./MSc."
                    value="BCA/MCA/BSc./MSc."
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="BCA/MCA/BSc./MSc.">
                    BCA/MCA/BSc./MSc.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="course"
                    id="Other"
                    value="Other"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="Other">
                    Other
                  </label>
                </div>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  className={`form-control ${errors.message && "is-invalid"}`}
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                <p className="light">You can @mention other users and organizations to link to them.</p>
              </div>
              <button
                type="submit"
                className="btn btn-primary text-white"
                style={{ backgroundColor: "#00ADE6", borderColor: "#00ADE6" }}
              >
                Contact
              </button>
            </form>
          </div>
          <div className="col-md-5 mt-4 mt-md-0 ms-2 text-center text-md-start">
            <div className="row mb-3">
              <div className="col-12 col-md-2 my-3 my-md-5 text-center">
                <CiLocationOn className="fs-3 icon-bg-orange" />
              </div>
              <div className="col-12 col-md-10 text-center ">
                <p className="light">VISIT US</p>
                <p>5th Floor, Dhananjay Plaza, near Chellaram Diabetes Hospital, Bavdhan, Pune, Maharashtra 411021</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-md-2 my-3 my-md-5 text-center">
                <IoChatbubbleOutline className="fs-3 icon-bg-orange" />
              </div>
              <div className="col-12 col-md-10 text-center ">
                <p className="light">CONTACT US</p>
                <p>+91-8188808878 <br />
                +91-8103158082 <br />
                educomguidance@gmail.com</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-md-2 mt-2 text-center">
                <LuClock3 className="fs-3 icon-bg-orange" />
              </div>
              <div className="col-12 col-md-10 text-center ">
                <p className="light">OPEN HOURS</p>
                <p>Everyday: 9am – 10pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;

