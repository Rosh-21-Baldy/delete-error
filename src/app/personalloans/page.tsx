
// "use client";
// import React, { useState,useEffect } from "react";
// import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import dynamic from "next/dynamic";

// // Dynamically import Navbar and Footer to avoid SSR hydration error
// const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false });
// const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Link from "next/link";


// export default function PersonalLoans() {

//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     otp: "",
//     pan: "",
//     pincode: "",
//     agree: false,
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     otp: "",
//     pan: "",
//     pincode: "",
//     agree: "",
//   });

//   // Validation patterns
//   const patterns = {
//     name: /^[a-zA-Z ]{3,}$/,
//     email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//     mobile: /^[0-9]{10}$/,
//     otp: /^[0-9]{6}$/,
//     pan: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
//     pincode: /^[0-9]{6}$/,
//   };

//   const validateField = (name: string, value: string | boolean) => {
//     let error = "";

//     if (typeof value === "string" && !value.trim()) {
//       error = "This field is required";
//     } else {
//       switch (name) {
//         case "name":
//           if (!patterns.name.test(String(value)))
//             error = "Minimum 3 characters required";
//           break;
//         case "email":
//           if (!patterns.email.test(String(value)))
//             error = "Invalid email format";
//           break;
//         case "mobile":
//           if (!patterns.mobile.test(String(value)))
//             error = "Invalid mobile number";
//           break;
//         case "otp":
//           if (!patterns.otp.test(String(value))) error = "6-digit OTP required";
//           break;
//         case "pan":
//           if (!patterns.pan.test(String(value)))
//             error = "Invalid PAN format (e.g. ABCDE1234F)";
//           break;
//         case "pincode":
//           if (!patterns.pincode.test(String(value)))
//             error = "6-digit pincode required";
//           break;
//         case "agree":
//           if (!value) error = "You must agree to terms";
//           break;
//       }
//     }

//     setErrors((prev) => ({ ...prev, [name]: error }));
//     return error === "";
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     const val = type === "checkbox" ? checked : value;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: name === "pan" ? value.toUpperCase() : val,
//     }));

//     if (errors[name as keyof typeof errors]) validateField(name, val);
//   };

//   const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     validateField(name, value);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     let isValid = true;

//     Object.entries(formData).forEach(([name, value]) => {
//       isValid = validateField(name, value) && isValid;
//     });

//     if (isValid) {
//       console.log("Form submitted:", formData);
//       toast.success("Form submitted successfully!");
//       setFormData({
//         name: "",
//         email: "",
//         mobile: "",
//         otp: "",
//         pan: "",
//         pincode: "",
//         agree: false,
//       });
//     }
//   };

//   const toggleCard = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const faqs = [
//     {
//       question: " What can I use a personal loan for?",
//       answer:
//         "A personal loan can be used for almost any type of expense ranging from big ticket appliance purchases and home renovations to luxury vacations and debt consolidation. Some other cases where personal loans may be useful include payment to unexpected medical bills, investment in business, fixing your car, down payment of new house and much more.",
//     },
//     {
//       question: "Is there a minimum personal loan amount that I need to borrow?",
//       answer:
//         "Yes. Though the exact amount of the minimum personal loan amount varies from one lending institution to another, most lenders have set their minimum personal loan principal amount at Rs. 30,000",
//     },
//     {
//       question: "What is the tenure of a personal loan?",
//       answer:
//         "Personal loans feature tenure of 1 year to 5 years or 12 to 60 months. In rare cases, shorter or longer personal loan tenures may be allowed by the borrower on a case by case basis.",
//     },
//     {
//       question: "How to repay the personal loan?",
//       answer:
//         "The loan can be repaid in the form of Equated Monthly Installment (EMI) via post-dated cheques   drawn in favour of the bank or by releasing a mandate allowing payment through the Electronic Clearing Services (ECS) system.",

