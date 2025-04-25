


// "use client";
// import "../App.css";
// import {
//   FaPhone,
//   FaFacebook,
//   FaInstagram,
//   FaYoutube,
//   FaLinkedin,
//   FaTwitter,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// const OfferBanner = () => {
//   return (
//     // <div className="container-fluid bg-success text-white py-2 top-bar">
//     <div
//       className="container-fluid text-white py-2 top-bar"
//       style={{ backgroundColor: "#041184" }}
//     >
//       <div className="row align-items-center">
//         {/* Left Side */}
//         <div className="col-12 col-md-8 overflow-hidden">
//           <div className="d-flex flex-nowrap gap-5 marquee align-items-center">
//             {/* Phone */}
//             <div className="d-flex align-items-center gap-2 mx-3">
//               <div className="icon-circle"><FaPhone /></div>
//               <span className="text-nowrap">+91-9650812333</span>
//             </div>
//             {/* Email */}
//             <div className="d-flex align-items-center gap-2">
//               <div className="icon-circle"><FaEnvelope /></div>
//               <span className="text-nowrap">info@prefinn.com</span>
//             </div>
//             {/* Location */}
//             <div className="d-flex align-items-center gap-2">
//               <div className="icon-circle"><FaMapMarkerAlt /></div>
//               <span className="text-nowrap">
//                MVL I - Park,
// Sector-15, Part 2, Chandan Nagar,
// Gurgaon, Haryana - 122001
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="col-12 col-md-4 d-flex gap-3 align-items-center justify-content-md-end justify-content-center mt-2 mt-md-0">
//           <span className="fw-semibold">Follow us on:</span>
//           <a href="https://www.facebook.com/prefinn" target="_blank" rel="noopener noreferrer">
//             <FaFacebook className="text-primary" />
//           </a>
//           {/* <a href="https://twitter.com/prefinn" target="_blank" rel="noopener noreferrer">
//             <FaTwitter className="text-primary" />
//           </a> */}
//           <a href="https://www.linkedin.com/company/prefinn" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin className="text-primary" />
//           </a>
//           <a href="https://www.instagram.com/prefinn" target="_blank" rel="noopener noreferrer">
//             <FaInstagram className="text-danger" />
//           </a>
//           {/* <a href="https://www.youtube.com/@prefinn" target="_blank" rel="noopener noreferrer">
//             <FaYoutube className="text-danger" />
//           </a> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OfferBanner;








// new hai ye 

// import React from "react";
// import {
//   FaPhone,
//   FaFacebook,
//   FaInstagram,
//   FaYoutube,
//   FaLinkedin,
//   FaTwitter,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// const OfferBanner = () => {
//   return (
//     <div
//       className="container-fluid text-white py-2 top-bar"
//       style={{ backgroundColor: "#041184" }}
//     >
//       <div className="row align-items-center">
//         {/* Left Side */}
//         <div className="col-12 col-md-8 overflow-hidden">
//           <div className="d-flex flex-nowrap gap-3 gap-md-5 marquee align-items-center">
//             {/* Phone */}
//             <div className="d-flex align-items-center gap-2 mx-3">
//               <div className="icon-circle"><FaPhone /></div>
//               <span className="text-nowrap text-xs sm:text-sm">+91-9650812333</span>
//             </div>
//             {/* Email */}
//             <div className="d-flex align-items-center gap-2">
//               <div className="icon-circle"><FaEnvelope /></div>
//               <span className="text-nowrap text-xs sm:text-sm">info@prefinn.com</span>
//             </div>
//             {/* Location */}
//             <div className="d-flex align-items-center gap-2">
//               <div className="icon-circle"><FaMapMarkerAlt /></div>
//               <span className="text-nowrap text-xs sm:text-sm">
//                 MVL I - Park, Sector-15, Part 2, Chandan Nagar,
//                 Gurgaon, Haryana 122001
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="col-12 col-md-4 d-flex gap-3 align-items-center justify-content-center justify-content-md-end mt-2 mt-md-0">
//           <span className="fw-semibold text-xs sm:text-sm">Follow us on:</span>
//           <div className="d-flex gap-2">
//             <a href="https://www.facebook.com/prefinn" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//               <FaFacebook className="text-primary h-6 w-6" />
//             </a>
//             <a href="https://www.linkedin.com/company/prefinn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//               <FaLinkedin className="text-primary h-6 w-6" />
//             </a>
//             <a href="https://www.instagram.com/prefinn" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//               <FaInstagram className="text-danger h-6 w-6" />
//             </a>
//           </div>
//         </div>
//       </div>
//       <style jsx>{`
//         .icon-circle {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 24px;
//           height: 24px;
//           border-radius: 50%;
//           background-color: white;
//           color: #041184;
//         }
//         .top-bar a {
//           transition: all 0.3s ease;
//         }
//         .top-bar a:hover {
//             transform: scale(1.1);
//         }

