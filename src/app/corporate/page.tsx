// 'use client';
// import { useState } from 'react';
// import { Container, Row, Col, Card, Button, ListGroup, Badge } from 'react-bootstrap';
// import Navbar from '@/components/navbar';
// import Footer from '@/components/footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function LoanApp() {
//   const [loanAmount, setLoanAmount] = useState(500000);
//   const [tenure, setTenure] = useState(24);
//   const [interestRate, setInterestRate] = useState(11.25);

//   const calculateEMI = (P: number, r: number, n: number): number => {
//     const monthlyRate = r / (12 * 100);
//     return (P * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
//   };

//   const emi = calculateEMI(loanAmount, interestRate, tenure);
//   const totalPayment = emi * tenure;
//   const totalInterest = totalPayment - loanAmount;

//   const loanTypes = [
//     { id: 1, title: 'Personal Loan', description: 'Fulfill your personal dreams and needs' },
//     { id: 2, title: 'Business Loan', description: 'Grow your business with flexible funding' },
//     { id: 3, title: 'Education Loan', description: 'Invest in your future education' },
//     { id: 4, title: 'Home Loan', description: 'Secure your dream home today' }
//   ];

//   const processSteps = [
//     { title: 'Application', description: 'Submit your basic details online' },
//     { title: 'Verification', description: 'Document review and validation' },
//     { title: 'Approval', description: 'Quick decision and terms confirmation' },
//     { title: 'Disbursement', description: 'Funds transferred to your account' }
//   ];

//   return (
//     <>
//       <Navbar />

      {/* Hero Section */}
      {/* <section className="bg-primary text-white py-5">
        <Container className="py-5 text-center">
          <h1 className="display-4 fw-bold mb-4">Smart Loans For Bright Futures</h1>
          <p className="lead mb-4">Achieve your dreams with our flexible financial solutions</p>
          <Button variant="light" size="lg" className="rounded-pill px-5">
            Get Started
          </Button>
        </Container>
      </section> */}

      {/* Loan Calculator */}
      {/* <section className="py-5 bg-light">
        <Container>
          <Row className="g-4 justify-content-center">
            <Col lg={8} className="text-center mb-5">
              <h2 className="fw-bold mb-3">Loan Calculator</h2>
              <p className="text-muted">Adjust the values to estimate your payments</p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={6}>
              <Card className="h-100 p-4 shadow-sm"> */}
                {/* Loan Amount Input */}
                {/* <div className="mb-4">
                  <label className="d-block mb-3 fw-bold">
                    Loan Amount: ₹{loanAmount.toLocaleString('en-IN')}
                    <input
                      type="range"
                      className="form-range mt-2"
                      min="30000"
                      max="500000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                    />
                  </label>
                  <div className="d-flex justify-content-between text-muted">
                    <small>₹30K</small>
                    <small>₹5L</small>
                  </div>
                </div> */}

                {/* Interest Rate Input */}
                {/* <div className="mb-4">
                  <label className="d-block mb-3 fw-bold">
                    Interest Rate: {interestRate.toFixed(2)}%
                    <input
                      type="range"
                      className="form-range mt-2"
                      min="10"
                      max="24"
                      step="0.25"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                    />
                  </label>
                  <div className="d-flex justify-content-between text-muted">
                    <small>10%</small>
                    <small>24%</small>
                  </div>
                </div> */}

                {/* Tenure Input */}
                {/* <div className="mb-4">
                  <label className="d-block mb-3 fw-bold">
                    Tenure: {Math.floor(tenure / 12)} Years {tenure % 12} Months
                    <input
                      type="range"
                      className="form-range mt-2"
                      min="12"
                      max="60"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                    />
                  </label>
                  <div className="d-flex justify-content-between text-muted">
                    <small>1 Year</small>
                    <small>5 Years</small>
                  </div>
                </div>
              </Card>
            </Col> */}

            {/* Results Card */}
            {/* <Col lg={6}>
              <Card className="h-100 p-4 bg-dark text-white shadow-sm">
                <h3 className="mb-4">Payment Summary</h3>
                <ListGroup variant="flush" className="mb-4">
                  <ListGroup.Item className="bg-dark text-white d-flex justify-content-between">
                    <span>Principal Amount</span>
                    <span>₹{loanAmount.toLocaleString('en-IN')}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-dark text-white d-flex justify-content-between">
                    <span>Total Interest</span>
                    <span>₹{Math.round(totalInterest).toLocaleString('en-IN')}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-dark text-white d-flex justify-content-between">
                    <span>Total Payable</span>
                    <span>₹{Math.round(totalPayment).toLocaleString('en-IN')}</span>
                  </ListGroup.Item>
                </ListGroup>
                <div className="text-center py-3 border-top">
                  <h4 className="mb-2">Monthly EMI</h4>
                  <h2 className="fw-bold">₹{emi.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</h2>
                </div>
                <Button variant="light" size="lg" className="w-100 mt-4">
                  Apply Now
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* Loan Services */}
      {/* <section className="py-5">
        <Container>
          <Row className="mb-5 text-center">
            <Col>
              <h2 className="fw-bold mb-3">Our Loan Services</h2>
              <p className="text-muted">Choose from our variety of financial solutions</p>
            </Col>
          </Row>
          <Row className="g-4">
            {loanTypes.map((loan) => (
              <Col key={loan.id} md={6} lg={3}>
                <Card className="h-100 shadow-sm border-0 text-center p-4">
                  <div className="mb-3">
                    <Badge bg="primary" className="fs-5 p-3 rounded-circle">0{loan.id}</Badge>
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold mb-3">{loan.title}</Card.Title>
                    <Card.Text className="text-muted">{loan.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}

      {/* Process Section */}
      {/* <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5 text-center">
            <Col>
              <h2 className="fw-bold mb-3">How It Works</h2>
              <p className="text-muted">Simple steps to get your loan approved</p>
            </Col>
          </Row>
          <Row className="g-4">
            {processSteps.map((step, index) => (
              <Col key={index} md={6} lg={3}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="text-center">
                    <div className="mb-3">
                      <Badge bg="success" className="fs-5 p-3">{index + 1}</Badge>
                    </div>
                    <Card.Title className="fw-bold mb-3">{step.title}</Card.Title>
                    <Card.Text className="text-muted">{step.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}
      {/* <h1>Abhi page ka content add krna hai isme according to sir and changes bhi </h1>

      <Footer />
    </>
  );
} */}