//     },
//     {
//       question: "What are the key documents required when applying for a personal loan?",
//       answer:"this is"
//    ,

//     }
//   ];

//   // EMI Calculator State
//   const [loanAmount, setLoanAmount] = useState(500000);
//   const [tenure, setTenure] = useState(24);
//   const [interestRate, setInterestRate] = useState(11.25);

//   // EMI Calculation Formula
//   const calculateEMI = (P: number, r: number, n: number): number => {
//     const monthlyRate = r / (12 * 100);
//     return (P * monthlyRate * Math.pow(1 + monthlyRate, n)) /
//       (Math.pow(1 + monthlyRate, n) - 1);
//   };

//   const emi = calculateEMI(loanAmount, interestRate, tenure);
//   const totalPayment = emi * tenure;
//   const totalInterest = totalPayment - loanAmount;


//   const [formattedLoanAmount, setFormattedLoanAmount] = useState("");

//   useEffect(() => {
//     setFormattedLoanAmount(loanAmount.toLocaleString('en-IN'));
//   }, [loanAmount]);

//   return (
//     <>
     
//       <Navbar />
//       <>
//         {/* Your main JSX */}
//         <ToastContainer
//           position="top-right"
//           autoClose={3000}
//           hideProgressBar
//         />
//       </>
      
    
//     <Container fluid className="py-0 mt-10 bg-white">
//       <Row className="align-items-center justify-content-center" style={{ minHeight: '20vh' }}>
//         {/* Left Side - Text */}
//         <Col md={6} className="text-center text-md-start px-4">
//           <h1
//             className="fw-bold mb-4"
//             style={{
//               color: '#3c4f84',
//               fontSize: '3.2rem',
//               fontWeight: '800',
//               lineHeight: '1.2',
//             }}
//           >
          
//           Your Ambitions,<br /> Priority Personal Loans by <span style={{ color: '#38ad64' }}>Prefinn</span>
//           </h1>
    
//           <h3 className="fw-bold mb-2" style={{ fontSize: '1.8rem', color: '#843c46' }}>
//           tailored to your financial goals
//           </h3>
    
//           <p className="text-muted mb-4" style={{ fontSize: '1.2rem' }}>
//             Get the best loan deals, personalized for you — fast, secure, and fully digital.
//           </p>
//         </Col>
    
//         {/* Right Side - Image */}
//         <Col md={6} className="d-flex align-items-center justify-content-center">
//           <img
//             src="https://img.freepik.com/premium-vector/rupee-plant-growth-money-bag-investment-mutual-fund-concept-vector-illustration_667085-492.jpg?ga=GA1.1.56492630.1742847583&w=740"
//             alt="House Illustration"
//             style={{
//               maxHeight: '400px',
//               width: 'auto',
//               objectFit: 'contain',
//             }}
//           />
//         </Col>
//       </Row>
//     </Container>
//       <Container fluid className="p-4" style={{ backgroundColor: "#FEFEFE" }}>
//         <Row>
//           {/* Left Side Panel */}

//           <Col md={4}>
//             <Card className="text-white p-4" style={{ backgroundColor: "#4B5EAA" }}>
//               <h4 className="fw-bold text-black">No Hassle, No Delay</h4>
//               <h2 className="fw-bold">100% SIMPLE PROCESS</h2>
//               <ul className="list-unstyled mt-10">
//                 <li>✔ PROVIDE YOUR BASIC INFORMATION </li>
//                 <li>✔ PICK THE BEST OFFER FOR YOU</li>
//                 <li>✔ RECEIVE YOUR LOAN WITHOUT THE WAIT </li>
//               </ul>
//             </Card>
//           </Col>

