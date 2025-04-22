// 'use client';
// import { useState } from 'react';
// import { Container, Row, Col, Form } from 'react-bootstrap';
// import Footer from '@/components/footer';
// import Navbar from '@/components/navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function EMICalculator() {
//   const [loanAmount, setLoanAmount] = useState(200000);
//   const [interestRate, setInterestRate] = useState(10.5);
//   const [tenure, setTenure] = useState(36);

//   const calculateEMI = () => {
//     const monthlyRate = interestRate / 12 / 100;
//     return (
//       (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
//       (Math.pow(1 + monthlyRate, tenure) - 1)
//     );
//   };

//   const emi = Number.isFinite(calculateEMI()) ? Number(calculateEMI().toFixed(0)) : 0;
//   const totalAmountPaid = emi * tenure;
//   const totalInterest = totalAmountPaid - loanAmount;
//   const principalPercent = ((loanAmount / totalAmountPaid) * 100).toFixed(0);
//   const interestPercent = (100 - Number(principalPercent)).toFixed(0);

//   return (
//     <>
//       <Navbar />
//       <Container fluid className="py-5" style={{ background: '#f9f9f9' }}>
//         <Container>
//         <h2 className="fw-bold text-dark mb-3 d-flex align-items-center gap-3">
//             <span style={{ color: '#2d1b56' }}>Loan Calculator</span>
           
//           </h2>
         
//           <p className="text-secondary" style={{ maxWidth: '600px' }}>
//             Use this calculator to check how much EMI you will pay monthly along with total interest.
//           </p>

//           <Row className="mt-5">
//             {/* Left Column - Form */}
//             <Col md={6} lg={4} className="bg-white p-4 rounded shadow-sm ">
//               <Form.Group className="mb-4">
//                 <Form.Label><strong>Loan Amount</strong></Form.Label>
//                 <div className="d-flex mb-2">
//                   <span className="input-group-text">₹</span>
//                   <Form.Control type="text" value={loanAmount.toLocaleString()} readOnly />
//                 </div>
//                 <Form.Range min={10000} max={5000000} step={1000} value={loanAmount} onChange={(e:any) => setLoanAmount(Number(e.target.value))} />
//               </Form.Group>

//               <Form.Group className="mb-4">
//                 <Form.Label><strong>Interest Rate (%)</strong></Form.Label>
//                 <div className="d-flex mb-2">
//                   <span className="input-group-text">%</span>
//                   <Form.Control type="text" value={interestRate} readOnly />
//                 </div>
//                 <Form.Range min={5} max={20} step={0.1} value={interestRate} onChange={(e:any) => setInterestRate(Number(e.target.value))} />
//               </Form.Group>

//               <Form.Group className="mb-4">
//                 <Form.Label><strong>Tenure (Months)</strong></Form.Label>
//                 <div className="d-flex mb-2">
//                   <span className="input-group-text">Months</span>
//                   <Form.Control type="text" value={tenure} readOnly />
//                 </div>
//                 <Form.Range min={6} max={240} step={1} value={tenure} onChange={(e) => setTenure(Number(e.target.value))} />
//               </Form.Group>
//             </Col>

//             {/* Middle Column - EMI Result */}
//             <Col md={6} lg={4} className="bg-white p-4 rounded shadow-sm mt-4 mt-md-0">
//               <h5 className="text-success fw-bold mb-3">Your EMI Details</h5>
//               <p className="mb-1">Monthly EMI</p>
//               <h4 className="fw-bold">₹{emi.toLocaleString()}</h4>
//               <hr />
//               <p className="mb-1">Total Interest Payable</p>
//               <h5>₹{totalInterest.toLocaleString()}</h5>
//               <hr />
//               <p className="mb-1">Total Payment (Principal + Interest)</p>
//               <h5>₹{totalAmountPaid.toLocaleString()}</h5>
//             </Col>

