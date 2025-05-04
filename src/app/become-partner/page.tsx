


// ye shi code hai 



// "use client";
// import React, { useState, ChangeEvent, FormEvent } from "react";
// import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
// import Footer from "@/components/footer";
// import Navbar from "@/components/navbar"; // Corrected import
// import { ToastContainer, toast } from "react-toastify";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";

// const steps = [
//     { number: 1, title: "Apply", description: "Begin your journey by filling out the application form and sharing the required documents—become a Prefinn partner today." },
//     { number: 2, title: "Talk to Our Team", description: "Our support team will connect with you shortly to assist and coordinate the next steps." },
//     { number: 3, title: "Connect with Us", description: "Our Team will guide you through how to start generating leads effectively." },
//     { number: 4, title: "Formalize Your Association", description: "Complete the process by signing the official partnership agreement." }
// ];

// const faqs = [
//     { question: "Who can partner with Prefinn?", answer: "Anyone from loan agents, ex-bankers, insurance agents, mutual fund distributors, chartered accountants, real estate professionals, or any working professionals can become a Prefinn Loan Partner." },
//     { question: "What documents are required?", answer: "You typically need a PAN card, address proof, and any other professional ID or business-related documents." },
//     { question: "Is there any fee to become a partner?", answer: "No, partnering with Prefinn is free of cost. However, certain verification steps may apply." },
//     { question: "How do I start earning?", answer: "Once you're onboarded and verified, you can start referring leads through your dashboard and earn commissions on successful loan disbursements." },
//     { question: "How long does the verification process take?", answer: "The verification process usually takes 2-3 business days, after which you can start generating leads." },
//     { question: "Can I partner if I am from a different country?", answer: "Currently, Prefinn is open to Indian residents only. However, we are exploring international expansion in the future." }
// ];

// type FormData = {
//     fullName: string;
//     mobile: string;
//     panNumber: string;
//     email: string;
//     profession: string;
//     companyName: string;
//     // companyLocation: string; // Removed companyLocation
//     state: string;
//     city: string;
//     pincode: string;
//     panCardFile: File | null;
//     aadhaarCardFile: File | null;
//     terms: boolean;
//     aadharCardNumber: string; // Changed from cardNumber to aadharCardNumber
// };

// const BecomePartner = () => {
//     const [formData, setFormData] = useState<FormData>({
//         fullName: "", mobile: "", panNumber: "", email: "", profession: "",
//         companyName: "",  state: "", city: "", // Removed companyLocation from initial state
//         pincode: "", panCardFile: null, aadhaarCardFile: null, terms: false, aadharCardNumber: ""
//     });
//     const [showError, setShowError] = useState(false);
//     const [openFAQ, setOpenFAQ] = useState(null);

//     const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//         const { name, value, type } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
//         }));
//         if (showError) setShowError(false);
//     };

//     const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const { name, files } = e.target;
//         const file = files && files.length > 0 ? files[0] : null;
//         setFormData(prev => ({ ...prev, [name]: file }));
//         if (showError) setShowError(false);
//     };

//     const isFormValid = () => {
//         return (
//             formData.fullName.trim() !== "" &&
//             formData.mobile.length === 10 &&
//             panCardValidation(formData.panNumber) &&
//             formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) &&
//             formData.profession !== "" &&
//             formData.state !== "" &&
//             formData.city !== "" &&
//             formData.pincode.trim() !== "" &&
//             formData.companyName.trim() !== "" &&
//             // formData.companyLocation.trim() !== "" && // Removed companyLocation validation
//             formData.panCardFile !== null &&
//             formData.aadhaarCardFile !== null &&
//             formData.terms &&
//             formData.aadharCardNumber.trim() !== ""
//         );
//     };

//     const panCardValidation = (panNumber: string) => {
//         const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
//         return panRegex.test(panNumber.toUpperCase());
//     };

//     const handleSubmit = (e: FormEvent) => {
//         e.preventDefault();

//         if (!isFormValid()) {
//             setShowError(true);
//             toast.error("Please fill all required fields and upload documents correctly", {
//                 position: "top-right",
//             });
//         } else {
//             console.log("Form submitted:", formData);
//             toast.success("Application submitted successfully!", {
//                 position: "top-right",
//             });

//             setFormData({
//                 fullName: "", mobile: "", panNumber: "", email: "", profession: "",
//                 companyName: "",  state: "", city: "", // Removed companyLocation from reset
//                 pincode: "", panCardFile: null, aadhaarCardFile: null, terms: false, aadharCardNumber: ""
//             });
//             setShowError(false);
//         }
//     };

//     const toggleFAQ = (index: any) => {
//         setOpenFAQ(openFAQ === index ? null : index);
//     };

//     const stateOptions = [
//         "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
//         "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
//         "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
//         "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
//         "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh",
//         "Lakshadweep", "Puducherry"
//     ];

//     return (
//         <>
//             <Navbar />
//             <Container fluid className="my-1 px-4 mx-4 ">
//                 <Row className="justify-content-center align-items-start py-5 px-3 ">
//                     {/* Left: Form Section */}
//                     <Col md={7}>
//                         <h2 className="fw-bold mb-3 text-primary">
//                             We are India's Leading Loan Distributors
//                         </h2>
//                         <p className="text-muted mb-4">
//                             Partner with us & expand your financial Services reach with
//                             Prefinn's Lending Products.
//                         </p>
//                         <h6>Complete your onboarding now :-</h6>
//                         <Form onSubmit={handleSubmit} className="px-4 py-3 shadow rounded bg-white">
//                             <Row className="g-3">
//                                 <Col md={6}>
//                                     <Form.Group>
//                                         <Form.Label className="mb-1">
//                                             Full Name <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Form.Control
//                                             name="fullName"
//                                             value={formData.fullName}
//                                             onChange={handleChange}
//                                             required
//                                         />
//                                     </Form.Group>
//                                 </Col>

