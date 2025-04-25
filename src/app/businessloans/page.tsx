
"use client";
import React, { useState,useEffect } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function businessloans() {

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
      question: " What Can a Business Loan Be Used For?",
      answer:
        "A business loan offers financial flexibility to meet the diverse needs of your business. Whether you're a startup or an established enterprise, here are some of the most common and impactful ways you can use a business loan. ",
    },
    {
      question: "Who can apply for a business loan?",
      answer:
        "Self-employed individuals, business owners, partnerships, private limited companies, and MSMEs with a stable income and good credit history are eligible to apply.",
    },
    {
      question: "What is the interest rate for business loans?",
      answer:
        "Interest rates generally start from 10% to 24% per annum and vary based on credit score, business turnover, and lender terms",
    },
    {
      question: " What documents are required?",
      answer:
        "The loan can be repaid in the form of Equated Monthly Installment (EMI) via post-dated cheques   drawn in favour of the bank or by releasing a mandate allowing payment through the Electronic Clearing Services (ECS) system.",

    },
    
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
      title: "Flexible Loan Tenure",
      description: "Flexible and longer repayment options",
      image: "https://cdn-icons-png.flaticon.com/128/9196/9196974.png",
      bgColor: "#ffffff ",
    },
    {
      title: "Balance Transfer",
      description:
        "Transfer Existing Business Loan at lower EMIs with competitive rates",
      image: "https://cdn-icons-png.flaticon.com/128/3707/3707848.png",
      bgColor: "#ffffff ", 
    },
    {
      title: "Business Loan in Seconds",
      description:
        "Online and Instant loan disbursal for Banks existing current account holders",
      image: "https://cdn-icons-png.flaticon.com/128/9172/9172420.png",
      bgColor: "#ffffff ",
    },
    {
      title: "No Collateral & Guarantor",
      description: "The business loan is collateral-free and requires no guarantor",
      image: "https://cdn-icons-png.flaticon.com/128/17480/17480230.png",
      bgColor: "#ffffff",
    },
  ];
  const documents = [
    "PAN Card",
    "Aadhar Card",
    "Bank Statement",
    "Registration Proof",
  
  ];
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
      <div
        className="container-fluid p-0"
        style={{ fontFamily: "Arial, sans-serif", position: "relative" }}
      >
      
        {/* <div className="position-relative">
        
          <img
            src="https://img.freepik.com/premium-photo/hand-with-marker-writes-text-business-loan-notebook-desktop-view-from_284815-3488.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
            className="img-fluid w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            alt="personal Loan"
          />

          
          <div
            className="position-absolute "
            style={{
              top: "20px", 
              right: "20px",
              width: "100%",
              maxWidth: "550px",
              maxHeight: "calc(100vh - 100px)", 
              overflowY: "scroll",
              background: "#FDFEFE",
              borderRadius: "20px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="border-0" style={{ background: "transparent" }}>
              <h5 className="text-center text-danger mb-1">
                Apply for Business Loan
              </h5>

              <form onSubmit={handleSubmit}>
              
                <div className="mb-2">
                  <label className="form-label small ">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className={`form-control form-control-sm ${errors.name && "is-invalid"
                      }`}
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

               
                <div className="mb-2">
                  <label className="form-label small">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control form-control-sm ${errors.email && "is-invalid"
                      }`}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

           
                <div className="mb-2">
                  <label className="form-label small">
                    Mobile Number <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">+91</span>
                    <input
                      type="tel"
                      name="mobile"
                      className={`form-control form-control-sm ${errors.mobile && "is-invalid"
                        }`}
                      placeholder="Enter your mobile number"
                      value={formData.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={10}
                      required
                    />
                  </div>
                  {errors.mobile && (
                    <div className="invalid-feedback d-block">
                      {errors.mobile}
                    </div>
                  )}
                </div>

                <div className="mb-2">
                  <label className="form-label small">
                    OTP <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="otp"
                    className={`form-control form-control-sm ${errors.otp && "is-invalid"
                      }`}
                    placeholder="Enter OTP"
                    value={formData.otp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={6}
                    required
                  />
                  {errors.otp && (
                    <div className="invalid-feedback d-block">{errors.otp}</div>
                  )}
                </div>

               
                <div className="mb-2">
                  <label className="form-label small">
                    PAN Card Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="pan"
                    className={`form-control form-control-sm ${errors.pan && "is-invalid"
                      }`}
                    placeholder="Enter PAN card number"
                    value={formData.pan}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={10}
                    required
                  />
                  {errors.pan && (
                    <div className="invalid-feedback">{errors.pan}</div>
                  )}
                </div>
              
                <div className="mb-3">
                   <label className="mb-1" style={{ whiteSpace: "nowrap" }}>
                     Do you have business registration proof?
                   </label>
                   <select className="form-select">
                     <option>Select an option</option>
                     <option>Yes</option>
                     <option>No</option>
                   </select>
                 </div>

              

                <div className="mb-3">
                   <label>How old is your business?</label>
                   <select className="form-select">
                     <option>Select an option</option>
                     <option>Less than 1 year</option>
                     <option>1-3 years</option>
                     <option>More than 3 years</option>
                   </select>
                 </div>
           
            <div className="mb-3">
                   <label>Monthly Sales</label>
                   <select className="form-select">
                     <option>Select an option</option>
                     <option>Less than ₹50,000</option>
                     <option>₹50,000 - ₹2,00,000</option>
                     <option>More than ₹2,00,000</option>
                   </select>
                 </div>

                
                <div className="mb-2">
                  <label className="form-label small">
                    Enter Pincode <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    className={`form-control form-control-sm ${errors.pincode && "is-invalid"
                      }`}
                    placeholder="Enter pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={6}
                    required
                  />
                  {errors.pincode && (
                    <div className="invalid-feedback">{errors.pincode}</div>
                  )}
                </div>

                <div className="mb-2 form-check">
                  <input
                    type="checkbox"
                    name="agree"
                    className={`form-check-input ${errors.agree && "is-invalid"
                      }`}
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label">
                    I agree to the{" "}
                    <a
                      href="/term-cond"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-danger"
                    >
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy-pol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-danger"
                    >
                      Privacy Policy
                    </a>
                  </label>
                  {errors.agree && (
                    <div className="invalid-feedback d-block">
                      {errors.agree}
                    </div>
                  )}
                </div>

                
                <div className="text-center mt-auto">
                  <button
                    type="submit"
                    className="bg-danger text-white px-2 py-1 rounded border-0"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
      </div>
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
                  Tomorrow’s Venture,<br /> Financed Today by <span style={{ color: '#38ad64' }}>Prefinn</span>
               </h1>
         
               {/* <h3 className="fw-bold mb-2" style={{ fontSize: '1.8rem', color: '#843c46' }}>
               Efficient, Scalable & Certified Business Loans
               </h3> */}  
         
               <p className="text-muted mb-4" style={{ fontSize: '1.2rem' }}>
                 Get the best loan deals, personalized for you — fast, secure, and fully digital.
               </p>
             </Col>
         
             {/* Right Side - Image */}
             <Col md={6} className="d-flex align-items-center justify-content-center">
               <img
                 src="https://img.freepik.com/premium-vector/rupee-plant-growth-money-jar-investment-mutual-fund-concept-vector-illustration_667085-819.jpg?uid=R193913366&ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
                  
                 alt="House Illustration"
                 style={{
                   maxHeight: '400px',
                   width: 'auto',
                   objectFit: 'contain',
                 }}
               />
             </Col>
           </Row>
         </Container>
          
            <Container fluid className="py-0 mt-5"></Container>
          {/* Center Image Section */}
           <h2 className="fw-bold text-dark me-0 mt-3 d-flex justify-content-center">Growing Businesses Nationwide
           </h2>
  
