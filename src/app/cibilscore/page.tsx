'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function KnowCibilScore() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pan: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your API call here
    console.log('Form Data Submitted:', formData); // For demonstration
  };

  return (
    <>
      <Navbar />
      {/* <div className="py-5 min-vh-100 d-flex align-items-center" style={{ backgroundColor: '#f5f8fd' }}>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                <h2 className="text-center text-primary fw-bold mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
                  Know Your CIBIL Score
                </h2>
                <p className="text-center text-muted mb-4" style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}>
                  Check your creditworthiness in a few easy steps. No impact on your credit score.
                </p>

                {submitted && (
                  <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                    Request submitted! We'll get back to you shortly.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col xs={12}>
                      <Form.Group controlId="name">
                        <Form.Label style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12} md={6}>
                      <Form.Group controlId="email">
                        <Form.Label style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12} md={6}>
                      <Form.Group controlId="phone">
                        <Form.Label style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          placeholder="Enter your phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group controlId="pan">
                        <Form.Label style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>PAN Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="pan"
                          placeholder="Enter your PAN"
                          value={formData.pan}
                          onChange={handleChange}
                          required
                          style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12} className="d-grid mt-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-100"
                        style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)' }}
                      >
                        Get CIBIL Score
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
      {/* Consider making this a separate ComingSoon component */}
      <div className="container-fluid py-5 bg-light text-center">
      <div className="d-flex justify-content-center">
  <img
    src="https://media.istockphoto.com/id/2165081882/vector/coming-soon-announcement-tag-business-brand-opening-invitation-banner-poster-template-modern.jpg?s=612x612&w=0&k=20&c=IXWJZmdqF-4b5UZdGuhE7Talg5e8CYO7shsGITGMtqc="
    alt="Coming Soon"
    className="img-fluid"
    style={{ maxHeight: '400px', border: '10px solid #000' }} // You can change the size and color
  />
</div>

<p className="lead text-muted mb-4 mt-5" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>
          We will be adding more features to our site very soon!
        </p>
      </div>
      <Footer />
    </>
  );
}