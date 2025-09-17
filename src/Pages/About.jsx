// import React from 'react'
// // import './About.css'
// // import about_img from '../../assets/about.png'
// // import play_icon from '../../assets/play-icon.png'
// const About = () => {
//     return (
//         <div className='about'>
//             <div className="about-left">
//                 <img src={about_img} alt="" className='about-img' />
//                 <img src={play_icon} alt="" className='play-icon' />
//             </div>
//             <div className="about-right">
//                 <h3>About University</h3>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, sit illo, quo esse praesentium repellendus laborum delectus fuga optio necessitatibus numquam quae harum, ducimus quasi iusto corrupti eius explicabo pariatur?</p>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate amet numquam vero, accusantium dolor omnis rem, quis facere quam id obcaecati ipsam, itaque maxime exercitationem magnam minus reprehenderit illum dicta.</p>
//                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi eaque veniam doloribus aut, porro, odit vero accusantium ipsa modi nulla delectus laudantium minus nisi quas pariatur fugit laborum. Iusto, voluptatibus!</p>
//             </div>
//         </div>
//     )
// }

// export default About


import React from "react";
import "./About.css"; // custom CSS file

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-intro">
          <strong>Britz Education Consultancy</strong> specializes in guiding
          students for admissions in <span>Karnataka, Tamil Nadu, and Kerala</span>.
          We provide transparent counseling and support for courses in Medicine,
          Nursing, Pharmacy, Engineering, Management, and Arts & Science.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>🎯 Our Mission</h3>
            <p>
              To offer trusted guidance and end-to-end support for college
              admissions in South India. We aim to connect students with the
              right course and institution that matches their career goals.
            </p>
          </div>

          <div className="about-card">
            <h3>🌟 Our Vision</h3>
            <p>
              To become the most reliable education consultancy in Kerala,
              Karnataka, and Tamil Nadu by helping students achieve their dreams
              with honesty and transparency.
            </p>
          </div>
        </div>

        <div className="about-extra">
          <p>
            ✅ Courses we guide for: <strong>Medicine, Nursing, Pharmacy,
            Engineering, Management, Arts & Science</strong>.
          </p>
          <p>Trusted by students and parents for personalized admission guidance.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
