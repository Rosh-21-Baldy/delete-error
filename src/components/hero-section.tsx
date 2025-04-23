// "use client"; // ✅ Makes it a Client Component

// import Image from "next/image";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const HeroSection = () => {
//   return (
//     <div className="bg-white py-10 md:py-16">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Left Section: Welcome Message */}
//           <div>
//             <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
//               Welcome to <span className="text-green-700">Prefinn!</span>

//             </h1>
//             <h3><span className="text-green-700"> Your Trusted Lending Partner</span>
//               <span className="text-green-700"></span>{" "}
//               <span> </span>
//               </h3>
//             <p className="text-lg text-gray-700 mb-6">
//             Prefinn offers Integrated Lending Solution Platform to B2B Businesses, Channel Partners and end consumers.
//             </p>
//             <ul className="text-lg text-gray-700 space-y-2">
//               <li>➡ Banking Products</li>
//               <li>➡ Digital Lending</li>
//               {/* <li>➡ Business Loan</li> */}
//               {/* <li>➡ Home Loan</li> */}
//             </ul>
//             <p className="text-lg text-gray-700 mt-6">
//               Our firm aims to bridge the gap between traditional financial
//               institutions and innovative fintech solutions, thereby enhancing
//               operational efficiency and profitability for its clients.
//             </p>
//           </div>

//           {/* Right Section: Image + Play Button */}
//           <div className="relative flex justify-center">
//             {/* Image */}
//             <Image
//               src="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1194.jpg?t=st=1742884844~exp=1742888444~hmac=1f6e60c1b0e05569c059615e56bef633ffcbc5535565b0ad2306bead8319440a&w=826"
//               alt="Fintech Dashboard"
//               width={600}
//               height={350}
//               className="rounded-lg border-4 border-yellow-400"
//               priority
//             />

//           </div>
//         </div>

//         <div className="d-flex justify-space-between align-items-start">
//     {/* Left Section */}
//     <div className="mt-16 col-5" style={{ flexGrow: 1 }}>
//         <h2 className="text-3xl font-bold mb-5">
//              <span className="text-green-600 d-flex justify-content-center"> Our Key Services</span>
//         </h2>
//         <div className="space-y-4">

//             <details className="bg-gray-100 p-4 rounded-lg cursor-pointer">
//                 <summary className="text-lg font-semibold">Loan Distribution</summary>
//                 <p className="text-gray-600 mt-2">
//                     We offer multiple Loan Products to Individuals and Corporate customers through our large network of Independent Business Owners (IBOs) & 130+ Partner Banks and NBFCs.
//                 </p>
//             </details>

//             <details className="bg-gray-100 p-4 rounded-lg cursor-pointer">
//                 <summary className="text-lg font-semibold">Our Loan Products</summary>
//                 <p className="text-gray-600 mt-2">
//                     We offer multiple Loan Products to Individuals and Corporate customers through our large network of Independent Business Owners (IBOs) through our 130+ Partner Banks, NBFCs, and Fintechs.
//                 </p>
//                 <ul className="mt-2 list-disc pl-5 text-gray-600">
//                     <li>🏠 Home Loans</li>
//                     <li>💰 Personal Loans</li>
//                     <li>🏢 Business Loans</li>
//                     <li>🏡 Loan Against Property</li>
//                     <li>🏦 Working Capital Loans</li>

//                 </ul>
//             </details>

//         </div>

//         <p className="mt-6 text-gray-700">
//             Let us partner with you to create a sustainable and profitable financial ecosystem.
//         </p>
//     </div>

//     {/* Right Section (Fixed Size) */}
//     <div className="col-6 mt-16" style={{ maxWidth: "500px", flexShrink: 0 }}>

//     </div>
// </div>

//         </div>

//       </div>

//   );
// };

// export default HeroSection;

// "use client";

// import Image from "next/image";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const HeroSection = () => {
//   return (
//     <div className="bg-white py-10 md:py-16">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Left Section: Welcome Message */}
//           <div>
//           <h1 className="fw-bold display-5  mb-4">
//             <span className="fw-bold" style={{color:"#28a745"}}>We are Prefinn,</span><br />
//             India’s Largest Loan Distributor
//           </h1>
//           <p className="fs-5 text-dark">
//             Join Prefinn as a Financial Advisor. Be a part of a growing family.
//           </p>
//             <ul className="text-lg text-gray-700 space-y-2">
//               <li className="fw-bold" style={{color:"#28a745"}}>➡ Banking Products</li>
//               <li className="fw-bold" style={{color:"#28a745"}}>➡ Digital Lending</li>
//             </ul>
//             <p className="text-lg text-gray-700 mt-6 fs-5 text-dark">
//               Our firm aims to bridge the gap between traditional financial institutions and innovative fintech solutions, thereby enhancing operational efficiency and profitability for its clients.
//             </p>
//           </div>

//           {/* Right Section: Image + Play Button */}
//           <div className="relative flex justify-center">
//             {/* Image */}
//             <Image
//               src="https://www.konnectplugins.com/loanica/images/banner.svg"
//               alt="Fintech Dashboard"
//               width={600}
//               height={350}
//               className="rounded-lg border-4 border-grey-400"
//               priority
//             />
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row justify-between items-start mt-0">
//   {/* Left Section with Image */}

//   <div className="flex flex-col md:flex-row justify-between items-start gap-10 px-4 md:px-12 py-8 bg-white">

