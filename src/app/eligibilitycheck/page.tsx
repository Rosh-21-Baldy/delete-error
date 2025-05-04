// "use client"
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Card } from '@/components/ui/card'; // Assuming you have Shadcn Card component
// import Footer from '@/components/footer';
// import Navbar from '@/components/navbar';


// const LoanSections = () => {
//   return (
//     <>
//       <Navbar /> {/* Using Navbar component */}
//       <Container>
//         <Row className="mb-4">
//           <Col md={6}>
//             <Card className="p-4">
//               <h3>Discover Your Loan Potential Check Eligibility Now!</h3>
//               <p className="text-muted">Unlock Top Offers - Compare & Save!</p>
//             </Card>
//           </Col>
//           <Col md={6}>
//             <Card className="p-4">
//               <h3>Get Best Offers - Compare & Conquer!</h3>
//               <p className="text-muted">Prefin makes it easy to find the best loan offers from top lenders.</p>
//             </Card>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={12}>
//             <Card className="p-4">
//               <h3>Hassle Free, Disbursal Unlock Your Dream Home Now!</h3>
//               <p className="text-muted">Disbursal made easy, dreams made real</p>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//       <Footer/> {/* Using Footer component */}
//     </>
//   );
// };

// export default LoanSections;













































"use client";
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLandmark } from 'react-icons/fa';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { motion, AnimatePresence } from 'framer-motion';

// Interface for Loan Data
interface LoanDetails {
  bankName: string;
  interestRate: string;
  loanAmount: string;
  emiPerLakh: string;
  processingFees: string;
  prePaymentCharges: string;
}

const loanData: LoanDetails[] = [
  {
    bankName: 'RBL Bank Personal Loan',
    interestRate: '18% - 26%',
    loanAmount: '₹1L - ₹20L',
    emiPerLakh: '₹2,539 - ₹2,994',
    processingFees: 'Up to 2% of loan amount',
    prePaymentCharges: 'Between 13 to 18 months: 5% of outstanding principal. Other conditions apply.',
  },
  {
    bankName: 'DCB Bank Personal Loan',
    interestRate: '13% - 25%',
    loanAmount: '₹1L - ₹5L',
    emiPerLakh: '₹2,275 - ₹2,935',
    processingFees: 'Up to 3% of loan sanctioned',
    prePaymentCharges: 'No pre-payment charges applicable after 12 months.',
  },
  {
    bankName: 'IDFC FIRST Bank Personal Loan',
    interestRate: '10.99% - 24%',
    loanAmount: '₹1 Lakh - ₹40 Lakh',
    emiPerLakh: '₹2,124 - ₹2,880',
    processingFees: 'Up to 3%. Additional charges may apply.',
    prePaymentCharges: 'Varies based on the tenure and amount. Contact bank for details.',
  },
  {
    bankName: 'IndusInd Bank Personal Loan',
    interestRate: '11.25% - 26.65%',
    loanAmount: '₹50,000 - ₹50 Lakh',
    emiPerLakh: '₹2,136 - ₹3,024',
    processingFees: 'Up to 3%. Check specific offer details.',
    prePaymentCharges: 'Varies based on the outstanding amount and time of pre-payment.',
  },
  {
    bankName: 'HDFC Bank Personal Loan',
    interestRate: '10.50% - 24.00%',
    loanAmount: '₹50,000 - ₹40 Lakh',
    emiPerLakh: '₹2,100 - ₹2,880',
    processingFees: 'Up to 2.50%. Subject to loan amount.',
    prePaymentCharges: '2-4% of the outstanding principal depending on the loan tenure.',
  },
  {
    bankName: 'State Bank of India Personal Loan',
    interestRate: '11.15% - 15.65%',
    loanAmount: '₹25,000 - ₹20 Lakh',
    emiPerLakh: '₹2,131 - ₹2,384',
    processingFees: 'Up to 1.50%. May include other service charges.',
    prePaymentCharges: '3% of the outstanding principal after 6 months.',
  },
];

