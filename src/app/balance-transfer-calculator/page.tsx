// 'use client';
// import { useState } from 'react';
// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'; // Fixed trailing comma
// import Footer from '@/components/footer';
// import Navbar from '@/components/navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function BalanceTransferCalculator() {
//   const [principal, setPrincipal] = useState(2500000);
//   const [existingRate, setExistingRate] = useState(9.03);
//   const [existingTenure, setExistingTenure] = useState(20);
//   const [transferRate, setTransferRate] = useState(8.75);
//   const [transferTenure, setTransferTenure] = useState(20);

//   const calculateEMI = (principal: number, rate: number, tenure: number): number => {
//     const monthlyRate = rate / 1200;
//     const months = tenure * 12;
//     return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
//   };

//   const existingEMI = calculateEMI(principal, existingRate, existingTenure);
//   const proposedEMI = calculateEMI(principal, transferRate, transferTenure);
//   const savings = existingEMI - proposedEMI;
//   const totalSavings = savings * 12 * existingTenure;

//   return (
//     <>
//       <Navbar/>
//       <div className="container p-5 bg-light rounded shadow-sm">
//         <h2 className="text-center">Balance Transfer Calculator</h2>
//         <p className="text-center text-danger fw-bold">Total Savings: ₹{totalSavings.toLocaleString()}</p>
        
//         <div className="mb-3">
//           <label className="form-label">Outstanding Principal</label>
//           <input 
//             type="range" 
//             className="form-range" 
//             min="100000" 
//             max="5000000" 
//             step="10000" 
//             value={principal} 
//             onChange={(e) => setPrincipal(Number(e.target.value))} // Added Number conversion
//           />
//           <p>₹{principal.toLocaleString()}</p>
//         </div>
        
//         {/* Add Number conversion to all other input handlers */}
//         <div className="mb-3">
//           <label className="form-label">Existing Interest Rate (%)</label>
//           <input 
//             type="range" 
//             className="form-range" 
//             min="5" 
//             max="15" 
//             step="0.1" 
//             value={existingRate} 
//             onChange={(e) => setExistingRate(Number(e.target.value))}
//           />
//           <p>{existingRate}%</p>
//         </div>
        
//         <div className="mb-3">
//           <label className="form-label">Existing Tenure (Years)</label>
//           <input 
//             type="range" 
//             className="form-range" 
//             min="5" 
//             max="30" 
//             step="1" 
//             value={existingTenure} 
//             onChange={(e) => setExistingTenure(Number(e.target.value))}
//           />
//           <p>{existingTenure} years</p>
//         </div>
        
       
//       </div>
//       <Footer/>
//     </>
//   );
// }































// 'use client'; // Ensure it's a client component

// import { useState } from 'react';
// import { Container, Form, Button } from 'react-bootstrap';
// import Navbar from '@/components/navbar'; // Ensure these are client components
// import Footer from '@/components/footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function BalanceTransferCalculator() {
//   const [principal, setPrincipal] = useState(2500000);
//   const [existingRate, setExistingRate] = useState(9.03);
//   const [existingTenure, setExistingTenure] = useState(20);
//   const [transferRate, setTransferRate] = useState(8.75);
//   const [transferTenure, setTransferTenure] = useState(20);

//   const calculateEMI = (principal: number, rate: number, tenure: number): number => {
//     const monthlyRate = rate / 1200;
//     const months = tenure * 12;
//     return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
//   };

//   const existingEMI = calculateEMI(principal, existingRate, existingTenure);
//   const proposedEMI = calculateEMI(principal, transferRate, transferTenure);
//   const savings = existingEMI - proposedEMI;
//   const totalSavings = savings * 12 * existingTenure;

//   return (
//     <>
//       <Navbar /> {/* Ensure this is a client component */}
//       <Container className="p-5 bg-light rounded shadow-sm">
//         <h2 className="text-center">Balance Transfer Calculator</h2>
//         <p className="text-center text-danger fw-bold">
//           Total Savings: ₹{totalSavings.toLocaleString()}
//         </p>

//         {/* Loan Amount */}
//         <Form.Group className="mb-3">
//           <Form.Label>Outstanding Principal</Form.Label>
//           <Form.Range 
//             min="100000" max="5000000" step="10000"
//             value={principal} onChange={(e) => setPrincipal(Number(e.target.value))}
//           />
//           <p>₹{principal.toLocaleString()}</p>
//         </Form.Group>

//         {/* Existing Interest Rate */}
//         <Form.Group className="mb-3">
//           <Form.Label>Existing Interest Rate (%)</Form.Label>
//           <Form.Range 
//             min="5" max="15" step="0.1"
//             value={existingRate} onChange={(e) => setExistingRate(Number(e.target.value))}
//           />
//           <p>{existingRate}%</p>
//         </Form.Group>

//         {/* Existing Tenure */}
//         <Form.Group className="mb-3">
//           <Form.Label>Existing Tenure (Years)</Form.Label>
//           <Form.Range 
//             min="5" max="30" step="1"
//             value={existingTenure} onChange={(e) => setExistingTenure(Number(e.target.value))}
//           />
//           <p>{existingTenure} years</p>
//         </Form.Group>
//       </Container>
//       <Footer /> {/* Ensure this is a client component */}
//     </>
//   );
// }





