//                                 <Col md={6}>
//                                     <Form.Group>
//                                         <Form.Label className="mb-1">
//                                             Mobile Number <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Form.Control
//                                             name="mobile"
//                                             value={formData.mobile}
//                                             onChange={handleChange}
//                                             maxLength={10}
//                                             required
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={6}>
//                                     <Form.Group>
//                                         <Form.Label className="mb-1">
//                                             Email <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Form.Control
//                                             type="email"
//                                             name="email"
//                                             value={formData.email}
//                                             onChange={handleChange}
//                                             required
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={6}>
//                                     <Form.Group>
//                                         <Form.Label>Select State *</Form.Label>
//                                         <Form.Select
//                                             name="state"
//                                             value={formData.state}
//                                             onChange={handleChange}
//                                             required
//                                         >
//                                             <option value="">Choose state</option>
//                                             {stateOptions.map((state) => (
//                                                 <option key={state} value={state}>
//                                                     {state}
//                                                 </option>
//                                             ))}
//                                         </Form.Select>
//                                     </Form.Group>
//                                 </Col>

//                                 <Col md={6}>
//                                     <Form.Group>
//                                         <Form.Label className="mb-1">
//                                             City <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Form.Control
//                                             name="city"
//                                             value={formData.city}
//                                             onChange={handleChange}
//                                             required
//                                         />
//                                     </Form.Group>
//                                 </Col>

//                                 <Col md={6}>
//                                     <Form.Group>
//                                         <Form.Label className="mb-1">
//                                             Pincode <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="pincode"
//                                             value={formData.pincode}
//                                             onChange={handleChange}
//                                             required
//                                         />
//                                     </Form.Group>
//                                 </Col>

//                                 <Col md={6}>
//                                     <Form.Group>
//                                         <Form.Label className="mb-1">
//                                             Select Profession <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Form.Select
//                                             name="profession"
//                                             value={formData.profession}
//                                             onChange={handleChange}
//                                             required
//                                         >
//                                             <option value="">Choose profession</option>
//                                             <option>Salaried</option>
//                                             <option>Self-Employed</option>
//                                             <option>Business Owner</option>
//                                             <option>Insurance Agent</option>
//                                             <option>Real Estate Professional</option>
//                                             <option>Chartered Accountant</option>
//                                             <option>Mutual Fund Distributor</option>
//                                             <option>Other</option>
//                                         </Form.Select>
//                                     </Form.Group>
//                                 </Col>

//                                 <Col md={6}>
//                                     <Form.Group>
//                                         <Form.Label className="mb-1">
//                                             Company Name <span className=""></span>
//                                         </Form.Label>
//                                         <Form.Control
//                                             name="companyName"
//                                             value={formData.companyName}
//                                             onChange={handleChange}
//                                             required
//                                         />
//                                     </Form.Group>
//                                 </Col>

//                                 <Col md={6}>
//                                     <Form.Group>
//                                         <Form.Label className="mb-1">
//                                             PAN Number <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Form.Control
//                                             name="panNumber"
//                                             value={formData.panNumber}
//                                             onChange={handleChange}
//                                             style={{ textTransform: "uppercase" }}
//                                             required
//                                         />
//                                         {showError && !panCardValidation(formData.panNumber) && (
//                                             <Form.Text className="text-danger">
//                                                 Please enter a valid PAN number.
//                                             </Form.Text>
//                                         )}
//                                     </Form.Group>
//                                 </Col>

//                                  <Col md={6}>
//                                     <Form.Group>
//                                         <Form.Label>Aadhar Card Number <span className="text-danger">*</span></Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="aadharCardNumber"
//                                             value={formData.aadharCardNumber}
//                                             onChange={handleChange}
//                                             required
//                                         />
//                                     </Form.Group>
//                                 </Col>

//                                 <Col md={6} className="mb-3">
//                                     <Form.Group>
//                                         <Form.Label>Upload PAN Card <span className="text-danger">*</span></Form.Label>
//                                         <Form.Control
//                                             type="file"
//                                             name="panCardFile"
//                                             onChange={handleFileChange}
//                                             required
//                                         />
//                                         {showError && formData.panCardFile === null && (
//                                             <Form.Text className="text-danger">Please upload your PAN card.</Form.Text>
//                                         )}
//                                     </Form.Group>
//                                 </Col>

//                                 <Col md={6} className="mb-3">
//                                     <Form.Group>
//                                         <Form.Label>Upload Aadhaar Card <span className="text-danger">*</span></Form.Label>
//                                         <Form.Control
//                                             type="file"
//                                             name="aadhaarCardFile"
//                                             onChange={handleFileChange}
//                                             required
//                                         />
//                                         {showError && formData.aadhaarCardFile === null && (
//                                             <Form.Text className="text-danger">Please upload your Aadhaar card.</Form.Text>
//                                         )}
//                                     </Form.Group>
//                                 </Col>

//                                 {/* Removed Company Location */}

