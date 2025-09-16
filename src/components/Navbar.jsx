

// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import image from "../assets/logo1.png";
// import './Header.css'
// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white fixed -top-5 left-0 z-40 shadow-md">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div className="-ms-10  flex items-center">
//           <img className="w-30 mt-1 ms-8 md:w-40" src={image} alt="Logo" />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-blue-900"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X size={28} /> : <Menu className=" " size={36} />}
//         </button>

//         {/* Navigation Links + Contact Button for Large Screens */}
//         <div className="hidden md:flex items-center gap-25">
//           <ul
//           className="flex gap-17 ">
//             {["Courses", "Colleges", "About", "Services", "Collabrations"].map((item, index) => (
//               <li key={index}>
//                 <a href="#"   id="list" className="text-lg text-blue-900 hover:text-blue transition-all">
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           {/* Contact Button (Large Screens) */}
//          <div className="-me-12">
//             <button className="bg-blue-900 text-amber-50 px-7 py-2 rounded-3 hover:bg-white hover:text-black border border-blue-900">
//               Contact Us
//             </button>
//          </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className=" md:hidden rounded-3 shadow-lg flex flex-col items-center gap-4 bg-white shadow-md pe-4 absolute  left-44 top-16">
//           <ul className="w-full mt-1 text-center">
//             {["Study Overseas", "Student Help", "Courses", "Colleges", "About Us"].map((item, index) => (
//               <li key={index} className="p-2">
//                 <a href="#" id="lists"  style={{textDecoration:"none"}} className="text-lg text-blue-900 hover:text-black transition-all">
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           {/* Contact Button (Small Screens) */}
//         <div className="-mt-7 ms-4 mb-3">
//             <button className="bg-blue-900 text-amber-50 px-3 py-2 rounded-4 hover:bg-white hover:text-black border border-blue-900">
//               Contact Us
//             </button>
//         </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Header;




import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo1.png";

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

  return (
    <header className={`header ${sticky ? "sticky" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>Home</li>

          {/* Dropdown Example 1 */}
          <li
            className={`dropdown ${dropdown === "study" ? "active" : ""}`}
            onMouseEnter={() => setDropdown("study")}
            onMouseLeave={() => setDropdown(null)}
            onClick={() => toggleDropdown("study")} // mobile
          >
            Study Abroad ▾
            <ul className={`dropdown-menu ${dropdown === "study" ? "show" : ""}`}>
              <li>USA</li>
              <li>UK</li>
              <li>Canada</li>
              <li>Australia</li>
            </ul>
          </li>

          {/* Dropdown Example 2 */}
          <li
            className={`dropdown ${dropdown === "services" ? "active" : ""}`}
            onMouseEnter={() => setDropdown("services")}
            onMouseLeave={() => setDropdown(null)}
            onClick={() => toggleDropdown("services")} // mobile
          >
            Student Services ▾
            <ul className={`dropdown-menu ${dropdown === "services" ? "show" : ""}`}>
              <li>Career Counseling</li>
              <li>Admission Guidance</li>
              <li>Financial Assistance</li>
              <li>Visa Assistance</li>
            </ul>
          </li>

          <li>Events</li>
          <li>Resources</li>

          <li>
            <button className="btn">Contact Us</button>
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
