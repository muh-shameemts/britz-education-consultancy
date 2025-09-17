import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const data = [
    {
      name: "Akhil P",
      course: "BSc Nursing – Bangalore",
      feedback:
        "Britz Education Consultancy made my admission process very smooth. They guided me at every step and helped me secure my seat without any stress.",
      image: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Neha S",
      course: "MBBS – Chennai",
      feedback:
        "I was confused about colleges in Tamil Nadu. Their counseling really helped me choose the right course and college. Very trustworthy service.",
      image: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Rahul K",
      course: "BTech – Kerala",
      feedback:
        "Great support and transparent guidance. I am happy with my admission in Thrissur. I highly recommend Britz to students and parents.",
      image: "https://i.pravatar.cc/100?img=3",
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Students Say</h2>
        <div className="testimonials-grid">
          {data.map((item, index) => (
            <div key={index} className="testimonial-card">
              <img src={item.image} alt={item.name} className="testimonial-img" />
              <p className="testimonial-feedback">“{item.feedback}”</p>
              <h3 className="testimonial-name">{item.name}</h3>
              <span className="testimonial-course">{item.course}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
