

// "use client";
// import Image from "next/image";
// import "bootstrap/dist/css/bootstrap.min.css";

// const HeroSection = () => {
//   return (
//     <section className="bg-white py-5 md:py-20">
//       <div className="container px-4">
//         <div className="row align-items-center">
//           {/* Left Side */}
//           <div className="col-12 col-md-6 text-center text-md-start mb-5 mb-md-0">
//             <h1 className="fw-bold mb-3" style={{ color: "#0d53b7", fontSize: "2rem" }}>
//               We are Prefinn,
//             </h1>
//             <h3 className="fw-bold mb-4" style={{ fontSize: "1.5rem" }}>
//               India’s Preferred Loan Distribution Platform
//             </h3>
//             <p className="text-dark fs-5 mb-4">
//               Prefinn streamlines the loan process by blending traditional finance with agile fintech, ensuring faster and more efficient disbursements.
//             </p>
//             <ul className="list-unstyled">
//               <li className="mb-2" style={{ color: "#041184" }}>➡ Tailored Loans for Housing & MSMEs</li>
//               <li className="mb-2" style={{ color: "#041184" }}>➡ Partnered Bank & NBFC Offerings</li>
//               <li className="mb-2" style={{ color: "#041184" }}>➡ Driving Financial Inclusion Nationwide</li>
//             </ul>
//           </div>

//           {/* Right Side */}
//           <div className="col-12 col-md-6 text-center">
//             <div className="p-3 bg-light rounded">
//               <Image
//                 src="https://img.freepik.com/free-vector/financial-recovery-after-coronavirus_23-2148558699.jpg?t=st=1745485575~exp=1745489175~hmac=c00bc585c175bc76525832b610ce96ed4609d237cf4e9278fad5185bc5f7eced&w=1380"
//                 alt="Fintech Dashboard"
//                 width={500}
//                 height={400}
//                 className="img-fluid"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;










"use client";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
  return (
    
    <section className="bg-white py-5 py-md-20">
      <div className="container px-4">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-12 col-md-6 text-center text-md-start mb-5 mb-md-0">
            <h1 className="fw-bold mb-3" style={{ color: "#0d53b7", fontSize: '3.2rem',
                   fontWeight: '800',
                   lineHeight: '1.2', }}>
              We are Landers,
            </h1>
            <h1 className="fw-bold mb-4" style={{ fontSize: "1.70rem" }}>
              India’s Preferred Loan Distribution Platform
            </h1>
            <p className="text-dark fs-5 mb-4">
              Prefinn streamlines the loan process by blending traditional finance with agile fintech, ensuring faster and more efficient disbursements.
            </p>
            <ul className="list-unstyled">
            <li className="mb-2 fw-bold" style={{ color: "#0d53b7" ,fontSize:'1.50',}}> Partnered Bank & NBFC Offerings</li>
              <li className="mb-2 fw-bold" style={{ color: "#0d53b7",fontSize:'1.50' }}> Tailored Loans for Housing & MSMEs</li>
              <li className="mb-2 fw-bold" style={{ color: "#0d53b7",fontSize:'1.50' }}> Driving Financial Inclusion Nationwide</li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="col-12 col-md-6 text-center">
            <div className="p-3 bg-light rounded">
              <Image
                src="https://img.freepik.com/free-vector/financial-recovery-after-coronavirus_23-2148558699.jpg?t=st=1745485575~exp=1745489175~hmac=c00bc585c175bc76525832b610ce96ed4609d237cf4e9278fad5185bc5f7eced&w=1380"
                alt="Fintech Dashboard"
                layout="responsive"
                width={700}
                height={500}
                className="img-fluid"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;