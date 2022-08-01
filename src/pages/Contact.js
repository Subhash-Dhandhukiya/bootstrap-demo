import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center container-fluid background-color h-500 text-center">
        <h2
          style={{ fontWeight: "bolder", width: "40%" }}
          className="display-3 text-black "
        >
          Contact <span className="active-color">Us</span>
        </h2>
      </div>

      <div className="container my-5">
        <div className="my-3">
          <label htmlFor="text" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
            name="name"
          />
        </div>

        <div className="my-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
          />
        </div>

        <div className="my-3">
          <label htmlFor="text" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            name="subject"
          />
        </div>

        <div className="my-3">
          <label htmlFor="details" className="form-label">
            Details
          </label>
          <textarea
            rows={"5"}
            className="form-control"
            placeholder="Enter Your Name"
            name="detials"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Contact;