//                                 <Col md={12}>
//                                     <Form.Check
//                                         type="checkbox"
//                                         name="terms"
//                                         checked={formData.terms}
//                                         onChange={handleChange}
//                                         className="mt-2"
//                                         label={
//                                             <>
//                                                 I agree to the{" "}
//                                                 <a href="/term-cond" target="_blank" rel="noopener noreferrer">
//                                                     terms & conditions
//                                                 </a>{" "}
//                                                 and{" "}
//                                                 <a href="/privacy-pol" target="_blank" rel="noopener noreferrer">
//                                                     privacy policy
//                                                 </a>.
//                                             </>
//                                         }
//                                         required
//                                     />
//                                 </Col>

//                                 <Col md={12} className="text-center">
//                                     <Button
//                                         variant="primary"
//                                         type="submit"
//                                         size="sm"
//                                         className="px-4 fw-bold mt-3 rounded"
//                                     >
//                                         SUBMIT
//                                     </Button>
//                                 </Col>
//                             </Row>
//                         </Form>
//                     </Col>

//                     {/* Right: Image Section */}
//                     <Col md={5} className="d-flex align-items-center justify-content-center mt-5 mt-md-0">
//                         <img
//                             src="https://img.freepik.com/premium-vector/two-people-shake-hands-as-result-agreement-successful-cooperation_277904-4694.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
//                             alt="Partner Visual"
//                             className="img-fluid rounded"
//                             style={{ maxHeight: "550px", width: "100%", objectFit: "contain" }}
//                         />
//                     </Col>
//                 </Row>

//                 {/* Steps Section */}
//                 <section className="text-center mt-5">
//                 <h2 className="fw-bold text-center mb-3 mt-4 text-xl md:text-2xl">
//                                 <span
//                                     style={{
//                                         background: "linear-gradient(135deg, #28a745 0%, #0d53b7 100%)",
//                                         WebkitBackgroundClip: "text",
//                                         WebkitTextFillColor: "transparent",
//                                         backgroundClip: "text",
//                                         color: "transparent",
//                                         display: "inline-block",
//                                         padding: "0.2rem 0.5rem",
//                                         fontWeight: "600",
//                                     }}
//                                 >
//                                  How To Become a Partner
//                                 </span>
//                             </h2>
//                     <Row className="gy-4">
//                         {steps.map((step, index) => (
//                             <Col md={3} key={index}>
//                                 <div className="bg-light p-4 rounded shadow h-100">
//                                     <div className="display-1 text-primary opacity-25">
//                                         {step.number}
//                                     </div>
//                                     <h5 className="fw-semibold text-primary">{step.title}</h5>
//                                     <p className="text-muted small">{step.description}</p>
//                                 </div>
//                             </Col>
//                         ))}
//                     </Row>
//                 </section>

//                 {/* FAQ Section */}
//                 <section className="mt-5 mb-5">
//                     <div className="ambak-container">
//                         <div className="text-center mb-4 my-4">
//                             <h2 className="fw-bold text-center mb-3 mt-4 text-xl md:text-2xl">
//                                 <span
//                                     style={{
//                                         background: "linear-gradient(135deg, #28a745 0%, #0d53b7 100%)",
//                                         WebkitBackgroundClip: "text",
//                                         WebkitTextFillColor: "transparent",
//                                         backgroundClip: "text",
//                                         color: "transparent",
//                                         display: "inline-block",
//                                         padding: "0.2rem 0.5rem",
//                                         fontWeight: "600",
//                                     }}
//                                 >
//                                     Partners FAQ
//                                 </span>
//                             </h2>
//                             <p className="text-center text-muted mb-3 text-sm">
//                                 Answers to some frequently asked questions about becoming a Prefinn
//                                 Partner.
//                             </p>
//                         </div>
//                         <Row xs={1} md={2} className="g-4">
//   {faqs.map((faq, index) => (
//     <Col key={index}>
//       <Card
//         className="shadow-sm border-0"
//         onClick={() => toggleFAQ(index)}
//         style={{ cursor: "pointer" }}
//       >
//         <Card.Body className="p-2">
//           <Card.Title className="fw-sm text-dark d-flex justify-content-between align-items-center fs-6">
//             {faq.question}
//             <span className="fs-5">{openFAQ === index ? "−" : "+"}</span>
//           </Card.Title>
//           {openFAQ === index && (
//             <Card.Text className="text-muted fs-7 mt-2">
//               {faq.answer}
//             </Card.Text>
//           )}
//         </Card.Body>
//       </Card>
//     </Col>
//   ))}
// </Row>
//                     </div>
//                 </section>

//                 <ToastContainer />
//             </Container>
//             <Footer />
//         </>
//     );
// };

// export default BecomePartner;





















































































// update code hai hamrna dont delete it 




// "use client";
// import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
// import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
// import Footer from "@/components/footer";
// import Navbar from "@/components/navbar";
// import { ToastContainer, toast } from "react-toastify";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";
// import Webcam from "react-webcam";

// export default function BecomePartnerPage() {
//     const webcamRef = useRef<Webcam>(null);
//     const [capturedImage, setCapturedImage] = useState<string | null>(null);
//     const [isCapturing, setIsCapturing] = useState(false);
//     const [showError, setShowError] = useState(false);
//     const [openFAQ, setOpenFAQ] = useState<number | null>(null);

//     const steps = [
//         { number: 1, title: "Apply", description: "Begin your journey by filling out the application form and sharing the required documents—become a Prefinn partner today." },
//         { number: 2, title: "Talk to Our Team", description: "Our support team will connect with you shortly to assist and coordinate the next steps." },
//         { number: 3, title: "Connect with Us", description: "Our Team will guide you through how to start generating leads effectively." },
//         { number: 4, title: "Formalize Your Association", description: "Complete the process by signing the official partnership agreement." }
//     ];

