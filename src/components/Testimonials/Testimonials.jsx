import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    {
      name: "Meera T",
      course: "Pharmacy – Mangalore",
      feedback:
        "They gave me step-by-step guidance and cleared all my doubts. Very professional team!",
      image: "https://i.pravatar.cc/100?img=4",
    },
    {
      name: "Arjun R",
      course: "BDS – Kochi",
      feedback:
        "I felt completely stress-free throughout my admission process. Highly recommend their service.",
      image: "https://i.pravatar.cc/100?img=5",
    },
    {
      name: "Sneha L",
      course: "MBA – Bangalore",
      feedback:
        "Great consultancy for higher studies. Friendly team and transparent advice.",
      image: "https://i.pravatar.cc/100?img=6",
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Students Say</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile
            640: { slidesPerView: 2 }, // Tablet
            1024: { slidesPerView: 3 }, // Desktop
          }}
          loop={true}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <img src={item.image} alt={item.name} className="testimonial-img" />
                <p className="testimonial-feedback">“{item.feedback}”</p>
                <h3 className="testimonial-name">{item.name}</h3>
                <span className="testimonial-course">{item.course}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
