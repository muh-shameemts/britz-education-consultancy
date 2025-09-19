


// import React, { useEffect, useState } from "react";
// import "./Navbar.css";
// import logo from "../assets/logo.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [sticky, setSticky] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdown, setDropdown] = useState(null);

//   // Sticky effect
//   useEffect(() => {
//     const handleScroll = () => setSticky(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Toggle dropdown on mobile
//   const toggleDropdown = (name) => {
//     if (dropdown === name) {
//       setDropdown(null);
//     } else {
//       setDropdown(name);
//     }
//   };
//   // Close dropdown when option clicked
//   const handleOptionClick = () => {
//     setDropdown(null);
//   };

//   return (
//     <header className={`header ${sticky ? "sticky" : ""}`}>
//       <div className="nav-container">
//         {/* Logo */}
//         <img src={logo} alt="Logo" className="logo" />

//         {/* Nav Links */}
//         <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//          <li> <Link to="/"><span className="item">Home</span></Link></li>

//           {/* Dropdown Example 1 */}
//           <li
//             className={`dropdown ${dropdown === "study" ? "active" : ""}`}
//             onMouseEnter={() => setDropdown("study")}
//             onMouseLeave={() => setDropdown(null)}
//             onClick={() => toggleDropdown("study")} // mobile
//           >
//             Study India ▾
//             <ul className={`dropdown-menu ${dropdown === "study" ? "show" : ""}`}>

//               <li>Kerala</li>
//               <li>Bangalore</li>
//                 <li>Chennai</li>
//                  <li>Mangalore</li>
//             </ul>
//           </li>

//             <li
//             className={`dropdown ${dropdown === "abroad" ? "active" : ""}`}
//             onMouseEnter={() => setDropdown("abroad")}
//             onMouseLeave={() => setDropdown(null)}
//             onClick={() => toggleDropdown("abroad")} // mobile
//           >
//             Study Abroad ▾
//             <ul className={`dropdown-menu ${dropdown === "abroad" ? "show" : ""}`}>

//               <li>Tajikistan</li>
//             </ul>
//           </li>


//           {/* Dropdown Example 2
//           <li
//             className={`dropdown ${dropdown === "services" ? "active" : ""}`}
//             onMouseEnter={() => setDropdown("services")}
//             onMouseLeave={() => setDropdown(null)}
//             onClick={() => toggleDropdown("services")} // mobile
//           >
//             Student Services ▾
//             <ul className={`dropdown-menu ${dropdown === "services" ? "show" : ""}`}>
//               <li>College Admissions</li>
//               <li>Course Selection</li>
//               <li>Career Counseling</li>
//               <li>Scholarship / Fee Guidance</li>
//               <li>Admission Guidance</li>
//               <li>Financial Assistance</li>
//               <li>Application & Documentation Support</li>
//             </ul>
//           </li> */}



// {/* Dropdown Example 2 */}
// <li
//   className={`dropdown ${dropdown === "services" ? "active" : ""}`}
//   onMouseEnter={() => setDropdown("services")}
//   onMouseLeave={() => setDropdown(null)}
//   onClick={() => toggleDropdown("services")} // for mobile
// >
//   Student Services ▾
//   <ul className={`dropdown-menu ${dropdown === "services" ? "show" : ""}`}>
//     <li><Link to="/studentserices">College Admissions</Link></li>
//     <li><Link to="/studentserices">Course Selection</Link></li>
//     <li><Link to="/studentserices">Career Counseling</Link></li>
//     <li><Link to="/studentserices">Scholarship / Fee Guidance</Link></li>
//     <li><Link to="/studentserices">Admission Guidance</Link></li>
//     <li><Link to="/studentserices">Financial Assistance</Link></li>
//     <li><Link to="/studentserices">Application & Documentation Support</Link></li>
//     {/* <li><Link to="/studentservices">Result Page</Link></li> ✅ Added Result Page */}
//   </ul>
// </li>



//           <li> <Link to="/about">About Us</Link></li>
//             <li> <Link to="/testimonials">Testimonials</Link></li>

