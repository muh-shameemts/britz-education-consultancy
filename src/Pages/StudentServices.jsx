// import React from "react";

// const StudentServices = () => {
//   const services = [
//     {
//       title: "College Admissions",
//       description:
//         "We provide step-by-step guidance to help students secure admissions into top colleges across Karnataka, Tamil Nadu, and Kerala. From application to counseling, we ensure a smooth admission process.",
//     },
//     {
//       title: "Course Selection",
//       description:
//         "Choosing the right course is a crucial step for your career. Our expert counselors assist students in identifying the most suitable academic path based on interest, ability, and future scope.",
//     },
//     {
//       title: "Career Counseling",
//       description:
//         "Through personalized counseling sessions, we help students discover their strengths, explore career opportunities, and make informed decisions for a brighter future.",
//     },
//     {
//       title: "Scholarship / Fee Guidance",
//       description:
//         "We guide students to avail scholarships, financial aid, and fee waivers offered by colleges and government schemes to reduce financial burden.",
//     },
//     {
//       title: "Admission Guidance",
//       description:
//         "Our consultancy provides detailed admission procedures, important dates, eligibility criteria, and required documentation for various universities.",
//     },
//     {
//       title: "Financial Assistance",
//       description:
//         "For students requiring educational loans, we assist in connecting with financial institutions, preparing loan documentation, and getting approvals quickly.",
//     },
//     {
//       title: "Application & Documentation Support",
//       description:
//         "We help in preparing applications, verifying documents, and ensuring compliance with university norms for a hassle-free admission process.",
//     },
//     {
//       title: "Result Page",
//       description:
//         "Students can check their application status and results through our consultancy. We provide transparent updates and timely notifications regarding selections.",
//     },
//   ];

//   return (
//     <div style={styles.container}>
//       <h1 className="mt-5" style={styles.heading}><span>🎓 Student Services</span></h1>
//       <p style={styles.subheading}>
//         Explore all the services offered by <strong>Britz Education Consultancy</strong> 
//         for students aspiring to study in Karnataka, Tamil Nadu, and Kerala.
//       </p>

//       <div style={styles.grid}>
//         {services.map((service, index) => (
//           <div key={index} style={styles.card}>
//             <h2 style={styles.cardTitle}>{service.title}</h2>
//             <p style={styles.cardDesc}>{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // ✅ Inline styles (you can replace with CSS file)
// const styles = {
//   container: {
//     padding: "50px 10%",
//     background: "#f9fafc",
//     minHeight: "100vh",
//   },
//   heading: {
    
//     textAlign: "center",
//     fontSize: "36px",
//     marginBottom: "10px",
//     color: "#1a237e",
//   },
//   subheading: {
//     textAlign: "center",
//     fontSize: "18px",
//     marginBottom: "40px",
//     color: "#333",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//     gap: "20px",
//   },
//   card: {
//     background: "#fff",
//     padding: "25px",
//     borderRadius: "12px",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//     transition: "transform 0.2s ease, box-shadow 0.2s ease",
//   },
//   cardTitle: {
//     fontSize: "22px",
//     marginBottom: "10px",
//     color: "#0d47a1",
//   },
//   cardDesc: {
//     fontSize: "16px",
//     color: "#444",
//     lineHeight: "1.5",
//   },
// };

// export default StudentServices;




import React from "react";
import { FaUniversity, FaBookOpen, FaUserTie, FaAward, FaClipboardCheck, FaMoneyCheckAlt, FaFileAlt, FaChartLine } from "react-icons/fa";

const StudentServices = () => {
  const services = [
    {
      title: "College Admissions",
      icon: <FaUniversity size={40} color="#1e88e5" />,
      description:
        "We provide step-by-step guidance to help students secure admissions into top colleges across Karnataka, Tamil Nadu, and Kerala. From application to counseling, we ensure a smooth admission process. Our network of partner institutions makes your admission journey stress-free.",
    },
    {
      title: "Course Selection",
      icon: <FaBookOpen size={40} color="#43a047" />,
      description:
        "Choosing the right course is a crucial step for your career. Our expert counselors assist students in identifying the most suitable academic path based on interest, ability, and future scope. We also provide insights into trending fields with great career opportunities.",
    },
    {
      title: "Career Counseling",
      icon: <FaUserTie size={40} color="#f4511e" />,
      description:
        "Through personalized counseling sessions, we help students discover their strengths, explore career opportunities, and make informed decisions for a brighter future. Our one-to-one mentorship ensures students gain clarity and confidence in their choices.",
    },
    {
      title: "Scholarship / Fee Guidance",
      icon: <FaAward size={40} color="#8e24aa" />,
      description:
        "We guide students to avail scholarships, financial aid, and fee waivers offered by colleges and government schemes to reduce financial burden. We also provide support in preparing scholarship applications with higher chances of approval.",
    },
    {
      title: "Admission Guidance",
      icon: <FaClipboardCheck size={40} color="#039be5" />,
      description:
        "Our consultancy provides detailed admission procedures, important dates, eligibility criteria, and required documentation for various universities. With timely reminders and checklists, we ensure no student misses out on important deadlines.",
    },
    {
      title: "Financial Assistance",
      icon: <FaMoneyCheckAlt size={40} color="#2e7d32" />,
      description:
        "For students requiring educational loans, we assist in connecting with financial institutions, preparing loan documentation, and getting approvals quickly. Our guidance ensures you get the best loan options with minimal hassle.",
    },
    {
      title: "Application & Documentation Support",
      icon: <FaFileAlt size={40} color="#6d4c41" />,
      description:
        "We help in preparing applications, verifying documents, and ensuring compliance with university norms for a hassle-free admission process. Our experts review every detail to avoid rejection and delays.",
    },
   
  ];

  return (
    <div style={styles.container}>
      <h1 className="mt-5" style={styles.heading}>
        🎓 Student Services
      </h1>
      <p style={styles.subheading}>
        Explore all the services offered by <strong>Britz Education Consultancy</strong> 
        for students aspiring to study in Karnataka, Tamil Nadu, and Kerala.
      </p>

      <div style={styles.grid}>
        {services.map((service, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{service.icon}</div>
            <h2 style={styles.cardTitle}>{service.title}</h2>
            <p style={styles.cardDesc}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Styles
const styles = {
  container: {
    padding: "50px 10%",
    background: "linear-gradient(135deg, #f9fafc 50%, #4a9fdbff 50%)",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    fontSize: "38px",
    marginBottom: "10px",
    color: "#1a237e",
  },
  subheading: {
    textAlign: "center",
    fontSize: "18px",
    marginBottom: "40px",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  icon: {
    marginBottom: "15px",
  },
  cardTitle: {
    fontSize: "22px",
    marginBottom: "12px",
    color: "#0d47a1",
  },
  cardDesc: {
    fontSize: "16px",
    color: "#444",
    lineHeight: "1.6",
  },
};

export default StudentServices;