//           {/* Center Image Section */}
//           <Col md={4} className="text-center d-flex flex-column align-items-center justify-content-center">
//             <img src="https://img.freepik.com/free-photo/excited-ceo-corporate-man-manager-pointing-aside-promo-text-showing-left-banner-smiling-amazed-standing-white-background_176420-53107.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid" alt="Loan Offer" className="img-fluid" />
//             {/* <img src="https://img.freepik.com/free-photo/man-presenting-something_1368-3697.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid" alt="Loan Offer" className="img-fluid" /> */}
//             <h4 className="fw-bold text-success me-0 mt-3">LOWEST INTEREST RATES</h4>
//           </Col>

//           {/* Right Side Form */}
//           <Col md={4}>
//             <Card className="text-white p-4" style={{ backgroundColor: "#4B5EAA" }}>
//               <h4 className="fw-bold text-black">Fast & Easy</h4>
//               <h2 className="fw-sm-bold">Empower Yourself with Our Smart Solution</h2>
//               <ul className="list-unstyled mt-4">
//                 <li>✔ SUBMIT DETAILS SECURELY </li>
//                 <li>✔ GET FUNDS TRANSFERRED QUICKLY</li>
//                 <li>✔ GET MONEY IN YOUR ACCOUNT</li>
//               </ul>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       <Container fluid className="py-5 text-center mt-0">
//         {" "}
//         {/* Use fluid to make it full-width */}
//         <h2 style={{ fontWeight: "bold", color: "#27543a " }}>
//           Fast Approvals, Safe Process That’s the Prefinn Promise
//         </h2>
//         <Row className="mt-4 no-gutters">
//           {" "}
//           {/* Use no-gutters to remove padding between columns */}
//           <Col xs={12} md={4}>
//             <Card
//               className="p-3 shadow-sm"
//               style={{
//                 borderRadius: "25px",
//                 minHeight: "120px",
//                 width: "100%",
//                 margin: "0",
//                 backgroundColor: "#f0f8ff",
//               }}
//             >
//               <h5 style={{ color: "dark", fontWeight: "bold" }}>
//                 Get Instant Approval
//               </h5>
//               <p style={{ fontSize: "14px", color: "#008080" }}>
//                 Quick Decisions, Faster Access to Funds
//                 Receive loan approval in real time .
//               </p>
//             </Card>
//           </Col>
//           <Col xs={12} md={4}>
//             <Card
//               className="p-3 shadow-sm"
//               style={{
//                 borderRadius: "25px",
//                 minHeight: "120px",
//                 width: "100%",
//                 margin: "0",
//                 backgroundColor: "#f0f8ff",
//               }}
//             >
//               <h5 style={{ color: "dark", fontWeight: "bold" }}>
//                 Your Ideal Personal Loan Starts Here
//               </h5>
//               <p style={{ fontSize: "14px", color: "#008080" }}>
//                 From low interest rates to fast approvals ,Prefinn brings it all together lenders.
//               </p>
//             </Card>
//           </Col>
//           <Col xs={12} md={4}>
//             <Card
//               className="p-3 shadow-sm"
//               style={{
//                 borderRadius: "25px",
//                 minHeight: "120px",
//                 width: "100%",
//                 margin: "0",
//                 backgroundColor: "#f0f8ff",
//               }}
//             >
//               <h5 style={{ color: "dark", fontWeight: "bold" }}>
//                 Fast Funds, No Fuss – Make It Happen
//               </h5>
//               <p style={{ fontSize: "14px", color: "#008080" }}>
//                 Personal loans designed to match your life and your pace.
//               </p>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       <Container
//         fluid
//         className="py-5 mt-0"
//         style={{ backgroundColor: "#f2f5ff", borderRadius: "0" }}
//       >
//         {" "}
//         {/* Use fluid to make it full-width */}
//         <Row className="text-center mb-4">
//           <Col>
//             <h2 className="fw-bold" style={{ color: "#27543a " }}>
//               The Prefinn Promise
//             </h2>
//             <p className="text-muted">Smart Secure Personal Loans</p>
//           </Col>
//         </Row>
//         <Row className="justify-content-center no-gutters">
//           {" "}
//           {/* Use no-gutters to remove padding between columns */}
//           {[
//             {
//               title: "No More Waiting, Get Your Personal Loan Fast",
//               text: "Our quick and easy process gets you the funds when you need them most.",
//             },
//             {
//               title: "Loan Experts Who Care",
//               text: "Count on expert support and a dedicated advisor to simplify your personal loan journey.",
//             },
//             {
//               title: "Customized Loans, Professional Service",
//               text: "Get matched with reputable lenders offering low-interest personal loans tailored for you.",
//             },
//             {
//               title: "Smart Financing Here",
//               text: "Benefit from low rates, flexible tenures, and loan offers.personalized to your financial profile.",
//             },
//           ].map((item, index) => (
//             <Col xs={12} sm={6} md={3} className="mb-0" key={index}>
//               {" "}
//               {/* Set mb-0 to remove bottom margin */}
//               <Card
//                 className="p-3 border-0 shadow-sm text-center"
//                 style={{
//                   transition: "background-color 0.3s ease-in-out",
//                   cursor: "pointer",
//                   minHeight: "200px",
//                   borderRadius: "25px",
//                   width: "100%",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.backgroundColor = "#f0f8ff")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.backgroundColor = "#4B5EAA")
//                 }
//               >
//                 <Card.Body>
//                   <h5>{item.title}</h5>
//                   <p style={{color:"#b5d70b"}}>{item.text}</p>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//         <Row className="text-center mt-4">
//           <Col></Col>
//         </Row>
//       </Container>
//       <Container className="p-5">
//         <h2 className="text-success fw-bold">EMI Calculator</h2>
//         <Row>
//           <Col md={7}>
//             <Form>
//               <Form.Group className="mb-4">
//                 <Form.Label className="fw-bold">Select the required Loan Amount</Form.Label>
//                 <Form.Range min="30000" max="500000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} />
//                 <div className="d-flex justify-content-between text-success">
//                   <span>₹ 30,000</span>
//                   <span className="fw-bold">₹ {formattedLoanAmount}</span>
//                   <span>₹ 5,00,000</span>
//                 </div>
//               </Form.Group>
//               <Form.Group className="mb-4">
//                 <Form.Label className="fw-bold">Select the interest rate (p.a)</Form.Label>
//                 <Form.Range min="12" max="21" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
//                 <div className="d-flex justify-content-between text-success">
//                   <span>12%</span>
//                   <span className="fw-bold">{interestRate}%</span>
//                   <span>21%</span>
//                 </div>
//               </Form.Group>
//               <Form.Group className="mb-4">
//                 <Form.Label className="fw-bold">Select EMI in Months</Form.Label>
//                 <Form.Range min="12" max="48" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} />
//                 <div className="d-flex justify-content-between text-success">
//                   <span>12</span>
//                   <span className="fw-bold">{tenure}</span>
//                   <span>48</span>
//                 </div>
//               </Form.Group>
//             </Form>
//           </Col>
//           <Col md={5}>
//             <Card className="p-4 shadow" style={{ backgroundColor: "#4B5EAA" }}>
//               <h5 className="fw-bold" style={{color:"white"}}>Your monthly Personal Loan EMI</h5>
//               <div className="mt-3">
//                 <p><strong>Principal amount:</strong> <span className="text-dark fw-bold">₹ {loanAmount.toLocaleString()}</span></p>
//                 <p><strong>Interest amount:</strong> <span className="text-dark fw-bold">₹ {totalInterest.toFixed(0)}</span></p>
//                 <p><strong>Total amount payable:</strong> <span className="text-dark fw-bold">₹ {totalPayment.toFixed(0)}</span></p>
//                 <p><strong>Tenure (Months):</strong> <span className="fw-bold">{tenure}</span></p>
//                 <h4 className="text-white fw-bold">Monthly EMI: ₹ {emi.toFixed(0)}</h4>
//               </div>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//       <div className="text-center mb-14">
            
