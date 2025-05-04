// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import Footer from "@/components/footer";
// import Navbar from "@/components/navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useForm } from "react-hook-form";

// export default function CibilScore() {
//   const [dob, setDob] = useState<Date | null>(null);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data: any) => {
//     const formData = {
//       ...data,
//       dob: dob ? formatDate(dob) : null,
//     };
//     console.log("Form Data Submitted:", formData);
//     // send to backend here
//   };

//   const formatDate = (date: Date) => {
//     const day = date.getDate().toString().padStart(2, "0");
//     const month = (date.getMonth() + 1).toString().padStart(2, "0");
//     const year = date.getFullYear();
//     return `${day}${month}${year}`;
//   };

//   return (
//     <>
//       <Navbar />
//       <Container className="bg-light py-4 py-md-5">
//         <Row className="justify-content-center">
//           <Col
//             xs={12}
//             md={10}
//             lg={8}
//             xl={7}
//             className="bg-white rounded shadow"
//           >
//             <Row className="g-8">
//               <Col
//                 md={5}
//                 className="text-white p-3 p-md-4 rounded-start"
//                 style={{ backgroundColor: "#483d8b" }}
//               >
//                 <div className="text-center">
//                   <img
//                     src="https://img.freepik.com/free-vector/modern-credit-score-scale-meter-concept-design_1017-53354.jpg?uid=R193913366&ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
//                     alt="Credit Score Gauge"
//                     className="img-fluid mb-2 mb-md-3"
//                     style={{ maxWidth: "150px", margin: "0 auto" }}
//                   />
//                   <h2 className="mb-2 mb-md-3 h5 h4-md">
//                     Get Your Credit Score & Report for Free, Forever!
//                   </h2>
//                 </div>
//                 <ul className="list-unstyled">
//                   <li className="mb-2">
//                     <i className="bi bi-check-circle-fill me-2"></i> Instant
//                     Results
//                   </li>
//                   <li className="mb-2">
//                     <i className="bi bi-check-circle-fill me-2"></i> No Hidden
//                     Fees
//                   </li>
//                   <li className="mb-2">
//                     <i className="bi bi-check-circle-fill me-2"></i> Secure &
//                     Confidential
//                   </li>
//                   <li className="mb-2">
//                     <i className="bi bi-check-circle-fill me-2"></i> No Impact
//                     on Your Credit Report
//                   </li>
//                 </ul>
//               </Col>
//               <Col md={7} className="p-3 p-md-4">
//                 <h3 className="mb-3" style={{ color: "#343a40" }}>
//                   Get your Credit Score Report
//                 </h3>
//                 <p className="text-muted small">
//                   <span className="fw-bold" style={{ color: "#dc3545" }}>
//                     5 Lac+
//                   </span>{" "}
//                   people have got their Credit Scores for{" "}
//                   <span className="fw-bold" style={{ color: "#dc3545" }}>
//                     FREE!
//                   </span>
//                 </p>
//                 <Form onSubmit={handleSubmit(onSubmit)}>
//                   <Row className="mb-3">
//                     <Col md={6}>
//                       <Form.Group controlId="formFullName">
//                         <Form.Label className="small">
//                           Full Name <span className="text-danger">*</span>
//                         </Form.Label>
//                         <Form.Control
//                           type="text"
//                           placeholder="Enter your full name"
//                           size="sm"
//                           {...register("fullName", {
//                             required: "Full Name is required",
//                           })}
//                         />
//                         {errors.fullName?.message && (
//                           <Form.Text className="text-danger">
//                             {errors.fullName.message.toString()}
//                           </Form.Text>
//                         )}
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group controlId="formDOB">
//                         <Form.Label className="small">
//                           DOB (DDMMYYYY) <span className="text-danger">*</span>
//                         </Form.Label>
//                         <DatePicker
//                           selected={dob}
//                           onChange={(date: Date | null) => setDob(date)}
//                           dateFormat="dd/MM/yyyy"
//                           placeholderText="DD/MM/YYYY"
//                           className={`form-control form-control-sm ${
//                             errors.dob ? "is-invalid" : ""
//                           }`}
//                         />
//                       </Form.Group>
//                     </Col>
//                   </Row>

//                   <Row className="mb-3">
//                     <Col md={6}>
//                       <Form.Group controlId="formMobile">
//                         <Form.Label className="small">
//                           +91 Mobile No. <span className="text-danger">*</span>
//                         </Form.Label>
//                         <Form.Control
//                           type="tel"
//                           placeholder="Enter your mobile number"
//                           size="sm"
//                           {...register("mobile", {
//                             required: "Mobile number is required",
//                             pattern: {
//                               value: /^[0-9]{10}$/,
//                               message: "Invalid mobile number",
//                             },
//                           })}
//                         />
//                         {errors.mobile?.message && (
//                           <Form.Text className="text-danger">
//                             {errors.mobile.message.toString()}
//                           </Form.Text>
//                         )}
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group controlId="formEmail">
//                         <Form.Label className="small">
//                           Email Address <span className="text-danger">*</span>
//                         </Form.Label>
//                         <Form.Control
//                           type="email"
//                           placeholder="Enter your email address"
//                           size="sm"
//                           {...register("email", {
//                             required: "Email address is required",
//                             pattern: {
//                               value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                               message: "Invalid email address",
//                             },
//                           })}
//                         />
//                         {errors.email?.message && (
//                           <Form.Text className="text-danger">
//                             {errors.email.message.toString()}
//                           </Form.Text>
//                         )}
//                       </Form.Group>
//                     </Col>
//                   </Row>

