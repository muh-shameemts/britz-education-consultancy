

// import React from "react";
// import "./About.css"; // custom CSS file
// import office1 from "../assets/office1.jpg"
// import office2 from "../assets/office2.jpg"

// const About = () => {
  
//   return (
//     <section className="about">
//       <div className="about-container">
//         <h2 className="about-title">About Us</h2>
//         <p className="about-intro">
//           <strong>Britz Education Consultancy</strong> specializes in guiding
//           students for admissions in <span>Karnataka, Tamil Nadu, and Kerala</span>.
//           We provide transparent counseling and support for courses in Medicine,
//           Nursing, Pharmacy, Engineering, Management, and Arts & Science.
//         </p>

//         {/* Mission & Vision */}
//         <div className="about-grid">
//           <div className="about-card">
//             <h3>🎯 Our Mission</h3>
//             <p>
//               To offer trusted guidance and end-to-end support for college
//               admissions in South India. We aim to connect students with the
//               right course and institution that matches their career goals.
//             </p>
//           </div>

//           <div className="about-card">
//             <h3>🌟 Our Vision</h3>
//             <p>
//               To become the most reliable education consultancy in Kerala,
//               Karnataka, and Tamil Nadu by helping students achieve their dreams
//               with honesty and transparency.
//             </p>
//           </div>
//         </div>

//         {/* Courses */}
//         <div className="about-extra">
//           <p>
//             ✅ Courses we guide for:{" "}
//             <strong>
//               Medicine, Nursing, Pharmacy, Engineering, Management, Arts & Science
//             </strong>
//             .
//           </p>
//           <p>
//             Trusted by students and parents for personalized admission guidance.
//           </p>
//         </div>

//         {/* Founders Section */}
//         <div className="office">
//           {/* <h2 className="about-title">Our Founders & Directors</h2>
//           <div className="founders-grid">
//             <div className="founder-card">
//               <img
//                 src="/images/founder1.jpg"
//                 alt="Founder 1"
//                 className="founder-img"
//               />
//               <h3>Mr. John Mathew</h3>
//               <p>Managing Director</p>
//             </div>

//             <div className="founder-card">
//               <img
//                 src="/images/founder2.jpg"
//                 alt="Founder 2"
//                 className="founder-img"
//               />
//               <h3>Mrs. Anitha Joseph</h3>
//               <p>Co-Founder & Academic Head</p>
//             </div>

//             <div className="founder-card">
//               <img
//                 src="/images/founder3.jpg"
//                 alt="Founder 3"
//                 className="founder-img"
//               />
//               <h3>Mr. Rahim Khan</h3>
//               <p>Director – Operations</p>
//             </div>
//           </div> */}
//           <div className="d-flex m-4">
//            <div><img className="office1" src={office1} alt="" /></div> 
//            <div><img className="office2" src={office2} alt="" /></div>  
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;





import React from "react";
import "./About.css"; 
import office1 from "../assets/office1.jpg";
import office2 from "../assets/office2.jpg";

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

        {/* Mission & Vision */}
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

        {/* Extra Info */}
        <div className="about-extra">
          <p>
            ✅ Courses we guide for:{" "}
            <strong>
              Medicine, Nursing, Pharmacy, Engineering, Management, Arts & Science
            </strong>
            .
          </p>
          <p>
            Trusted by students and parents for personalized admission guidance.
          </p>
        </div>

        {/* Office Section */}
        <div className="office-wrapper">
          <img className="office-img" src={office1} alt="Office 1" />
          <img className="office-img" src={office2} alt="Office 2" />
        </div>
      </div>
    </section>
  );
};

export default About;
