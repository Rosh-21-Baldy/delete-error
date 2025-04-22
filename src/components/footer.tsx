// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";

// export default function Footer() {
//   return (
//     <footer className="bg-light text-dark" style={{backgroundColor : " #0A2D4D" , }}>
//       <Container>
//         <Row className="d-flex justify-content-evenly" >
//           {/* Company Info */}
//           <Col md={3} className="d-flex flex-col text-start align-items-start">
//             <img src="https://www.prefinn.com/_next/static/media/logo.96e5ff96.png" alt="Prefinn Logo" className=" mb-3" style={{ width: "190px" }} />
//             <p className="text-start text-sm ">
//             Prefinn is a Finance & Fintech Solution firm ventured by experienced Banking professionals having significant expertise in the areas of Banking, Digital Lending, Financial Inclusion & Fintech Product & Services. </p>
//             {/* Social Media Icons */}
//             <div className="d-flex gap-3 mt-3 fs-4">
//               <FaFacebookF className="text-primary" />
//               <FaXTwitter className="text-dark" />
//               <FaInstagram className="text-danger" />
//               <FaYoutube className="text-danger" />
//               <FaLinkedinIn className="text-primary" />
//             </div>
//           </Col>

//           {/* Company Links */}
//           <Col md={3} className="d-flex text-sm flex-col align-items-center">
//             <h4 className="fw-bold  text-start"> Our Company</h4>
//             <ul className="list-unstyled text-dark d-flex flex-col gap-3 mt-3">
//               <li><a href="about-us" className="text-dark text-decoration-none">About Prefinn</a></li>
//               <li><a href="term-cond" className="text-dark text-decoration-none">Terms & Conditions</a></li>
//               <li><a href="privacy-pol" className="text-dark text-decoration-none">Privacy Policy</a></li>
//               <li><a href="/loan-apply" className="text-dark text-decoration-none">Apply for a Loan</a></li>
//               <li><a href="/become-partner"className="text-dark text-decoration-none">Become a Partner</a></li>
//             </ul>
//           </Col>

//           {/* Contact Information */}
//           <Col md={3}>
//             <h4 className="fw-bold ">Contact Information</h4>
//             <p className="small d-flex align-items-center mt-3">
//               <MdCall className="text-success fs-4 me-2" />
//               <span className="text-dark">+91-9650812333</span>
//             </p>
//             <p className="small d-flex align-items-center">
//               <MdEmail className="text-success fs-4 me-2" />
//               <span className="text-dark">support@prefinn.com</span>
//             </p>
//             <p className="small d-flex align-items-center">
//               <MdLocationOn className="text-success fs-4 me-2" />
//               <span className="text-dark">Plot No.77, Sector-37, Gurugram, Haryana-122001</span>
//             </p>
            
//           </Col>
//         </Row>
//       </Container>

//       {/* Copyright Section */}
//       {/* <div className=" text-white text-center py-3 mt-6" style={{backgroundColor : " #0A2D4D" , }}> */}
//       <div className=" text-white text-center py-3 mt-6" style={{backgroundColor : " #0A2D4D" , }}>

//         <small>Copyright © 2025 PreFinn Fintech Solutions - All Rights Reserved</small>
//       </div>
//     </footer>
//   );
// }




































// dont delete this ,this one is more responsive :

import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-light text-dark" style={{ backgroundColor: "#0A2D4D" }}>
      <Container>
        <Row className="d-flex justify-content-evenly">
          {/* Company Info */}
          <Col xs={12} md={4} className="d-flex flex-column text-start align-items-start mb-4">
            <img src="https://www.prefinn.com/_next/static/media/logo.96e5ff96.png" alt="Prefinn Logo" className="mb-3" style={{ width: "215px" }} />
            <p className="text-start text-sm">
            Transforming finance through technology, trust, innovation, and smarter digital solutions.
            </p>
            {/* Social Media Icons */}
            <div className="d-flex gap-3 mt-3 fs-4">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="text-primary" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaXTwitter className="text-dark" />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-danger" />
  </a>
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    <FaYoutube className="text-danger" />
  </a>
  <a href="https://www.linkedin.com/signup" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn className="text-primary" />
  </a>
</div>

          </Col>

          {/* Company Links */}
          <Col xs={12} md={4} className="d-flex flex-column align-items-start mb-4 mt-2">
            <h5  className="fw-bold text-start"style={{color:"#041184"}}>Our Company</h5>
            <ul className="list-unstyled text-dark d-flex flex-column gap-3 mt-3">
              <li><a href="about-us" className="text-dark text-decoration-none">About Prefinn</a></li>
              <li><a href="/become-partner" className="text-dark text-decoration-none">Become a Partner</a></li>
              <li><a href="term-cond" className="text-dark text-decoration-none">Terms & Conditions</a></li>
              <li><a href="privacy-pol" className="text-dark text-decoration-none">Privacy Policy</a></li>
            </ul>
          </Col>

          {/* Contact Information */}
          <Col xs={12} md={4} className="mb-4 mt-2">
            <h5 className="fw-bold"style={{color:"#041184"}}>Contact Information</h5>
            <p className="small d-flex align-items-center mt-3">
              <MdCall className="text-success fs-4 me-2" />
              {/* <strong className="text-dark">+91-9650812333</strong><br /> */}
              <span className="text-dark">+91-9650812333</span>
            </p>
            <p className="small d-flex align-items-center">
              <MdEmail className="text-success fs-4 me-2" />
              <span className="text-dark">info@prefinn.com</span>
             
            </p>
            <p className="small d-flex align-items-start gap-2">
  <MdLocationOn className="text-success fs-4 flex-shrink-0 mt-1" />
  <span className="text-dark fw-sm">
  Prefinn FinServ Private Limited<br />
  Cabin No. 204, 2nd Floor, MVL I-Park,<br />
  Sector-15, Part 2, Chandan Nagar,<br />
  Gurgaon, Haryana - 122001<br />
  <a 
    href="https://maps.google.com?q=MVL+I-Park+Sector-15+Part+2+Chandan+Nagar+Gurgaon+Haryana+122001"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary hover:underline"
  >
    View on Map
  </a>
</span>

</p>
          </Col>
        </Row>
      </Container>

      {/* Copyright Section */}
      <div className="text-white text-center py-1 " style={{ backgroundColor: "#041184" }}>
        <small>Copyright © 2025 PreFinn Fintech Solutions - All Rights Reserved</small>
      </div>
    </footer>
  );
}