//     const faqs = [
//         { question: "Who can partner with Prefinn?", answer: "Anyone from loan agents, ex-bankers, insurance agents, mutual fund distributors, chartered accountants, real estate professionals, or any working professionals can become a Prefinn Loan Partner." },
//         { question: "What documents are required?", answer: "You typically need a PAN card, address proof, and any other professional ID or business-related documents." },
//         { question: "Is there any fee to become a partner?", answer: "No, partnering with Prefinn is free of cost. However, certain verification steps may apply." },
//         { question: "How do I start earning?", answer: "Once you're onboarded and verified, you can start referring leads through your dashboard and earn commissions on successful loan disbursements." },
//         { question: "How long does the verification process take?", answer: "The verification process usually takes 2-3 business days, after which you can start generating leads." },
//         { question: "Can I partner if I am from a different country?", answer: "Currently, Prefinn is open to Indian residents only. However, we are exploring international expansion in the future." }
//     ];

//     const [formData, setFormData] = useState({
//         fullName: "", mobile: "", panNumber: "", email: "", profession: "",
//         companyName: "", state: "", city: "", pincode: "",
//         panCardFile: null, aadhaarCardFile: null, terms: false, aadharCardNumber: ""
//     });

//     const capture = () => {
//         setIsCapturing(true);
//         const imageSrc = webcamRef.current?.getScreenshot();
//         if (imageSrc) setCapturedImage(imageSrc);
//         setIsCapturing(false);
//     };

//     const retake = () => {
//         setCapturedImage(null);
//     };

//     const handleChange = (e: React.ChangeEvent<any>) => {
//         const target = e.target;
//         const { name, type, value } = target;
      
//         const finalValue =
//           type === 'checkbox' ? target.checked : value;
      
//         setFormData((prev) => ({
//           ...prev,
//           [name]: finalValue,
//         }));
//       };
      

//     const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const { name, files } = e.target;
//         const file = files && files.length > 0 ? files[0] : null;
//         setFormData((prev) => ({ ...prev, [name]: file }));
//     };

//     const panCardValidation = (panNumber: string) =>
//         /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panNumber.toUpperCase());

//     const isFormValid = () => {
//         return (
//             formData.fullName.trim() !== "" &&
//             formData.mobile.length === 10 &&
//             panCardValidation(formData.panNumber) &&
//             /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email) &&
//             formData.profession !== "" &&
//             formData.state !== "" &&
//             formData.city !== "" &&
//             formData.pincode !== "" &&
//             formData.companyName !== "" &&
//             formData.panCardFile !== null &&
//             formData.aadhaarCardFile !== null &&
//             formData.terms &&
//             formData.aadharCardNumber !== ""
//         );
//     };

//     const handleSubmit = async (e: FormEvent) => {
//         e.preventDefault();

//         if (!isFormValid()) {
//             setShowError(true);
//             toast.error("Please fill all required fields and upload documents correctly");
//             return;
//         }

//         const sendData = new FormData();
//         Object.entries(formData).forEach(([key, value]) => {
//             if (value) sendData.append(key, value as any);
//         });
//         if (capturedImage) sendData.append("capturedImage", capturedImage);

//         // Send form data to server (implement as needed)
//         console.log("Form Data Submitted", formData);

//         toast.success("Application submitted successfully!");

//         // Reset form
//         setFormData({
//             fullName: "", mobile: "", panNumber: "", email: "", profession: "",
//             companyName: "", state: "", city: "", pincode: "",
//             panCardFile: null, aadhaarCardFile: null, terms: false, aadharCardNumber: ""
//         });
//         setCapturedImage(null);
//     };

//     const toggleFAQ = (index: number) => {
//         setOpenFAQ(openFAQ === index ? null : index);
//     };

//     const stateOptions = [
//         "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
//         "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
//         "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
//         "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
//         "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh",
//         "Lakshadweep", "Puducherry"
//     ];

//     return (
//         <>
//             <Navbar />
//             <Container fluid className="my-1 px-4 mx-4">
//                 <Row className="justify-content-left align-items-start py-5 px-3">
//                     <Col md={7}>
//                         <h1 className="fw-bold mb-3 text-primary d-flex justify-content-center">We are India's Leading Loan Distributors</h1>
//                         <p className="text-muted mb-4">
//                             Partner with us & expand your financial Services reach with Prefinn's Lending Products.
//                         </p>
//                         <h6>Complete your onboarding now :-</h6>
//                         <Form onSubmit={handleSubmit} className="px-4 py-2 shadow rounded bg-white">
//                             <Row className="g-4">
//                                 <Col md={5}>
//                                     <Form.Group>
//                                         <Form.Label className="mb-1">
//                                             Full Name <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Form.Control
//                                             name="fullName"
//                                             value={formData.fullName}
//                                             onChange={handleChange}
//                                             required
//                                         />
//                                     </Form.Group>
//                                 </Col>

//                                 <Col md={5}>
//                                     <Form.Group>
//                                         <Form.Label className="mb-1">
//                                             Mobile Number <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Form.Control
//                                             name="mobile"
//                                             value={formData.mobile}
//                                             onChange={handleChange}
//                                             maxLength={10}
//                                             required
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={6}>
//                                     <Form.Group>
//                                         <Form.Label className="mb-1">
//                                             Email <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Form.Control
//                                             type="email"
//                                             name="email"
//                                             value={formData.email}
//                                             onChange={handleChange}
//                                             required
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={6}>
//                                     <Form.Group>
//                                         <Form.Label>Select State *</Form.Label>
//                                         <Form.Select
//                                             name="state"
//                                             value={formData.state}
//                                             onChange={handleChange}
//                                             required
//                                         >
//                                             <option value="">Choose state</option>
//                                             {stateOptions.map((state) => (
//                                                 <option key={state} value={state}>
//                                                     {state}
//                                                 </option>
//                                             ))}
//                                         </Form.Select>
//                                     </Form.Group>
//                                 </Col>