//           <h2 className=" text-2xl md:text-3xl font-bold mb-4" style={{color:'#4B5EAA'}}>
//             At Prefinn your success is our success.
//           </h2>
//           <h3 className=" text-xl font-medium mt-1"style={{color:'#4B5EAA'}}>
//             Happiness Delivered, Always
//           </h3>
//           <div className="mt-8">
//             <Link
//               href="/AboutPersonalLoans"
              
//               className="inline-block bg-blue-900 text-white py-2 px-6 rounded-md font-medium no-underline hover:!bg-[#16a34a] transition-colors">
//               Apply Now
//             </Link>
//           </div>
//         </div>

//       <Container fluid className="py-4 mt-0">
//         {" "}
//         {/* Full-width container */}
//         <h2 className="text-center mb-4 fw-bold ">FAQs</h2>
//         {faqs.map((faq, index) => (
//           <Card
//             key={index}
//             className="mb-3 border-4 shadow-sm"
//             style={{
//               transition: "all 0.3s ease-in-out",
//               borderRadius: "10px",
//               overflow: "hidden", // Ensures rounded corners are respected
//             }}
//           >
//             <Card.Header
//               className={`d-flex justify-content-between align-items-center p-3 ${openIndex === index ? "bg-light" : "bg-light"
//                 }`}
//               style={{ cursor: "pointer" }}
//               onClick={() => toggleCard(index)}
//             >
//               <h6 className="mb-0 fw-bold">
//                 {index + 1}. {faq.question}
//               </h6>
//               <Button variant="light" className="rounded-circle shadow-sm">
//                 {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
//               </Button>
//             </Card.Header>
//             {openIndex === index && (
//               <Card.Body className="px-3">
//                 <p className="text-muted" style={{ fontSize: "0.9rem" }}>
//                   {faq.answer}
//                 </p>
//               </Card.Body>
//             )}
//           </Card>
//         ))}
//       </Container>
     
