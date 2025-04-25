

"use client";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PersonalLoans() {

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
      question: " Can I pledge a jointly-owned property for a loan against property?",
      answer:
        "  Yes, but all co-owners must consent and become co-borrowers or guarantors for the loan.",
    },
    {
      question: " Is agricultural land accepted as collateral for a loan against property?",
      answer:
        " Rarely, most lenders prefer residential/commercial properties; agricultural land eligibility depends on state laws and lender policies",
    },
    {
      question: " How does a loan against property affect my existing home loan?",
      answer:
        " Your property’s equity (market value minus existing loan) determines eligibility; existing loans reduce the LAP amount you can avail.",
    },
    {
      question: " Can I get tax benefits on a loan against property?",
      answer:
        " No, unless the loan is used for business purposes (interest may qualify as a business expense under IT Act).",

    },
    {
      question: "What happens if I use a loan against property to fund expenses abroad?",
      answer:" Permitted, but lenders may restrict forex transactions; currency conversion risks and RBI guidelines apply."
        

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
      {/* <div
        className="container-fluid p-0"
        style={{ fontFamily: "Arial, sans-serif", position: "relative" }}
      >
        
        <div className="position-relative">
       
          <img
            src="https://img.freepik.com/premium-photo/home-car-buying-concept-indian-man-holding-indian-currency-both-hands-model-house-toy-car-it-closeup-selective-focus_466689-12416.jpg?semt=ais_hybrid&w=740"
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
              overflowY: "hidden",
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
                Apply for Personal Loan
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
        </div>
      </div> */}

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
            Leverage Your Equity,<br /> Funded Today by <span style={{ color: '#38ad64' }}>Prefinn</span>
          </h1>
    
          {/* <h3 className="fw-bold mb-2" style={{ fontSize: '1.8rem', color: '#843c46' }}>
            Efficient, Scalable, Certified.
          </h3> */}
    
          <p className="text-muted mb-4" style={{ fontSize: '1.2rem' }}>
            Get the best loan deals, personalized for you — fast, secure, and fully digital.
          </p>
        </Col>
    
        {/* Right Side - Image */}
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <img
            src="https://img.freepik.com/premium-vector/rupee-bag-rupee-note-coin-showing-growth_667085-762.jpg?ga=GA1.1.56492630.1742847583&w=740"
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

      <Container fluid className="p-5" style={{ background: "linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(222, 218, 218) 100%)" }}>
  <Row className="g-4">
    {/* Left Side Panel */}
    <Col md={4}>
      <Card className="p-4 shadow-lg rounded-4 border-0" style={{  background: "#ffffff "}}>
        <h4 className="fw-bold text-warning">No Hassle, No Delay</h4>
        <h2 className="fw-bold display-6">100% SIMPLE PROCESS</h2>
        <ul className="list-unstyled mt-4 fs-5">
          <li>✔ PROVIDE YOUR BASIC INFORMATION </li>
          <li>✔ PICK THE BEST OFFER FOR YOU</li>
          <li>✔ RECEIVE YOUR LOAN WITHOUT THE WAIT </li>
        </ul>
      </Card>
    </Col>

    {/* Center Image Section */}
    <Col md={4} className="text-center d-flex flex-column align-items-center justify-content-center">
      <img src="https://img.freepik.com/premium-photo/cheerful-mature-indian-man-using-phone-credit-card-home_116547-90390.jpg?ga=GA1.1.1559874935.1744648139&semt=ais_hybrid&w=740" 
           alt="Loan Offer" 
           className="img-fluid rounded-4 shadow-sm" 
           style={{ maxHeight: "350px", objectFit: "cover" }} 
      />
      {/* <img src="https://img.freepik.com/free-photo/man-presenting-something_1368-3697.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid" alt="Loan Offer" className="img-fluid" /> */}
      <h4 className="fw-bold text-primary mt-4">LOWEST INTEREST RATES</h4>
    </Col>

    {/* Right Side Form */}
    <Col md={4}>
      <Card className="p-4 shadow-lg rounded-4 border-0" style={{  background: "#ffffff "}}>
        <h4 className="fw-bold text-warning">Fast & Easy</h4>
        <h2 className="fw-bold display-6">Empower Yourself with Our Smart Solution</h2>
        <ul className="list-unstyled mt-4 fs-5">
          <li>✔ SUBMIT DETAILS SECURELY </li>
          <li>✔ GET FUNDS TRANSFERRED QUICKLY</li>
          <li>✔ GET MONEY IN YOUR ACCOUNT</li>
        </ul>
      </Card>
    </Col>
  </Row>
</Container>


<Container fluid className="py-5 text-center mt-0" style={{ background: "#ffffff" }}>
  {/* Use fluid to make it full-width */}
  <h2 style={{ fontWeight: "bold", color: "#114232", letterSpacing: "0.5px" }}>
    Unlock the True Value of Your Property — The Prefinn Promise
  </h2>
  <Row className="mt-4 no-gutters justify-content-center">
    {/* Use no-gutters to remove padding between columns */}

    <Col xs={12} md={4}>
      <Card
        className="p-4 shadow rounded-4 border-0 transition"
        style={{
          borderRadius: "20px",
          minHeight: "140px",
          width: "100%",
          margin: "0",
          backgroundColor: "#E3F2FD",
          transition: "transform 0.3s ease, box-shadow 0.3s ease"
        }}
      >
        <h5 style={{ color: "#0D3B66", fontWeight: "bold" }}>
          Quick Property Evaluation
        </h5>
        <p style={{ fontSize: "15px", color: "#1565c0" }}>
          Get your property assessed fast and unlock higher loan eligibility with ease.
        </p>
      </Card>
    </Col>

    <Col xs={12} md={4}>
      <Card
        className="p-4 shadow rounded-4 border-0 transition"
        style={{
          borderRadius: "20px",
          minHeight: "140px",
          width: "100%",
          margin: "0",
          backgroundColor: "#E3F2FD",
          transition: "transform 0.3s ease, box-shadow 0.3s ease"
        }}
      >
        <h5 style={{ color: "#0D3B66", fontWeight: "bold" }}>
          Competitive Interest Rates
        </h5>
        <p style={{ fontSize: "15px", color: "#1565c0" }}>
          Avail attractive rates and flexible repayment options — maximize your property’s worth.
        </p>
      </Card>
    </Col>

    <Col xs={12} md={4}>
      <Card
        className="p-4 shadow rounded-4 border-0 transition"
        style={{
          borderRadius: "20px",
          minHeight: "140px",
          width: "100%",
          margin: "0",
          backgroundColor: "#E3F2FD",
          transition: "transform 0.3s ease, box-shadow 0.3s ease"
        }}
      >
        <h5 style={{ color: "#0D3B66", fontWeight: "bold" }}>
          Seamless Disbursal Process
        </h5>
        <p style={{ fontSize: "15px", color: "#1565c0" }}>
          Minimal paperwork and quick approvals — funds directly to your account.
        </p>
      </Card>
    </Col>
  </Row>
</Container>

<Container
        fluid
        className="py-5 mt-0"
        style={{ backgroundColor: "#eaf4f4", borderRadius: "0" }}
      >
        {" "}
        {/* Use fluid to make it full-width */}
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold" style={{ color: "#0d3b66" }}>
              The Prefinn Promise
            </h2>
            <p className="text-muted ">Unlock Funds with Your Property’s Potential</p>
          </Col>
        </Row>
        <Row className="justify-content-center no-gutters">
          {" "}
          {/* Use no-gutters to remove padding between columns */}
          {[
            {
              title: "Unlock Property Value Quickly",
              text: "Leverage your property's worth for high-value loans with a smooth and transparent process.",
            },
            {
              title: "Personalized Guidance from Experts",
              text: "Our dedicated advisors ensure the right loan structure that fits your financial needs.",
            },
            {
              title: "Attractive Interest Rates",
              text: "Access market-competitive rates and maximize the benefits of your property-backed loan.",
            },
            {
              title: "Hassle-Free Approvals",
              text: "Simplified documentation and speedy disbursals — making your property work for you.",
            },
          ].map((item, index) => (
            <Col xs={12} sm={6} md={3} className="mb-0" key={index}>
              {" "}
              {/* Set mb-0 to remove bottom margin */}
              <Card
                className="p-3 border-0 shadow-lg text-center"
                style={{
                  transition: "all 0.4s ease-in-out",
                  cursor: "pointer",
                  minHeight: "220px",
                  borderRadius: "30px",
                  width: "100%",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
                  e.currentTarget.style.backgroundColor = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.backgroundColor = "#ffffff";
                }}
              >
                <Card.Body>
                  <h5 style={{ color: "#114232", fontWeight: "600" }}>{item.title}</h5>
                  <p style={{ color: "#0d3b66" }}>{item.text}</p>
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

<div className="text-center mb-14 py-10">
          <h2 className="text-blue-900 text-2xl md:text-3xl font-bold mb-3">
            At Prefinn your success is our success.
          </h2>
          <h3 className="text-blue-900 text-xl font-medium mt-4">
            Happiness Delivered, Always
          </h3>
          <div className="mt-4">
            <Link
              href="/AboutLoanAgainstProperty"
              className=" text-3xl inline-block bg-blue-900 text-white py-2 px-6 rounded-md font-medium no-underline hover:!bg-[#16a34a] transition-colors">
            
              Apply Now
            </Link>
          </div>
        </div>

      <Container fluid className="py-5 mt-0">
        {" "}
        {/* Full-width container */}
        <h1 className="text-center mb-4 fw-bold ">FAQs</h1>
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









