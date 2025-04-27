"use client";
import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
const HomeLoanSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    otp: "",
    pan: "",
    pincode: "",
    agree: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    otp: "",
    pan: "",
    pincode: "",
    agree: "",
  });

  // Validation patterns
  const patterns = {
    name: /^[a-zA-Z ]{3,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    mobile: /^[0-9]{10}$/,
    otp: /^[0-9]{6}$/,
    pan: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
    pincode: /^[0-9]{6}$/,
  };

  const validateField = (name: string, value: string | boolean) => {
    let error = "";

    if (typeof value === "string" && !value.trim()) {
      error = "This field is required";
    } else {
      switch (name) {
        case "name":
          if (!patterns.name.test(String(value)))
            error = "Minimum 3 characters required";
          break;
        case "email":
          if (!patterns.email.test(String(value)))
            error = "Invalid email format";
          break;
        case "mobile":
          if (!patterns.mobile.test(String(value)))
            error = "Invalid mobile number";
          break;
        case "otp":
          if (!patterns.otp.test(String(value))) error = "6-digit OTP required";
          break;
        case "pan":
          if (!patterns.pan.test(String(value)))
            error = "Invalid PAN format (e.g. ABCDE1234F)";
          break;
        case "pincode":
          if (!patterns.pincode.test(String(value)))
            error = "6-digit pincode required";
          break;
        case "agree":
          if (!value) error = "You must agree to terms";
          break;
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error === "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "pan" ? value.toUpperCase() : val,
    }));

    if (errors[name as keyof typeof errors]) validateField(name, val);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;

    Object.entries(formData).forEach(([name, value]) => {
      isValid = validateField(name, value) && isValid;
    });

    if (isValid) {
      console.log("Form submitted:", formData);
      toast.success("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        otp: "",
        pan: "",
        pincode: "",
        agree: false,
      });
    }
  };

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What documents are required for a home loan?",
      answer:
        "The required property documents for a home loan can vary depending on the purpose of the loan. For instance, the documentation needed to purchase a new house might differ from what’s required for constructing a home. For a detailed list of documents required for a home loan, it’s best to consult with your lender.",
    },
    {
      question: "Which bank offers the best home loan?",
      answer:
        "The best home loan depends on various factors like interest rates, processing fees, and customer service. Compare multiple banks and financial institutions to find the most suitable option.",
    },
    {
      question: "Can I get a home loan for the full property value?",
      answer:
        "Most lenders finance up to 80-90% of the property value. You may need to arrange the remaining amount as a down payment.",
    },
    {
      question: "What is the maximum home loan I can get?",
      answer:
        "The maximum loan amount depends on factors like your income, credit score, repayment capacity, and the lender's policies.",
    },
  ];

  return (
    <>
      <Navbar />
      <>
        {/* Your main JSX */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </>
      <Container fluid className="py-6 mt-15 mx-5 bg-white">
        <Row
          className="align-items-center justify-content-center"
          style={{ minHeight: "20vh" }}
        >
          {/* Left Side - Text */}
          <Col md={6} className="text-center text-md-start px-4 mt-2">
            <h1
              className="fw-sm mb-4"
              style={{
                color: "#3c4f84",
                fontSize: "3.2rem",
                fontWeight: "800",
                lineHeight: "1.2",
              }}
            >
              Own Tomorrow’s Home,
              <br /> Funded Today by{" "}
              <span style={{ color: "#38ad64" }}>Prefinn</span>
            </h1>

            {/* <h3 className="fw-bold mb-2" style={{ fontSize: '1.8rem', color: '#843c46' }}>
        Efficient, Scalable, Certified.
      </h3> */}

            <p className="text-muted mb-4" style={{ fontSize: "1.2rem" }}>
              Get the best loan deals, personalized for you — fast, secure, and
              fully digital.
            </p>
          </Col>

          {/* Right Side - Image */}
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <img
              src="https://img.freepik.com/premium-photo/3d-illustration-house-rupee-symbol-white-background_519469-1496.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
              alt="House Illustration"
              style={{
                maxHeight: "400px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="py-0 mt-0 px-0"
        style={{ marginTop: "-10px" }}
      >
        <Card
          className="p-3 p-md-5 shadow-sm"
          style={{
            backgroundColor: "#f2f5ff",
            borderRadius: "26px",
            width: "100%",
            margin: "0",
          }}
        >
          {/* Main Heading */}
          <Row className="text-center mb-4">
            <Col>
              <div className="d-flex flex-column align-items-center">
                <h1
                  style={{
                    fontWeight: "700",
                    color: "#042E4C",
                    fontSize: "2rem",
                    lineHeight: "1.2",
                    marginBottom: "1rem",
                  }}
                >
                  Prefinn Smart financing
                </h1>
                <span
                  style={{
                    fontSize: "1.1rem",
                    color: "#27543a",
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                  }}
                ></span>
              </div>
            </Col>
          </Row>

          {/* Statistics Grid */}
          <Row className="g-4 justify-content-center mb-4">
            {[
              {
                label: "As high as",
                value: "90%",
                subtext: "of Property Value",
              },
              { label: "As low as", value: "8.35%", subtext: "Interest Rates" },
              { label: "India's top", value: "130+", subtext: "Financiers" },
            ].map((stat, index) => (
              <Col xs={12} md={4} key={index} className="text-center">
                <div className="d-flex flex-column gap-1">
                  <p
                    className="mb-0 text-secondary"
                    style={{ fontSize: "0.9rem", fontWeight: "500" }}
                  >
                    {stat.label}
                  </p>
                  <h2
                    className="mb-0"
                    style={{
                      color: "#042E4C",
                      fontWeight: "700",
                      fontSize: "2.25rem",
                    }}
                  >
                    {stat.value}
                  </h2>
                  <p
                    className="mb-0 text-secondary"
                    style={{ fontSize: "0.9rem", lineHeight: "1.2" }}
                  >
                    {stat.subtext}
                  </p>
                </div>
              </Col>
            ))}
          </Row>

          {/* Explanatory Text */}
          <Row>
            <Col md={10} className="mx-auto text-center">
              <p
                className="text-green"
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  fontWeight: "400",
                  marginBottom: "1rem",
                }}
              >
                Prefinn ensures you find the right home loan by analyzing offers
                from multiple lenders based on your financial profile and needs.
              </p>
              <p
                className="text-green"
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  fontWeight: "400",
                  marginBottom: "0",
                }}
              >
                Loan amount sanctioned by banks and HFCs varies between 75% to
                90% of the property price, depending on the applicant's
                financial stability and credit score.
              </p>
            </Col>
          </Row>
        </Card>
      </Container>

      <Container fluid className="py-5 text-center mt-0">
        {" "}
        {/* Use fluid to make it full-width */}
        <h2 style={{ fontWeight: "bold", color: "#0d3b66" }}>
          PreFinn’s Fast & Secure Home Loan Process
        </h2>
        <Row className="mt-4 no-gutters">
          {" "}
          {/* Use no-gutters to remove padding between columns */}
          <Col xs={12} md={4}>
            <Card
              className="p-3 shadow-sm"
              style={{
                borderRadius: "12px",
                minHeight: "170px",
                width: "100%",
                margin: "0",
                backgroundColor: "#ffffff",
              }}
            >
              <h5 style={{ color: "dark", fontWeight: "bold" }}>
                Discover Your Loan Potential Check Eligibility Now!
              </h5>
              <p style={{ fontSize: "14px", color: "#0d3b66" }}>
                Unlock Top Offers – Compare & Save!
              </p>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card
              className="p-3 shadow-sm"
              style={{
                borderRadius: "12px",
                minHeight: "170px",
                width: "100%",
                margin: "0",
                backgroundColor: "#ffffff",
              }}
            >
              <h5 style={{ color: "dark", fontWeight: "bold" }}>
                Get Best Offers - Compare & Conquer!
              </h5>
              <p style={{ fontSize: "14px", color: "#0d3b66" }}>
                Prefinn makes it easy to find the best loan offers from top
                lenders.
              </p>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card
              className="p-3 shadow-sm"
              style={{
                borderRadius: "12px",
                minHeight: "170px",
                width: "100%",
                margin: "0",
                backgroundColor: "#ffffff",
              }}
            >
              <h5 style={{ color: "dark", fontWeight: "bold" }}>
                Hassle Free, Disbursal Unlock Your Dream Home Now!
              </h5>
              <p style={{ fontSize: "14px", color: "#0d3b66" }}>
                Disbursal made easy, dreams made real
              </p>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="py-5 mt-0"
        style={{ backgroundColor: "#ffffff", borderRadius: "0" }}
      >
        {" "}
        {/* Use fluid to make it full-width */}
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold" style={{ color: "#0d3b66 " }}>
              The Prefinn Privileges
            </h2>
            <p className="text-blue-900">
              Your Future Home Starts with Prefinn!
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center no-gutters">
          {" "}
          {/* Use no-gutters to remove padding between columns */}
          {[
            {
              title: "No More Delays, Get Your Loans Quick",
              text: "Our hassle-free home loan process makes getting approved a breeze.",
            },
            {
              title: "Expert & Dedicated Help At Every Step",
              text: "Your trusted team, from start to dream with your dedicated loan advisor.",
            },
            {
              title: "Low Interest Rates, Big Savings",
              text: "Get personalized home loan matches from top lenders to fit your needs.",
            },
            {
              title: "Honest Loans, No Surprises",
              text: "What you see is what you get. No hidden charges.",
            },
          ].map((item, index) => (
            <Col xs={12} sm={6} md={3} className="mb-0" key={index}>
              {" "}
              {/* Set mb-0 to remove bottom margin */}
              <Card
                className="p-3 border-0 shadow-sm text-center"
                style={{
                  transition: "background-color 0.3s ease-in-out",
                  cursor: "pointer",
                  minHeight: "200px",
                  borderRadius: "25px",
                  width: "100%",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f0f8ff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f0f8ff")
                }
              >
                <Card.Body>
                  <h5>{item.title}</h5>
                  <p style={{ color: "#fffff" }}>{item.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="text-center mt-4">
          <Col></Col>
        </Row>
      </Container>

      <Container
        fluid
        className="py-5 mt-0"
        style={{ backgroundColor: "#", borderRadius: "0" }}
      >
        <div className="text-center mb-14">
          <h2 className="text-blue-900 text-2xl md:text-3xl font-bold mb-4">
            At Prefinn your success is our success.
          </h2>

          <h3 className="text-blue-900 text-xl font-medium mt-1">
            Happiness Delivered, Always
          </h3>
          <div className="mt-6">
            <Link
              href="/AboutHomeLoans"
              className=" text-3xl inline-block bg-blue-900 text-white py-2 px-6 rounded-md font-medium no-underline hover:!bg-[#16a34a] transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </Container>
      <Container fluid className="py-2 mt-0">
        {" "}
        {/* Full-width container */}
        <h1 className="text-center mb-2 mt-0 fw-bold">
          {" "}
          <span
            style={{
              background: "linear-gradient(135deg, #28a745 0%, #0d53b7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
          >
            {" "}
            FAQ{" "}
          </span>{" "}
        </h1>

        {faqs.map((faq, index) => (
          <Card
            key={index}
            className="mb-3 border-0 shadow-sm"
            style={{
              transition: "all 0.3s ease-in-out",
              borderRadius: "10px",
              overflow: "hidden", // Ensures rounded corners are respected
            }}
          >
            <Card.Header
              className={`d-flex justify-content-between align-items-center p-3 ${
                openIndex === index ? "bg-light" : "bg-light"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => toggleCard(index)}
            >
              <h6 className="mb-0 fw-bold">
                {index + 1}. {faq.question}
              </h6>
              <Button variant="light" className="rounded-circle shadow-sm">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </Button>
            </Card.Header>
            {openIndex === index && (
              <Card.Body className="px-3">
                <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                  {faq.answer}
                </p>
              </Card.Body>
            )}
          </Card>
        ))}
      </Container>

      <Footer />
    </>
  );
};

export default HomeLoanSection;