'use client';
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
    { id: 1, title: 'Car Loan', icon: '🚗' },
    { id: 2, title: 'Personal Loan', icon: '👤' },
    { id: 3, title: 'Home Loan', icon: '🏠' },
    { id: 4, title: 'Education Loan', icon: '🎓' }
  ];

  const processSteps = [
    { title: 'Application Submit', description: 'Quick online application process' },
    { title: 'Review & Verification', description: 'Document validation and checks' },
    { title: 'Loan Approval', description: 'Instant approval decision' },
    { title: 'Loan Disbursement', description: 'Fast fund transfer to account' }
  ];

  const teamMembers = [
    { name: 'Mike Hardson', position: 'Managing Director', bio: 'Seasoned financial expert with 15+ years experience' },
    { name: 'Sarah Johnson', position: 'Loan Director', bio: 'Specialist in international education financing' },
    { name: 'David Chen', position: 'Risk Manager', bio: 'Risk analysis and mitigation strategist' }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <Container className="py-5 text-center">
          <h1 className="display-4 fw-bold mb-4">
            Smart Loans For <span className="text-primary">Bright Futures</span>
          </h1>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="lead mb-4">
                Achieve your dreams with our flexible financial solutions and competitive rates
              </p>
              {/* <Button variant="primary" size="lg" className="rounded-pill px-5">
                Apply Now
              </Button> */}
            </div>
          </div>
        </Container>
      </section>

      {/* Loan Calculator Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <Card className="h-100 p-4 shadow">
                <h2 className="mb-4">How Much Do You Need?</h2>
                
                {/* Loan Amount Slider */}
                <div className="mb-4">
                  <label className="d-flex justify-content-between mb-3 fw-bold">
                    <span>Loan Amount</span>
                    <span className="text-primary">₹{loanAmount.toLocaleString('en-IN')}</span>
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min="30000"
                    max="500000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between text-muted">
                    <small>₹30K</small>
                    <small>₹5L</small>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div className="mb-4">
                  <label className="d-flex justify-content-between mb-3 fw-bold">
                    <span>Interest Rate</span>
                    <span className="text-primary">{interestRate.toFixed(2)}%</span>
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min="10"
                    max="24"
                    step="0.25"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between text-muted">
                    <small>10%</small>
                    <small>24%</small>
                  </div>
                </div>

                {/* Tenure Slider */}
                <div className="mb-4">
                  <label className="d-flex justify-content-between mb-3 fw-bold">
                    <span>Repayment Tenure</span>
                    <span className="text-primary">
                      {Math.floor(tenure / 12)}Y {tenure % 12}M
                    </span>
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min="12"
                    max="60"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between text-muted">
                    <small>1 Year</small>
                    <small>5 Years</small>
                  </div>
                </div>
              </Card>
            </Col>

            {/* Results Card */}
            <Col lg={6}>
              <Card className="h-100 p-4 bg-primary text-white shadow">
                <h3 className="mb-4">Payment Summary</h3>
                <ListGroup variant="flush">
                  <ListGroup.Item className="bg-primary text-white d-flex justify-content-between">
                    <span>Principal Amount</span>
                    <span>₹{loanAmount.toLocaleString('en-IN')}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-primary text-white d-flex justify-content-between">
                    <span>Total Interest</span>
                    <span>₹{Math.round(totalInterest).toLocaleString('en-IN')}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-primary text-white d-flex justify-content-between">
                    <span>Total Payable</span>
                    <span>₹{Math.round(totalPayment).toLocaleString('en-IN')}</span>
                  </ListGroup.Item>
                </ListGroup>
                <div className="text-center mt-4 pt-3 border-top">
                  <h2 className="display-5 fw-bold my-3">
                    ₹{emi.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </h2>
                  <small className="d-block">Monthly EMI</small>
                  
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Loan Services */}
      <section className="py-5">
        <Container>
          <Row className="mb-5 text-center">
            <Col>
              <h2 className="display-5 fw-bold mb-3">Our Loan Services</h2>
              <p className="text-muted lead">Financial solutions for every need</p>
            </Col>
          </Row>
          <Row className="g-4">
            {loanServices.map((service) => (
              <Col key={service.id} md={6} lg={3}>
                <Card className="h-100 border-0 shadow-sm text-center p-4 hover-effect">
                  <div className="display-3 mb-3">{service.icon}</div>
                  <Card.Body>
                    <Card.Title className="fw-bold mb-3">{service.title}</Card.Title>
                    
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5 text-center">
            <Col>
              <h2 className="display-5 fw-bold mb-3">How It Works</h2>
              <p className="text-muted lead">Simple 4-step approval process</p>
            </Col>
          </Row>
          <Row className="g-4">
            {processSteps.map((step, index) => (
              <Col key={index} md={6} lg={3}>
                <Card className="h-100 border-0 shadow-sm text-center p-4">
                  <Badge bg="primary" className="fs-5 mb-3 mx-auto">{index + 1}</Badge>
                  <Card.Body>
                    <Card.Title className="fw-bold mb-3">{step.title}</Card.Title>
                    <Card.Text className="text-muted">{step.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5 text-center">
            <Col>
              <h2 className="display-5 fw-bold mb-3">FAQ</h2>
              <p className="text-muted lead">Common questions answered</p>
            </Col>
          </Row>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What types of loans are available?</Accordion.Header>
              <Accordion.Body>
                We offer personal loans, business loans, education loans, and home loans 
                with flexible terms and competitive rates.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How long does approval take?</Accordion.Header>
              <Accordion.Body>
                Most applications receive instant approval decisions with funds disbursed 
                within 24-48 hours of document verification.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      <Footer />

      <style jsx global>{`
        .hover-effect {
          transition: transform 0.3s ease;
        }
        .hover-effect:hover {
          transform: translateY(-5px);
        }
        .form-range::-webkit-slider-thumb {
          background: #0d6efd;
          width: 20px;
          height: 20px;
        }
      `}</style>
    </>
  );
}