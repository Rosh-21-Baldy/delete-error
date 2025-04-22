"use client";
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaFrown, FaSmile } from 'react-icons/fa'; // Import icons
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const problems = [
    { title: "Slow Turnaround Times", description: "The traditional loan application process is lengthy and bureaucratic, causing delays in loan approvals and project completion." },
    { title: "Poor Customer Experience", description: "The current system can be confusing and frustrating for customers, leading to drop-offs and missed sales opportunities." },
    { title: "Limited Conversion Rates", description: "Difficulties in assessing customer loan eligibility and lack of competitive interest rates can hinder sales." },
    { title: "Lack of Visibility", description: "Builders have limited visibility into the loan application journey, creating frustration and hindering sales momentum." },
    { title: "No Control over Process", description: "Builders lack control over the loan application experience, making it difficult to ensure customer satisfaction." }
  ];
  
  const solutions = [
    { title: "Streamlined Process", description: "Prefinn simplifies the loan application process, automating tasks and facilitating communication for faster approvals." },
    { title: "Dedicated Loan Manager", description: "One dedicated loan manager for each project. Customers avoid the hassle of multiple bank calls and spam." },
    { title: "On-the-Spot Eligibility Analysis", description: "Quickly analyse customer loan eligibility using factors like income and CIBIL score, improving conversion rates." },
    { title: "Real-Time Tracking", description: "Gain complete transparency with an intuitive dashboard that tracks each customer’s loan application progress." },
    { title: "Wider Lender Network", description: "Prefinn is committed to finding the best interest rates across 50+ lenders for your customers, leading to higher conversion rates." }
  ];

function LoanInfoSection() {
  return ( 
    <>
    <Navbar/>
     <Container fluid className="py-5">
    <Row className="align-items-center">
      {/* Left Content Section */}
      <Col md={6} className="text-start">
        <h1 className="fw-bold">
          <span style={{ color: "#5C6BC0" }}>Faster Approvals,</span> <br />
          <span style={{ color: "#432E9E" }}>Higher Sales: Prefinn for Builders</span>
        </h1>
        <p className="text-muted fs-5">
          The All-in-One Platform for Faster Turnaround Times, Happier Customers and Increased Sales
        </p>
        {/* <Button
          variant="warning"
          className="text-white fw-bold px-4 py-2 rounded"
          style={{ backgroundColor: "#F27029", border: "none" }}
        >
          Join Ambak Today →
        </Button> */}
      </Col>

      {/* Right Image Section */}
      <Col md={6} className="text-center">
        <img src="https://img.freepik.com/free-vector/builders-team-posing-photo-front-house_74855-13969.jpg?ga=GA1.1.1559874935.1744648139&semt=ais_hybrid&w=740" alt="Hero Section" className="img-fluid" style={{ maxHeight: "450px" }} />
      </Col>
    </Row>
  </Container>
    <Container className="py-4 my-4" style={{ backgroundColor: '#e7edfe', borderRadius: '10px' }}>
      <Row className="mb-3">
        {/* Transparent and Trustworthy Card */}
        <Col md={6}>
          <Card className="p-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title className="fw-bold">Transparent and Trustworthy</Card.Title>
              <Card.Text>
                By leveraging technology, Prefinn improves the home loan process and provides transparency between home loan providers, builders, and customers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Loan Approval Card */}
        <Col md={6}>
          <Card className="p-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title className="fw-bold">Frustrating customers with slow loan approvals?</Card.Title>
              <Card.Text>
                Prefinn streamlines the home loan process, connecting you with over 50 lenders for faster approvals and happier customers. Boost sales and gain real-time transparency.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Buttons Section */}
      {/* <div className="text-center">
        <Button variant="primary" className="me-3 px-4 py-2 fw-semibold">
          Try Ambak Today →
        </Button>
        <Button variant="outline-dark" className="px-4 py-2 fw-semibold">
          Get A Call Back
        </Button>
      </div> */}
    </Container>
     <Container className="my-5">
     <h2 className="text-center mb-4 fw-semibold">Your Problems, Prefinn’s Solutions</h2>
     <Row className="rounded-3 shadow" style={{ backgroundColor: '#f5f5f5' }}>
       {/* Problems Section */}
       <Col md={6} className="p-4 rounded-start" style={{ backgroundColor: '#f9f9f9' }}>
         {problems.map((problem, index) => (
           <Card key={index} className="border-0 mb-3" style={{ background: 'transparent' }}>
             <Card.Body className="d-flex align-items-start">
               <FaFrown size={24} className="text-warning me-3 mt-1" />
               <div>
                 <Card.Title className="fw-bold">{problem.title}</Card.Title>
                 <Card.Text>{problem.description}</Card.Text>
               </div>
             </Card.Body>
           </Card>
         ))}
       </Col>

       {/* Solutions Section */}
       <Col md={6} className="p-4 rounded-end" style={{ backgroundColor: '#e7edfe' }}>
         {solutions.map((solution, index) => (
           <Card key={index} className="border-0 mb-3" style={{ background: 'transparent' }}>
             <Card.Body className="d-flex align-items-start">
               <FaSmile size={24} className="text-warning me-3 mt-1" />
               <div>
                 <Card.Title className="fw-bold">{solution.title}</Card.Title>
                 <Card.Text>{solution.description}</Card.Text>
               </div>
             </Card.Body>
           </Card>
         ))}
       </Col>
     </Row>
   </Container>
   <Footer/>
   </>
  );
}

export default LoanInfoSection;