// Reusable Component for Loan Cards
const LoanCard: React.FC<LoanDetails> = ({
  bankName,
  interestRate,
  loanAmount,
  emiPerLakh,
  processingFees,
  prePaymentCharges,
}) => {
  const [showFullCharges, setShowFullCharges] = useState(false);

  const cardVariants = {
    initial: { opacity: 0, y: 20, scale: 1 },
    animate: { opacity: 1, y: 0, scale: 1 },
    hover: { scale: 1.02, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' },
    tap: { scale: 0.98, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)' },
  };

  const headingVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const detailVariants = {
    initial: { opacity: 0.8 },
    animate: { opacity: 1 },
  };

  return (
    <motion.div
      className="card p-4 mb-4 shadow-sm"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div className="d-flex align-items-center mb-3" variants={headingVariants}>
        <FaLandmark className="me-2 text-primary" size={24} />
        <h5 className="mb-0 fw-bold">{bankName}</h5>
      </motion.div>
      {/* REMOVED THE APPLY NOW BUTTON */}
      <Row xs={1} sm={2} md={3} lg={5} className="gx-3">
        <Col className="mb-2">
          <motion.div style={{ fontSize: '0.9rem', color: '#6c757d' }} variants={detailVariants}>
            <div className="fw-bold text-secondary small">Interest Rate</div>
            <div>{interestRate}</div>
          </motion.div>
        </Col>
        <Col className="mb-2">
          <motion.div style={{ fontSize: '0.9rem', color: '#6c757d' }} variants={detailVariants}>
            <div className="fw-bold text-secondary small">Loan Amount</div>
            <div>{loanAmount}</div>
          </motion.div>
        </Col>
        <Col className="mb-2">
          <motion.div style={{ fontSize: '0.9rem', color: '#6c757d' }} variants={detailVariants}>
            <div className="fw-bold text-secondary small">EMI Per Lakh</div>
            <div>{emiPerLakh}</div>
          </motion.div>
        </Col>
        <Col className="mb-2">
          <motion.div style={{ fontSize: '0.9rem', color: '#6c757d' }} variants={detailVariants}>
            <div className="fw-bold text-secondary small">Processing Fees</div>
            <div>{processingFees}</div>
          </motion.div>
        </Col>
        <Col className="mb-2">
          <motion.div style={{ fontSize: '0.9rem', color: '#6c757d' }} variants={detailVariants}>
            <div className="fw-bold text-secondary small">Pre-Payment Charges</div>
            <div>
              {prePaymentCharges.length > 40 && !showFullCharges ? (
                <>
                  {prePaymentCharges.substring(0, 40)}
                  <button
                    className="btn btn-link btn-sm p-0"
                    onClick={() => setShowFullCharges(true)}
                  >
                    ...more
                  </button>
                </>
              ) : (
                <>
                  {prePaymentCharges}
                  {prePaymentCharges.length > 40 && showFullCharges && (
                    <button
                      className="btn btn-link btn-sm p-0"
                      onClick={() => setShowFullCharges(false)}
                    >
                      Show Less
                    </button>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

const LoanComparisonPage = () => {
  return (
    <>
      <Navbar />
      <Container className="py-5">
        <motion.h1
          className="mb-4 text-center fw-bold text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: '2rem' }} // Adjusted font size for better responsiveness
        >
          <h3 className="my-2 fw-bold " style={{ color: '#808080' }}>
            Get Best Offers - Compare & Conquer!
          </h3>
          <p className=" fw-sm" style={{ color: '#0d53b7' }}>
            Prefin makes it easy to find the best loan offers from top lenders.
          </p>
        </motion.h1>
        <AnimatePresence>
          {loanData.map((loan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <LoanCard {...loan} />
            </motion.div>
          ))}
        </AnimatePresence>
      </Container>
      <Footer />
    </>
  );
};

export default LoanComparisonPage;