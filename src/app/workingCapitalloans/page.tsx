// "use client";
// import React from "react";
// const workingCapitalloans = () => {
//     return (
//       <div>
//         <h1>Home Loans</h1>
//         <p>Details about home loans...</p>
//         <h2>hlo</h2>
//       </div>
//     );
//   };
  
// export default workingCapitalloans;










"use client";
import { motion } from "framer-motion";
import React, { useState,useEffect } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";




export default function workingCapitalloans() {

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
      question: " Can a startup with no credit history get a working capital loan?",
      answer:
        "Yes, through fintech lenders or NBFCs offering collateral-free loans based on cash flow projections or invoice financing.",
    },
    {
      question: " How does a working capital loan impact my balance sheet?",
      answer:
        " It increases short-term liabilities but improves liquidity to fund operations and stabilize assets.",
    },
    {
      question: "  Are there alternatives to traditional working capital loans?",
      answer:
        "Yes, options like invoice discounting, merchant cash advances, or supply chain financing can bridge cash gaps.",
    },
    {
      question: "Can I prepay a working capital loan without penalties?",
      answer:
        " Depends on the lender; some fintech platforms allow prepayment, while banks may charge a fee.",

    },
    {
      question: "Is GST registration mandatory to apply for a working capital loan?",
      answer:" Not always, but lenders may prioritize GST-registered businesses for easier income verification."
       

    }
  ];
  const [loanAmount, setLoanAmount] = useState(30000);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(12);

  const [emi, setEmi] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure;

    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const total = emiValue * months;
    const interest = total - principal;

    setEmi(emiValue);
    setTotalPayment(total);
    setTotalInterest(interest);
  }, [loanAmount, interestRate, tenure]);


  const features = [
    {
      title: "Instant Approval",
      description: "Get working capital within 24-48 hours to meet urgent business needs like inventory or payroll.",
      image: "https://img.freepik.com/free-vector/product-quality-concept-illustration_114360-7301.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740", // Clock/approval icon
      bgColor: "#ffffff ",
    },
    {
      title: "Flexible Repayment",
      description: "Choose repayment terms (3-12 months) aligned with your cash flow cycles.",
      image: "https://img.freepik.com/free-vector/hand-drawn-payday-template_52683-150955.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740", // Calendar/terms icon
      bgColor: "#fffff ",
    },
    {
      title: "No Collateral Needed",
      description: "Unsecured loans up to ₹50 lakhs based on business turnover and creditworthiness.",
      image: "https://img.freepik.com/free-vector/nfc-connection-abstract-concept-vector-illustration-bank-connection-nfc-communication-contactless-card-payment-method-banking-technology-financial-transaction-paying-app-abstract-metaphor_335657-2509.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740", // No-collateral icon
      bgColor: "#fffff ",
    },
    {
      title: "Competitive Interest",
      description: "Attractive rates starting at 1.2% per month to keep costs manageable.",
      image: "https://img.freepik.com/free-vector/modern-indian-rupee-composition_23-2147995729.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740", // Interest rate icon
      bgColor: "#fffff ",
    },
  ];
  const cardStyle = {
    backgroundColor: "#0099A8",
    transition: "transform 0.3s ease, box-shadow 0.3s ease"
  };
  
  const hoverEffect = {
    scale: 1.03,
    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.15)"
  };
  
  return (
    <>
     
      <Navbar />
      <>
        {/* Your main JSX */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
        />
      </>
     
      

   <Container fluid className="py-0 mt-10 mx-5 bg-white">
             <Row className="align-items-center justify-content-center" style={{ minHeight: '20vh' }}>
               {/* Left Side - Text */}
               <Col md={6} className="text-center text-md-start px-4">
               <h1
                 className="fw-bold mb-4"
                 style={{
                   color: '#3c4f84',
                   fontSize: '3.2rem',
                   fontWeight: '800',
                   lineHeight: '1.2',
                 }}
               >
               Fuel Your Ambitions,<br /> Financed Today by<span style={{ color: '#38ad64' }}>Prefinn</span>
               </h1>
           
                 {/* <h3 className="fw-bold mb-2" style={{ fontSize: '1.8rem', color: '#843c46' }}>
                 Efficiently Processed, Scaled for Growth
                 </h3> */}
           
                 <p className="text-muted mb-4" style={{ fontSize: '1.2rem' }}>
                   Get the best loan deals, personalized for you — fast, secure, and fully digital.
                 </p>
               </Col>
           
               {/* Right Side - Image */}
               <Col md={6} className="d-flex align-items-center justify-content-center">
                 <img
                   src="https://img.freepik.com/premium-vector/rupee-bundle-with-rupee-bag-with-coins-economy-growth-vector-illustration_667085-62.jpg?uid=R193913366&ga=GA1.1.56492630.1742847583&w=740"
                   alt="House Illustration"
                   style={{
                     maxHeight: '450px',
                     width: 'auto',
                     objectFit: 'contain',
                   }}
                 />
               </Col>
             </Row>
           </Container>
        {/* Empowering Heading with Animation */}
<motion.h2 
  className="fw-bold  text-center mt-4"style={{color:'#0d3b66'}}
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Powering Business Growth with Reliable Working Capital Loans
</motion.h2>

<Container fluid className="p-4" style={{ backgroundColor: "#f8fafc" }}>
  <Row className="g-4">
    
    {/* Working Capital Support Card */}
    <Col md={4}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Card 
          className="h-100 shadow-sm border-0 rounded-4 card-hover" 
          style={{ backgroundColor: "#3262ad ", transition: "transform 0.3s, box-shadow 0.3s" }}
        >
          <Card.Body className="p-4 shadow-lg rounded-4 border-0" style={{  background: "#ffffff "}}>
            <h4 className="fw-bold  text-warning mb-3">Working Capital Support</h4>
            <h2 className="fw-semibold mb-4">Fuel Your Business Expansion Smoothly</h2>
            <ul className="list-unstyled">
              <li>✔ Quick Funding to Bridge Cash Flow Gaps</li>
              <li>✔ Flexible Repayment — Tailored to Your Needs</li>
              <li>✔ Minimal Documentation, Hassle-Free Disbursal</li>
            </ul>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>

    {/* Working Capital Made Easy Card */}
    <Col md={4}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Card 
          className="h-100 shadow-sm border-0 rounded-4 card-hover" 
          style={{ backgroundColor: "#3262ad ", transition: "transform 0.3s, box-shadow 0.3s" }}
        >
        <Card.Body className="p-4 shadow-lg rounded-4 border-0" style={{  background: "#ffffff "}}>
            <h4 className="fw-bold text-warning mb-3">Working Capital Made Easy</h4>
            <h2 className="fw-semibold mb-4">Fast Loans for Uninterrupted Operations</h2>
            <ul className="list-unstyled">
              <li>✔ Instant Online Application & Same-Day Approval</li>
              <li>✔ Dedicated Support from Loan Experts</li>
              <li>✔ Customized Financing Solutions for SMEs</li>
            </ul>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>

    {/* Prefinn Instant Capital Card */}
    <Col md={4}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Card 
          className="h-100 shadow-sm border-0 rounded-4 card-hover" 
          style={{ backgroundColor: "#3262ad ", transition: "transform 0.3s, box-shadow 0.3s" }}
        >
          <Card.Body className="p-4 shadow-lg rounded-4 border-0" style={{  background: "#ffffff "}}>
            <h4 className="fw-bold text-warning mb-3">Prefinn Capital Solutions</h4>
            <h2 className="fw-semibold mb-4">Instant Working Capital, Simplified</h2>
            <ul className="list-unstyled">
              <li>✔ Flexible Financing for Business Continuity</li>
              <li>✔ Crafted for Ambitious Entrepreneurs</li>
              <li>✔ Boost Growth Without Disrupting Cash Flow</li>
            </ul>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>

  </Row>
</Container>

<style jsx>{`
  .card-hover:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
  }
`}</style>


      
<div className="container-fluid bg-white py-5">
  <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
    
    {/* Left Text Block */}
    <div className="text-center text-lg-start me-lg-5">
      <h1 className="fw-bold text-dark mb-3">
        Fuel Your Business Growth, Every Step of the Way
      </h1>
      <p style={{ color: "#007C91", fontSize: "1.1rem" }}>
        Smart & Flexible Working Capital Loans by Prefinn
      </p>
    </div>

    {/* Right Image Block */}
    <div className="mt-4 mt-lg-0">
      <img
        src="https://img.freepik.com/premium-photo/man-suit-tie-shaking-hands-with-another-man_1217673-334141.jpg?ga=GA1.1.1559874935.1744648139&semt=ais_hybrid&w=740"
        alt="Business Loan Discussion"
        className="img-fluid rounded-4 shadow"
      />
    </div>
  </div>

  {/* Features Section */}
  <div className="container mt-5">
  <h2 className="text-center fw-bold mb-5 "style={{color:'#0d3b66'}} data-aos="fade-down">Why Choose Prefinn?</h2>
  <div className="row g-4 text-center text-lg-start">

    <div className="col-md-6 col-lg-3" data-aos="zoom-in-up">
      <div
        className="p-4 border rounded-4 shadow-sm h-100 bg-white"
        style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 12px 25px rgba(0, 124, 145, 0.15)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0, 0, 0, .075)';
        }}
      >
        <i className="bi bi-cash-stack fs-1 text-primary mb-3 d-block"></i>
        <p className="text-muted small mb-0">
         Prefinn offers flexible working capital loans with <strong>zero collateral</strong>, empowering self-employed individuals & businesses.
        </p>
      </div>
    </div>

    <div className="col-md-6 col-lg-3" data-aos="zoom-in-up" data-aos-delay="100">
      <div
        className="p-4 border rounded-4 shadow-sm h-100 bg-white"
        style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 12px 25px rgba(0, 124, 145, 0.15)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0, 0, 0, .075)';
        }}
      >
        <i className="bi bi-lightning-charge-fill fs-1 text-primary mb-3 d-block"></i>
        <p className="text-muted small mb-0">
         Speedy approvals with minimal paperwork. Get funding up to ₹50 Lakhs using just your bank statements.
        </p>
      </div>
    </div>

    <div className="col-md-6 col-lg-3" data-aos="zoom-in-up" data-aos-delay="200">
      <div
        className="p-4 border rounded-4 shadow-sm h-100 bg-white"
        style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 12px 25px rgba(0, 124, 145, 0.15)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0, 0, 0, .075)';
        }}
      >
        <i className="bi bi-graph-up-arrow fs-1 text-primary mb-3 d-block"></i>
        <p className="text-muted small mb-0">
           Unlock up to ₹50 Lakhs based on your GST filing history—<strong>No Collateral Needed</strong>.
        </p>
      </div>
    </div>

    <div className="col-md-6 col-lg-3" data-aos="zoom-in-up" data-aos-delay="300">
      <div
        className="p-4 border rounded-4 shadow-sm h-100 bg-white"
        style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 12px 25px rgba(0, 124, 145, 0.15)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0, 0, 0, .075)';
        }}
      >
        <i className="bi bi-check-circle-fill fs-1 text-primary mb-3 d-block"></i>
        <p className="text-muted small mb-0">
           Fast & seamless process. Minimal documentation, maximum convenience for securing working capital loans.
        </p>
      </div>
    </div>

  </div>
