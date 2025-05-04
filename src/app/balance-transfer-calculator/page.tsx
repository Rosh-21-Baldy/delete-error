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

















// 'use client';
// import Link from 'next/link';
// import { useState } from 'react';
// import { Container, Row, Col, Card, Button, ListGroup, Badge } from 'react-bootstrap';
// import Navbar from '@/components/navbar';
// import Footer from '@/components/footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function BalanceTransferCalculator() {
//   const [currentBalance, setCurrentBalance] = useState(500000);
//   const [currentInterest, setCurrentInterest] = useState(18.99);
//   const [newInterest, setNewInterest] = useState(11.25);
//   const [transferFee, setTransferFee] = useState(2.0);
//   const [term, setTerm] = useState(24);

//   // Savings calculation
//   const calculateSavings = () => {
//     const calculateTotalCost = (principal: number, rate: number, months: number) => {
//       const monthlyRate = rate / (12 * 100);
//       const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
//                  (Math.pow(1 + monthlyRate, months) - 1);
//       return emi * months;
//     };

//     const feeAmount = currentBalance * (transferFee / 100);
//     const currentTotal = calculateTotalCost(currentBalance, currentInterest, term);
//     const newTotal = calculateTotalCost(currentBalance + feeAmount, newInterest, term);
    
//     return {
//       savings: currentTotal - newTotal,
//       currentTotal,
//       newTotal,
//       feeAmount
//     };
//   };

//   const { savings, currentTotal, newTotal, feeAmount } = calculateSavings();

//   const transferServices = [
//     { id: 1, title: 'Credit Card Transfer', icon: '💳', color: '#4a90e2' },
//     { id: 2, title: 'Loan Consolidation', icon: '📊', color: '#7ed321' },
//     { id: 3, title: 'Debt Refinancing', icon: '⚖️', color: '#bd10e0' },
//     { id: 4, title: 'Balance Protection', icon: '🛡️', color: '#f8e71c' }
//   ];

//   const processSteps = [
//     { title: 'Balance Analysis', description: 'Review current debt structure' },
//     { title: 'Offer Matching', description: 'Find best transfer options' },
//     { title: 'Risk Assessment', description: 'Creditworthiness evaluation' },
//     { title: 'Transfer Execution', description: 'Secure debt migration' }
//   ];

//   return (
//     <>
//       <Navbar />

//       {/* Hero Section */}
//       <section className="bt-hero bg-gradient-primary text-white py-6">
//         <Container className="py-6 text-center">
//           <h1 className="display-4 fw-bold mb-4 animate-slide-up">
//             Smarter Debt Management <span className="text-warning">Made Simple</span>
//           </h1>
//           <div className="row justify-content-center">
//             <div className="col-lg-8">
//               <p className="lead mb-4 text-light-1">
//                 Reduce interest costs and consolidate debts with our balance transfer solutions
//               </p>
//               <Link href="/loan-apply" passHref>
//                 <Button 
//                   variant="warning" 
//                   size="lg" 
//                   className="rounded-pill px-5 fw-bold shadow-lg hover-scale block text-dark font-medium ripple"
//                 >
//                   Apply Now
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* Calculator Section */}
// <section className="py-4 bg-light-2">
//   <Container>
//     <Row className="g-3">
//       <Col lg={6}>
//         <Card className="h-100 p-3 shadow-sm border-0">
//           <h2 className="mb-3 text-gradient-primary fs-4">Transfer Calculator</h2>
          
//           {/* Current Balance */}
//           <div className="mb-4">
//             <label className="d-flex justify-content-between align-items-center mb-2 fw-medium text-dark-1 small">
//               <span>Current Balance</span>
//               <span className="text-primary">₹{currentBalance.toLocaleString('en-IN')}</span>
//             </label>
//             <input
//               type="range"
//               className="form-range custom-slider"
//               min="10000"
//               max="1000000"
//               value={currentBalance}
//               onChange={(e) => setCurrentBalance(Number(e.target.value))}
//             />
//             <div className="d-flex justify-content-between text-muted small mt-1">
//               <span>₹10K</span>
//               <span>₹10L</span>
//             </div>
//           </div>

//           {/* Current Interest */}
//           <div className="mb-4">
//             <label className="d-flex justify-content-between align-items-center mb-2 fw-medium text-dark-1 small">
//               <span>Current APR</span>
//               <span className="text-primary">{currentInterest.toFixed(2)}%</span>
//             </label>
//             <input
//               type="range"
//               className="form-range custom-slider"
//               min="5"
//               max="40"
//               step="0.25"
//               value={currentInterest}
//               onChange={(e) => setCurrentInterest(Number(e.target.value))}
//             />
//             <div className="d-flex justify-content-between text-muted small mt-1">
//               <span>5%</span>
//               <span>40%</span>
//             </div>
//           </div>

