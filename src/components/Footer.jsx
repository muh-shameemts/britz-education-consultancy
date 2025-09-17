// import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faCartShopping, faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React from 'react'
// import { Link } from 'react-router-dom'

// function Footer() {
//   return (
//     <footer className="bg-dark text-white py-5 mt-5">
//       <div className="container">
//         <div className="row">

//           {/* Logo & Description */}
//           <div className="col-md-4 mb-4">
//             <h1 className="fw-bold">Britz</h1>
//             <p>
//               Britz Education Consultancy specializes in guiding students for admissions in Karnataka, Tamil Nadu, and Kerala. 
//               We provide transparent counseling and support for courses in Medicine, Nursing, Pharmacy, Engineering, 
//               Management, and Arts & Science.
//             </p>
//           </div>

//           {/* Links */}
//           <div className="col-md-2 mb-4">
//             <h5 className="mb-3 mt-3">Links</h5>
//             <ul className="list-unstyled">
//               <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
//               <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
//               <li><Link to="/testimonials" className="text-white text-decoration-none">Testimonials</Link></li>
//             </ul>
//           </div>

//           {/* Guides */}
//           <div className="col-md-2 mb-4">
//             <h5 className="mb-3 mt-3">Guides</h5>
//             <ul className="list-unstyled">
//               <li>React</li>
//               <li>React Bootstrap</li>
//               <li>Bootswatch</li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="col-md-4 mb-4">
//             <h5 className="mb-3 mt-3">Contact Us</h5>

//             {/* Contact Details */}
//             <ul className="list-unstyled">
//               <li className="mb-2">
//                 <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-warning" />
//                 Changaramkulam, Kerala, India
//               </li>
//               <li className="mb-2">
//                 <FontAwesomeIcon icon={faPhone} className="me-2 text-warning" />
//                 +91 98765 43210
//               </li>
//               <li className="mb-3">
//                 <FontAwesomeIcon icon={faEnvelope} className="me-2 text-warning" />
//                 info@britzconsultancy.com
//               </li>
//             </ul>

//             {/* Newsletter */}
//             <form className="d-flex">
//               <input 
//                 type="email" 
//                 className="form-control me-2" 
//                 placeholder="Enter email" 
//               />
//               <button className="btn btn-warning">Subscribe</button>
//             </form>

//             {/* Social Media */}
//             <div className="d-flex mt-3 gap-3">
//               <FontAwesomeIcon icon={faXTwitter} size="lg" />
//               <FontAwesomeIcon icon={faLinkedin} size="lg" />
//               <FontAwesomeIcon icon={faFacebook} size="lg" />
//               <FontAwesomeIcon icon={faInstagram} size="lg" />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="text-center mt-4 border-top pt-3">
//           <small>© {new Date().getFullYear()} EduConsult — All rights reserved</small>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer




import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) {
      setMessage("⚠️ Please enter a valid email address.")
      return
    }
    setMessage(`✅ Thank you for subscribing, ${email}!`)
    setEmail("")
  }

  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row gy-4">

          {/* Logo & Description */}
          <div className="col-md-4">
            <h3 className="fw-semibold text-white">Britz</h3>
            <p className="small text-light">
              Britz Education Consultancy specializes in guiding students for admissions in 
              <b> Karnataka, Tamil Nadu, and Kerala</b>. We provide transparent counseling 
              and support for Medicine, Nursing, Pharmacy, Engineering, Management, and Arts & Science.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-2">
            <h6 className="fw-bold text-uppercase mb-3">Links</h6>
            <ul className="list-unstyled footer-links small">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/testimonials" className="text-white text-decoration-none">Testimonials</Link></li>
            </ul>
          </div>

          {/* Guides */}
          <div className="col-md-2">
            <h6 className="fw-bold text-uppercase mb-3">Guides</h6>
            <ul className="list-unstyled footer-links small">
              <li>React</li>
              <li>React Bootstrap</li>
              <li>Bootswatch</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h6 className="fw-bold text-uppercase mb-3">Contact</h6>

            <ul className="list-unstyled small">
              <li className="mb-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-warning" />
                Edappal, Kerala, India
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="me-2 text-warning" />
                +91 74033 14744
              </li>
               <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="me-2 text-warning" />
                +91 97464 16907
              </li>
              <li className="mb-3">
                <FontAwesomeIcon icon={faEnvelope} className="me-2 text-warning" />
                britzeducation@gmail.com
              </li>
            </ul>

            {/* Newsletter */}
            <form className="d-flex" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control form-control-sm me-2" 
                placeholder="Enter email" 
              />
              <button className="btn btn-warning btn-sm" type="submit">Subscribe</button>
            </form>
            {message && <small className="d-block mt-2 text-info">{message}</small>}

            {/* Social Media */}
            <div className="d-flex mt-3 gap-3">
              <a href="#" className="text-white"><FontAwesomeIcon icon={faXTwitter} /></a>
              <a href="#" className="text-white"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="#" className="text-white"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" className="text-white"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center mt-4 border-top pt-3">
          <small className="text-secondary">© {new Date().getFullYear()} Britz Education Consultancy — All rights reserved</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