//                                 <Col md={6}>
//                                     <Form.Group>
//                                         <Form.Label className="mb-1">
//                                             City <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Form.Control
//                                             name="city"
//                                             value={formData.city}
//                                             onChange={handleChange}
//                                             required
//                                         />
//                                     </Form.Group>
//                                 </Col>

//                                 <Col md={5}>
//                                     <Form.Group>
//                                         <Form.Label className="mb-1">
//                                             Pincode <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="pincode"
//                                             value={formData.pincode}
//                                             onChange={handleChange}
//                                             required
//                                         />
//                                     </Form.Group>
//                                 </Col>

//                                 <Col md={5}>
//                                     <Form.Group>
//                                         <Form.Label className="mb-1">
//                                             Select Profession <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Form.Select
//                                             name="profession"
//                                             value={formData.profession}
//                                             onChange={handleChange}
//                                             required
//                                         >
//                                             <option value="">Choose profession</option>
//                                             <option>Salaried</option>
//                                             <option>Self-Employed</option>
//                                             <option>Business Owner</option>
//                                             <option>Insurance Agent</option>
//                                             <option>Real Estate Professional</option>
//                                             <option>Chartered Accountant</option>
//                                             <option>Mutual Fund Distributor</option>
//                                             <option>Other</option>
//                                         </Form.Select>
//                                     </Form.Group>
//                                 </Col>

//                                 <Col md={5}>
//                                     <Form.Group>
//                                         <Form.Label className="mb-1">
//                                             Company Name <span className=""></span>
//                                         </Form.Label>
//                                         <Form.Control
//                                             name="companyName"
//                                             value={formData.companyName}
//                                             onChange={handleChange}
//                                             required
//                                         />
//                                     </Form.Group>
//                                 </Col>

//                                 <Col md={5}>
//                                     <Form.Group>
//                                         <Form.Label className="mb-1">
//                                             PAN Number <span className="text-danger">*</span>
//                                         </Form.Label>
//                                         <Form.Control
//                                             name="panNumber"
//                                             value={formData.panNumber}
//                                             onChange={handleChange}
//                                             style={{ textTransform: "uppercase" }}
//                                             required
//                                         />
//                                         {showError && !panCardValidation(formData.panNumber) && (
//                                             <Form.Text className="text-danger">
//                                                 Please enter a valid PAN number.
//                                             </Form.Text>
//                                         )}
//                                     </Form.Group>
//                                 </Col>

//                                  <Col md={5}>
//                                     <Form.Group>
//                                         <Form.Label>Aadhar Card Number <span className="text-danger">*</span></Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="aadharCardNumber"
//                                             value={formData.aadharCardNumber}
//                                             onChange={handleChange}
//                                             required
//                                         />
//                                     </Form.Group>
//                                 </Col>

//                                 <Col md={5} className="mb-3">
//                                     <Form.Group>
//                                         <Form.Label>Upload PAN Card <span className="text-danger">*</span></Form.Label>
//                                         <Form.Control
//                                             type="file"
//                                             name="panCardFile"
//                                             onChange={handleFileChange}
//                                             required
//                                         />
//                                         {showError && formData.panCardFile === null && (
//                                             <Form.Text className="text-danger">Please upload your PAN card.</Form.Text>
//                                         )}
//                                     </Form.Group>
//                                 </Col>

//                                 <Col md={5} className="mb-3">
//                                     <Form.Group>
//                                         <Form.Label>Upload Aadhaar Card <span className="text-danger">*</span></Form.Label>
//                                         <Form.Control
//                                             type="file"
//                                             name="aadhaarCardFile"
//                                             onChange={handleFileChange}
//                                             required
//                                         />
//                                         {showError && formData.aadhaarCardFile === null && (
//                                             <Form.Text className="text-danger">Please upload your Aadhaar card.</Form.Text>
//                                         )}
//                                     </Form.Group>
//                                 </Col>