//           {/* New Interest */}
//           <div className="mb-4">
//             <label className="d-flex justify-content-between align-items-center mb-2 fw-medium text-dark-1 small">
//               <span>New APR</span>
//               <span className="text-success">{newInterest.toFixed(2)}%</span>
//             </label>
//             <input
//               type="range"
//               className="form-range custom-slider"
//               min="5"
//               max="30"
//               step="0.25"
//               value={newInterest}
//               onChange={(e) => setNewInterest(Number(e.target.value))}
//             />
//             <div className="d-flex justify-content-between text-muted small mt-1">
//               <span>5%</span>
//               <span>30%</span>
//             </div>
//           </div>

//           {/* Transfer Fee */}
//           <div className="mb-3">
//             <label className="d-flex justify-content-between align-items-center mb-2 fw-medium text-dark-1 small">
//               <span>Transfer Fee</span>
//               <span className="text-primary">{transferFee.toFixed(2)}%</span>
//             </label>
//             <input
//               type="range"
//               className="form-range custom-slider"
//               min="0"
//               max="5"
//               step="0.1"
//               value={transferFee}
//               onChange={(e) => setTransferFee(Number(e.target.value))}
//             />
//             <div className="d-flex justify-content-between text-muted small mt-1">
//               <span>0%</span>
//               <span>5%</span>
//             </div>
//           </div>
//         </Card>
//       </Col>

//       {/* Results Card */}
//       <Col lg={6}>
//         <Card className="h-100 p-3 bg-dark-1 text-white shadow-sm border-0">
//           <h3 className="mb-3 text-gradient-warning fs-5">Savings Summary</h3>
//           <ListGroup variant="flush" className="mb-3">
//             <ListGroup.Item className="bg-dark-1 text-white d-flex justify-content-between align-items-center py-2 small">
//               <span>Current Total Payable</span>
//               <span>₹{Math.round(currentTotal).toLocaleString('en-IN')}</span>
//             </ListGroup.Item>
//             <ListGroup.Item className="bg-dark-1 text-white d-flex justify-content-between align-items-center py-2 small">
//               <span>New Total Payable</span>
//               <span>₹{Math.round(newTotal).toLocaleString('en-IN')}</span>
//             </ListGroup.Item>
//             <ListGroup.Item className="bg-dark-1 text-white d-flex justify-content-between align-items-center py-2 small">
//               <span>Transfer Fees</span>
//               <span>₹{Math.round(feeAmount).toLocaleString('en-IN')}</span>
//             </ListGroup.Item>
//             <ListGroup.Item className="bg-dark-1 text-white d-flex justify-content-between align-items-center py-2 small border-bottom-0">
//               <span className="fw-medium">Net Savings</span>
//               <span className={`fw-medium ${savings > 0 ? 'text-success' : 'text-danger'}`}>
//                 ₹{Math.abs(savings).toLocaleString('en-IN')}
//               </span>
//             </ListGroup.Item>
//           </ListGroup>
//           <div className="text-center mt-3 pt-2 border-top border-light-1">
//             <h2 className="h4 fw-bold my-2 text-warning">
//               {savings > 0 ? 'Save' : 'Cost'} ₹{Math.abs(savings).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
//             </h2>
//             <small className="d-block text-light-1 small">Over {term} months</small>
//           </div>
//         </Card>
//       </Col>
//     </Row>
//   </Container>
// </section>

//       {/* Services Section */}
//       <section className="py-6 bg-white">
//         <Container>
//           <Row className="mb-4 text-center">
//             <Col>
//               <h2 className="display-5 fw-bold mb-3 text-dark-1">Transfer Solutions</h2>
//               <p className="text-muted lead">Optimize your debt management strategies</p>
//             </Col>
//           </Row>
//           <Row className="g-4">
//             {transferServices.map((service) => (
//               <Col key={service.id} md={6} lg={3}>
//                 <Card 
//                   className="h-100 border-0 shadow-sm text-center p-4 service-card"
//                   style={{ borderBottom: `4px solid ${service.color}`}}
//                 >
//                   <div className="display-3 mb-3 emoji-scale">{service.icon}</div>
//                   <Card.Body>
//                     <Card.Title className="fw-bold mb-3 text-dark-1">{service.title}</Card.Title> 
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section>