//         .marquee {
//           white-space: nowrap;
//           overflow: hidden;
//           position: relative;
//           animation: marqueeAnimation 20s linear infinite;
//         }

//         @keyframes marqueeAnimation {
//           0% { transform: translateX(0%); }
//           100% { transform: translateX(-100%); }
//         }

//         /* Responsive font size for very small screens */
//         @media (max-width: 576px) {
//           .text-xs {
//             font-size: 0.7rem; /* Make text smaller on extra-small screens */
//           }
//           .icon-circle {
//             width: 20px;
//             height: 20px;
//           }
//           .icon-circle svg{
//             font-size: 0.8rem;
//           }
//         }
//         /* font size for small screens */
//         @media (min-width: 576px) and (max-width: 768px) {
//           .text-sm{
//              font-size: 0.8rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default OfferBanner;











import React from "react";
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
    <div
      className="container-fluid text-white py-2 top-bar"
      style={{ backgroundColor: "#041184" }}
    >
      <div className="row align-items-center">
        {/* Left Side */}
        <div className="col-12 col-md-8 overflow-hidden">
          <div className="d-flex flex-nowrap gap-3 gap-md-5 marquee align-items-center">
            {/* Phone */}
            <div className="d-flex align-items-center gap-2 mx-3">
              <div className="icon-circle"><FaPhone /></div>
              <span className="text-nowrap text-xs sm:text-sm">+91-9650812333</span>
            </div>
            {/* Email */}
            <div className="d-flex align-items-center gap-2">
              <div className="icon-circle"><FaEnvelope /></div>
              <span className="text-nowrap text-xs sm:text-sm">info@prefinn.com</span>
            </div>
            {/* Location */}
            <div className="d-flex align-items-center gap-2" style={{ minWidth: 'fit-content' }}>
              <div className="icon-circle"><FaMapMarkerAlt /></div>
              <span className="text-nowrap text-xs sm:text-sm font-size-inherit" style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
                MVL I - Park, Sector-15, Part 2, Chandan Nagar,
                Gurgaon, Haryana 
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-12 col-md-4 d-flex gap-3 align-items-center justify-content-center justify-content-md-end mt-2 mt-md-0">
          <span className="fw-semibold text-xs sm:text-sm">Follow us on:</span>
          <div className="d-flex gap-2">
            <a href="https://www.facebook.com/share/1LseQQ1CuX/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-primary h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/company/prefinn/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-primary h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/prefinn_finserv?igsh=MWhmZmFreTJyNWljcA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-danger h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .icon-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: white;
          color: #041184;
        }
        .top-bar a {
          transition: all 0.3s ease;
        }
        .top-bar a:hover {
          transform: scale(1.1);
        }

        .marquee {
          white-space: nowrap;
          overflow: hidden;
          position: relative;
          animation: marqueeAnimation 20s linear infinite;
        }

        @keyframes marqueeAnimation {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }

        /* Responsive font size for very small screens */
        @media (max-width: 576px) {
          .text-xs {
            font-size: 0.7rem;
          }
          .icon-circle {
            width: 20px;
            height: 20px;
          }
          .icon-circle svg{
            font-size: 0.8rem;
          }
        }
        /* font size for small screens */
        @media (min-width: 576px) and (max-width: 768px) {
          .text-sm{
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default OfferBanner;