</div>


</div>
<Container
  fluid
  className="py-4 mt-0"
  style={{ background: "linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(222, 218, 218) 100%)" }} 
>
  <h2 className="fw-bold mb-6 mt-6 py-0 text-center"style={{color:'#0d3b66'}}>
    Features & Benefits of Working Capital Loan
  </h2>
  <div className="row g-3">
    {features.map((feature, index) => (
      <div
        className="col-12 col-md-6 col-lg-3 mb-6 mt-6 py-2 d-flex align-items-stretch"
        key={index}
      >
        <motion.div
          className="card p-4 shadow-sm border-0 w-80"
          style={{
            backgroundColor: feature.bgColor,
            borderRadius: "12px",
            height: "auto",
            width: "100%",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
          }}
        >
          <img
            src={feature.image}
            alt={feature.title}
            className="img-fluid mx-auto mb-1"
            style={{
              borderRadius: "50%",
              maxWidth: "80px",
              height: "auto",
            }}
          />
          <h5 className="fw-bold">{feature.title}</h5>
          <p className="text-muted">{feature.description}</p>
        </motion.div>
      </div>
    ))}
  </div>
</Container>

<Container
  fluid
  className="py-17 mt-4"
  style={{ backgroundColor: "#ffffff", borderRadius: "0" }}