//       {/* Process Section */}
//       <section className="py-6 bg-light-2">
//         <Container>
//           <Row className="mb-4 text-center">
//             <Col>
//               <h2 className="display-5 fw-bold mb-3 text-dark-1">Transfer Process</h2>
//               <p className="text-muted lead">Streamlined 4-step transfer workflow</p>
//             </Col>
//           </Row>
//           <Row className="g-4 process-steps">
//             {processSteps.map((step, index) => (
//               <Col key={index} md={6} lg={3}>
//                 <div className="position-relative">
//                   {index !== 0 && (
//                     <div className="process-connector d-none d-lg-block"></div>
//                   )}
//                   <Card className="h-100 border-0 shadow-sm text-center p-4 hover-scale">
//                     <Badge pill bg="warning" className="fs-5 mb-3 mx-auto number-badge">
//                       {index + 1}
//                     </Badge>
//                     <Card.Body>
//                       <Card.Title className="fw-bold mb-3 text-dark-1">{step.title}</Card.Title>
//                       <Card.Text className="text-muted small">{step.description}</Card.Text>
//                     </Card.Body>
//                   </Card>
//                 </div>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section>

//       <Footer />

//       <style jsx global>{`
//         :root {
//           --primary-gradient: linear-gradient(135deg, #2b5876 0%, #4e4376 100%);
//           --warning-gradient: linear-gradient(45deg, #f9d423 0%, #ff4e50 100%);
//         }

//         .bt-hero {
//           background: var(--primary-gradient);
//           position: relative;
//           overflow: hidden;
//         }

//         .text-gradient-primary {
//           background: var(--primary-gradient);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .text-gradient-warning {
//           background: var(--warning-gradient);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .custom-slider::-webkit-slider-thumb {
//           width: 24px;
//           height: 24px;
//           background: #4e4376;
//           border: 3px solid white;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.2);
//           transition: all 0.3s ease;
//         }

//         .service-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 12px 24px rgba(0,0,0,0.1);
//         }

//         .process-connector {
//           position: absolute;
//           top: 40%;
//           left: -50%;
//           width: 100%;
//           height: 4px;
//           background: #4e4376;
//           z-index: 0;
//         }

//         .animate-slide-up {
//           animation: slideUp 0.8s ease forwards;
//           opacity: 0;
//           transform: translateY(20px);
//         }

//         @keyframes slideUp {
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </>
//   );
// }








































































































































