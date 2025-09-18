// import React from "react";
// import { FaWhatsapp, FaInstagram, FaGlobe, FaEnvelope, FaPhone } from "react-icons/fa";

// const ContactPage = () => {
//   return (
//     <div style={styles.page}>
//       <h1 style={styles.heading}>Contact Us</h1>
//       <p style={styles.subtitle}>
//         Reach out to our Education Consultancy for admissions and guidance in Kerala, Tamil Nadu & Karnataka.
//       </p>

//       {/* Contact Details */}
//       <div style={styles.contactInfo}>
//         <div style={styles.card}>
//           <FaPhone size={28} color="#2c3e50" />
//           <p>+91 98765 43210</p>
//         </div>
//         <div style={styles.card}>
//           <FaEnvelope size={28} color="#2c3e50" />
//           <p>info@consultancy.com</p>
//         </div>
//         <div style={styles.card}>
//           <FaGlobe size={28} color="#2c3e50" />
//           <a href="https://britz-education-consultancy-v4s2.vercel.app/" target="_blank" rel="noreferrer">
//            <p> Britz-website.com</p>
//           </a>
//         </div>
//       </div>

//       {/* Social Media Links */}
//       <div style={styles.socials}>
//         <a href="https://wa.me/9746416907" target="_blank" rel="noreferrer" style={styles.iconLink}>
//           <FaWhatsapp size={40} color="#25D366" />
//         </a>
//         <a href="https://www.instagram.com/britz_education?igsh=Z202aXdjaTBjMmFy" target="_blank" rel="noreferrer" style={styles.iconLink}>
//           <FaInstagram size={40} color="#E1306C" />
//         </a>
//         <a href="https://britz-education-consultancy-v4s2.vercel.app/" target="_blank" rel="noreferrer" style={styles.iconLink}>
//           <FaGlobe size={40} color="#2c3e50" />
//         </a>
//       </div>

//       {/* Contact Form (Formsubmit version) */}
//       {/* <div style={styles.formContainer}>
//         <h2 style={styles.formTitle}>Send us a Message</h2>
//         <form 
//           action="https://docs.google.com/forms/d/1_MFQHHkP8IUFHfIT29aq8cNB_7lCSk8NiQC-ets_6qE/edit" 
//           method="POST"
//           style={styles.form}
//         >
//           Anti-bot hidden input
//           <input type="hidden" name="_captcha" value="false" />

//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             required
//             style={styles.input}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             required
//             style={styles.input}
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="5"
//             required
//             style={styles.textarea}
//           ></textarea>
//           <button type="submit" style={styles.button}>
//             Send Message
//           </button>
//         </form>
//         <p style={{marginTop: '10px', color: '#555'}}>You will receive a confirmation in your email.</p>
//       </div> */}
//     </div>
//   );
// };

// // Inline Styles
// const styles = {
//   page: {
//     fontFamily: "Arial, sans-serif",
//     background: "#f5f6fa",
//     padding: "40px 20px",
//     textAlign: "center",
//     margin:"170px"
//   },
//   heading: {
//     fontSize: "32px",
//     color: "#2c3e50",
//     marginBottom: "10px",
//   },
//   subtitle: {
//     fontSize: "16px",
//     color: "#555",
//     marginBottom: "30px",
//   },
//   contactInfo: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "40px",
//     marginBottom: "30px",
//     flexWrap: "wrap",
//   },
//   card: {
//     background: "#fff",
//     padding: "15px 20px",
//     borderRadius: "10px",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//     textAlign: "center",
//   },
//   socials: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//     marginBottom: "40px",
//   },
//   iconLink: {
//     textDecoration: "none",
//   },
//   formContainer: {
//     maxWidth: "600px",
//     margin: "0 auto",
//     background: "#fff",
//     padding: "25px",
//     borderRadius: "10px",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//   },
//   formTitle: {
//     marginBottom: "15px",
//     color: "#2c3e50",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   input: {
//     padding: "12px",
//     margin: "8px 0",
//     border: "1px solid #ccc",
//     borderRadius: "6px",
//     fontSize: "16px",
//     outline: "none",
//   },
//   textarea: {
//     padding: "12px",
//     margin: "8px 0",
//     border: "1px solid #ccc",
//     borderRadius: "6px",
//     fontSize: "16px",
//     outline: "none",
//   },
//   button: {
//     background: "#2c3e50",
//     color: "#fff",
//     border: "none",
//     padding: "12px",
//     fontSize: "16px",
//     borderRadius: "6px",
//     cursor: "pointer",
//     marginTop: "10px",
//   },
// };

// export default ContactPage;



import React from "react";
import { FaWhatsapp, FaInstagram, FaGlobe, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div style={styles.page}>
      <h1  style={styles.heading}>Contact Us</h1>
      <p style={styles.subtitle}>
        Reach out to our Education Consultancy for admissions and guidance in Kerala, Tamil Nadu & Karnataka.
      </p>

      {/* Contact Details */}
      <div style={styles.contactInfo}>
        <div style={styles.card}>
          <FaPhone size={28} color="#2c3e50" />
          <p>+91 98765 43210</p>
        </div>
        <div style={styles.card}>
          <FaEnvelope size={28} color="#2c3e50" />
          <p>info@consultancy.com</p>
        </div>
        <div style={styles.card}>
                <FaGlobe size={28} color="#2c3e50" />
              <a 
        href="https://britz-education-consultancy-v4s2.vercel.app/" 
        target="_blank" 
        rel="noreferrer" 
        style={{ textDecoration: "none", color: "#2c3e50" }}
      >
        <p style={{ margin: 0 }}>Britz-website.com</p>
      </a>

        </div>
      </div>

      {/* Social Media Links */}
      <div style={styles.socials}>
        <a href="https://wa.me/" target="_blank" rel="noreferrer" style={styles.iconLink}>
          <FaWhatsapp size={40} color="#25D366" />
        </a>
        <a href="https://www.instagram.com/britz_education?igsh=Z202aXdjaTBjMmFy" target="_blank" rel="noreferrer" style={styles.iconLink}>
          <FaInstagram size={40} color="#E1306C" />
        </a>
        <a href="https://britz-education-consultancy-v4s2.vercel.app/" target="_blank" rel="noreferrer" style={styles.iconLink}>
          <FaGlobe size={40} color="#2c3e50" />
        </a>
      </div>

      {/* Google Map */}
      <div style={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.605750768038!2d75.98300227492293!3d10.889402589285374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7bbf48ebf02ab%3A0xf3a52c6d5a4a96d7!2sEdappal%2C%20Kerala!5e0!3m2!1sen!2sin!4v1695112345678!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "#f5f6fa",
    padding: "40px 20px",
    textAlign: "center",
  },
  heading: {
    marginTop:"100px",
    fontSize: "32px",
    color: "#0680faff",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "30px",
  },
  web: {
    
  },
  contactInfo: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },
  card: {
    background: "#fff",
    padding: "15px 20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  socials: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "40px",
  },
  iconLink: {
    textDecoration: "none",
  },
  mapContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};

export default ContactPage;
