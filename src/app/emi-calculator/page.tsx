













// previous code hai




// 'use client';
// import React, { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';
// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// const Navbar = dynamic(() => import('@/components/navbar'), { ssr: false });
// const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

// const COLORS = ['#007bff', '#dc3545'];

// export default function EMICalculator() {
//   const [loanAmount, setLoanAmount] = useState(100000);
//   const [interestRate, setInterestRate] = useState(8.5);
//   const [tenureMonths, setTenureMonths] = useState(24);

//   const [emi, setEmi] = useState(0);
//   const [totalInterest, setTotalInterest] = useState(0);
//   const [totalAmountPaid, setTotalAmountPaid] = useState(0);

//   const [formattedLoan, setFormattedLoan] = useState('');
//   const [formattedEMI, setFormattedEMI] = useState('');
//   const [formattedInterest, setFormattedInterest] = useState('');
//   const [formattedTotal, setFormattedTotal] = useState('');

//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   useEffect(() => {
//     const r = interestRate / 100 / 12;
//     const emiCalc =
//       (loanAmount * r * Math.pow(1 + r, tenureMonths)) /
//       (Math.pow(1 + r, tenureMonths) - 1);
//     const totalPayable = emiCalc * tenureMonths;
//     const interestPayable = totalPayable - loanAmount;

//     setEmi(emiCalc);
//     setTotalInterest(interestPayable);
//     setTotalAmountPaid(totalPayable);
//   }, [loanAmount, interestRate, tenureMonths]);

//   useEffect(() => {
//     if (isClient) {
//       setFormattedLoan(loanAmount.toLocaleString('en-IN'));
//       setFormattedEMI(Math.round(emi).toLocaleString('en-IN'));
//       setFormattedInterest(Math.round(totalInterest).toLocaleString('en-IN'));
//       setFormattedTotal(Math.round(totalAmountPaid).toLocaleString('en-IN'));
//     }
//   }, [emi, totalInterest, totalAmountPaid, loanAmount, isClient]);

//   const data = [
//     { name: 'Principal', value: loanAmount },
//     { name: 'Interest', value: totalInterest },
//   ];

//   if (!isClient) return null;

//   return (
//     <div className="d-flex flex-column min-vh-100">
//       <Navbar />
//       <main className="flex-grow-1 py-3 bg-light">
//         <Container className="px-2 px-md-3">
//           <h2 className="text-center mb-3 pt-2">Loan Calculator</h2>
//           <p className="text-center text-muted mb-3 mx-auto" style={{ maxWidth: '600px' }}>
//             Use this calculator to check how much EMI you will pay monthly along with total interest.
//           </p>
//           <Row className="g-3">
//             <Col md={6}>
//               <Card className="p-2 shadow-sm rounded-3 border-0 h-100">
//                 <Form className="p-2">
//                   <Form.Group className="mb-3">
//                     <Form.Label className="small fw-semibold">Loan Amount (₹)</Form.Label>
//                     <Form.Control
//                       type="number"
//                       value={loanAmount}
//                       onChange={(e) => setLoanAmount(Number(e.target.value))}
//                       className="py-2"
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-3">
//                     <Form.Label className="small fw-semibold">Interest Rate (%)</Form.Label>
//                     <Form.Control
//                       type="number"
//                       step="0.01"
//                       value={interestRate}
//                       onChange={(e) => setInterestRate(Number(e.target.value))}
//                       className="py-2"
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-3">
//                     <Form.Label className="small fw-semibold">Tenure (Months)</Form.Label>
//                     <Form.Control
//                       type="number"
//                       value={tenureMonths}
//                       onChange={(e) => setTenureMonths(Number(e.target.value))}
//                       className="py-2"
//                     />
//                   </Form.Group>

//                   <Button variant="primary" size="sm" className="w-100 py-2" onClick={(e) => e.preventDefault()}>
//                     Calculate EMI
//                   </Button>
//                 </Form>
//               </Card>
//             </Col>

//             <Col md={6}>
//               <Card className="p-2 shadow-sm rounded-3 border-0 h-100">
//                 <div className="p-2 d-flex flex-column h-100">
//                   <h6 className="text-center mb-2">Your EMI Details</h6>
//                   <hr className="my-2" />
//                   <div className="mb-2">
//                     <p className="d-flex justify-content-between small mb-2">
//                       <span className="fw-semibold">Monthly EMI:</span>
//                       <span>₹{formattedEMI}</span>
//                     </p>
//                     <p className="d-flex justify-content-between small mb-2">
//                       <span className="fw-semibold">Total Interest:</span>
//                       <span>₹{formattedInterest}</span>
//                     </p>
//                     <p className="d-flex justify-content-between small mb-3">
//                       <span className="fw-semibold">Total Payment:</span>
//                       <span>₹{formattedTotal}</span>
//                     </p>
//                   </div>

