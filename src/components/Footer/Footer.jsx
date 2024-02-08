import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="text-white text-center pt-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <h3>LOCATION</h3>
            <p className="mb-0">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="col-md-4">
            <h3>AROUND THE WEB</h3>

            <div className="social-icons d-flex justify-content-center align-items-center">
              <i className="fa-brands fa-facebook me-2"></i>
              <i className="fa-brands fa-x-twitter me-2"></i>
              <i className="fa-brands fa-linkedin-in me-2"></i>
              <i className="fa-solid fa-globe"></i>
            </div>
          </div>

          <div className="col-md-4">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center py-3">
        <p className="m-0">Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
