









// "use client";

// import { GiPiggyBank } from "react-icons/gi";
// import { CiBank } from "react-icons/ci";
// import { RiBankCardFill } from "react-icons/ri";
// import { TbBuildingBank } from "react-icons/tb";
// import { FaHouseLaptop } from "react-icons/fa6";
// import { GiDecapitation } from "react-icons/gi";
// import { Container, Row, Col, Card, Image } from "react-bootstrap";
// import Marquee from "react-fast-marquee";
// import { Separator } from "@/components/ui/separator";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   CreditCard,
// } from "lucide-react";

// const PartnerSection = () => {
//   const loanProducts = [
//     {
//       title: "Home Loan",
//       link: "homeloans",
//       description:
//         "Prefinn helps clients assess their home financing needs by partnering with experienced consultants.",
//       icon: <CiBank />,
//     },
//     {
//       title: "Personal Loan",
//       link: "workingCapitalloans",
//       description:
//         "Prefinn helps clients assess their personal loan requirements by partnering with licensed financial advisors. ",
//       icon:<RiBankCardFill />,
      
//     },
//     {
//       title: "Business Loan",
//       link: "businessloans",
//       description:
//         "Prefinn offers Business Loan services to help businesses assess their short-term financing needs .",
//       icon: <TbBuildingBank />,
//     },
//     {
//       title: "Loan Against Property ",
//       link: "loanagainstproperty",
//       description:
//         "Prefinn’s finance experts help secure a Loan Against Property (LAP) from top banks.",
//       icon: <FaHouseLaptop />,
//     },
//     {
//       title: "Working Capital Loan",
//       link: "workingCapitalloans",
//       description:
//         "Expert financial solutions to maintain smooth business operations.",
//       icon: <GiDecapitation />,
//     },
//   ];

  

//   return (
//     <div className="bg-white py-0">
//       <Container>
//         <div className="text-center mt-0 pt-3">
//           {/* <h2 className="fw-semibold">
//             <span style={{ color: "#28a745" }}> Our Loan Products</span>
//           </h2> */}
//           <h2 className="fw-semibold">
//   <span style={{ 
//     background: "linear-gradient(135deg, #28a745 0%, #0d53b7 100%)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//     backgroundClip: "text",
//     color: "transparent",
//     display: "inline-block",
//     padding: "0.2rem 0.5rem",
//     fontWeight: "600"
//   }}>
//     Our Loan Products
//   </span>
// </h2>
//         </div>

//         <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
//           {loanProducts.map((product, index) => (
//             <a
//               key={index}
//               href={product.link}
//               style={{ textDecoration: "none" }}
//             >
//               <Card
//                 className="text-center p-4 shadow-sm loan-card"
//                 style={{
//                   width: "210px",
//                   height: "250px",
//                   background: "#fff",
//                   color: "#041184",
//                   transition: "all 0.3s ease-in-out",
//                   position: "relative",
//                   overflow: "hidden",
//                   flex: "0 0 auto",
//                 }}
//               >
//                 <div className="fs-1 d-flex justify-content-center mb-2">
//                   {product.icon}
//                 </div>
//                 <h5 className="fw-bold">{product.title}</h5>
//                 <p style={{ fontSize: "0.9rem" }}>{product.description}</p>
//               </Card>
//             </a>
//           ))}
//         </div>
       

//         <Separator className="my-10" />

// <div className="text-center mb-6" data-aos="fade-up">
// <h2 className="fw-semibold">
//   <span style={{ 
//     background: "linear-gradient(135deg, #28a745 0%, #0d53b7 100%)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//     backgroundClip: "text",
//     color: "transparent",
//     display: "inline-block",
//     padding: "0.2rem 0.5rem",
//     fontWeight: "600"
//   }}>
//     Our Success Stories
//   </span>
// </h2>

// </div>

// <div className="d-flex flex-row justify-content-center gap-5 mb-5" data-aos="fade-up" data-aos-delay="100">
//   {[
//     { 
//       icon: "😊", 
//       value: "32K+", 
//       text: "Happy Customers",
//       gradient: "linear-gradient(45deg, #28a745 0%, #0d53b7 100%)"
//     },
//     { 
//       icon: "₹", 
//       value: "₹23cr+", 
//       text: "Loan Disbursed",
//       gradient: "linear-gradient(45deg, #28a745 0%, #0d53b7 100%)"
//     },
//     { 
//       icon: "🏦", 
//       value: "130+", 
//       text: "Finance Partners",
//       gradient: "linear-gradient(45deg, #28a745 0%, #0d53b7 100%)"
//     },
//     { 
//       icon: "🤝", 
//       value: "70+", 
//       text: "Channel Partners",
//       gradient: "linear-gradient(45deg, #28a745 0%, #0d53b7 100%)"
//     },
//     {
//       icon: <Image src="https://cdn-icons-png.flaticon.com/512/5663/5663360.png"/>,
//       value: "5+",
//       text: "Institutional Partners",
//       gradient: "linear-gradient(45deg, #28a745 0%, #0d53b7 100%)"