>
        {" "}
        {/* Use fluid to make it full-width */}
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold" style={{ color: "#0d3b66 " }}>
              The Prefinn Promise
            </h2>
            <p className="text-muted">Boost Liquidity, Drive Growth Trusted Working Capital Financing</p>
          </Col>
        </Row>
        <Row className="justify-content-center no-gutters">
          {" "}
          {/* Use no-gutters to remove padding between columns */}
          {[
            {
              title: "No More Waiting, Get Your Personal Loan Fast",
              text: "Our quick and easy process gets you the funds when you need them most.",
            },
            {
              title: "Loan Experts Who Care",
              text: "Count on expert support and a dedicated advisor to simplify your personal loan journey.",
            },
            {
              title: "Customized Loans, Professional Service",
              text: "Get matched with reputable lenders offering low-interest personal loans tailored for you.",
            },
            {
              title: "Smart Financing Here",
              text: "Benefit from low rates, flexible tenures, and loan offers.personalized to your financial profile.",
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
                  (e.currentTarget.style.backgroundColor = "#ffffff ")
                }
              >
                <Card.Body>
                  <h5>{item.title}</h5>
                  <p style={{color:"#0d3b66"}}>{item.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="text-center mt-4">
          <Col></Col>
        </Row>
      </Container>
      <Container className="p-5" >
  <h2 className="text-success fw-bold">EMI Calculator</h2>
  <Row>
    <Col md={7}>
      <Form>
        <Form.Group className="mb-4">
          <Form.Label className="fw-bold">Select the required Loan Amount</Form.Label>
          <Form.Range
            min="200000"
            max="7500000"
            step="100000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="flex-grow-1 me-2"
          />
          <div className="d-flex justify-content-between text-muted px-1">
            <span>2L</span>
            <span>16L</span>
            <span>31L</span>
            <span>45L</span>
            <span>60L</span>
            <span>75L</span>
          </div>
        </Form.Group>

        <Form.Group className="mb-4">
  <Form.Label className="fw-bold">Interest Rate (p.a)</Form.Label>
  <div className="d-flex justify-content-between align-items-center">
    <Form.Range
      min="12"
      max="21"
      step="1"
      value={interestRate}
      onChange={(e) => setInterestRate(Number(e.target.value))}
      className="flex-grow-1 me-2"
    />
    <span className="fw-bold">{interestRate}%</span>
  </div>
  <div className="d-flex justify-content-between text-muted px-1 mt-1">
    <span>12%</span>
    <span>14%</span>
    <span>16%</span>
    <span>18%</span>
    <span>20%</span>
    <span>22%</span>
  </div>
</Form.Group>


            <Form.Group className="mb-4">
  <Form.Label className="fw-bold">Tenure (in months)</Form.Label>
  <div className="d-flex justify-content-between align-items-center">
    <Form.Range
      min="12"
      max="96"
      step="1"
      value={tenure}
      onChange={(e) => setTenure(Number(e.target.value))}
      className="flex-grow-1 me-2"
    />
    <span className="fw-bold">{tenure}</span>
  </div>
  <div className="d-flex justify-content-between text-muted px-1 mt-1">
    <span>12</span>
    <span>29</span>
    <span>46</span>
    <span>62</span>
    <span>79</span>
    <span>96</span>
  </div>
</Form.Group>
          </Form>
        </Col>

        <Col xs={12} md={5} className="p-0">  {/* Full width on small screens */}
  <Card className="p-4 shadow h-80" style={{ backgroundColor: "#3262ad", width: '100%' }}> {/* Ensure full width */}
    <h5 className="fw-bold text-white">Your EMI</h5>
    <div className="mt-3">
      <p><strong>Principal amount:</strong> <span className="text-dark fw-bold">₹ {loanAmount.toLocaleString()}</span></p>
      <p><strong>Interest amount:</strong> <span className="text-dark fw-bold">₹ {totalInterest.toFixed(0)}</span></p>
      <p><strong>Total amount payable:</strong> <span className="text-dark fw-bold">₹ {totalPayment.toFixed(0)}</span></p>
      <p><strong>Tenure (Months):</strong> <span className="fw-bold">{tenure}</span></p>
      <h4 className="text-white fw-bold">Monthly EMI: ₹ {emi.toFixed(0)}</h4>
    </div>
  </Card>
</Col>
      </Row>
    </Container>
    <Container className="my-1">
      
    <div className="text-center mb-14">
          <h2 className="text-blue-900 text-2xl md:text-3xl font-bold mb-4">
            At Prefinn your success is our success.
          </h2>
          <h3 className="text-blue-900 text-xl font-medium mt-1">
            Happiness Delivered, Always
          </h3>
          <div className="mt-6">
            <Link
              href="/AboutWorkingCapitalLoans"
             className=" text-3xl inline-block bg-blue-900 text-white py-2 px-6 rounded-md font-medium no-underline hover:!bg-[#16a34a] transition-colors">
              Apply Now
            </Link>
          </div>
        </div>
    </Container>
      <Container fluid className="py-1 mt-0">
        {" "}
        {/* Full-width container */}
        <h1 className="text-center mb-4 mt-0 fw-bold">
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
      FAQ
      </span>
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
              className={`d-flex justify-content-between align-items-center p-3 ${openIndex === index ? "bg-light" : "bg-light"
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