//                                 {/* Removed Company Location */}
//                                 <div className="mt-4 text-blue-900">
//                                 <h5>Capture a Selfie</h5>
//                                 {capturedImage ? (
//                                     <>
//                                         <img src={capturedImage} alt="Captured" className="img-fluid rounded mb-2" />
//                                         <Button variant="warning" onClick={retake}>Retake</Button>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <Webcam ref={webcamRef} screenshotFormat="image/jpeg" width={420} height={200} />
//                                         <Button variant="primary" className="mt-2 text-blue-900" onClick={capture}>Capture</Button>
//                                     </>
//                                 )}
//                             </div>  
//                             <Col md={12}>
//                                     <Form.Check
//                                         type="checkbox"
//                                         name="terms"
//                                         checked={formData.terms}
//                                         onChange={handleChange}
//                                         className="mt-2"
//                                         label={
//                                             <>
//                                                 I agree to the{" "}
//                                                 <a href="/term-cond" target="_blank" rel="noopener noreferrer">
//                                                     terms & conditions
//                                                 </a>{" "}
//                                                 and{" "}
//                                                 <a href="/privacy-pol" target="_blank" rel="noopener noreferrer">
//                                                     privacy policy
//                                                 </a>.
//                                             </>
//                                         }
//                                         required
//                                     />
//                                 </Col>

                         
//                             </Row>
//                             <div className="d-flex justify-content-center mt-2">
//   <Button  className=" text-blue-900"type="submit" >Submit</Button>
// </div>
//                         </Form>
//                     </Col>
//                        {/* Right: Image Section */}
//                        <Col md={5} className="d-flex align-items-center justify-content-center mt-5 mt-md-0">
//                         <img
//                             src="https://img.freepik.com/premium-vector/two-people-shake-hands-as-result-agreement-successful-cooperation_277904-4694.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
//                             alt="Partner Visual"
//                             className="img-fluid rounded"
//                             style={{ maxHeight: "550px", width: "100%", objectFit: "contain" }}
//                         />
//                     </Col>
//  {/* Steps Section */}
//  <section className="text-center mt-5">
//                 <h2 className="fw-bold text-center mb-3 mt-4 text-xl md:text-2xl">
//                                 <span
//                                     style={{
//                                         background: "linear-gradient(135deg, #28a745 0%, #0d53b7 100%)",
//                                         WebkitBackgroundClip: "text",
//                                         WebkitTextFillColor: "transparent",
//                                         backgroundClip: "text",
//                                         color: "transparent",
//                                         display: "inline-block",
//                                         padding: "0.2rem 0.5rem",
//                                         fontWeight: "600",
//                                     }}
//                                 >
//                                  How To Become a Partner
//                                 </span>
//                             </h2>
//                     <Row className="gy-4">
//                         {steps.map((step, index) => (
//                             <Col md={3} key={index}>
//                                 <div className="bg-light p-4 rounded shadow h-100">
//                                     <div className="display-1 text-primary opacity-25">
//                                         {step.number}
//                                     </div>
//                                     <h5 className="fw-semibold text-primary">{step.title}</h5>
//                                     <p className="text-muted small">{step.description}</p>
//                                 </div>
//                             </Col>
//                         ))}
//                     </Row>
//                 </section>
                    
//                 </Row>
//             </Container>
//             {/* FAQ Section */}
//             <section className="mt-5 mb-5">
//                     <div className="ambak-container">
//                         <div className="text-center mb-4 my-4">
//                             <h2 className="fw-bold text-center mb-3 mt-4 text-xl md:text-2xl">
//                                 <span
//                                     style={{
//                                         background: "linear-gradient(135deg, #28a745 0%, #0d53b7 100%)",
//                                         WebkitBackgroundClip: "text",
//                                         WebkitTextFillColor: "transparent",
//                                         backgroundClip: "text",
//                                         color: "transparent",
//                                         display: "inline-block",
//                                         padding: "0.2rem 0.5rem",
//                                         fontWeight: "600",
//                                     }}
//                                 >
//                                     Partners FAQ
//                                 </span>
//                             </h2>
//                             <p className="text-center text-muted mb-3 text-sm">
//                                 Answers to some frequently asked questions about becoming a Prefinn
//                                 Partner.
//                             </p>
//                         </div>
//                         <Row xs={1} md={2} className="g-4">
//   {faqs.map((faq, index) => (
//     <Col key={index}>
//       <Card
//         className="shadow-sm border-0"
//         onClick={() => toggleFAQ(index)}
//         style={{ cursor: "pointer" }}
//       >
//         <Card.Body className="p-2">
//           <Card.Title className="fw-sm text-dark d-flex justify-content-between align-items-center fs-6">
//             {faq.question}
//             <span className="fs-5">{openFAQ === index ? "−" : "+"}</span>
//           </Card.Title>
//           {openFAQ === index && (
//             <Card.Text className="text-muted fs-7 mt-2">
//               {faq.answer}
//             </Card.Text>
//           )}
//         </Card.Body>
//       </Card>
//     </Col>
//   ))}
// </Row>
//                     </div>
//                 </section>
//             <Footer />
//             <ToastContainer />
//         </>
//     );
// }





























