// "use client";
// import React from "react";
// import { Container, Card } from "react-bootstrap";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";

// const PrivacyPolicy = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="py-5 bg-light">
//         <Container>
//           <h1 className="mb-4 text-center display-4">Policies</h1>

//           {/* Privacy Policy */}
//           <Card className="shadow-sm mb-4">
//             <Card.Body className="p-4">
//               <h2 className="h4">1. Privacy Policy</h2>
//               <p>
//                 We collect and process personal and business data to facilitate lead sourcing and disbursement services.
//               </p>
//               <h5 className="mt-3">Data Collection</h5>
//               <p>
//                 We collect information such as company name, contact details, and lead data provided by partners.
//               </p>
//               <h5 className="mt-3">Usage</h5>
//               <p>
//                 Data is used to connect partners with financial institutions and improve our services. It may be shared with banks/NBFCs for loan processing.
//               </p>
//               <h5 className="mt-3">Security</h5>
//               <p>
//                 We implement reasonable security measures to protect your data, in compliance with the Digital Personal Data Protection Act, 2023.
//               </p>
//               <h5 className="mt-3">Rights</h5>
//               <p>
//                 Users may request access, correction, or deletion of their data by contacting{" "}
//                 <a href="mailto:support@prefinn.com" className="text-primary">
//                   support@prefinn.com
//                 </a>.
//               </p>
//             </Card.Body>
//           </Card>

//           {/* Partnership Policy */}
//           <Card className="shadow-sm mb-4">
//             <Card.Body className="p-4">
//               <h2 className="h4">2. Partnership Policy</h2>
//               <p>
//                 Prefinn collaborates with B2B partners to source loan leads. Partners must sign a separate agreement detailing lead quality standards, commission structures, and disbursement processes.
//               </p>
//               <p>
//                 We reserve the right to reject leads that do not meet our criteria or those of our financial partners.
//               </p>
//             </Card.Body>
//           </Card>

//           {/* Compliance Policy */}
//           <Card className="shadow-sm mb-4">
//             <Card.Body className="p-4">
//               <h2 className="h4">3. Compliance Policy</h2>
//               <p>
//                 Prefinn adheres to all applicable Indian regulations, including RBI guidelines for financial intermediaries and the IT Act, 2000, for digital operations. Partners are expected to comply with these laws when using our services.
//               </p>
//             </Card.Body>
//           </Card>

//           {/* Refund Policy */}
//           <Card className="shadow-sm mb-4">
//             <Card.Body className="p-4">
//               <h2 className="h4">4. Refund Policy</h2>
//               <p>
//                 Fees paid for services (e.g., lead generation) are non-refundable unless Prefinn fails to deliver agreed services due to its own fault. Refund requests must be submitted within 15 days of the issue, subject to review.
//               </p>
//             </Card.Body>
//           </Card>

//           {/* Anti-Fraud Policy */}
//           <Card className="shadow-sm mb-4">
//             <Card.Body className="p-4">
//               <h2 className="h4">5. Anti-Fraud Policy</h2>
//               <p>
//                 Prefinn prohibits the submission of fraudulent or falsified lead information. Any detected fraud will result in immediate termination of partnership and potential legal action.
//               </p>
//             </Card.Body>
//           </Card>

//           {/* Customer Support Policy */}
//           <Card className="shadow-sm mb-4">
//             <Card.Body className="p-4">
//               <h2 className="h4">6. Customer Support Policy</h2>
//               <p>
//                 We provide support to partners via email and phone during business hours (9 AM–6 PM IST, Monday–Friday). Queries will be addressed within 48 hours.
//               </p>
//             </Card.Body>
//           </Card>

//           {/* Confidentiality Policy */}
//           <Card className="shadow-sm mb-4">
//             <Card.Body className="p-4">
//               <h2 className="h4">7. Confidentiality Policy</h2>
//               <p>
//                 Prefinn and its partners agree to keep all sensitive business information (e.g., lead data, commission rates) confidential, except as required by law or for service delivery.
//               </p>
//             </Card.Body>
//           </Card>
//         </Container>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PrivacyPolicy;





