//           <li>
//             <button className="btn">
//               <Link to="/contact">Contact Us</Link>
//               </button>
//           </li>
//         </ul>

//         {/* Hamburger Menu */}
//         <div
//           className={`hamburger ${menuOpen ? "active" : ""}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;




import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  // Sticky effect
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dropdown on mobile
  const toggleDropdown = (name) => {
    if (dropdown === name) {
      setDropdown(null);
    } else {
      setDropdown(name);
    }
  };

  // Close dropdown when option clicked

  const handleOptionClick = () => {
    setDropdown(null);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" }); // 👈 force scroll on click
  };

  return (
    <header className={`header ${sticky ? "sticky" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li className="option">
            <Link
              to="/"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
            Home
            </Link>

          </li>

          {/* Dropdown Example 1 */}
          <li
            className={`dropdown ${dropdown === "study" ? "active" : ""}`}
            onMouseEnter={() => setDropdown("study")}
            onMouseLeave={() => setDropdown(null)}
            onClick={() => toggleDropdown("study")} // mobile

          >
        Study India ▾
            <ul className={`dropdown-menu mt-1 ${dropdown === "study" ? "show" : ""}`}>

              <div ><Link to="/kerala">
                <li onClick={handleOptionClick}>Kerala</li></Link>
              </div>

              <div>  <Link to="/bangalore">
                <li onClick={handleOptionClick}>Bangalore</li></Link>
              </div>


              <div><Link to="/chennai">
                <li onClick={handleOptionClick}>Chennai</li></Link>
              </div>


              <div>
                <Link to="/mangalore"><li onClick={handleOptionClick}>Mangalore</li></Link>
              </div>

            </ul>
          </li>

          {/* Dropdown Example 2 */}
          <li
            className={`dropdown ${dropdown === "abroad" ? "active" : ""}`}
            onMouseEnter={() => setDropdown("abroad")}
            onMouseLeave={() => setDropdown(null)}
            onClick={() => toggleDropdown("abroad")} // mobile
          >
            Study Abroad ▾
            <ul className={`dropdown-menu mt-1 ${dropdown === "abroad" ? "show" : ""}`}>
              <div>
                 <Link to="/studyabroad">
                 <li onClick={handleOptionClick}>Tajikistan</li>
                 </Link>

              </div>

            </ul>
          </li>

          {/* Dropdown Example 3 */}
          <li
            className={`dropdown ${dropdown === "services" ? "active" : ""}`}
            onMouseEnter={() => setDropdown("services")}
            onMouseLeave={() => setDropdown(null)}
            onClick={() => toggleDropdown("services")} // for mobile
          >
            Student Services ▾
            <ul className={`dropdown-menu  mt-1 ${dropdown === "services" ? "show" : ""}`}>
             <div>
  <Link to="/studentservices">
    <li onClick={handleOptionClick}>College Admissions</li>
  </Link>
</div>

<div>
  <Link to="/studentservices">
    <li onClick={handleOptionClick}>Course Selection</li>
  </Link>
</div>

<div>
  <Link to="/studentservices">
    <li onClick={handleOptionClick}>Career Counseling</li>
  </Link>
</div>

<div>
  <Link to="/studentservices">
    <li onClick={handleOptionClick}>Scholarship / Fee Guidance</li>
  </Link>
</div>

<div>
  <Link to="/studentservices">
    <li onClick={handleOptionClick}>Admission Guidance</li>
  </Link>
</div>

<div>
  <Link to="/studentservices">
    <li onClick={handleOptionClick}>Financial Assistance</li>
  </Link>
</div>

<div>
  <Link to="/studentservices">
    <li onClick={handleOptionClick}>Application & Documentation Support</li>
  </Link>
</div>

            </ul>
          </li>

          <li>
            <Link
              to="/about"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Testimonials
            </Link>
          </li>

          <li>
            <button className="btn" onClick={() => setMenuOpen(false)}>
              <Link
                to="/contact"
                onClick={() => {
                  setMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Contact Us
              </Link>

            </button>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
