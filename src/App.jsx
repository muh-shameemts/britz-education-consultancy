// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./Pages/Home";
// import Courses from "./Pages/Courses";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Testimonials from './components/Testimonials/Testimonials'

// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <main className="container" style={{ paddingTop: 80 }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/courses" element={<Courses />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//       <Footer />
//     </>
//   );
// }



import React from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Footer";
import About from "./Pages/About"
import Testimonials from "./components/Testimonials/Testimonials"
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
      <Navbar/>
     <Routes> 
     <Route path='/' element={<Home/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/testimonials' element={<Testimonials/>} />
      </Routes>

      <Footer/>
     </div>
  )
}

export default App