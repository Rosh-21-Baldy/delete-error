// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function AboutUs() {
//   return (
//     <div className="container">
//       {/* Header Section */}
//       <header className="text-center my-5">
//         <h1>About Us</h1>
//         <p className="text-primary">Quick. Hassle-Free. Clear. Affordable.</p>
//       </header>

//       {/* About Section */}
//       <section className="text-center mb-5">
//         <p>
//           {/* At Ambak, our mission is to revolutionize the home loan industry by providing unmatched transparency,
//           efficiency, and security to both customers and home loan distributors. */}
//           With Prefinn, experience a fintech revolution that brings transparency, trust, and technology together for a more inclusive and efficient financial ecosystem.
//         </p>
//       </section>
//       <h1 className="text-center">Who we are?</h1>
//       {/* Who We Are Section */}
//       <section className="bg-light p-4 rounded mb-5">
        
//         <p className="text-center text-muted">
//           Prefinn is a pioneering Fintech platform connecting home buyers and distributors 
//           partners across India.
//         </p>
//       </section>

//       <h1 className="text-center">Meet Our Team</h1>
//       {/* Team Section */}
//       <section className="bg-light p-4 rounded mb-5">
//   {/* <h2 className="text-center mb-4">Meet Our Team</h2> */}
//   <div className="container">
//     <div className="row g-4 justify-content-center">
//       {[
//         { 
//           name: "Rajesh Upadhyay", 
//           role: "Founder & CEO", 
//           image: "https://www.prefinn.com/_next/static/media/founder.769f88bb.jpg", 
//           linkedin: "https://www.linkedin.com/in/rajeshupadhyay333/"
//         },
//         { 
//           name: "Archit Singla", 
//           role: "Co-Founder & CEO", 
//           image: "/images/archit-singla.jpg", 
//           linkedin: "https://www.linkedin.com/in/archit-singla"
//         }
//       ].map((person, index) => (
//         <div key={index} className="col-md-4 d-flex">
//           <div className="card border-0 shadow-sm p-4 text-center flex-fill">
//             {/* Image */}
//             <img 
//               src={person.image} 
//               alt={person.name} 
//               className="rounded-circle mb-3 mx-auto" 
//               width="100" 
//               height="100"
//             />
//             {/* Name and Role */}
//             <h5 className="fw-bold">{person.name}</h5>
//             <p className="text-muted">{person.role}</p>
//             {/* LinkedIn Button */}
//             <a 
//               href={person.linkedin} 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="btn btn-primary btn-sm w-100"
//             >
//               View LinkedIn
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>
// </div>
//   );
// }











// accurate code ye hai jo bhi change kre 
"use client";
import { FaHandsHelping, FaCheckCircle, FaLock, FaHourglassHalf, FaUniversity, FaChartLine } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/footer'
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import Navbar from '@/components/navbar';
import { FaLinkedin } from 'react-icons/fa';

export default function AboutUs() {
  return (
  <>
  <Navbar/>
   <div
  className="container-fluid py-5"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
  }}
>
  <div className="container">
    <div className="row align-items-center">

      <div className="col-md-6">
      <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '1.5rem',
  }}
