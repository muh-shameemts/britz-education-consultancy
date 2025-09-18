import React from "react";
import "./StudyAbroad.css";
import { Link } from "react-router-dom";
import img from "../assets/college.jpg"
const StudyAbroadPage = () => {
  return (
    <div className="study-page container">
      <div className="study-card shadow-lg">
        <div className="study-img-wrapper">
          <img
            src={img}
            alt="Study Abroad"
            className="study-img"
          />
        </div>

        <div className="study-content">
          <h1 className="study-title">Study in Canada</h1>
          <p className="study-subtitle">World-Class Education & Opportunities</p>

          <p className="study-desc">
            Canada is one of the top destinations for international students,
            offering world-class universities, affordable education, and a safe,
            welcoming environment. With diverse programs, post-study work
            opportunities, and pathways to permanent residency, Canada is the
            perfect place to shape your career and future.
          </p>

          <ul className="study-benefits">
            <li>🎓 High-quality education system</li>
            <li>🌍 Multicultural environment</li>
            <li>💼 Post-study work opportunities</li>
            <li>🏞️ Beautiful landscapes & safe cities</li>
          </ul>

          <Link to="/contact"><button className="btn btn-primary btn-lg study-btn">
            Contact Now
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadPage;
