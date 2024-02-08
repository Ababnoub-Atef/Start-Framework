import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-vh-100 d-flex justify-content-center align-items-center"
    >
      <div className="container">
        <div className="title">
          <h1 className="text-center display-6 fw-bold t-color">
            CONTACT SECTION
          </h1>

          <div className="star-container mt-3 mb-3 d-flex justify-content-center align-items-center">
            <div id="line"></div>
            <i className="fa fa-solid fa-star t-color"></i>
            <div id="line"></div>
          </div>
        </div>

        <div className="w-50 mx-auto">
          <input
            type="text"
            className="form-control mt-5 mb-5 border-0 border-bottom"
            placeholder="User Name"
          />

          <input
            type="number"
            className="form-control mb-5 border-0 border-bottom"
            placeholder="User Age"
          />

          <input
            type="email"
            className="form-control mb-5 border-0 border-bottom"
            placeholder="User Email"
          />

          <input
            type="password"
            className="form-control mb-4 border-0 border-bottom"
            placeholder="User Password"
          />

          <button className="btn btn-outline-info px-5">Submit</button>
        </div>
      </div>
    </section>
  );
}