>
  {/* Animated Line */}
  <div
    style={{
      width: '60px',
      height: '3px',
      backgroundColor: '#fff',
      animation: 'slideInLine 0.6s ease-out forwards',
      opacity: 0,
    }}
  ></div>

  {/* Animated Heading */}
  <h2
    style={{
      marginBottom: 0,
      marginTop: '0.5rem',
      opacity: 0,
      transform: 'translateY(10px)',
      animation: 'fadeSlideIn 0.8s ease-out 0.5s forwards',
    }}
  >
    
  </h2>

  {/* Keyframes injected into page */}
  <style>{`
    @keyframes slideInLine {
      0% {
        width: 0;
        opacity: 0;
      }
      100% {
        width: 60px;
        opacity: 1;
      }
    }

    @keyframes fadeSlideIn {
      0% {
        opacity: 0;
        transform: translateY(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
</div>

        <p className="mb-4" style={{ lineHeight: '1.7' }}>
          We are dedicated to transforming financial access through seamless digital solutions.
          Whether you're an individual or business, our platform helps you get fast, transparent, and secure loan services.
        </p>
      </div>
    </div>
  </div>
</div>


    <div className="container">
    <div className="container py-5">
  {/* Section Heading */}
  <div className="text-center mb-5">
  <h2 className="fw-bold text-3xl md:text-4xl">
      <span
        style={{
          background: "linear-gradient(135deg, #28a745 0%, #0d53b7 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        About Us
      </span>
    </h2>
    <p className="mt-3 text-muted" style={{ maxWidth: '700px', margin: '0 auto' }}>
      At Prefinn, we are redefining access to finance. Our mission is to simplify lending with a seamless, secure, and smart experience. As a B2C lending fintech platform, we partner with leading banks and NBFCs to deliver tailored loan solutions, powered by data and driven by purpose.
    </p>
    {/* <p className="mt-3 text-muted" style={{ maxWidth: '700px', margin: '0 auto' }}>
    Prefinn is an omni-channel B2C Lending Fintech Platform that offers personalized, tech-powered lending solutions to clients and partners. Working with top banks and NBFCs, we deliver data-driven insights and customized loan options to foster inclusive financial growth.
    </p> */}
  </div>

  {/* Image + Text Row */}
  <div className="row align-items-center">
    <div className="col-md-6 mb-4 mb-md-0">
      <img 
        src="https://img.freepik.com/premium-vector/collaborative-brainstorming-session-about-us-page-concept_1263357-35648.jpg" 
        alt="Team Collaboration" 
        className="img-fluid rounded shadow-sm" 
        style={{ borderRadius: '12px' }}
      />
    </div>
    <div className="col-md-6">
      <ul style={{ listStyleType: 'none', paddingLeft: 0, lineHeight: '4.9' }}>
        <li><strong>✅ Tech-first Lending:</strong> Real-time approvals and tracking</li>
        <li><strong>✅ Pan-India Partnerships:</strong> With all major Banks & NBFCs</li>
        <li><strong>✅ Personalized Offers:</strong> Tailored to every customer profile</li>
        {/* <li><strong>✅ Transparent Process:</strong> No hidden fees or complexities</li> */}
        <li><strong>✅ Secure & Scalable:</strong> Built on robust digital infrastructure</li>
      </ul>
    </div>
  </div>
</div>

      {/* Who We Are Section */}
      <section
  className="py-5 px-3"
  style={{
    background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f4ff 100%)',
    borderRadius: '20px',
    margin: '2rem auto',
    maxWidth: '1200px',
  }}
>
  <div className="container">
    <div className="row align-items-center">
      {/* Left: Icon/Illustration */}
      <div className="col-md-5 text-center mb-4 mb-md-0">
  <img
    src="https://img.freepik.com/free-vector/illustration-light-bulb-icon_53876-5884.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
    alt="Our Mission - Goal Oriented"
    className="img-fluid"
    style={{ maxWidth: '260px',maxHeight:'260px', transition: 'transform 0.4s' }}
    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)' )}
  />
</div>


      {/* Right: Text Content */}
      <div className="col-md-7">
        <h2 className="fw-bold mb-3" style={{ color: '#0d53b7', fontSize: '2.2rem' }}>
          Our Vision
        </h2>
        <p className="fs-5 text-muted mb-4" style={{ lineHeight: '1.8' }}>
          At <strong>Prefinn</strong>, our mission is to create a seamless financial experience
          that empowers every Indian to access credit when they need it the most — without friction or delay.
          We connect users to the right lending partner using smart data, speed, and trust.
        </p>

        <div className="d-flex flex-wrap gap-3">
          <div className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">
            💡 Smart Lending
          </div>
          <div className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
            🔐 Secure Platform
          </div>
          <div className="badge bg-warning-subtle text-dark px-3 py-2 rounded-pill">
            ⚡ Instant Approvals
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



{/* Key Services Section */}
<div className="w-full flex flex-col items-center mt-16 gap-10 px-4">
  {/* Gradient Heading with Line */}
  <div className="text-center relative mb-2">
    <h2 className="fw-bold text-3xl md:text-4xl">
      <span
        style={{
          background: "linear-gradient(135deg, #28a745 0%, #0d53b7 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Our Key Services
      </span>
    </h2>
    <div className="w-16 h-1 bg-gradient-to-r  to-blue-600 mt-2 mx-auto rounded"></div>
  </div>

  {/* Cards Wrapper */}
  <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full justify-center">
    
    {/* Card 1 */}
    <div className="flex-1 bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition-all duration-300 ">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-green-100 p-3 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="green" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Loan Distribution</h3>
      </div>
      <p className="text-gray-600">
        We offer multiple loan products to individuals and corporate clients through our vast network of Agents & IBOs backed by 130+ partner banks and NBFCs.
      </p>
    </div>

    {/* Card 2 */}
    <div className="flex-1 bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition-all duration-300">
  <div className="flex items-center gap-4 mb-4">
    <div className="bg-blue-100 p-3 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="blue" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V9a4 4 0 10-8 0v2M5 11h14l-1 10H6L5 11z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-800">Products</h3>
  </div>
  <p className="text-gray-600">
    We specialize in secured lending for home buyers & SME loans, offering tailor-made secured and unsecured options to meet all needs.
  </p>
</div>

  </div>
</div>





      {/* What We Do Section */}
      

      <section className="bg-gradient-to-b from-white via-blue-50 to-green-50 p-5 rounded-3xl shadow-lg mb-5 text-center relative z-10 mt-16">
  <div className="mb-10">
    <h2 className="fw-bold text-3xl md:text-4xl">
      <span
        style={{
          background: "linear-gradient(135deg, #28a745 0%, #0d53b7 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          display: "inline-block",
        }}
      >
        Discover Our Features
      </span>
    </h2>
    <p className="text-muted mt-2">Experience innovation, ease, and efficiency — all in one place.</p>
  </div>

  <div className="row g-4 justify-content-center">
    {[
      {
        icon: <FaHandsHelping size={40} className="text-warning mb-3" />,
        title: "Product Diversification",
        description:
          "Offering multiple loan product options to Housing & SME customers at one platform.",
      },
      {
        icon: <FaCheckCircle size={40} className="text-warning mb-3" />,
        title: "Customer-Centric Approach",
        description:
          "Prompt Relationship Manager service with optimized loan options saving time and money.",
      },
      {
        icon: <FaLock size={40} className="text-warning mb-3" />,
        title: "Secure & Fast Processing",
        description:
          "Robust data encryption ensures smooth and secure customer experience.",
      },
      {
        icon: <FaHourglassHalf size={40} className="text-primary mb-3" />,
        title: "Transparent Updates",
        description:
          "Track your loan application in real-time with total transparency.",
      },
      {
        icon: <FaUniversity size={40} className="text-primary mb-3" />,
        title: "130+ Lender Network",
        description:
          "Access top-tier banks and NBFCs offering competitive interest rates.",
      },
      {
        icon: <FaChartLine size={40} className="text-primary mb-3" />,
        title: "Enhanced Agent Dashboard",
        description:
          "Manage leads, payouts, and commissions — all with real-time insights.",
      },
    ].map((feature, index) => (
      <div key={index} className="col-sm-6 col-lg-4">
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
          <div className="text-center">{feature.icon}</div>
          <h5 className="fw-bold mb-2 text-success">{feature.title}</h5>
          <p className="text-muted">{feature.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* Meet Our Team Section dont delete this, in future we will add it  */ }

      {/* <section className="bg-light p-4 rounded mb-5 text-center">
        <h1 className="text-blue-900">Meet Our Team</h1>
        <h3>The People Who Simplify Your Finance</h3>
        <div className="row g-4 justify-content-center">
          {[
            // { name: "Rajesh Upadhyay", role: "Founder & CEO", image: "https://www.prefinn.com/_next/static/media/founder.769f88bb.jpg", linkedin: "https://www.linkedin.com/in/rajeshupadhyay333/" },
            { name: "Rajesh Upadhyay", role: "Founder & CEO", image: "https://www.prefinn.com/_next/static/media/founder.769f88bb.jpg", linkedin: "https://www.linkedin.com/in/rajeshupadhyay333/" },
            { name: "Archit Singla", role: "Co-Founder & COO", image: "https://media-hosting.imagekit.io/f8d2b33cebbc466a/Screenshot%202025-03-26%20145305.png?Expires=1837673581&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gY08AEnNHhGSzmOfbRj28XwBqqxPFRyCAExX5FAN7rcrUlmcAUW9BVvp1fIcBWpETt05dciqP5B0lfU5ry49oiFT89UY7keJOvslV7r~n8hMlQ9SePonOMJmU0FOQQ9cwLPyqbD3z8wHlQUyWlXnNNhkFfTZalZrELv06mGLjMr3Ho4nLmOIMq3LYTB1pVn8RCy~~pqTAm6NBhxWK0W7y5VOZ7jsycXSxnA3fuw9XE5SW~laylyfIbkoC9lt88xFUvdoD~CBKBdDnx7ZYKI0HjC5usNgvBQYyI4DutA2TsUldDqapTfqL8o0JwbTvs63j-4IEJtwJ5v-hA3tSNwyTQ__", linkedin: "https://www.linkedin.com/in/archit-singla" }
          ].map((person, index) => (
            <div key={index} className="col-md-4 d-flex">
              <div className="card border-0 shadow-sm p-4 text-center flex-fill hover-effect">
                <img src={person.image} alt={person.name} className="rounded-circle mb-3 mx-auto" width="100" height="100" />
                <h5 className="fw-bold text-blue-900">{person.name}</h5>
                <p className="text-muted">{person.role}</p>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className=" m-auto btn d-flex justify-content-center align-items-center">
               
                  <FaLinkedin />
                  
                </a>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Careers Section */}
      {/* <section className="text-center p-4">
        <h2 className="text-blue-900">Careers</h2>
        <p className="text-dark">We're transforming your finance and looking for passionate individuals to join us.</p>
        <p>Email us at <a href="https://webmail.logix.in/?session=f9d8c490c90d969687b99fed91ea214ad3d9446802a44259755d38e6d163e82048aeab4aefc72c24da75f748c6dd30cad3d9446802a44259755d38e6d163e820" className="text-danger fw-bold">support@prefinn.com</a></p>
      </section> */}
    </div>
    <Footer/>

    </>
  );
}


























































































































































//  change krna h isse bhi

//  {/*Footer section */} 
//  <footer className="bg-white text-dark py-4">
//   <Container>
//     <Row className="gy-4">
//       {/* Company Info */}
//       <Col md={4}>
//         <img src="/prefinn-logo.png" alt="Prefinn Logo" className="mb-3" style={{ width: "150px" }} />
//         <p className="small">
//           Prefinn is a Finance & Fintech Solution firm ventured by experienced banking professionals having significant expertise in the areas of Banking, Digital Lending, Financial Inclusion & Fintech Product & Services.
//         </p>
//         {/* Social Media Icons */}
//         <div className="d-flex gap-3 mt-3 fs-5">
//           <FaFacebookF className="text-dark" />
//           <FaXTwitter className="text-dark" />
//           <FaInstagram className="text-dark" />
//           <FaYoutube className="text-dark" />
//           <FaLinkedinIn className="text-dark" />
//         </div>
//       </Col>

//       {/* Company Links */}
//       <Col md={4}>
//         <h5 className="fw-bold">Company</h5>
//         <ul className="list-unstyled small">
//           <li><a href="#" className="text-dark text-decoration-none">About Prefinn</a></li>
//           <li><a href="#" className="text-dark text-decoration-none">Founders Message</a></li>
//           <li><a href="#" className="text-dark text-decoration-none">Join Our Team</a></li>
//           <li><a href="#" className="text-dark text-decoration-none">Terms & Conditions</a></li>
//           <li><a href="#" className="text-dark text-decoration-none">Privacy Policy</a></li>
//           <li><a href="#" className="text-dark text-decoration-none">Apply for a Loan</a></li>
//           <li><a href="#" className="text-dark text-decoration-none">Become a Partner</a></li>
//         </ul>
//       </Col>

//       {/* Contact Information */}
//       <Col md={4}>
//         <h5 className="fw-bold">Contact Information</h5>
//         <p className="small d-flex align-items-center">
//           <MdCall className="text-success fs-4 me-2" />
//           +91-9650812333
//         </p>
//         <p className="small d-flex align-items-center">
//           <MdEmail className="text-success fs-4 me-2" />
//           support@prefinn.com
//         </p>
//         <p className="small d-flex align-items-center">
//           <MdLocationOn className="text-success fs-4 me-2" />
//           Plot No.77, Sector-37, Gurugram, Haryana-122001
//         </p>
//       </Col>
//     </Row>
//   </Container>

//   {/* Copyright Section */}
//   <div className="bg-dark text-white text-center py-2 mt-4">
//     <small>Copyright © 2025 Prism Business Consultants - All Rights Reserved</small>
//   </div>
// </footer>











{/* <section className="bg-light p-4 rounded mb-5">

  <div className="row text-center">
    {[
     
      { 
        name: "Rajesh Upadhyay", 
        role: "Founder & CEO", 
        image: "https://www.linkedin.com/in/rajeshupadhyay333/overlay/photo/", 
        linkedin: "https://www.linkedin.com/in/rajeshupadhyay333/"
      },
      { 
        name: "Archit Singla", 
        role: "Co-Founder & CEO", 
        image: "https://www.linkedin.com/in/archit-singla/", 
        linkedin: "https://www.linkedin.com/in/archit-singla/"
      },
    ].map((person, index) => (
      <div key={index} className="col-md-4 mb-3">
        <div className="card border-0 shadow-sm p-3">
          <img 
            src={person.image} 
            alt={person.name} 
            className="rounded-circle mb-3" 
            width="120" 
            height="120"
          />
          <h5>{person.name}</h5>
          <p className="text-muted">{person.role}</p>
          <a 
            href={person.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-sm"
          >
            View LinkedIn
          </a>
        </div>
      </div>
    ))}
  </div>
</section> */}

      {/* Team Section
      <section className="bg-light p-4 rounded mb-5">
       
        <div className="row text-center">
          {[
            { name: "Raghuveer Malik", role: "Co-Founder & CEO" },
            { name: "Rameshwar Gupta", role: "Co-Founder & CPTO" },
            { name: "Rashi Garg", role: "Co-Founder & COO" },
          ].map((person, index) => (
            <div key={index} className="col-md-4 mb-3">
              <h5>{person.name}</h5>
              <p className="text-muted">{person.role}</p>
            </div>
          ))}
        </div>
      </section> */}
  