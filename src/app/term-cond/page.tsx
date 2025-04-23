

// "use client";
// import Footer from "@/components/footer";
// import Navbar from "@/components/navbar";
// import React from "react";
// import { Container, Card,  Nav } from "react-bootstrap";
// // import OfferBanner from "./offer-banner";

// const TermCondition = () => {
//   return (
//     <>
//     {/* <OfferBanner/> */}
//       <Navbar/>

//       {/* Terms and Conditions Section */}
//       <div className="py-5 bg-light">
//         <Container>
//         <h2 className="fw-semibold d-flex justify-content-center">
//       <span
//         style={{
//           background: "linear-gradient(135deg, #28a745 0%, #0d53b7 100%)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           backgroundClip: "text",
//           color: "transparent",
//           display: "inline-block",
//           padding: "0.2rem 0.5rem",
//           fontWeight: "600",
//         }}
//       >
//         Term And Condition
//       </span>
//     </h2>

//           <Card className="shadow-sm">
//             <Card.Body className="p-4">
//             <section className="mb-5">
//   <p className="lead">
//     These Terms and Conditions govern your use of the Prefinn website (
//     <a href="https://www.prefinn.com" target="_blank" rel="noopener noreferrer" className="text-danger fw-bold">
//       www.prefinn.com
//     </a >
//     ) and the services provided by Prefinn, a B2B platform connecting partners 
//     with loan lead opportunities and financial institutions. By accessing or using our website, 
//     you agree to be bound by these terms.
//   </p>
// </section>


//               <section className="mb-5">
//               <h2 className="fw-semibold d-flex justify-content-center">
//       <span
//         style={{
//           background: "linear-gradient(135deg, #28a745 0%, #0d53b7 100%)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           backgroundClip: "text",
//           color: "transparent",
//           display: "inline-block",
//           padding: "0.2rem 0.5rem",
//           fontWeight: "600",
//         }}
//       >
//         Acceptance of Terms
//       </span>
//     </h2>
//                 <ol className="mb-4">
//                   <li className="mb-3">
//                     Please read these terms and conditions (the Terms) carefully. By accessing
//                     and using our website and any content and features therein (including without
//                     limitation any games, widgets, embeddable media players and RSS feeds)
//                     (together, our Services), you indicate your acceptance of these Terms...
//                   </li>
//                   <li className="mb-3">
//                     If you do not accept these Terms, please do not access and/or use our Services.
//                   </li>
//                   <li>
//                     We may update these Terms at any time. Please review the Terms regularly...
//                   </li>
//                 </ol>
//               </section>

//               <section className="mb-5">
//               <h2 className="fw-semibold d-flex justify-content-center">
//       <span
//         style={{
//           background: "linear-gradient(135deg, #28a745 0%, #0d53b7 100%)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           backgroundClip: "text",
//           color: "transparent",
//           display: "inline-block",
//           padding: "0.2rem 0.5rem",
//           fontWeight: "600",
//         }}
//       >
//        Uses of Our Services
//       </span>
//     </h2>
//                 <ol className="mb-4">
//                   <li className="mb-3">
//                     You agree to use our Services for lawful purposes only and in a way that
//                     does not infringe the rights of or restrict or inhibit any person’s use...
//                   </li>
//                   <li>
//                     In accessing our Services, you agree that you will only access its contents
//                     for your own personal and non-commercial use and not for any commercial...
//                   </li>
//                 </ol>
//               </section>
//             </Card.Body>
//           </Card>
//         </Container>
//         <Footer/>
//       </div>

  
//     </>
//   );
// };

// export default TermCondition;




















"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { ReactNode } from "react";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";

// Gradient text component with proper TypeScript typing
const GradientHeading = ({ children }: { children: ReactNode }) => (
  <h2 className="fw-semibold text-center mb-4">
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: "linear-gradient(135deg, #28a745 0%, #0d6efd 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        display: "inline-block",
        padding: "0.3rem 1rem",
        fontWeight: "700",
        fontSize: "2rem",
        letterSpacing: "-0.5px"
      }}
    >
      {children}
    </motion.span>
  </h2>
);

const TermCondition = () => {
  return (
    <>
      <Navbar />

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-5 bg-light min-vh-100"
      >
        <Container className="py-4">
          <GradientHeading>Terms And Conditions</GradientHeading>

          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
              <Card.Body className="p-4 p-md-5">
                {/* Introduction Section */}
                <motion.section 
                  className="mb-5"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="lead text-muted mb-4" style={{ lineHeight: "1.8" }}>
                    These Terms and Conditions govern your use of the Prefinn website (
                    <a 
                      href="https://www.prefinn.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-decoration-none fw-bold"
                      style={{ color: "#0d6efd" }}
                    >
                      www.prefinn.com
                    </a>
                    ) and the services provided by Prefinn, a B2B platform connecting partners 
                    with loan lead opportunities and financial institutions. By accessing or using our website, 
                    you agree to be bound by these terms.
                  </p>
                </motion.section>

                {/* Acceptance of Terms Section */}
                <motion.section 
                  className="mb-5"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <GradientHeading>Acceptance of Terms</GradientHeading>
                  <ol className="list-group list-group-numbered list-group-flush">
                    <motion.li 
                      className="list-group-item bg-transparent border-start-0 border-end-0 py-3"
                      whileHover={{ x: 5 }}
                    >
                      <div className="ms-3">
                        <p className="mb-0">
                          Please read these terms and conditions (the Terms) carefully. By accessing
                          and using our website and any content and features therein (including without
                          limitation any games, widgets, embeddable media players and RSS feeds)
                          (together, our Services), you indicate your acceptance of these Terms...
                        </p>
                      </div>
                    </motion.li>
                    <motion.li 
                      className="list-group-item bg-transparent border-start-0 border-end-0 py-3"
                      whileHover={{ x: 5 }}
                    >
                      <div className="ms-3">
                        <p className="mb-0">
                          If you do not accept these Terms, please do not access and/or use our Services.
                        </p>
                      </div>
                    </motion.li>
                    <motion.li 
                      className="list-group-item bg-transparent border-start-0 border-end-0 py-3"
                      whileHover={{ x: 5 }}
                    >
                      <div className="ms-3">
                        <p className="mb-0">
                          We may update these Terms at any time. Please review the Terms regularly...
                        </p>
                      </div>
                    </motion.li>
                  </ol>
                </motion.section>

                {/* Uses of Our Services Section */}
                <motion.section 
                  className="mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <GradientHeading>Uses of Our Services</GradientHeading>
                  <ol className="list-group list-group-numbered list-group-flush">
                    <motion.li 
                      className="list-group-item bg-transparent border-start-0 border-end-0 py-3"
                      whileHover={{ x: 5 }}
                    >
                      <div className="ms-3">
                        <p className="mb-0">
                          You agree to use our Services for lawful purposes only and in a way that
                          does not infringe the rights of or restrict or inhibit any person's use...
                        </p>
                      </div>
                    </motion.li>
                    <motion.li 
                      className="list-group-item bg-transparent border-start-0 border-end-0 py-3"
                      whileHover={{ x: 5 }}
                    >
                      <div className="ms-3">
                        <p className="mb-0">
                          In accessing our Services, you agree that you will only access its contents
                          for your own personal and non-commercial use and not for any commercial...
                        </p>
                      </div>
                    </motion.li>
                  </ol>
                </motion.section>
              </Card.Body>
            </Card>
          </motion.div>
        </Container>
      </motion.div>

      <Footer />
    </>
  );
};

export default TermCondition; 