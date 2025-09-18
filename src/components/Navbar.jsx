


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
    setMenuOpen(false); // also close mobile menu
  };

  return (
    <header className={`header ${sticky ? "sticky" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <span className="item">Home</span>
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
            <ul className={`dropdown-menu ${dropdown === "study" ? "show" : ""}`}>
              <li onClick={handleOptionClick}>
               <li><Link to="/kerala">Kerala</Link></li>
              </li>
              <li onClick={handleOptionClick}>
                 <li><Link to="/bangalore">Bengaluru</Link></li>
              </li>
              <li onClick={handleOptionClick}>
                 <li><Link to="/chennai">Chennai</Link></li>
              </li>
              <li onClick={handleOptionClick}>
                 <li><Link to="/mangalore">Mangluru</Link></li>
              </li>
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
            <ul className={`dropdown-menu ${dropdown === "abroad" ? "show" : ""}`}>
              <li onClick={handleOptionClick}>
                <Link to="/studyabroad">Tajikistan</Link>
              </li>
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
            <ul className={`dropdown-menu ${dropdown === "services" ? "show" : ""}`}>
              <li onClick={handleOptionClick}>
                <Link to="/studentservices">College Admissions</Link>
              </li>
              <li onClick={handleOptionClick}>
                <Link to="/studentservices">Course Selection</Link>
              </li>
              <li onClick={handleOptionClick}>
                <Link to="/studentservices">Career Counseling</Link>
              </li>
              <li onClick={handleOptionClick}>
                <Link to="/studentservices">Scholarship / Fee Guidance</Link>
              </li>
              <li onClick={handleOptionClick}>
                <Link to="/studentservices">Admission Guidance</Link>
              </li>
              <li onClick={handleOptionClick}>
                <Link to="/studentservices">Financial Assistance</Link>
              </li>
              <li onClick={handleOptionClick}>
                <Link to="/studentservices">Application & Documentation Support</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/testimonials" onClick={() => setMenuOpen(false)}>
              Testimonials
            </Link>
          </li>

          <li>
            <button className="btn" onClick={() => setMenuOpen(false)}>
              <Link to="/contact">Contact Us</Link>
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
