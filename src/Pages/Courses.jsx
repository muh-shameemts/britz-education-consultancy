import React from "react";
import courses from "../data/Courses";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  return (
    <section className="py-4">
      <h2>All Courses</h2>
      <div className="row g-3">
        {courses.map(c => (
          <div key={c.id} className="col-md-4">
            <CourseCard course={c} />
          </div>
        ))}
      </div>
    </section>
  );
}
