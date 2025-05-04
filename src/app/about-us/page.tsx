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
  className="container-fluid d-flex align-items-center justify-content-center"
  style={{
    minHeight: '50vh',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://img.freepik.com/free-photo/handshake-businessmen_1098-742.jpg?uid=R193913366&ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    textAlign: 'center',
    padding: '2rem',
  }}
>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8">
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '2rem',
            borderRadius: '8px',
          }}
        >
          <h2
            style={{
              marginBottom: '1rem',
              opacity: 0,
              transform: 'translateY(10px)',
              animation: 'fadeSlideIn 0.8s ease-out 0.5s forwards',
              fontSize: '1.8rem',
            }}
            className="fw-bold"
          >
            Simplifying Finance. Empowering Individuals and Businesses.
          </h2>
          <p className="fs-6" style={{ lineHeight: '1.7' }}>
            We are dedicated to transforming financial access through seamless digital solutions.
            Whether you're an individual or business, our platform helps you get fast, transparent, and secure loan services.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Animation keyframes and responsive text scaling */}
  <style>{`
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

    @media (max-width: 576px) {
      h2 {
        font-size: 1.4rem !important;
      }

      p {
        font-size: 0.9rem;
      }
    }

    @media (min-width: 577px) and (max-width: 768px) {
      h2 {
        font-size: 1.6rem !important;
      }

      p {
        font-size: 1rem;
      }
    }
  `}</style>
</div>

    <div className="container">
    <div className="container py-5">
  {/* Section Heading */}
  <div className="text-center mb-5">
  <h2 className="fw-bold text-2xl md:text-4xl">
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
About us
 </span>
    </h2>
    <p className="mt-3 text-muted " style={{ maxWidth: '1200px', margin: '0 auto' , fontSize: '1.1rem'}}>
    At Prefinn, we are committed to transforming access to credit across India. Our objective is to streamline lending products and extend their reach to Bharat consumers via a secure, unified digital platform powered by a robust network of Banks and NBFCs.
As a modern fintech solution provider, we equip institutional and channel partners with an integrated lending suite, enabling the delivery of personalized financial services across all customer segments nationwide
    </p>
     {/* <p className="mt-3 text-muted" style={{ maxWidth: '700px', margin: '0 auto' }}>
    Prefinn is an omni-channel B2C Lending Fintech Platform that offers personalized, tech-powered lending solutions to clients and partners. Working with top banks and NBFCs, we deliver data-driven insights and customized loan options to foster inclusive financial growth.
    </p>  */}
  </div>

  {/* Image + Text Row */}
  <div className="row align-items-center py-4">
  <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
    <img
      src="https://img.freepik.com/premium-vector/collaborative-brainstorming-session-about-us-page-concept_1263357-35648.jpg"
      alt="Team Collaboration"
      className="img-fluid shadow-sm"
      style={{ borderRadius: '26px', maxWidth: '90%', height: 'auto' }}
    />
  </div>
  <div className="col-md-6">
    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
      <li className="d-flex align-items-start mb-3"> {/* Reduced margin-bottom */}
        <span style={{ fontSize: '1.5rem', marginRight: '15px', color: '#28a745' }}>✅</span> {/* Adjusted size and color */}
        <span>Strategic Financial Partner for Institutions and Business Owners</span>
      </li>
      <li className="d-flex align-items-start mb-3"> {/* Reduced margin-bottom */}
        <span style={{ fontSize: '1.5rem', marginRight: '15px', color: '#28a745' }}>✅</span> {/* Adjusted size and color */}
        <span>Multi-channel platform enabling a frictionless loan journey from onboarding to disbursal.</span>
      </li>
      <li className="d-flex align-items-start mb-3"> {/* Reduced margin-bottom */}
        <span style={{ fontSize: '1.5rem', marginRight: '15px', color: '#28a745' }}>✅</span> {/* Adjusted size and color */}
        <span>Integrated portal offering a wide range of Home and SME Loan options from trusted Banks and NBFCs</span>
      </li>
      <li className="d-flex align-items-start mb-3"> {/* Reduced margin-bottom */}
        <span style={{ fontSize: '1.5rem', marginRight: '15px', color: '#28a745' }}>✅</span> {/* Adjusted size and color */}
        <span>Single-window access to a full suite of Lending products and services for B2C Consumers.</span>
      </li>
      <li className="d-flex align-items-start"> {/* Removed extra </li> tag */}
        <span style={{ fontSize: '1.5rem', marginRight: '15px', color: '#28a745' }}>✅</span> {/* Adjusted size and color */}
        <span>Expert panel combining financial acumen and technical prowess.</span>
      </li>
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
          At <strong>Prefinn</strong>, our Vision is to Our vision is to build a frictionless financial ecosystem, enabling stakeholders and end consumers to access any kind of credit from their preferred lending partners with ease.
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


{/* From Application to Disbursement, Prefinn Ensures Success at Every Step. */}
 
      



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