{/* Left Side Form */}
      
<Container fluid className="p-4" style={{ backgroundColor: "#FEFEFE" }}>
        <Row>
        <Col md={4}>
            <Card className="text-white p-4" style={{ backgroundColor: "#3262ad  " }}>
              <h4 className="fw-bold text-black">Simplicity</h4>
              <h2 className="fw-sm-bold">Get Funded in Just a Few Clicks</h2>
              <ul className="list-unstyled mt-4">
                <li>✔ Apply in Minutes, Get Approval Fast </li>
                <li>✔ Competitive Interest Rates</li>
                <li>✔ Dedicated Support at Every Step</li>
              </ul>
            </Card>
          </Col>
           {/* Bottom Side Form */}
           <Col md={4}>
            <Card className="text-white p-4" style={{ backgroundColor: "#3262ad" }}>
              <h4 className="fw-bold text-black">Trust</h4>
              <h2 className="fw-sm-bold"> Instant Eligibility Check & Paperless Process</h2>
              <ul className="list-unstyled mt-4">
                <li>✔ Hassle-Free Experience </li>
                <li>✔ End-to-End Assistance from Financial Experts</li>
                <li>✔ Tailored Loan Offers Based on Business</li>
              </ul>
            </Card>
          </Col>
          {/*#459fa6*/}
          {/* Right Side Form */}
          <Col md={4}>
            <Card className="text-white p-4" style={{ backgroundColor: "#3262ad" }}>
              <h4 className="fw-bold text-black">Prefinn</h4>
              <h2 className="fw-sm-bold">Business Funding, Simplified</h2>
              <ul className="list-unstyled mt-4">
                <li>✔ Expert Support from Start to Settlement </li>
                <li>✔ Built for Founders, Backed by Fintech</li>
                <li>✔ Reliable Support, Every Step of the Way</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
      
      <div className="container-fluid bg-light mb-6 py-5 ">
        <div className="container d-flex flex-column flex-lg-row align-items-center">
          <div className="text-center text-lg-start me-lg-5">
            <h1 className="fw-bold">Take your business to great heights</h1>
            <p  style={{color:"#3262ad"}}>Presenting Business Loans By Prefinn</p>
          </div>
          <div className="mt-4 mt-lg-0">
            <img
              src="https://img.freepik.com/premium-photo/portrait-young-man-talking-phone-against-white-background_1048944-9241865.jpg?ga=GA1.1.56492630.1742847583&w=740"
            
              alt="Businessman on Phone"
              className="img-fluid rounded"
            />
          </div>
        </div>
        <div className="container mt-5">
          <div className="row text-center text-lg-start">
          <div className="container bg-light py-4">
  <div className="row">
    <div className="col-md-4">
      <p>Collateral-free funding up to ₹1 Cr for self-employed individuals and businesses</p>
    </div>
    <div className="col-md-4">
      <p>Funding up to ₹50 lacs based on your current account statement</p>
    </div>
    <div className="col-md-4">
      <p>Fastest loan processing and get money in your account</p>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
      <Container
        fluid
        className="py-5 mt-0"
        style={{ backgroundColor: "#f2f5ff", borderRadius: "0" }}
      >
      <h2 className="fw-bold  mb-6 mt-6 py-0 text-center">Features & Benefits of Business Loan</h2>
      <div className="row g-3">
        {features.map((feature, index) => (
          <div className="col-12 col-md-6 col-lg-3  mb-6 mt-6 py-2 d-flex align-items-stretch" key={index}>
            <div
              className="card p-4 shadow-sm border-0 w-80"
              style={{
                backgroundColor: feature.bgColor,
                borderRadius: "12px",
                height: "auto",
                width: "100%",
              }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="img-fluid mx-auto mb-1"
                style={{ borderRadius: "50%", maxWidth: "80px", height: "auto" }}
              />
              <h5 className="fw-bold">{feature.title}</h5>
              <p className="text-muted">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      </Container>
      <Container
        fluid
        className="py-17 mt-0"
        style={{ backgroundColor: "#f2f5ff", borderRadius: "0" }}
      >
        {" "}
        {/* Use fluid to make it full-width */}
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold" style={{ color: "#000000 " }}>
              The Prefinn Promise
            </h2>
            <p className="text-muted">Smart Secure Bussiness Loans</p>
          </Col>
        </Row>
        <Row className="justify-content-center no-gutters">
          {" "}
          {/* Use no-gutters to remove padding between columns */}
          {[
            {
              title: "Fuel Your Business Growth Instantly",
              text: "Get access to fast and flexible business loans designed to power your next big move.",
            },
            {
              title: "Business Loans Made Easy",
              text: "No delays. No hassle. Just fast funding to help your business thrive.",
            },
            {
              title: "Tailored Business Loans, Trusted Partners",
              text: "We connect you with verified lenders offering competitive rates and flexible terms.",
            },
            {
              title: "Intelligent Financing for Your Enterprise",
              text: "Empowering your business with smart funding solutions, competitive interest rates.",
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
                  (e.currentTarget.style.backgroundColor = "#fffff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#fffff ")
                }
              >
                <Card.Body>
                  <h5>{item.title}</h5>
                  <p style={{color:"#808080"}}>{item.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="text-center mt-4">
          <Col></Col>
        </Row>
      </Container>
      <Container className="p-5 px-2" >
  <h2 className="text-success fw-bold"> EMI Calculator</h2>
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

        <Col xs={12} md={5} className="p-0 gap-5">  {/* Full width on small screens */}
  <Card className="p-4 shadow h-100 px-5 " style={{ backgroundColor: "#3262ad", width: '100%' }}> {/* Ensure full width */}
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
          <h2 className=" text-2xl md:text-3xl font-bold mb-4" style={{color:'#3262ad'}}>
            At Prefinn your success is our success.
          </h2>
      
          <h3 className="text-blue-900 text-xl font-medium mt-1">
            Happiness Delivered, Always
          </h3>
          <div className="mt-6">
            <Link
              href="/AboutBusinessLoans"
              className=" text-3xl inline-block bg-blue-900 text-white py-2 px-6 rounded-md font-medium no-underline hover:!bg-[#16a34a] transition-colors">
            
              Apply Now
            </Link>
          </div>
        </div>
    
    
    </Container>
      <Container fluid className="py-5 mt-0">
        {" "}
        {/* Full-width container */}
        <h2 className="text-center mb-4 fw-bold ">FAQs</h2>
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















