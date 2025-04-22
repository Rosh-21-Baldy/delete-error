





// "use client";
// import React, { useState } from "react";
// import { Form, Button, Card, Container, Row, Col, Alert, InputGroup } from "react-bootstrap";
// import Footer from "@/components/footer";
// import Navbar from "@/components/navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Link from "next/link";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const LoanEnquiry = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     loanType: "",
//     amount: "",
//     city: "",
//     state: "",
//     pinCode: "",
//   });

//   const [showError, setShowError] = useState(false); // For validation message

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;

//     // Ensure mobile is only digits and max 10 digits
//     if (name === "mobile") {
//       const digits = value.replace(/\D/g, "").slice(0, 10);
//       setFormData({ ...formData, [name]: digits });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }

//     // Hide error message when user starts filling fields
//     if (showError) setShowError(false);
//   };

//   // Check if all fields are filled
//   const isFormValid = Object.values(formData).every((field) => field.trim() !== "");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!isFormValid || formData.mobile.length !== 10) {
//       setShowError(true);
//       toast.error("Please fill all fields correctly!", { position: "top-right" });
//     } else {
//       const submittedData = {
//         ...formData,
//         mobile: "+91" + formData.mobile,
//       };
//       console.log("Form submitted:", submittedData);
//       toast.success("Loan enquiry submitted successfully!", { position: "top-right" });

//       // Clear form
//       setFormData({
//         fullName: "",
//         email: "",
//         mobile: "",
//         loanType: "",
//         amount: "",
//         city: "",
//         state: "",
//         pinCode: "",
//       });
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <Container className="my-5">
//         <Row>
//           <Col md={6}>
//             <h2 className="mb-4">
//               Loan <span className="fw-bold text-success"> Enquiry Form</span>
//             </h2>
//             {showError && <Alert variant="danger">⚠ Please fill all fields to proceed.</Alert>}
//             <Form onSubmit={handleSubmit}>
//               <Row>
//                 <Col md={6} className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="Full Name"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Col>
//                 <Col md={6} className="mb-3">
//                   <Form.Control
//                     type="email"
//                     placeholder="Email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Col>
//                 <Col md={6} className="mb-3">
//                   <InputGroup>
//                     <InputGroup.Text>+91</InputGroup.Text>
//                     <Form.Control
//                       type="text"
//                       placeholder="Mobile Number"
//                       name="mobile"
//                       value={formData.mobile}
//                       onChange={handleChange}
//                       required
//                     />
//                   </InputGroup>
//                 </Col>
//                 <Col md={6} className="mb-3">
//                   <Form.Select
//                     name="loanType"
//                     value={formData.loanType}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Loan Type</option>
//                     <option value="Personal Loan">Personal Loan</option>
//                     <option value="Home Loan">Home Loan</option>
//                     <option value="Car Loan">Car Loan</option>
//                     <option value="Car Loan">Loan Against property Loan</option>
//                     <option value="Car Loan">Business Loan</option>
//                     <option value="Car Loan">Working Capital Loan</option>
//                   </Form.Select>
//                 </Col>
//                 <Col md={6} className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="Amount"
//                     name="amount"
//                     value={formData.amount}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Col>
//                 <Col md={6} className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="City"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Col>
//                 <Col md={6} className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="State"
//                     name="state"
//                     value={formData.state}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Col>
//                 <Col md={6} className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="Pin Code"
//                     name="pinCode"
//                     value={formData.pinCode}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Col>
//               </Row>

//               <Button variant="success" className="w-100" type="submit">
//                 SUBMIT
//               </Button>
//             </Form>
//           </Col>

//           <Col md={6}>
//             <h3 className="mb-4 text-center">
//               How to apply for a loan with Prefinn?
//             </h3>
//             <Row>
//               {[
//                 "Fill out the online Apply Loan form on website and provide your Basic details..Call Prefinn Team or wait for Call Back.",
//                 "While discussing your loan requirements with the Prefinn team, feel free to select the Bank or NBFC of your choice based on you. ",
//                 "Once Your Loan Application is filed. Have a personal discussion with Bank Loan Manager and finalise the Loan Amount and Terms and conditions.",
//                 "Meet the Loan Manager in person, sign the original Loan Application file and take Disbursement of Loan Amount in your preferred Bank Account.",
//               ].map((text, index) => (
//                 <Col md={6} key={index} className="mb-3">
//                   <Card className="text-center p-3" style={{ minHeight: "200px" }}>
//                     <Card.Body>
//                       <div className="fs-4 fw-bold text-success mb-2">{index + 1}</div>
//                       <Card.Text>{text}</Card.Text>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               ))}
//             </Row>
//           </Col>
//         </Row>
//       </Container>

//       <ToastContainer />
//       <Footer />
//     </>
//   );
// };

// export default LoanEnquiry;

