"use client";
import React from "react";
import { Container, Card } from "react-bootstrap";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

const PolicyCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.01 }}
  >
    <Card className="shadow-lg mb-4 border-0 rounded-4 overflow-hidden">
      <Card.Body className="p-4 p-md-5">
        <h2 className="h3 mb-4 fw-bold" style={{ color: '#2c3e50' }}>
          <span className="border-bottom border-3 border-primary pb-2">{title}</span>
        </h2>
        {children}
      </Card.Body>
    </Card>
  </motion.div>
);

const PolicySection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-3">
    <h5 className="fw-semibold mb-2" style={{ color: '#3498db' }}>{title}</h5>
    <p className="text-muted" style={{ lineHeight: '1.8' }}>{children}</p>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="py-5 bg-light" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <Container>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-center display-4 fw-bold"
            style={{
              background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Policies
          </motion.h1>

          {/* Privacy Policy */}
          <PolicyCard title="1. Privacy Policy">
            <p className="lead text-muted mb-4">
              We collect and process personal and business data to facilitate lead sourcing and disbursement services.
            </p>
            
            <PolicySection title="Data Collection">
              We collect information such as company name, contact details, and lead data provided by partners.
            </PolicySection>
            
            <PolicySection title="Usage">
              Data is used to connect partners with financial institutions and improve our services. It may be shared with banks/NBFCs for loan processing.
            </PolicySection>
            
            <PolicySection title="Security">
              We implement reasonable security measures to protect your data, in compliance with the Digital Personal Data Protection Act, 2023.
            </PolicySection>
            
            <PolicySection title="Rights">
              Users may request access, correction, or deletion of their data by contacting{" "}
              <a href="mailto:support@prefinn.com" className="text-decoration-none fw-bold" style={{ color: '#e74c3c' }}>
                info@prefinn.com
              </a>.
            </PolicySection>
          </PolicyCard>

          {/* Partnership Policy */}
          <PolicyCard title="2. Partnership Policy">
            <p className="text-muted mb-3" style={{ lineHeight: '1.8' }}>
              Prefinn collaborates with B2B partners to source loan leads. Partners must sign a separate agreement detailing lead quality standards, commission structures, and disbursement processes.
            </p>
            <p className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
              We reserve the right to reject leads that do not meet our criteria or those of our financial partners.
            </p>
          </PolicyCard>

          {/* Compliance Policy */}
          <PolicyCard title="3. Compliance Policy">
            <p className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
              Prefinn adheres to all applicable Indian regulations, including RBI guidelines for financial intermediaries and the IT Act, 2000, for digital operations. Partners are expected to comply with these laws when using our services.
            </p>
          </PolicyCard>

          {/* Refund Policy */}
          <PolicyCard title="4. Refund Policy">
            <p className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
              Fees paid for services (e.g., lead generation) are non-refundable unless Prefinn fails to deliver agreed services due to its own fault. Refund requests must be submitted within 15 days of the issue, subject to review.
            </p>
          </PolicyCard>

          {/* Anti-Fraud Policy */}
          <PolicyCard title="5. Anti-Fraud Policy">
            <p className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
              Prefinn prohibits the submission of fraudulent or falsified lead information. Any detected fraud will result in immediate termination of partnership and potential legal action.
            </p>
          </PolicyCard>

          {/* Customer Support Policy */}
          <PolicyCard title="6. Customer Support Policy">
            <p className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
              We provide support to partners via email and phone during business hours (9 AM–6 PM IST, Monday–Friday). Queries will be addressed within 48 hours.
            </p>
          </PolicyCard>

          {/* Confidentiality Policy */}
          <PolicyCard title="7. Confidentiality Policy">
            <p className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
              Prefinn and its partners agree to keep all sensitive business information (e.g., lead data, commission rates) confidential, except as required by law or for service delivery.
            </p>
          </PolicyCard>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;