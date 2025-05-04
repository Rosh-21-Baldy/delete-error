"use client"
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from '@/components/ui/card'; // Assuming you have Shadcn Card component
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';


const LoanSections = () => {
  return (
    <>
      <Navbar /> {/* Using Navbar component */}
      <Container>
        <Row className="mb-4">
          <Col md={6}>
            <Card className="p-4">
              <h3>Discover Your Loan Potential Check Eligibility Now!</h3>
              <p className="text-muted">Unlock Top Offers - Compare & Save!</p>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="p-4">
              <h3>Get Best Offers - Compare & Conquer!</h3>
              <p className="text-muted">Prefin makes it easy to find the best loan offers from top lenders.</p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card className="p-4">
              <h3>Hassle Free, Disbursal Unlock Your Dream Home Now!</h3>
              <p className="text-muted">Disbursal made easy, dreams made real</p>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer/> {/* Using Footer component */}
    </>
  );
};

export default LoanSections;