//   {/* Left Column (Your Original Code - Unchanged) */}
//   <div className="relative w-full md:w-6/12">
//     <div className="relative z-10 mt-16">
//       <h2 className="text-3xl font-bold mb-5">
//         <span className="fw-bold" style={{ color: "#28a745" }}> Our Key Services</span>
//       </h2>
//       <div className="space-y-4">
//         <details className="bg-gray-100 p-4 rounded-lg cursor-pointer">
//           <summary className="text-lg font-semibold">Loan Distribution</summary>
//           <p className="text-gray-600 mt-2">
//             We offer multiple Loan Products to Individuals and Corporate customers through our large network of Independent Business Owners (IBOs) & 130+ Partner Banks and NBFCs.
//           </p>
//         </details>

//         <details className="bg-gray-100 p-4 rounded-lg cursor-pointer">
//           <summary className="text-lg font-semibold">Our Loan Products</summary>
//           <p className="text-gray-600 mt-2">
//             We offer multiple Loan Products to Individuals and Corporate customers through our large network of Independent Business Owners (IBOs) through our 130+ Partner Banks, NBFCs, and Fintechs.
//           </p>
//           <ul className="mt-2 list-disc pl-5 text-gray-600">
//             <li>🏠 Home Loans</li>
//             <li>💰 Personal Loans</li>
//             <li>🏢 Business Loans</li>
//             <li>🏡 Loan Against Property</li>
//             <li>🏦 Working Capital Loans</li>
//           </ul>
//         </details>
//       </div>

//       <p className="mt-6 text-gray-700">
//         Let us partner with you to create a sustainable and profitable financial ecosystem.
//       </p>
//     </div>
//   </div>
//    {/* Right Column - Video */}
//  {/* Full-width video section */}
//  <div className="w-full px-0 mt-10 mb-1 ">
//   <video
//     controls
//     className="w-full h-[400px] object-cover"
//     poster="/video-thumbnail.jpg" // optional preview
//   >
//     <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
//     Your browser does not support the video tag.
//   </video>
// </div>
// </div>

//   {/* Right Section (Fixed Size) */}
//   <div className="mt-16 w-full md:w-6/12" style={{ maxWidth: "500px" }}>
//     {/* Additional content can be added here if needed */}
//   </div>
// </div>

//           {/* Right Section (Fixed Size) */}
//           <div className="mt-16 w-full md:w-6/12" style={{ maxWidth: "500px" }}>
//             {/* Additional content can be added here if needed */}
//           </div>
//         </div>
//       </div>
//     // </div>

//   );
// };

// export default HeroSection;

"use client";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home, Wallet, Building2, Landmark, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-white py-5 md:py-16">
      <div className="container mx-auto px-4">
        {/* Main Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section: Welcome Message */}
          <div>
            <div className="mb-4">
              <h1 className="fw-sm display-5">
                <span className="fw-bold" style={{ color: "#0d53b7" }}>
                  We are Prefinn,
                </span>
              </h1>
              <h3 className="fw-bold">India’s Preferred Loan Distribution Platform</h3>
            </div>

            {/* <p className="text-gray-500 mt-6 fs-5 text-sm">
              Connect with Prefinn to explore digital lending solutions and
              nationwide distribution opportunities to join a network that’s
              shaping the future of finance.
            </p> 
             <ul className=" text-sm text-base text-gray-700 space-y-1.5 ">
              <li style={{ color: "#28a745" }}>
                ➡ Customized Lending Solutions for Housing & MSMEs
              </li>
              <li style={{ color: "#28a745" }}>
                ➡ Partnered Distribution of Banks & NBFC Products
              </li>
              <li style={{ color: "#28a745" }}>
                ➡ Financial Inclusion for Rural & Urban Markets
              </li>
            </ul>  */}
     
     <p className="text-dark mt-4 fs-5 ">
  Prefinn streamlines the loan process by blending traditional finance with agile fintech, ensuring faster and more efficient disbursements.
</p>
<ul className="text-base text-gray-700 space-y-2.5">
  <li style={{ color: "#041184" }}>➡ Tailored Loans for Housing & MSMEs</li>
  <li style={{ color: "#041184" }}>➡ Partnered Bank & NBFC Offerings</li>
  <li style={{ color: "#041184" }}>➡ Driving Financial Inclusion Nationwide</li>
</ul>


            {/* <p className=" text-gray-500 mt-6 fs-5 text-sm">
              Prefinn empowers clients through a seamless loan process by
              uniting conventional financial frameworks with agile fintech
              products for faster and more efficient disbursements.
            </p> */}
          </div>

          {/* Right Section: Image  */}
          <div className="relative flex justify-center" style={{ backgroundColor: 'white', backgroundImage: 'linear-gradient(to right, rgba(255,0,0,0.1), rgba(0,0,255,0.1))' }}> {/*mix-blend-hard-light or add after relative */}
  <Image
    src="https://media.istockphoto.com/id/615883622/vector/home-insurance-concept-illustration-and-infographics-design-el.jpg?s=612x612&w=0&k=20&c=uXCyI0KrYEhA40jEns1_V8enx5q3PQSZ2O43x0ILwDQ=" 
    // src="https://media.istockphoto.com/id/615883622/vector/home-insurance-concept-illustration-and-infographics-design-el.jpg?s=612x612&w=0&k=20&c=uXCyI0KrYEhA40jEns1_V8enx5q3PQSZ2O43x0ILwDQ=" 
    alt="Fintech Dashboard"
    width={600}
    height={350}
    priority
    style={{
      borderRadius: '0px',
      // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      opacity: 2.7, // Reduce opacity for a slight fade-out effect
      background:"white",
    }}
  />
</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
