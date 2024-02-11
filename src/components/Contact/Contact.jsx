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
          <div class="input-container">
            <input
              id="uName"
              type="text"
              className="form-control mt-5 mb-5 border-0 border-bottom"
              placeholder="User Name"
            />
            <label for="uName" class="input-label">
              User Name
            </label>
          </div>

          <div class="input-container">
            <input
              id="uAge"
              type="number"
              className="form-control mb-5 border-0 border-bottom"
              placeholder="User Age"
            />
            <label for="uAge" class="input-label">
              User Age
            </label>
          </div>

          <div class="input-container">
            <input
              id="uEmail"
              type="email"
              className="form-control mb-5 border-0 border-bottom"
              placeholder="User Email"
            />
            <label for="uEmail" class="input-label">
              User Email
            </label>
          </div>

          <div class="input-container">
            <input
              id="uPass"
              type="password"
              className="form-control mb-4 border-0 border-bottom"
              placeholder="User Password"
            />
            <label for="uPass" class="input-label">
              User Password
            </label>
          </div>

          <button className="btn btn-outline-info px-5">Submit</button>
        </div>
      </div>
    </section>
  );
}