//     },
//   ].map((item, index) => (
//     <div key={index} className="success-card-wrapper" style={{ flex: "0 0 auto", width: "200px" }}>
//       <Card className="text-center shadow-lg p-4 h-100 border-0 hover-transform">
//         <div className="icon-container mx-auto mb-4" style={{
//           background: item.gradient,
//           width: '80px',
//           height: '80px',
//           borderRadius: '50%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
//         }}>
//         {typeof item.icon === 'string' ? (
//             <div className="fs-1 text-white">{item.icon}</div>
//           ) : (
//             item.icon
//           )}
//         </div>
//         <h3 className="fw-bold display-6 mb-3" style={{ color: '#0d53b7' }}>
//           {item.value}
//         </h3>
//         <p className="text-uppercase text-muted fw-medium mb-0" style={{ letterSpacing: '1.5px' }}>
//           {item.text}
//         </p>
//       </Card>
//     </div>
//   ))}
// </div>

// <style jsx>{`
//   .hover-transform {
//     transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//     transform: translateY(0);
//   }
  
//   .hover-transform:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15) !important;
//   }

//   .gradient-text {
//     background-clip: text;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }

//   @keyframes float {
//     0% { transform: translateY(0px); }
//     50% { transform: translateY(-10px); }
//     100% { transform: translateY(0px); }
//   }

//   .success-card-wrapper:hover .icon-container {
//     animation: float 1.5s ease-in-out infinite;
//   }
// `}</style>
        
        
//       </Container>
//     </div>
//   );
// };

// export default PartnerSection;















"use client";

import { GiPiggyBank } from "react-icons/gi";
import { CiBank } from "react-icons/ci";
import { FaHandsHelping, FaCheckCircle, FaLock, FaHourglassHalf, FaUniversity, FaChartLine } from 'react-icons/fa';
import { RiBankCardFill } from "react-icons/ri";
import { TbBuildingBank } from "react-icons/tb";
import { FaHouseLaptop } from "react-icons/fa6";
import { GiDecapitation } from "react-icons/gi";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Separator } from "@/components/ui/separator";
import "bootstrap/dist/css/bootstrap.min.css";
import { CreditCard } from "lucide-react";