//             {/* Right Column - Circular Chart */}
//             <Col md={12} lg={4} className="bg-white p-4 rounded shadow-sm text-center mt-4 mt-lg-0">
//               <svg width="150" height="150" viewBox="0 0 36 36" className="mx-auto">
//                 <path d="M18 2.0845 a 15.9155 15.9155 0 1 1 0 31.831 a 15.9155 15.9155 0 1 1 0 -31.831" fill="none" stroke="#94c57d" strokeWidth="3.8" />
//                 <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#2d1b56" strokeWidth="3.8" strokeDasharray={`${principalPercent}, ${interestPercent}`} />
//                 {/* <text x="18" y="20.35" textAnchor="middle" fill="#2d1b56" fontSize="0.5rem">principal</text> */}
//                 <text x="18" y="23.35" textAnchor="middle" fill="#2d1b56" fontSize="0.35rem">₹{loanAmount.toLocaleString()}</text>
//               </svg>
//               <div className="mt-3 d-flex justify-content-center gap-3">
//                 <div className="d-flex align-items-center">
//                   <span className="me-1" style={{ background: '#2d1b56', width: '12px', height: '12px', display: 'inline-block' }}></span>
//                   <small>Principal</small>
//                 </div>
//                 <div className="d-flex align-items-center">
//                   <span className="me-1" style={{ background: '#94c57d', width: '12px', height: '12px', display: 'inline-block' }}></span>
//                   <small>Interest</small>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//       <Footer />
//     </>
//   );
// }




















'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const Navbar = dynamic(() => import('@/components/navbar'), { ssr: false });
const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

const COLORS = ['#007bff', '#dc3545'];

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureMonths, setTenureMonths] = useState(24);

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmountPaid, setTotalAmountPaid] = useState(0);

  const [formattedLoan, setFormattedLoan] = useState('');
  const [formattedEMI, setFormattedEMI] = useState('');
  const [formattedInterest, setFormattedInterest] = useState('');
  const [formattedTotal, setFormattedTotal] = useState('');

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const r = interestRate / 100 / 12;
    const emiCalc =
      (loanAmount * r * Math.pow(1 + r, tenureMonths)) /
      (Math.pow(1 + r, tenureMonths) - 1);
    const totalPayable = emiCalc * tenureMonths;
    const interestPayable = totalPayable - loanAmount;

    setEmi(emiCalc);
    setTotalInterest(interestPayable);
    setTotalAmountPaid(totalPayable);
  }, [loanAmount, interestRate, tenureMonths]);

  useEffect(() => {
    if (isClient) {
      setFormattedLoan(loanAmount.toLocaleString('en-IN'));
      setFormattedEMI(Math.round(emi).toLocaleString('en-IN'));
      setFormattedInterest(Math.round(totalInterest).toLocaleString('en-IN'));
      setFormattedTotal(Math.round(totalAmountPaid).toLocaleString('en-IN'));
    }
  }, [emi, totalInterest, totalAmountPaid, loanAmount, isClient]);

  const data = [
    { name: 'Principal', value: loanAmount },
    { name: 'Interest', value: totalInterest },
  ];

  if (!isClient) return null;

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 py-3 bg-light">
        <Container className="px-2 px-md-3">
          <h2 className="text-center mb-3 pt-2">Loan Calculator</h2>
          <p className="text-center text-muted mb-3 mx-auto" style={{ maxWidth: '600px' }}>
            Use this calculator to check how much EMI you will pay monthly along with total interest.
          </p>
          <Row className="g-3">
            <Col md={6}>
              <Card className="p-2 shadow-sm rounded-3 border-0 h-100">
                <Form className="p-2">
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-semibold">Loan Amount (₹)</Form.Label>
                    <Form.Control
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="py-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-semibold">Interest Rate (%)</Form.Label>
                    <Form.Control
                      type="number"
                      step="0.01"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="py-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-semibold">Tenure (Months)</Form.Label>
                    <Form.Control
                      type="number"
                      value={tenureMonths}
                      onChange={(e) => setTenureMonths(Number(e.target.value))}
                      className="py-2"
                    />
                  </Form.Group>

                  <Button variant="primary" size="sm" className="w-100 py-2" onClick={(e) => e.preventDefault()}>
                    Calculate EMI
                  </Button>
                </Form>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="p-2 shadow-sm rounded-3 border-0 h-100">
                <div className="p-2 d-flex flex-column h-100">
                  <h6 className="text-center mb-2">Your EMI Details</h6>
                  <hr className="my-2" />
                  <div className="mb-2">
                    <p className="d-flex justify-content-between small mb-2">
                      <span className="fw-semibold">Monthly EMI:</span>
                      <span>₹{formattedEMI}</span>
                    </p>
                    <p className="d-flex justify-content-between small mb-2">
                      <span className="fw-semibold">Total Interest:</span>
                      <span>₹{formattedInterest}</span>
                    </p>
                    <p className="d-flex justify-content-between small mb-3">
                      <span className="fw-semibold">Total Payment:</span>
                      <span>₹{formattedTotal}</span>
                    </p>
                  </div>

                  <div className="mt-auto" style={{ height: '180px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={data}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={60}
                          label
                        >
                          {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
