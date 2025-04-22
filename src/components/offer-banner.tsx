// "use client";
// import ".././App.css"
// import Link from "next/link";
// import { X } from "lucide-react";
// import { useState } from "react";
// import { FaPhone ,FaFacebook, FaInstagram, FaYoutube, FaLinkedin , FaTwitter , FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// const OfferBanner = () => {
//   return (
//     <div className="row bg-success text-white px-3 py-2 text-center top-bar"style={{color:"#8BC34A"}}>
//       <div className="col-8 d-flex gap-3"> 
   
//          <div className="d-flex align-items-center gap-2 mx-3">
//               <div className="icon-circle">
//                 <FaPhone />
//               </div>
//               <span> +91-9650812333</span>
//             </div>

//             {/* Email */}
//             <div className="d-flex align-items-center gap-2">
//               <div className="icon-circle">
//                 <FaEnvelope />
//               </div>
//               <span> support@prefinn.com</span>
//             </div>

//             {/* Location */}
//             <div className="d-flex align-items-center gap-2 ">
//               <div className="icon-circle">
//                 <FaMapMarkerAlt />
//               </div>
//               <span>Plot No.77, Sector-37, Gurugram, Haryana-122001</span>
//             </div>

       
//       </div> 
//       <div className="col-4 d-flex gap-4 align-items-center justify-content-end "> 
//      Follow us on : <FaFacebook className="social-icon"/> <FaTwitter className="social-icon"/> <FaLinkedin className="social-icon"/> <FaInstagram className="social-icon"/> <FaYoutube className="social-icon"/>
//       </div>
//     </div>
//   );
// };

// export default OfferBanner;










// "use client";
// import "../App.css"; // Ensure App.css includes the styles below
// import { FaPhone, FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const OfferBanner = () => {
//   return (
//     <div className="row bg-success text-white px-3 py-1 top-bar">
//       {/* Left Side: Scrolling Info */}
//       <div className="col-md-8 overflow-hidden">
//         <div className="d-flex gap-5 marquee">
//           {/* Phone */}
//           <div className="d-flex align-items-center gap-2 mx-3">
//             <div className="icon-circle"><FaPhone /></div>
//             <span>+91-9650812333</span>
//           </div>
//           {/* Email */}
//           <div className="d-flex align-items-center gap-2">
//             <div className="icon-circle"><FaEnvelope /></div>
//             <span>support@prefinn.com</span>
//           </div>
//           {/* Location */}
//           <div className="d-flex align-items-center gap-2">
//             <div className="icon-circle"><FaMapMarkerAlt /></div>
//             <span>Plot No.77, Sector-37, Gurugram, Haryana-122001</span>
//           </div>
//         </div>
//       </div>

//       {/* Right Side: Social Icons */}
//       <div className="col-md-4 d-flex gap-3 align-items-center justify-content-end">
//         Follow us on:
//         <FaFacebook className="social-icon" />
//         <FaTwitter className="social-icon" />
//         <FaLinkedin className="social-icon" />
//         <FaInstagram className="social-icon" />
//         <FaYoutube className="social-icon" />
//       </div>
//     </div>
//   );
// };

// export default OfferBanner;
















"use client";
import "../App.css";
import {
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const OfferBanner = () => {
  return (
    // <div className="container-fluid bg-success text-white py-2 top-bar">
    <div
      className="container-fluid text-white py-2 top-bar"
      style={{ backgroundColor: "#041184" }}
    >
      <div className="row align-items-center">
        {/* Left Side */}
        <div className="col-12 col-md-8 overflow-hidden">
          <div className="d-flex flex-nowrap gap-5 marquee align-items-center">
            {/* Phone */}
            <div className="d-flex align-items-center gap-2 mx-3">
              <div className="icon-circle"><FaPhone /></div>
              <span className="text-nowrap">+91-9650812333</span>
            </div>
            {/* Email */}
            <div className="d-flex align-items-center gap-2">
              <div className="icon-circle"><FaEnvelope /></div>
              <span className="text-nowrap">info@prefinn.com</span>
            </div>
            {/* Location */}
            <div className="d-flex align-items-center gap-2">
              <div className="icon-circle"><FaMapMarkerAlt /></div>
              <span className="text-nowrap">
               MVL I - Park,
Sector-15, Part 2, Chandan Nagar,
Gurgaon, Haryana - 122001
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-12 col-md-4 d-flex gap-3 align-items-center justify-content-md-end justify-content-center mt-2 mt-md-0">
          <span className="fw-semibold">Follow us on:</span>
          <a href="https://www.facebook.com/prefinn" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-primary" />
          </a>
          <a href="https://twitter.com/prefinn" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-primary" />
          </a>
          <a href="https://www.linkedin.com/company/prefinn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-primary" />
          </a>
          <a href="https://www.instagram.com/prefinn" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-danger" />
          </a>
          <a href="https://www.youtube.com/@prefinn" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-danger" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