"use client";
import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Webcam from "react-webcam";
export default function BecomePartnerPage() {
    const webcamRef = useRef<Webcam>(null);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [isCapturing, setIsCapturing] = useState(false);
    const [showError, setShowError] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const steps = [
        { number: 1, title: "Apply", description: "Begin your journey by filling out the application form and sharing the required documents—become a Prefinn partner today." },
        { number: 2, title: "Talk to Our Team", description: "Our support team will connect with you shortly to assist and coordinate the next steps." },
        { number: 3, title: "Connect with Us", description: "Our Team will guide you through how to start generating leads effectively." },
        { number: 4, title: "Formalize Your Association", description: "Complete the process by signing the official partnership agreement." }
    ];

    const faqs = [
        { question: "Who can partner with Prefinn?", answer: "Anyone from loan agents, ex-bankers, insurance agents, mutual fund distributors, chartered accountants, real estate professionals, or any working professionals can become a Prefinn Loan Partner." },
        { question: "What documents are required?", answer: "You typically need a PAN card, address proof, and any other professional ID or business-related documents." },
        { question: "Is there any fee to become a partner?", answer: "No, partnering with Prefinn is free of cost. However, certain verification steps may apply." },
        { question: "How do I start earning?", answer: "Once you're onboarded and verified, you can start referring leads through your dashboard and earn commissions on successful loan disbursements." },
        { question: "How long does the verification process take?", answer: "The verification process usually takes 2-3 business days, after which you can start generating leads." },
        { question: "Can I partner if I am from a different country?", answer: "Currently, Prefinn is open to Indian residents only. However, we are exploring international expansion in the future." }
    ];

    const [formData, setFormData] = useState({
        fullName: "", mobile: "", panNumber: "", email: "", profession: "",
        companyName: "", state: "", city: "", pincode: "",
        panCardFile: null, aadhaarCardFile: null, terms: false, aadharCardNumber: ""
    });

    const capture = () => {
        setIsCapturing(true);
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) setCapturedImage(imageSrc);
        setIsCapturing(false);
    };

    const retake = () => {
        setCapturedImage(null);
    };

    const handleChange = (e: React.ChangeEvent<any>) => {
        const target = e.target;
        const { name, type, value } = target;
      
        const finalValue =
          type === 'checkbox' ? target.checked : value;
      
        setFormData((prev) => ({
          ...prev,
          [name]: finalValue,
        }));
      };
      

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        const file = files && files.length > 0 ? files[0] : null;
        setFormData((prev) => ({ ...prev, [name]: file }));
    };

    const panCardValidation = (panNumber: string) =>
        /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panNumber.toUpperCase());

    const isFormValid = () => {
        return (
            formData.fullName.trim() !== "" &&
            formData.mobile.length === 10 &&
            panCardValidation(formData.panNumber) &&
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email) &&
            formData.profession !== "" &&
            formData.state !== "" &&
            formData.city !== "" &&
            formData.pincode !== "" &&
            formData.companyName !== "" &&
            formData.panCardFile !== null &&
            formData.aadhaarCardFile !== null &&
            formData.terms &&
            formData.aadharCardNumber !== ""
        );
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!isFormValid()) {
            setShowError(true);
            toast.error("Please fill all required fields and upload documents correctly");
            return;
        }

        const sendData = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value) sendData.append(key, value as any);
        });
        if (capturedImage) sendData.append("capturedImage", capturedImage);

        // Send form data to server (implement as needed)
        console.log("Form Data Submitted", formData);

        toast.success("Application submitted successfully!");

        // Reset form
        setFormData({
            fullName: "", mobile: "", panNumber: "", email: "", profession: "",
            companyName: "", state: "", city: "", pincode: "",
            panCardFile: null, aadhaarCardFile: null, terms: false, aadharCardNumber: ""
        });
        setCapturedImage(null);
    };

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const stateOptions = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
        "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
        "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
        "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh",
        "Lakshadweep", "Puducherry"
    ];

    return (
        <>
            <Navbar />
            <Container fluid className="mb-1 px-4 mx-4">
                <Row className="justify-content-center align-items-start py-5 px-3">
                    <Col md={7}>
                        <h2 className="fw-bold mb-3  "style={{color:'#0d53b7'}}>We are India's Leading Loan Distributors</h2>
                        <p className="text-muted mb-4 ">
                            Partner with us & expand your financial Services reach with Prefinn's Lending Products.
                        </p>
                        <h6>Complete your onboarding now :-</h6>
                        <Form onSubmit={handleSubmit} className="px-4 py-3 shadow rounded bg-white">
                            <Row className="g-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Full Name *</Form.Label>
                                        <Form.Control name="fullName" value={formData.fullName} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Mobile Number *</Form.Label>
                                        <Form.Control name="mobile" value={formData.mobile} onChange={handleChange} maxLength={10} required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Email *</Form.Label>
                                        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>State *</Form.Label>
                                        <Form.Select name="state" value={formData.state} onChange={handleChange} required>
                                            <option value="">Choose state</option>
                                            {stateOptions.map((state) => (
                                                <option key={state} value={state}>{state}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>City *</Form.Label>
                                        <Form.Control name="city" value={formData.city} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Pincode *</Form.Label>
                                        <Form.Control name="pincode" value={formData.pincode} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label className="mb-1">
                                            Select Profession <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Form.Select
                                            name="profession"
                                            value={formData.profession}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Choose profession</option>
                                            <option>Salaried</option>
                                            <option>Self-Employed</option>
                                            <option>Business Owner</option>
                                            <option>Insurance Agent</option>
                                            <option>Real Estate Professional</option>
                                            <option>Chartered Accountant</option>
                                            <option>Mutual Fund Distributor</option>
                                            <option>Other</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Company Name </Form.Label>
                                        <Form.Control name="companyName" value={formData.companyName} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Pan Number *</Form.Label>
                                        <Form.Control name="panNumber" value={formData.panNumber} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Aadhar Card Number *</Form.Label>
                                        <Form.Control name="aadharCardNumber" value={formData.aadharCardNumber} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label> Upload Pan Card *</Form.Label>
                                        <Form.Control type="file" name="panCardFile" onChange={handleFileChange} accept="image/*,.pdf" required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label> Upload Aadhaar Card  *</Form.Label>
                                        <Form.Control type="file" name="aadhaarCardFile" onChange={handleFileChange} accept="image/*,.pdf" required />
                                    </Form.Group>
                                </Col>
                               
                            </Row>

                            <Col md={6} className="mt-4">
  <h5 className="text-center mb-4">Capture a Selfie</h5>
  <div className="d-flex flex-column align-items-center">
    {capturedImage ? (
      <div className="text-center">
        <img 
          src={capturedImage} 
          alt="Captured" 
          className="img-fluid rounded mb-3" 
          style={{ maxWidth: '220px' }}
        />
        <div className="d-grid gap-2">
          <Button variant="warning" onClick={retake} className="mb-2">
            Retake
          </Button>
        </div>
      </div>
    ) : (
      <div className="text-center">
        <div className="mx-auto" style={{ maxWidth: '420px' }}>
          <Webcam 
            ref={webcamRef} 
            screenshotFormat="image/jpeg"
            className="w-100 rounded"
            style={{ height: 'auto' }}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <Button variant="primary" onClick={capture}>
            Capture
          </Button>
        </div>
      </div>
    )}
    
    {/* Add the agreement checkbox */}
    <Col md={20}>
                                     <Form.Check
                                         type="checkbox"
                                        name="terms"
                                        checked={formData.terms}
                                         onChange={handleChange}
                                         className="mt-2"
                                         label={
                                             <>
                                                 I agree to the{" "}
                                                 <a href="/term-cond" target="_blank" rel="noopener noreferrer">
                                                     terms & conditions
                                                 </a>{" "}
                                                and{" "}
                                                 <a href="/privacy-pol" target="_blank" rel="noopener noreferrer">
                                                     privacy policy
                                                 </a>.
                                             </>
                                        }
                                        required
                                     />
                                 </Col>
  </div>
</Col>
<div className="d-flex justify-content-center mt-2">
  <Button type="submit" variant="success">Submit</Button>
</div>
                        </Form>
                    </Col>
                 
                {/* <Col md={5} className="d-flex align-items-center justify-content-center mt-5 mt-md-0">
                        <img
                            src="https://img.freepik.com/premium-vector/two-people-shake-hands-as-result-agreement-successful-cooperation_277904-4694.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
                            alt="Partner Visual"
                            className="img-fluid rounded"
                            style={{ maxHeight: "550px", width: "100%", objectFit: "contain" }}
                        />
                        
                    </Col> */}
                    <Col md={12} className="d-flex flex-column align-items-center mt-5">
  <img
    src="https://img.freepik.com/premium-vector/two-people-shake-hands-as-result-agreement-successful-cooperation_277904-4694.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
    alt="Partner Visual"
    className="img-fluid rounded mb-4" // Added mb-4 for spacing below image
    style={{ maxHeight: '550px', width: '100%', objectFit: 'contain' }}
  />
  <div className="text-center"> {/* Center the list and button */}
    <h2>Explore Partnership Opportunities</h2>
    <p className="lead">
      Discover the advantages of collaborating with us.
    </p>
    <ul className="list-unstyled mt-4">
      <li className="mb-2">
        <i className="bi bi-people-fill text-primary me-2"></i> **Expand Your Network:** Connect with a diverse range of professionals.
      </li>
      <li className="mb-2">
        <i className="bi bi-gear-fill text-success me-2"></i> **Joint Initiatives:** Participate in collaborative projects and ventures.
      </li>
      <li className="mb-2">
        <i className="bi bi-briefcase-fill text-warning me-2"></i> **Business Growth:** Unlock new avenues for expansion and revenue.
      </li>
      <li className="mb-2">
        <i className="bi bi-chat-dots-fill text-info me-2"></i> **Shared Knowledge:** Benefit from the collective expertise of our partners.
      </li>
      <li className="mb-2">
        <i className="bi bi-award-fill text-secondary me-2"></i> **Enhanced Credibility:** Strengthen your reputation through association.
      </li>
    </ul>
    <button className="btn btn-primary rounded-pill px-4 py-2">Learn More About Partnering</button>
  </div>
</Col>
                </Row>
            </Container>
              {/* Steps Section */}
  <section className="text-center mt-5">
                 <h1 className="fw-bold text-center mb-3 mt-4 text-xl md:text-2xl">
                                 <span
                                     style={{
                                         background: "#0d53b7",
                                         WebkitBackgroundClip: "text",
                                         WebkitTextFillColor: "transparent",
                                         backgroundClip: "text",
                                         color: "transparent",
                                         display: "inline-block",
                                         padding: "0.2rem 0.5rem",
                                         fontWeight: "800",
                                     }}
                                 >
                                  How To Become a Partner
                                 </span>
                             </h1>
                     <Row className="gy-4">
                        {steps.map((step, index) => (
                             <Col md={3} key={index}>
                                 <div className="bg-light p-4 rounded shadow h-100">
                                     <div className="display-1 text-primary opacity-25">
                                         {step.number}
                                     </div>
                                     <h5 className="fw-semibold text-primary">{step.title}</h5>
                                     <p className="text-muted small">{step.description}</p>
                                 </div>
                             </Col>
                         ))}
                     </Row>
                 </section>
                    
            {/* FAQ Section */}
            <section className="mt-5 mb-5">
                    <div className="ambak-container">
                        <div className="text-center mb-4 my-4">
                            <h2 className="fw-bold text-center mb-3 mt-4 text-xl md:text-2xl">
                                <span
                                    style={{
                                        background: "#0d53b7",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                        color: "transparent",
                                        display: "inline-block",
                                        padding: "0.2rem 0.5rem",
                                        fontWeight: "600",
                                    }}
                                >
                                    Partners FAQ
                                </span>
                            </h2>
                            <p className="text-center text-muted mb-3 text-sm">
                                Answers to some frequently asked questions about becoming a Prefinn
                                Partner.
                            </p>
                        </div>
                        <Row xs={1} md={2} className="g-4">
  {faqs.map((faq, index) => (
    <Col key={index}>
      <Card
        className="shadow-sm border-0"
        onClick={() => toggleFAQ(index)}
        style={{ cursor: "pointer" }}
      >
        <Card.Body className="p-2">
          <Card.Title className="fw-sm text-dark d-flex justify-content-between align-items-center fs-6">
            {faq.question}
            <span className="fs-5">{openFAQ === index ? "−" : "+"}</span>
          </Card.Title>
          {openFAQ === index && (
            <Card.Text className="text-muted fs-7 mt-2">
              {faq.answer}
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
                    </div>
                </section>
            <Footer />
            <ToastContainer />
        </>
    );
}