//                   <Form.Group className="mb-3" controlId="formPAN">
//                     <Form.Label className="small">
//                       PAN Card <span className="text-muted">(Optional)</span>
//                     </Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter your PAN card number"
//                       size="sm"
//                       {...register("pan")}
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-3" controlId="formTerms">
//                     <Form.Check
//                       type="checkbox"
//                       label={
//                         <span className="small">
//                           I agree to the{" "}
//                           <Link
//                             href="/term-cond"
//                             className="text-primary text-decoration-underline"
//                           >
//                             Terms and Conditions
//                           </Link>{" "}
                        
//                         </span>
//                       }
//                       {...register("terms", {
//                         required: "You must agree to the terms and conditions",
//                       })}
//                     />
//                     {errors.terms?.message && (
//                       <Form.Text className="text-danger">
//                         {errors.terms.message.toString()}
//                       </Form.Text>
//                     )}
//                   </Form.Group>

//                   <div className="d-grid">
//                     <Button
//                       variant="primary"
//                       type="submit"
//                       className="rounded-pill py-2"
//                       style={{ backgroundColor: "#483d8b", fontSize: "0.9rem" }}
//                     >
//                       Check Credit Score{" "}
//                       <i className="bi bi-arrow-right ms-2"></i>
//                     </Button>
//                   </div>
//                 </Form>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//       <Footer />
//     </>
//   );
// }
















"use client";

import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function CibilScore() {
  const [dob, setDob] = useState<Date | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const formData = {
      ...data,
      dob: dob ? formatDate(dob) : null,
    };
    console.log("Form Data Submitted:", formData);
    // send to backend here
  };

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}${month}${year}`;
  };

  return (
    <>
      <Navbar />
      <Container className="bg-light py-4 py-md-5">
        <Row className="justify-content-center">
          <Col xs={16} md={14} lg={12} xl={11} className="bg-white rounded shadow">
            <Row className="g-0 flex-md-row"> {/* Use flex-md-row for side-by-side on medium and up */}
              {/* Left Section */}
              <Col
                md={5}
                className="text-white p-4 d-flex flex-column justify-content-center rounded-start"
                style={{ backgroundColor: "#0d53b7" }}
              >
                <div className="text-center">
                  <img
                    src="https://img.freepik.com/free-vector/modern-credit-score-scale-meter-concept-design_1017-53354.jpg?uid=R193913366&ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
                    alt="Credit Score Gauge"
                    className="img-fluid mb-3"
                    style={{ maxWidth: "180px", margin: "0 auto" }}
                  />
                  <h2 className="h5 mb-3">
                    Get Your Credit Score 
                  </h2>
                </div>
                <ul className="list-unstyled small ps-4">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill me-2"></i> Instant
                    Results
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill me-2"></i> No Hidden
                    Fees
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill me-2"></i> Secure &
                    Confidential
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill me-2"></i> No Impact
                    on Your Credit Report
                  </li>
                </ul>
              </Col>

              {/* Right Section - Form */}
              <Col md={7} className="p-4">
                <h3 className="mb-3" style={{ color: "#343a40" }}>
                  Get your Credit Score Report
                </h3>
                <p className="text-muted small">
                  Check Credit Scores for{" "}
                  <span className="fw-bold" style={{ color: "#dc3545" }}>
                    FREE!
                  </span>
                </p>

                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="formFullName">
                        <Form.Label className="small">
                          Full Name <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your full name"
                          size="sm"
                          {...register("fullName", {
                            required: "Full Name is required",
                          })}
                        />
                        {errors.fullName?.message && (
                          <Form.Text className="text-danger">
                            {errors.fullName.message.toString()}
                          </Form.Text>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formDOB">
                        <Form.Label className="small">
                          DOB (DDMMYYYY) <span className="text-danger">*</span>
                        </Form.Label>
                        <DatePicker
                          selected={dob}
                          onChange={(date: Date | null) => setDob(date)}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="DD/MM/YYYY"
                          className={`form-control form-control-sm ${
                            errors.dob ? "is-invalid" : ""
                          }`}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="formMobile">
                        <Form.Label className="small">
                          +91 Mobile No. <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Enter your mobile number"
                          size="sm"
                          {...register("mobile", {
                            required: "Mobile number is required",
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: "Invalid mobile number",
                            },
                          })}
                        />
                        {errors.mobile?.message && (
                          <Form.Text className="text-danger">
                            {errors.mobile.message.toString()}
                          </Form.Text>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formEmail">
                        <Form.Label className="small">
                          Email Address <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email address"
                          size="sm"
                          {...register("email", {
                            required: "Email address is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.email?.message && (
                          <Form.Text className="text-danger">
                            {errors.email.message.toString()}
                          </Form.Text>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="formPAN">
                    <Form.Label className="small">
                      PAN Card <span className="text-muted">(Optional)</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your PAN card number"
                      size="sm"
                      {...register("pan")}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formTerms">
                    <Form.Check
                      type="checkbox"
                      label={
                        <span className="small">
                          I agree to the{" "}
                          <Link
                            href="/term-cond"
                            className="text-primary text-decoration-underline"
                          >
                            Terms and Conditions
                          </Link>
                        </span>
                      }
                      {...register("terms", {
                        required: "You must agree to the terms and conditions",
                      })}
                    />
                    {errors.terms?.message && (
                      <Form.Text className="text-danger">
                        {errors.terms.message.toString()}
                      </Form.Text>
                    )}
                  </Form.Group>

                  <div className="d-grid">
                    <Button
                      variant="primary"
                      type="submit"
                      className="rounded-pill py-2"
                      style={{ backgroundColor: "#0d53b7", fontSize: "0.9rem" }}
                    >
                      Check Credit Score <i className="bi bi-arrow-right ms-2"></i>
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}





