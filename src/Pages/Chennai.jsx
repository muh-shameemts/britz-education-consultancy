import React, { useEffect, useState } from "react";
import stThomas from "../assets/college.jpg";
import christ from "../assets/college.jpg";
import loyola from "../assets/college.jpg";
import aloysius from "../assets/college.jpg";
import "./Chennai.css";

const colleges = [
  {
    name: "St. Thomas College",
    location: "Thrissur • UG/PG in Arts, Commerce, and Science.",
    img: stThomas,
    courses: ["B.A. English", "B.Com", "B.Sc. Chemistry", "M.A. History", "M.Sc. Physics"],
  },
  {
    name: "Govt. Engineering College",
    location: "Kozhikode • Premier institute for BTech and MTech.",
    img: christ,
    courses: ["B.Tech Computer Science", "B.Tech Mechanical", "M.Tech Civil", "M.Tech ECE"],
  },
  {
    name: "Medical College Trivandrum",
    location: "Top govt. medical college with global recognition.",
    img: loyola,
    courses: ["MBBS", "BDS", "MD General Medicine", "MS Orthopedics", "Nursing"],
  },
  {
    name: "St. Aloysius College",
    location: "Mangaluru • Historic institution offering Arts, Science, and Commerce.",
    img: aloysius,
    courses: ["B.Sc. Zoology", "B.A. Economics", "M.Com", "MBA"],
  },
];

const StudyIndia = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const hiddenElements = document.querySelectorAll(".college-card, .page-title");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section id="kerala">
      <h2 className="page-title">🎓 Top Colleges in Chennai</h2>
      <div className="college-grid">
        {colleges.map((college, index) => (
          <div
            className="college-card"
            key={index}
            onClick={() => setSelectedCollege(college)}
          >
            <img src={college.img} alt={college.name} />
            <h3>{college.name}</h3>
            <p>{college.location}</p>
            <button className="view-btn">View Courses</button>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedCollege && (
        <div className="modal-overlay" onClick={() => setSelectedCollege(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button className="close-btn" onClick={() => setSelectedCollege(null)}>
              ✖
            </button>
            <img src={selectedCollege.img} alt={selectedCollege.name} />
            <h2>{selectedCollege.name}</h2>
            <p>{selectedCollege.location}</p>
            <h4>Available Courses:</h4>
            <ul>
              {selectedCollege.courses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default StudyIndia;
