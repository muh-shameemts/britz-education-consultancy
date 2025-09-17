

import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import whatsappIcon from "../assets/wtsp.png"; // Add WhatsApp icon
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; 
import { Link } from "react-router-dom";


const ImageList = [
  {
    id: 1,
    img: img1,
    title: "Higher Education Consultancy committed to simplifying your college admission journey!",
    description: "Get expert guidance for your higher education choices.",
  },
  {
    id: 2,
    img: img2,
    title: "Make your overseas dreams come true!",
    description: "Study abroad with our seamless admission process and visa assistance.",
  },
  {
    id: 3,
    img: img3,
    title: "We Rank The Best Educational Consultants in Bangalore",
    description: "Find the best institutions and courses with our expert advice.",
  },
];

function Home() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="hero-container">
      <div className="overlay"></div>
      <div className="hero-wrapper">
        <Slider {...settings} className="hero-slider">
          {ImageList.map((data) => (
            <div key={data.id} className="hero-slide">
              <div className="hero-content">
                {/* Text Section */}
                <div className="hero-text">
                  <h1>{data.title}</h1>
                  <p>{data.description}</p>
                  <div className="button-container">
                    <button className="cta-button"><Link to="/contact">Free Consultation</Link></button>
                    <a
                      href="https://wa.me/9746416907" // Replace with your WhatsApp number
                      className="whatsapp-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={whatsappIcon} alt="WhatsApp" />
                      WhatsApp Us
                    </a>
                  </div>
                </div>
                {/* Image Section */}
                <div className="hero-image">
                  <img src={data.img} alt="Hero" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Home;
