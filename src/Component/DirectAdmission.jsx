import React from "react";
import { useState } from "react";
import { Formservices } from "../Services/Formservices";
import axios from "axios";

export default function DirectAdmission() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fatherName: "",
    fatherPhone: "",
    collegeLocation: "",
    preferredCollege: "",
    "10thScore": "",
    "12thScore": "",
    yearOfPassing10th: "",
    majorSubject: "",
    courseLookingFor: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Clear the error message when input changes
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      // Submit the form data to the backend or perform other actions
      let prom= new Promise((res,rej)=>{
        //  let response=Formservices.postAdmissionData(formData);
        let response=axios.post("http://localhost:8000/postadmission",formData)
         res(response)
         rej()
      })
      prom.then((res)=>{
         alert("data is posted");
      }).catch(()=>{
        alert("something is wrong");
      })
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    // Add validation rules for other fields here
    return errors;
  };
  return (
    <>
      <div className="container">
      
        {/* <div className="row">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            <div className="mb-3">
              <label htmlFor="fatherName" className="form-label">Father's Name</label>
              <input type="text" className="form-control" id="fatherName" />
            </div>
            <div className="mb-3">
              <label htmlFor="fatherPhone" className="form-label">Father's Mobile Number</label>
              <input type="tel" className="form-control" id="fatherPhone" />
            </div>
            <div className="mb-3">
              <label htmlFor="collegeLocation" className="form-label">College Preferred Location</label>
              <input type="text" className="form-control" id="collegeLocation" />
            </div>
            <div className="mb-3">
              <label htmlFor="preferredCollege" className="form-label">Preferred College</label>
              <input type="text" className="form-control" id="preferredCollege" />
            </div>
            <div className="mb-3">
              <label htmlFor="10thScore" className="form-label">10th Score</label>
              <input type="text" className="form-control" id="10thScore" />
            </div>
            <div className="mb-3">
              <label htmlFor="12thScore" className="form-label">12th Score</label>
              <input type="text" className="form-control" id="12thScore" />
            </div>
            <div className="mb-3">
              <label htmlFor="yearOfPassing10th" className="form-label">Year Of Passing (10th)</label>
              <input type="text" className="form-control" id="yearOfPassing10th" />
            </div>
            <div className="mb-3">
              <label htmlFor="majorSubject" className="form-label">Major Subject</label>
              <select className="form-select" id="majorSubject">
                <option value="pcb">PCB</option>
                <option value="pcm">PCM</option>
                <option value="commerce">Commerce</option>
                <option value="arts">Arts</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="courseLookingFor" className="form-label">Course Looking For</label>
              <select className="form-select" id="courseLookingFor">
                <option value="engineering">Engineering</option>
                <option value="medical">Medical</option>
                <option value="ba_llb">BA LLB/LLM</option>
                <option value="mba">MBA/PGDM/MMS</option>
                <option value="bba">BBA/BBM</option>
                <option value="bcom_mcom">B Com./M Com.</option>
                <option value="bpharma_mpharma">B Pharma/M Pharma</option>
                <option value="bca_mca_bsc_msc">BCA/MCA/BSc/MSc</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div> */}

        <div className="container">
          <div className="row text-center">
            <h6 style={{ color: "rgb(249, 115, 22)" }}>
              DON’T SETTLE FOR LESS
            </h6>
            <h1>Free Admission Consultation</h1>
            <p>
              Educom Guidance Pvt. Ltd. is a company dedicated to education
              consultants for personalized guidance. We specialize in providing
              expert guidance with a rich legacy of 14 years of experience. Our
              focus areas include MBA consultation, engineering consultation,
              and medical admission consultation. We understand that navigating
              the educational landscape can be complex, and that's where our
              experienced education consultants come in to simplify the process
              and guide you towards success.
            </p>
          </div>
          <h4>
            Fill in the following form with your details to apply for direct
            admissions to your Dream College.
          </h4>
          <div className="row">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fatherName" className="form-label">
                  Father's Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fatherPhone" className="form-label">
                  Father's Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="fatherPhone"
                  name="fatherPhone"
                  value={formData.fatherPhone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="collegeLocation" className="form-label">
                  College Preferred Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="collegeLocation"
                  name="collegeLocation"
                  value={formData.collegeLocation}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="preferredCollege" className="form-label">
                  Preferred College
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="preferredCollege"
                  name="preferredCollege"
                  value={formData.preferredCollege}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="10thScore" className="form-label">
                  10th Score
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="10thScore"
                  name="10thScore"
                  value={formData["10thScore"]}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="12thScore" className="form-label">
                  12th Score
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="12thScore"
                  name="12thScore"
                  value={formData["12thScore"]}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="yearOfPassing10th" className="form-label">
                  Year Of Passing (10th)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="yearOfPassing10th"
                  name="yearOfPassing10th"
                  value={formData.yearOfPassing10th}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="majorSubject" className="form-label">
                  Major Subject
                </label>
                <select
                  className="form-select"
                  id="majorSubject"
                  name="majorSubject"
                  value={formData.majorSubject}
                  onChange={handleChange}
                >
                  <option value="pcb">PCB</option>
                  <option value="pcm">PCM</option>
                  <option value="commerce">Commerce</option>
                  <option value="arts">Arts</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="courseLookingFor" className="form-label">
                  Course Looking For
                </label>
                <select
                  className="form-select"
                  id="courseLookingFor"
                  name="courseLookingFor"
                  value={formData.courseLookingFor}
                  onChange={handleChange}
                >
                  <option value="engineering">Engineering</option>
                  <option value="medical">Medical</option>
                  <option value="ba_llb">BA LLB/LLM</option>
                  <option value="mba">MBA/PGDM/MMS</option>
                  <option value="bba">BBA/BBM</option>
                  <option value="bcom_mcom">B Com./M Com.</option>
                  <option value="bpharma_mpharma">B Pharma/M Pharma</option>
                  <option value="bca_mca_bsc_msc">BCA/MCA/BSc/MSc</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <input type="submit" value="submit" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