'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Badge, Accordion } from 'react-bootstrap';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BalanceTransferCalculator() {
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
    { id: 5, title: 'Loan Against Property', icon: '🏡🔑', color: '#4a90e2' },
    { id: 6, title: 'Working Capital Loan', icon: '🔄', color: '#9013fe' },
    { id: 4, title: 'Business Loan', icon: '🏢', color: '#f5a623' },
    { id: 2, title: 'Personal Loan', icon: '👤', color: '#7ed321' },
  ];

  const processSteps = [
    { title: 'Balance Analysis', description: 'Review current debt structure' },
    { title: 'Offer Matching', description: 'Find best transfer options' },
    { title: 'Risk Assessment', description: 'Creditworthiness evaluation' },
    { title: 'Transfer Execution', description: 'Secure debt migration' }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="loan-hero bg-gradient-primary text-white py-5 py-md-6">
        <Container className="py-md-6 text-center">
          <h1 className="display-4 fw-bold mb-3 mb-md-4 animate-slide-up">
            Smarter Management <span className="text-warning">Made Simple</span>
          </h1>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="lead mb-3 mb-md-4 text-light-1">
                Reduce Interest Cost And Consolidate Our Balance Transfer solutions
              </p>
              <Link href="/loan-apply" passHref>
                {/* You might want to add a button here */}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Loan Calculator Section */}
      <section className="py-5 py-md-6 bg-light-2">
  <Container>
    <Row className="g-4 justify-content-center">
      <Col md={8} lg={6}>
        <Card className="h-100 p-3 p-md-4 shadow-lg border-0 bg-white"> {/* Changed bg-dark-1 to bg-white */}
          <h2 className="mb-3 mb-md-4 text-gradient-warning text-dark">Loan Calculator</h2> {/* Adjusted text color for visibility */}

          {/* Loan Amount Slider */}
          <div className="mb-4 mb-md-5">
            <label className="d-flex justify-content-between mb-2 mb-md-3 fw-bold text-dark-1 text-dark"> {/* Adjusted text color */}
              <span className="text-dark">Loan Amount</span> {/* Adjusted text color */}
              <span className="text-dark">₹{loanAmount.toLocaleString('en-IN')}</span> {/* Adjusted text color */}
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
          <div className="mb-4 mb-md-5">
            <label className="d-flex justify-content-between mb-2 mb-md-3 fw-bold text-dark-1 text-dark"> {/* Adjusted text color */}
              <span className="text-dark">Interest Rate</span> {/* Adjusted text color */}
              <span className="text-dark">{interestRate.toFixed(2)}%</span> {/* Adjusted text color */}
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
          <div className="mb-3 mb-md-4">
            <label className="d-flex justify-content-between mb-2 mb-md-3 fw-bold text-dark-1 text-dark"> {/* Adjusted text color */}
              <span className="text-dark">Repayment Tenure</span> {/* Adjusted text color */}
              <span className="text-dark">
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
      <Col md={8} lg={6}>
        <Card className="h-100 p-3 p-md-4 bg-white shadow-lg border-0"> {/* Changed bg-dark-1 to bg-white */}
          <h3 className="mb-3 mb-md-4 text-gradient-warning text-dark">Payment Summary</h3> {/* Adjusted text color */}
          <ListGroup variant="flush" className="mb-3 mb-md-4">
            <ListGroup.Item className="bg-white text-dark d-flex justify-content-between py-2 py-md-3"> {/* Changed background and text color */}
              <span>Principal Amount</span>
              <span>₹{loanAmount.toLocaleString('en-IN')}</span>
            </ListGroup.Item>
            <ListGroup.Item className="bg-white text-dark d-flex justify-content-between py-2 py-md-3"> {/* Changed background and text color */}
              <span>Total Interest</span>
              <span>₹{Math.round(totalInterest).toLocaleString('en-IN')}</span>
            </ListGroup.Item>
            <ListGroup.Item className="bg-white text-dark d-flex justify-content-between py-2 py-md-3 border-bottom-0"> {/* Changed background and text color */}
              <span>Total Payable</span>
              <span>₹{Math.round(totalPayment).toLocaleString('en-IN')}</span>
            </ListGroup.Item>
          </ListGroup>
          <div className="text-center mt-3 mt-md-4 pt-2 pt-md-3 border-top border-light-1">
            <h2 className="display-5 fw-bold my-2 my-md-3 text-warning">
              ₹{emi.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
            </h2>
            <small className="d-block text-dark">Monthly EMI</small> {/* Adjusted text color */}
          </div>
        </Card>
      </Col>
    </Row>
  </Container>
</section>
    
       {/* Loan Services */}
       <section className="py-5 bg-white">
        <Container>
          <Row className="mb-4 text-center">
            <Col>
              <h2
                className="display-6 fw-bold mb-3 text-dark-1"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Our Loan Services
              </h2>
              <p
                className="text-muted lead"
                style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.3rem)" }}
              >
                Financial solutions for every need
              </p>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
            {loanServices.map((service) => (
              <Col key={service.id}>
                <Card
                  className="h-100 border-0 shadow-sm text-center p-3 service-card"
                  style={{ borderBottom: `4px solid ${service.color}` }}
                >
                  <div className="display-4 mb-2 emoji-scale">{service.icon}</div>
                  <Card.Body className="p-2">
                    <Card.Title
                      className="fw-bold mb-1 text-dark-1 "
                      style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
                    >
                      {service.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      {/* Process Section */}
      <section className="py-5 py-md-6 bg-light-2">
        <Container>
          <Row className="mb-4 text-center">
            <Col>
              <h2 className="display-5 fw-bold mb-3 text-dark-1">Transfer Process</h2>
              <p className="text-muted lead">Streamlined 4-step transfer workflow</p>
            </Col>
          </Row>
          <Row className="g-4 process-steps justify-content-center"> {/* Center the steps on smaller screens */}
            {processSteps.map((step, index) => (
              <Col key={index} xs={12} md={6} lg={3}> {/* Make columns full width on small screens */}
                <div className="position-relative">
                  {index !== 0 && (
                    <div className="process-connector d-none d-lg-block"></div>
                  )}
                  <Card className="h-100 border-0 shadow-sm text-center p-3 p-md-4 hover-scale">
                    <Badge pill bg="warning" className="fs-5 mb-3 mx-auto number-badge">
                      {index + 1}
                    </Badge>
                    <Card.Body className="p-2">
                      <Card.Title className="fw-bold mb-2 text-dark-1">{step.title}</Card.Title>
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
          width: 20px;
          height: 20px;
          background: #4e4376;
          border: 2px solid white;
          box-shadow: 0 1px 4px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }

        .custom-slider::-webkit-slider-thumb:hover {
          transform: scale(1.05);
        }

        .service-card {
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        }

        .hover-scale {
          transition: transform 0.3s ease;
        }

        .hover-scale:hover {
          transform: scale(1.02);
        }

        .emoji-scale {
          transition: transform 0.3s ease;
        }

        .service-card:hover .emoji-scale {
          transform: scale(1.1);
        }

        .process-steps .process-connector {
          position: absolute;
          top: 40%;
          left: 0;
          width: 50%; /* Adjust connector width for better mobile view */
          height: 3px;
          background: #4e4376;
          z-index: 0;
        }

        /* Adjust connector position for different breakpoints */
        @media (min-width: 992px) {
          .process-steps .process-connector {
            left: -50%;
            width: 100%;
          }
        }

        .number-badge {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
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




















