"use client";
import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col, Alert, InputGroup } from "react-bootstrap";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoanEnquiry = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    loanType: "",
    amount: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const [showError, setShowError] = useState(false); // For validation message

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    // Ensure mobile is only digits and max 10 digits
    if (name === "mobile") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: digits });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Hide error message when user starts filling fields
    if (showError) setShowError(false);
  };

  // Check if all fields are filled
  const isFormValid = Object.values(formData).every((field) => field.trim() !== "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid || formData.mobile.length !== 10) {
      setShowError(true);
      toast.error("Please fill all fields correctly!", { position: "top-right" });
    } else {
      const submittedData = {
        ...formData,
        mobile: "+91" + formData.mobile,
      };
      console.log("Form submitted:", submittedData);
      toast.success("Loan enquiry submitted successfully!", { position: "top-right" });

      // Clear form
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        loanType: "",
        amount: "",
        city: "",
        state: "",
        pinCode: "",
      });
    }
  };

  return (
    <>
      <Navbar />
      <Container fluid className="my-5 px-3 px-md-5">
  <Row className="justify-content-center">
    <Col md={12} lg={10}>
      <h2 className="mb-4 text-center">
        <span className="fw-bold"> Loan Enquiry Form</span>
      </h2>

      {showError && (
        <Alert variant="danger" className="text-center">
          ⚠ Please fill all fields to proceed.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Row className="g-3">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </Col>

          <Col md={6}>
            <Form.Control
              type="email"
              placeholder="Email-ID"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Col>

          <Col md={6}>
  <Form.Group controlId="formMobile">
    <Form.Control
      type="text"
      placeholder="Mobile Number"
      name="mobile"
      value={formData.mobile}
      onChange={handleChange}
      required
      style={{ paddingLeft: "50px" }}
    />
    <div
      style={{
        position: "absolute",
        marginTop: "-30px",
        paddingLeft: "10px",
        color: "#6c757d",
        fontSize: "0.95rem",
      }}
    >
      +91
    </div>
  </Form.Group>
</Col>

          <Col md={6}>
            <Form.Select
              name="loanType"
              value={formData.loanType}
              onChange={handleChange}
              required
            >
              <option value="">Loan Type</option>
              <option value="Personal Loan">Personal Loan</option>
              <option value="Home Loan">Home Loan</option>
              <option value="Car Loan">Car Loan</option>
              <option value="Loan Against Property">Loan Against Property</option>
              <option value="Business Loan">Business Loan</option>
              <option value="Working Capital Loan">Working Capital Loan</option>
            </Form.Select>
          </Col>

          <Col md={6}>
  <Form.Select
    name="amount"
    value={formData.amount}
    onChange={handleChange}
    required
  >
    <option value="">Loan Amount</option>
    <option value="1L-5L">1L - 5L</option>
    <option value="5L-10L">5L - 10L</option>
    <option value="10L-20L">10L - 20L</option>
    <option value="20L-50L">20L - 50L</option>
    <option value="50L-1Cr">50L - 1Cr</option>
    <option value="1Cr-5Cr">1Cr - 5Cr</option>
    <option value=">5Cr">Above 5Cr</option>
  </Form.Select>
</Col>


          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md={6}>
  <Form.Select
    name="state"
    value={formData.state}
    onChange={handleChange}
    required
  >
    <option value="" disabled>
      State
    </option>
    {[
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli and Daman and Diu",
      "Delhi",
      "Jammu and Kashmir",
      "Ladakh",
      "Lakshadweep",
      "Puducherry",
    ].map((state) => (
      <option key={state} value={state}>
        {state}
      </option>
    ))}
  </Form.Select>
</Col>

          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Pin Code"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              required
            />
          </Col>

          <Col xs={12}>
            <Button variant="primary" className="w-100 mt-2" type="submit">
              SUBMIT
            </Button>
          </Col>
        </Row>
      </Form>
    </Col>
    <Col md={12} className="mx-auto">
  <h3 className="mb-4 mt-5 text-center">
    How to avail Loan from Prefinn
  </h3>
  <Row className="gx-3 gy-4">
    {[
      "Fill out the online Apply Loan form on website and provide your Basic details..Call Prefinn Team or wait for Call Back.",
      "While discussing your loan requirements with the Prefinn team, feel free to select the Bank or NBFC of your choice based on you.",
      "Once Your Loan Application is filed. Have a personal discussion with Bank Loan Manager and finalise the Loan Amount and Terms and conditions.",
      "Meet the Loan Manager in person, sign the original Loan Application file and take Disbursement of Loan Amount in your preferred Bank Account.",
      "Track your loan status through Prefinn's support system and follow up for any updates.",
      "Get post-loan support, EMI reminders, and account service from Prefinn's team.",
    ].map((text, index) => (
      <Col xs={12} sm={6} md={4} key={index}>
        <Card className="text-center p-3 h-100" style={{ minHeight: "170px" }}>
          <Card.Body>
            <div className="fs-4 fw-bold text-primary mb-2">{index + 1}</div>
            <Card.Text style={{ fontSize: "0.9rem" }}>{text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Col>


  </Row>
</Container>

      <ToastContainer />
      <Footer />
    </>
  );
};

export default LoanEnquiry;










































































