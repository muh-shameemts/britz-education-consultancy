
// import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React from 'react'
// import { Link } from 'react-router-dom'

// function Footer() {
//   return (
//     <div className='min-h-80 bg-indigo-900 p-10 w-100 md:grid  md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] text-white'>
//         <div >
//             <h1 className="text-3xl me-3"><FontAwesomeIcon icon={faCartShopping}  />E-CART</h1>
//             <p className='text-justify mt-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate enim in corrupti! Animi vero ipsa ab dolores reprehenderit amet quae ipsum autem, consequuntur iusto beatae voluptas reiciendis provident sapiente!
//             Iusto, reiciendis voluptatum accusamus eius possimus, minima veniam nobis iure iste, aspernatur placeat.</p>
//         </div>
//         <div className='md:flex justify-center mt-10 md:mt-0'>
//         <div>   
//             <h1 className="text-3xl ">LINKS</h1>
//            <Link to={'/'}> <p className='mt-4'>Home</p></Link>
//            <Link to={'/wishlist'}> <p  className='mt-3' >Wishliat</p></Link>
//            <Link to={ '/cart'}><p  className='mt-3'>Cart</p></Link>
//         </div>
//         </div>
//         <div className='md:flex justify-center mt-10 md:mt-0'>
//         <div>   
//             <h1 className="text-3xl ">GUIDES</h1>
//             <p className='mt-4'>React</p>
//             <p  className='mt-3' >React Bootstrap</p>
//             <p  className='mt-3'>Bootswatch</p>
//         </div>
//         </div>
//         <div className='md:px-10 mt-10 md:mt-0'>
//            <h1 className="text-3xl">CONTACT US</h1>
//            <div className='flex mt-4'>
//                 <input type="text" placeholder='e-mail' className='w-5/6 p-2' />
//                 <button className='px-3 py-2  bg-orange-600 '>subscribe</button>
//            </div>
//            <div className='flex justify-between mt-5'>
//            <FontAwesomeIcon icon={faXTwitter} className='text-3xl pe-5'/>
//            <FontAwesomeIcon icon={faLinkedin} className='text-3xl pe-5'/>
//            <FontAwesomeIcon icon={faFacebook} className='text-3xl pe-5'/>
//            <FontAwesomeIcon icon={faInstagram} className='text-3xl'/>
//            </div>
//         </div>
//          <div className="container text-center">
//         <small>© {new Date().getFullYear()} EduConsult — All rights reserved</small>
//       </div>
//     </div>
  
// )
// }

// export default Footer



import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">

          {/* Logo & Description */}
          <div className="col-md-4 mb-4">
            <h3 className="mb-3">
              <FontAwesomeIcon icon={faCartShopping} /> E-CART
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ea voluptate enim in corrupti! Animi vero ipsa ab dolores 
              reprehenderit amet quae ipsum autem, consequuntur iusto 
              beatae voluptas reiciendis provident sapiente!
            </p>
          </div>

          {/* Links */}
          <div className="col-md-2 mb-4">
            <h5 className="mb-3">Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/wishlist" className="text-white text-decoration-none">Wishlist</Link></li>
              <li><Link to="/cart" className="text-white text-decoration-none">Cart</Link></li>
            </ul>
          </div>

          {/* Guides */}
          <div className="col-md-2 mb-4">
            <h5 className="mb-3">Guides</h5>
            <ul className="list-unstyled">
              <li>React</li>
              <li>React Bootstrap</li>
              <li>Bootswatch</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Contact Us</h5>
            <form className="d-flex">
              <input 
                type="email" 
                className="form-control me-2" 
                placeholder="Enter email" 
              />
              <button className="btn btn-warning">Subscribe</button>
            </form>
            <div className="d-flex mt-3 gap-3">
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
              <FontAwesomeIcon icon={faFacebook} size="lg" />
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center mt-4 border-top pt-3">
          <small>© {new Date().getFullYear()} EduConsult — All rights reserved</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