//                   <div className="mt-auto" style={{ height: '180px' }}>
//                     <ResponsiveContainer width="100%" height="100%">
//                       <PieChart>
//                         <Pie
//                           data={data}
//                           dataKey="value"
//                           nameKey="name"
//                           cx="50%"
//                           cy="50%"
//                           outerRadius={60}
//                           label
//                         >
//                           {data.map((entry, index) => (
//                             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                           ))}
//                         </Pie>
//                         <Tooltip />
//                       </PieChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </div>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </main>
//       <Footer />
//     </div>
//   );
// }















'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Badge, Accordion } from 'react-bootstrap';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoanApp() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [tenure, setTenure] = useState(24);
  const [interestRate, setInterestRate] = useState(11.25);

  // EMI calculation
  const calculateEMI = (P: number, r: number, n: number): number => {
    const monthlyRate = r / (12 * 100);
    return (P * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
  };

  const emi = calculateEMI(loanAmount, interestRate, tenure);
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - loanAmount;

  const loanServices = [
    { id: 3, title: 'Home Loan', icon: '🏠', color: '#bd10e0' },
      { id: 2, title: 'Personal Loan', icon: '👤', color: '#7ed321' },
      { id: 4, title: 'Business Loan', icon: '🏢', color: '#f5a623' }, // Added icon and color
      { id: 5, title: 'Loan Against Property', icon: '🏡🔑', color: '#4a90e2' }, // Added icon and color
      { id: 6, title: 'Working Capital Loan', icon: '🔄', color: '#9013fe' }, // Added icon and color
    
  ];

  const processSteps = [
    { title: 'Application Submit', description: 'Quick online application process' },
    { title: 'Review & Verification', description: 'Document validation and checks' },
    { title: 'Loan Approval', description: 'Instant approval decision' },
    { title: 'Loan Disbursement', description: 'Fast fund transfer to account' }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="loan-hero bg-gradient-primary text-white py-6">
        <Container className="py-6 text-center">
          <h1 className="display-4 fw-bold mb-4 animate-slide-up">
            Smart Loans For <span className="text-warning">Bright Futures</span>
          </h1>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="lead mb-4 text-light-1">
                Achieve your dreams with our flexible financial solutions and competitive rates
              </p>
              <Link href="/loan-apply" passHref>
  <Button
    variant="warning"
    size="lg"
    className="rounded-pill px-5 fw-bold shadow-lg hover-scale block text-dark font-medium ripple"
  >
    Apply Now
  </Button>
</Link>
            </div>  
          </div>
        </Container>
      </section>

      {/* Loan Calculator Section */}
      <section className="py-6 bg-light-2">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <Card className="h-100 p-4 shadow-lg border-0 bg-dark-1">
                <h2 className="mb-4 text-gradient-primary">Loan Calculator</h2>
                
                {/* Loan Amount Slider */}
                <div className="mb-5">
                  <label className="d-flex justify-content-between mb-3 fw-bold text-dark-1">
                    <span className="text-primary">Loan Amount</span>
                    <span className="text-primary">₹{loanAmount.toLocaleString('en-IN')}</span>
                  </label>
                  <input
                    type="range"
                    className="form-range custom-slider"
                    min="30000"
                    max="500000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between text-muted small">
                    <span>₹30K</span>
                    <span>₹5L</span>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div className="mb-5">
                  <label className="d-flex justify-content-between mb-3 fw-bold text-dark-1">
                    <span className="text-primary">Interest Rate</span>
                    <span className="text-primary">{interestRate.toFixed(2)}%</span>
                  </label>
                  <input
                    type="range"
                    className="form-range custom-slider"
                    min="10"
                    max="24"
                    step="0.25"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between text-muted small">
                    <span>10%</span>
                    <span>24%</span>
                  </div>
                </div>

                {/* Tenure Slider */}
                <div className="mb-4">
                  <label className="d-flex justify-content-between mb-3 fw-bold text-dark-1">
                    <span className="text-primary">Repayment Tenure</span>
                    <span className="text-primary">
                      {Math.floor(tenure / 12)}Y {tenure % 12}M
                    </span>
                  </label>
                  <input
                    type="range"
                    className="form-range custom-slider"
                    min="12"
                    max="60"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between text-muted small">
                    <span>1 Year</span>
                    <span>5 Years</span>
                  </div>
                </div>
              </Card>
            </Col>

            {/* Results Card */}
            <Col lg={6}>
              <Card className="h-100 p-4 bg-dark-1 text-white shadow-lg border-0">
                <h3 className="mb-4 text-gradient-warning">Payment Summary</h3>
                <ListGroup variant="flush" className="mb-4">
                  <ListGroup.Item className="bg-dark-1 text-white d-flex justify-content-between py-3">
                    <span>Principal Amount</span>
                    <span>₹{loanAmount.toLocaleString('en-IN')}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-dark-1 text-white d-flex justify-content-between py-3">
                    <span>Total Interest</span>
                    <span>₹{Math.round(totalInterest).toLocaleString('en-IN')}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-dark-1 text-white d-flex justify-content-between py-3 border-bottom-0">
                    <span>Total Payable</span>
                    <span>₹{Math.round(totalPayment).toLocaleString('en-IN')}</span>
                  </ListGroup.Item>
                </ListGroup>
                <div className="text-center mt-4 pt-3 border-top border-light-1">
                  <h2 className="display-5 fw-bold my-3 text-warning">
                    ₹{emi.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </h2>
                  <small className="d-block text-light-1">Monthly EMI</small>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
{/* Loan Services */}

<section className="py-4 bg-white"> {/* Reduced vertical padding */}
  <Container>
    <Row className="mb-3 text-center"> {/* Reduced bottom margin */}
      <Col>
        <h2 className="display-6 fw-bold mb-2 text-dark-1">Our Loan Services</h2> {/* Reduced font size and margin */}
        <p className="text-muted lead">Financial solutions for every need</p> {/* Reduced font size */}
      </Col>
    </Row>
    <Row className="flex-nowrap"> {/* Force single line */}
      {loanServices.map((service) => (
        <Col key={service.id} className="col"> {/* Make columns equal width within the row */}
          <Card
            className="h-100 border-0 shadow-sm text-center p-2 service-card" 
            style={{ borderBottom: `2px solid ${service.color}` }} 
          >
            <div className="display-4 mb-2 emoji-scale">{service.icon}</div> {/* Reduced font size and margin */}
            <Card.Body className="p-1"> {/* Reduced padding */}
              <Card.Title className="fw-bold mb-1 text-dark-1 ">{service.title}</Card.Title> {/* Reduced font size and margin */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>

      {/* Process Section */}
      <section className="py-6 bg-light-2">
        <Container>
          <Row className="mb-4 text-center">
            <Col>
              <h2 className="display-5 fw-bold mb-3 text-dark-1">How It Works</h2>
              <p className="text-muted lead">Simple 4-step approval process</p>
            </Col>
          </Row>
          <Row className="g-4 process-steps">
            {processSteps.map((step, index) => (
              <Col key={index} md={6} lg={3}>
                <div className="position-relative">
                  {index !== 0 && (
                    <div className="process-connector d-none d-lg-block"></div>
                  )}
                  <Card className="h-100 border-0 shadow-sm text-center p-4 hover-scale">
                    <Badge pill bg="warning" className="fs-5 mb-3 mx-auto number-badge">
                      {index + 1}
                    </Badge>
                    <Card.Body>
                      <Card.Title className="fw-bold mb-3 text-dark-1">{step.title}</Card.Title>
                      <Card.Text className="text-muted small">{step.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      

      <Footer />

      <style jsx global>{`
        :root {
          --primary-gradient: linear-gradient(135deg, #2b5876 0%, #4e4376 100%);
          --warning-gradient: linear-gradient(45deg, #f9d423 0%, #ff4e50 100%);
        }

        .loan-hero {
          background: var(--primary-gradient);
          position: relative;
          overflow: hidden;
        }

        .loan-hero::after {
          content: '';
          position: absolute;
          bottom: -50px;
          left: 0;
          width: 100%;
          height: 100px;
          background: white;
          transform: skewY(-3deg);
        }

        .text-gradient-primary {
          background: var(--primary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .text-gradient-warning {
          background: var(--warning-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .custom-slider::-webkit-slider-thumb {
          width: 24px;
          height: 24px;
          background: #4e4376;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }

        .custom-slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }

        .service-card {
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.1);
        }

        .hover-scale {
          transition: transform 0.3s ease;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .emoji-scale {
          transition: transform 0.3s ease;
        }

        .service-card:hover .emoji-scale {
          transform: scale(1.2);
        }

        .process-steps .process-connector {
          position: absolute;
          top: 40%;
          left: -50%;
          width: 100%;
          height: 4px;
          background: #4e4376;
          z-index: 0;
        }

        .number-badge {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          position: relative;
          transition: all 0.3s ease;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .bg-light-2 {
          background-color: #f8f9fa;
        }

        .bg-dark-1 {
          background-color: #2b2d42;
        }

        .text-light-1 {
          color: #e9ecef;
        }

        .text-dark-1 {
          color: #2b2d42;
        }
      `}</style>
    </>
  );
}