//       <Footer />
//     </>
//   );
// };































"use client";
import React, { useState ,useEffect} from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";


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
 
    if (Object.keys(errors).includes(name)) {
        validateField(name, val);
      }
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
      question: " What can I use a personal loan for?",
      answer:
        "A personal loan can be used for almost any type of expense ranging from big ticket appliance purchases and home renovations to luxury vacations and debt consolidation. Some other cases where personal loans may be useful include payment to unexpected medical bills, investment in business, fixing your car, down payment of new house and much more.",
    },
    {
      question: "Is there a minimum personal loan amount that I need to borrow?",
      answer:
        "Yes. Though the exact amount of the minimum personal loan amount varies from one lending institution to another, most lenders have set their minimum personal loan principal amount at Rs. 30,000",
    },
    {
      question: "What is the tenure of a personal loan?",
      answer:
        "Personal loans feature tenure of 1 year to 5 years or 12 to 60 months. In rare cases, shorter or longer personal loan tenures may be allowed by the borrower on a case by case basis.",
    },
    {
      question: "How to repay the personal loan?",
      answer:
        "The loan can be repaid in the form of Equated Monthly Installment (EMI) via post-dated cheques   drawn in favour of the bank or by releasing a mandate allowing payment through the Electronic Clearing Services (ECS) system.",

    },
    {
      question: "What are the key documents required when applying for a personal loan?",
      answer:"this is"
   ,

    }
  ];

  // // EMI Calculator State
  // const [loanAmount, setLoanAmount] = useState(500000);
  // const [tenure, setTenure] = useState(24);
  // const [interestRate, setInterestRate] = useState(11.25);

  // // EMI Calculation Formula
  // const calculateEMI = (P: number, r: number, n: number): number => {
  //   const monthlyRate = r / (12 * 100);
  //   return (P * monthlyRate * Math.pow(1 + monthlyRate, n)) /
  //     (Math.pow(1 + monthlyRate, n) - 1);
  // };

  // const emi = calculateEMI(loanAmount, interestRate, tenure);
  // const totalPayment = emi * tenure;
  // const totalInterest = totalPayment - loanAmount;



  

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
      
    
    <Container fluid className="py-0 mt-10 bg-white">
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
          
          Your Ambitions,<br /> Priority Personal Loans by <span style={{ color: '#38ad64' }}>Prefinn</span>
          </h1>
    
          <h3 className="fw-bold mb-2" style={{ fontSize: '1.8rem', color: '#843c46' }}>
          tailored to your financial goals
          </h3>
    
          <p className="text-muted mb-4" style={{ fontSize: '1.2rem' }}>
            Get the best loan deals, personalized for you — fast, secure, and fully digital.
          </p>
        </Col>
    
        {/* Right Side - Image */}
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <img
            src="https://img.freepik.com/premium-vector/rupee-plant-growth-money-bag-investment-mutual-fund-concept-vector-illustration_667085-492.jpg?ga=GA1.1.56492630.1742847583&w=740"
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
      <Container fluid className="p-4" style={{ backgroundColor: "#FEFEFE" }}>
        <Row>
          {/* Left Side Panel */}

          <Col md={4}>
            <Card className="text-white p-4" style={{ backgroundColor: "#4B5EAA" }}>
              <h4 className="fw-bold text-black">No Hassle, No Delay</h4>
              <h2 className="fw-bold">100% SIMPLE PROCESS</h2>
              <ul className="list-unstyled mt-10">
                <li>✔ PROVIDE YOUR BASIC INFORMATION </li>
                <li>✔ PICK THE BEST OFFER FOR YOU</li>
                <li>✔ RECEIVE YOUR LOAN WITHOUT THE WAIT </li>
              </ul>
            </Card>
          </Col>

          {/* Center Image Section */}
          <Col md={4} className="text-center d-flex flex-column align-items-center justify-content-center">
            <img src="https://img.freepik.com/free-photo/excited-ceo-corporate-man-manager-pointing-aside-promo-text-showing-left-banner-smiling-amazed-standing-white-background_176420-53107.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid" alt="Loan Offer" className="img-fluid" />
            {/* <img src="https://img.freepik.com/free-photo/man-presenting-something_1368-3697.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid" alt="Loan Offer" className="img-fluid" /> */}
            <h4 className="fw-bold text-success me-0 mt-3">LOWEST INTEREST RATES</h4>
          </Col>

          {/* Right Side Form */}
          <Col md={4}>
            <Card className="text-white p-4" style={{ backgroundColor: "#4B5EAA" }}>
              <h4 className="fw-bold text-black">Fast & Easy</h4>
              <h2 className="fw-sm-bold">Empower Yourself with Our Smart Solution</h2>
              <ul className="list-unstyled mt-4">
                <li>✔ SUBMIT DETAILS SECURELY </li>
                <li>✔ GET FUNDS TRANSFERRED QUICKLY</li>
                <li>✔ GET MONEY IN YOUR ACCOUNT</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid className="py-5 text-center mt-0">
        {" "}
        {/* Use fluid to make it full-width */}
        <h2 style={{ fontWeight: "bold", color: "#27543a " }}>
          Fast Approvals, Safe Process That’s the Prefinn Promise
        </h2>
        <Row className="mt-4 no-gutters">
          {" "}
          {/* Use no-gutters to remove padding between columns */}
          <Col xs={12} md={4}>
            <Card
              className="p-3 shadow-sm"
              style={{
                borderRadius: "25px",
                minHeight: "120px",
                width: "100%",
                margin: "0",
                backgroundColor: "#f0f8ff",
              }}
            >
              <h5 className="text-dark fw-bold">
                Get Instant Approval
              </h5>
              <p style={{ fontSize: "14px", color: "#008080" }}>
                Quick Decisions, Faster Access to Funds
                Receive loan approval in real time .
              </p>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card
              className="p-3 shadow-sm"
              style={{
                borderRadius: "25px",
                minHeight: "120px",
                width: "100%",
                margin: "0",
                backgroundColor: "#f0f8ff",
              }}
            >
              <h5 style={{ color: "dark", fontWeight: "bold" }}>
                Your Ideal Personal Loan Starts Here
              </h5>
              <p style={{ fontSize: "14px", color: "#008080" }}>
                From low interest rates to fast approvals ,Prefinn brings it all together lenders.
              </p>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card
              className="p-3 shadow-sm"
              style={{
                borderRadius: "25px",
                minHeight: "120px",
                width: "100%",
                margin: "0",
                backgroundColor: "#f0f8ff",
              }}
            >
              <h5 style={{ color: "dark", fontWeight: "bold" }}>
                Fast Funds, No Fuss – Make It Happen
              </h5>
              <p style={{ fontSize: "14px", color: "#008080" }}>
                Personal loans designed to match your life and your pace.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="py-5 mt-0"
        style={{ backgroundColor: "#f2f5ff", borderRadius: "0" }}
      >
        {" "}
        {/* Use fluid to make it full-width */}
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold" style={{ color: "#27543a " }}>
              The Prefinn Promise
            </h2>
            <p className="text-muted">Smart Secure Personal Loans</p>
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
                  (e.currentTarget.style.backgroundColor = "#4B5EAA")
                }
              >
                <Card.Body>
                  <h5>{item.title}</h5>
                  <p style={{color:"#b5d70b"}}>{item.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="text-center mt-4">
          <Col></Col>
        </Row>
      </Container>
      {/* <Container className="p-5">
        <h2 className="text-success fw-bold">EMI Calculator</h2>
        <Row>
          <Col md={7}>
            <Form>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Select the required Loan Amount</Form.Label>
                <Form.Range min="30000" max="500000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} />
                <div className="d-flex justify-content-between text-success">
                  <span>₹ 30,000</span>
                  <span className="fw-bold">₹ {loanAmount.toLocaleString('en-IN')}</span>
                  <span>₹ 5,00,000</span>
                </div>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Select the interest rate (p.a)</Form.Label>
                <Form.Range min="12" max="21" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
                <div className="d-flex justify-content-between text-success">
                  <span>12%</span>
                  <span className="fw-bold">{interestRate}%</span>
                  <span>21%</span>
                </div>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Select EMI in Months</Form.Label>
                <Form.Range min="12" max="48" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} />
                <div className="d-flex justify-content-between text-success">
                  <span>12</span>
                  <span className="fw-bold">{tenure}</span>
                  <span>48</span>
                </div>
              </Form.Group>
            </Form>
          </Col>
          <Col md={5}>
            <Card className="p-4 shadow" style={{ backgroundColor: "#4B5EAA" }}>
              <h5 className="fw-bold" style={{color:"white"}}>Your monthly Personal Loan EMI</h5>
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
      </Container> */}
       
      <div className="text-center mb-14">
            
          <h2 className=" text-2xl md:text-3xl font-bold mb-4" style={{color:'#4B5EAA'}}>
            At Prefinn your success is our success.
          </h2>
          <h3 className=" text-xl font-medium mt-1"style={{color:'#4B5EAA'}}>
            Happiness Delivered, Always
          </h3>
          <div className="mt-8">
            <Link
              href="/AboutPersonalLoans"
              
              className="inline-block bg-blue-900 text-white py-2 px-6 rounded-md font-medium no-underline hover:!bg-[#16a34a] transition-colors">
              Apply Now
            </Link>
          </div>
        </div>

      <Container fluid className="py-4 mt-0">
        {" "}
        {/* Full-width container */}
        <h2 className="text-center mb-4 fw-bold ">FAQs</h2>
        {faqs.map((faq, index) => (
          <Card
            key={index}
            className="mb-3 border-4 shadow-sm"
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
