const PartnerSection = () => {
  const loanProducts = [
    {
      title: "Home Loan",
      link: "homeloans",
      description:
        "Prefinn helps clients assess their home financing needs by partnering with experienced consultants.",
      icon: <CiBank />,
    },
    {
      title: "Loan Against Property ",
      link: "loanagainstproperty",
      description:
        "Prefinn’s finance experts help secure a Loan Against Property (LAP) from top banks.",
      icon: <FaHouseLaptop />,
    },
    {
      title: "Working Capital Loan",
      link: "workingCapitalloans",
      description:
        "Expert financial solutions to maintain smooth business operations.",
      icon: <GiDecapitation />,
    },
    {
      title: "Business Loan",
      link: "businessloans",
      description:
        "Prefinn offers Business Loan services to help businesses assess their short-term financing needs .",
      icon: <TbBuildingBank />,
    },
    {
      title: "Personal Loan",
      link: "workingCapitalloans",
      description:
        "Prefinn helps clients assess their personal loan requirements by partnering with licensed financial advisors. ",
      icon: <RiBankCardFill />,
    },
   
   
  ];

  return (
    <div className="bg-white py-0">
      <Container>
        <div className="text-center mt-0 pt-3">
          <h2 className="fw-bold">
          <span
  style={{
    background: " #0d53b7 ",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block",
    padding: "0.2rem 0.5rem",
    fontWeight: "800",
  }}
 >
  Our Loan Products
 </span>
          </h2>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          {loanProducts.map((product, index) => (
            <a key={index} href={product.link} style={{ textDecoration: "none"}}>
              <Card
                className="text-center p-4 shadow-sm loan-card"
                style={{
                  width: "100%",
                  maxWidth: "210px",
                  height: "250px",
                  background: "#fff",
                  color: "#0d53b7",
                  transition: "all 0.3s ease-in-out",
                  position: "relative",
                  overflow: "hidden",
                  flex: "1 1 auto",
                }}
              >
                <div className="fs-1 d-flex justify-content-center mb-2">
                  {product.icon}
                </div>
                <h5 className="fw-bold">{product.title}</h5>
                <p style={{ fontSize: "0.9rem",color:"#030303" }}>{product.description}</p>
              </Card>
            </a>
          ))}
        </div>
  <section className="bg-gradient-to-b from-white via-blue-50 to-green-50 p-4 p-md-5 rounded-3xl shadow-lg mb-5 text-center mt-5">
  <div className="mb-4 mb-md-5">
    <h2 className="fw-bold text-3xl md:text-4xl">
    
    <span
  style={{
    background: " #0d53b7 ",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block",
    padding: "0.2rem 0.5rem",
    fontWeight: "800",
  }}
 >
Discover Our Feature
 </span>
    </h2>
  </div>

  <div className="row g-4">
    {[
      {
        icon: (
          <div className="d-flex justify-content-center mb-3">
  <FaHandsHelping size={40} className="text-[#0d53b7]" />
</div>
        ),
        title: "Product Diversification",
        description:
          "Offering multiple loan product options to Housing & SME customers at one platform.",
      },
      {
        icon: (
          <div className="d-flex justify-content-center mb-3">
            <FaCheckCircle size={40} className="text-[#0d53b7]" />
          </div>
        ),
        title: "Customer-Centric Approach",
        description:
          "Prompt Relationship Manager service with optimized loan options saving time and money.",
      },
      {
        icon: (
          <div className="d-flex justify-content-center mb-3">
            <FaLock size={40} className="text-[#0d53b7]" />
          </div>
        ),
        title: "Secure & Fast Processing",
        description:
          "Robust data encryption ensures smooth and secure customer experience.",
      },
      {
        icon: (
          <div className="d-flex justify-content-center mb-3">
            <FaHourglassHalf size={40} className="text-[#0d53b7]" />
          </div>
        ),
        title: "Transparent Updates",
        description:
          "Track your loan application in real-time with total transparency.",
      },
      {
        icon: (
          <div className="d-flex justify-content-center mb-3">
            <FaUniversity size={40} className="text-[#0d53b7]" />
          </div>
        ),
        title: "130+ Lender Network",
        description:
          "Access top-tier banks and NBFCs offering competitive interest rates.",
      },
      {
        icon: (
          <div className="d-flex justify-content-center mb-3">
            <FaChartLine size={40} className="text-[#0d53b7]" />
          </div>
        ),
        title: "Enhanced Agent Dashboard",
        description:
          "Manage leads, payouts, and commissions — all with real-time insights.",
      },
    ].map((feature, index) => (
      <div key={index} className="col-12 col-sm-6 col-lg-4">
        <div
          className="card border-0 h-100 shadow-sm p-4 transition-all rounded-4 bg-white hover:shadow-lg"
          style={{
            borderTop: "4px solid #28a745",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.1)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
          }}
        >
          {feature.icon}
          <h5 className="fw-bold mb-2 text-success">{feature.title}</h5>
          <p className="text-muted">{feature.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

        <Separator className="my-10" />

        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold">
          <span
  style={{
    background: " #0d53b7 ",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block",
    padding: "0.2rem 0.5rem",
    fontWeight: "800",
  }}
 >
  Our Success Stories
 </span>
          </h2>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-4 mb-6" data-aos="fade-up" data-aos-delay="100">
          {[
            {
              icon: "😊",
              value: "150+",
              text: "Happy Customers",
              gradient: "linear-gradient(45deg, #28a745 0%, #0d53b7 100%)",
            },
            {
              icon: "₹",
              value: "₹23cr+",
              text: "Loan's\nDisbursed",
              gradient: "linear-gradient(45deg, #28a745 0%, #0d53b7 100%)",
            },        {
              icon: "🏦",
              value: "130+",
              text: "Finance Partners",
              gradient: "linear-gradient(45deg, #28a745 0%, #0d53b7 100%)",
            },
            {
              icon: "🤝",
              value: "250+",
              text: "Independent Business Owners",
              gradient: "linear-gradient(45deg, #28a745 0%, #0d53b7 100%)",
            },
            {
              icon: (
                <Image src="https://cdn-icons-png.flaticon.com/512/5663/5663360.png" />
              ),
              value: "5+",
              text: "Institutional Partners",
              gradient: "linear-gradient(45deg, #28a745 0%, #0d53b7 100%)",
            },
          ].map((item, index) => (
            <div key={index} className="success-card-wrapper" style={{ flex: "1 1 100%", maxWidth: "200px" }}>
              <Card className="text-center shadow-lg p-3 h-100 border-0 hover-transform">
                <div
                  className="icon-container mx-auto mb-4"
                  style={{
                    background: item.gradient,
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  }}
                >
                  {typeof item.icon === "string" ? (
                    <div className="fs-1 text-white">{item.icon}</div>
                  ) : (
                    item.icon
                  )}
                </div>
                <h3 className="fw-bold display-6 mb-3" style={{ color: "#0d53b7" }}>
                  {item.value}
                </h3>
                <p className="text-uppercase text-muted fw-medium mb-0" style={{ letterSpacing: "1.5px" }}>
                  {item.text}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PartnerSection;