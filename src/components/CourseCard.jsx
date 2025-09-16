import React from "react";

export default function CourseCard({ course }) {
  return (
    <div className="card h-100">
      {course.image && <img src={course.image} className="card-img-top" alt={course.title} />}
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.short}</p>
        <p className="mb-1"><strong>Duration:</strong> {course.duration}</p>
        <p className="mb-1"><strong>Fees:</strong> {course.fees}</p>
      </div>
      <div className="card-footer bg-transparent border-0">
        <button className="btn btn-primary w-100">Enroll</button>
      </div>
    </div>
  );
}
