
// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function WorkingCapitalLoans() {

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

 
// // EMI Calculator State for Personal Loan
// const [loanAmount, setLoanAmount] = useState(500000);
// const [tenure, setTenure] = useState(24);
// const [interestRate, setInterestRate] = useState(11.25);

// // EMI Calculation Formula for Personal Loan
// const calculateEMI = (P: number, r: number, n: number): number => {
//   const monthlyRate = r / (12 * 100); // converting annual rate to monthly decimal
//   return (P * monthlyRate * Math.pow(1 + monthlyRate, n)) /
//          (Math.pow(1 + monthlyRate, n) - 1);
// };

// const emi = calculateEMI(loanAmount, interestRate, tenure);
// const totalPayment = emi * tenure;
// const totalInterest = totalPayment - loanAmount;

//   return (
//     <>
     
//       <Navbar />
//       <div
// className="container-fluid p-0"
// style={{ fontFamily: "Arial, sans-serif", position: "relative" }}
// >

// <div className="position-relative">

//   <img
//     src="https://img.freepik.com/premium-photo/india-accounting-concept-showing-accountant-working-income-tax-forms-budget-planning-with-currency-notes-calculator-house-car-3d-models_466689-12354.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
//     className="img-fluid w-100"
//     style={{ height: "100vh", objectFit: "cover" }}
//     alt="personal Loan"
//   />


//   <div
//     className="position-absolute "
//     style={{
//       top: "20px", 
//       right: "20px",
//       width: "100%",
//       maxWidth: "550px",
//       maxHeight: "calc(100vh - 100px)", 
//       overflowY: "hidden",
//       background: "#FDFEFE",
//       borderRadius: "20px",
//       boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
//       padding: "20px",
//       display: "flex",
//       flexDirection: "column",
//     }}
//   >
//     <div className="border-0" style={{ background: "transparent" }}>
//       <h5 className="text-center text-danger mb-1">
//         Apply for Working Capital Loan 
//       </h5>

//       <form onSubmit={handleSubmit}>
        
//         <div className="mb-2">
//           <label className="form-label small ">
//             Name <span className="text-danger">*</span>
//           </label>
//           <input
//             type="text"
//             name="name"
//             className={`form-control form-control-sm ${errors.name && "is-invalid"
//               }`}
//             placeholder="Enter your full name"
//             value={formData.name}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             required
//           />
//           {errors.name && (
//             <div className="invalid-feedback">{errors.name}</div>
//           )}
//         </div>

        
//         <div className="mb-2">
//           <label className="form-label small">
//             Email <span className="text-danger">*</span>
//           </label>
//           <input
//             type="email"
//             name="email"
//             className={`form-control form-control-sm ${errors.email && "is-invalid"
//               }`}
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             required
//           />
//           {errors.email && (
//             <div className="invalid-feedback">{errors.email}</div>
//           )}
//         </div>

 
//         <div className="mb-2">
//           <label className="form-label small">
//             Mobile Number <span className="text-danger">*</span>
//           </label>
//           <div className="input-group">
//             <span className="input-group-text">+91</span>
//             <input
//               type="tel"
//               name="mobile"
//               className={`form-control form-control-sm ${errors.mobile && "is-invalid"
//                 }`}
//               placeholder="Enter your mobile number"
//               value={formData.mobile}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               maxLength={10}
//               required
//             />
//           </div>
//           {errors.mobile && (
//             <div className="invalid-feedback d-block">
//               {errors.mobile}
//             </div>
//           )}
//         </div>

    
//         <div className="mb-2">
//           <label className="form-label small">
//             OTP <span className="text-danger">*</span>
//           </label>
//           <input
//             type="text"
//             name="otp"
//             className={`form-control form-control-sm ${errors.otp && "is-invalid"
//               }`}
//             placeholder="Enter OTP"
//             value={formData.otp}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             maxLength={6}
//             required
//           />
//           {errors.otp && (
//             <div className="invalid-feedback d-block">{errors.otp}</div>
//           )}
//         </div>

      
//         <div className="mb-2">
//           <label className="form-label small">
//             PAN Card Number <span className="text-danger">*</span>
//           </label>
//           <input
//             type="text"
//             name="pan"
//             className={`form-control form-control-sm ${errors.pan && "is-invalid"
//               }`}
//             placeholder="Enter PAN card number"
//             value={formData.pan}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             maxLength={10}
//             required
//           />
//           {errors.pan && (
//             <div className="invalid-feedback">{errors.pan}</div>
//           )}
//         </div>

     
//         <div className="mb-2">
//           <label className="form-label small">
//             Enter Pincode <span className="text-danger">*</span>
//           </label>
//           <input
//             type="text"
//             name="pincode"
//             className={`form-control form-control-sm ${errors.pincode && "is-invalid"
//               }`}
//             placeholder="Enter pincode"
//             value={formData.pincode}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             maxLength={6}
//             required
//           />
//           {errors.pincode && (
//             <div className="invalid-feedback">{errors.pincode}</div>
//           )}
//         </div>

    
//         <div className="mb-2 form-check">
//           <input
//             type="checkbox"
//             name="agree"
//             className={`form-check-input ${errors.agree && "is-invalid"
//               }`}
//             checked={formData.agree}
//             onChange={handleChange}
//             required
//           />
//           <label className="form-check-label">
//             I agree to the{" "}
//             <a
//               href="/term-cond"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-danger"
//             >
//               Terms & Conditions
//             </a>{" "}
//             and{" "}
//             <a
//               href="/privacy-pol"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-danger"
//             >
//               Privacy Policy
//             </a>
//           </label>
//           {errors.agree && (
//             <div className="invalid-feedback d-block">
//               {errors.agree}
//             </div>
//           )}
//         </div>

        
//         <div className="text-center mt-auto">
//           <button
//             type="submit"
//             className="bg-danger text-white px-2 py-1 rounded border-0"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
// </div>
     
//       <Footer />
//     </>
//   );
// };































"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AboutWorkingCapitalLoans() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    otp: "",
    pan: "",
    pincode: "",
    loanAmount: "",
    occupation: "",
    agree: false,
    city: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
          if (!patterns.name.test(String(value))) error = "Minimum 3 characters required";
          break;
        case "email":
          if (!patterns.email.test(String(value))) error = "Invalid email format";
          break;
        case "mobile":
          if (!patterns.mobile.test(String(value))) error = "Invalid mobile number";
          break;
        case "otp":
          if (!patterns.otp.test(String(value))) error = "6-digit OTP required";
          break;
        case "pan":
          if (!patterns.pan.test(String(value))) error = "Invalid PAN format";
          break;
        case "pincode":
          if (!patterns.pincode.test(String(value))) error = "6-digit pincode required";
          break;
        case "loanAmount":
          if (!value) error = "Select a loan amount";
          break;
        case "occupation":
          if (!value) error = "Occupation is required";
          break;
        case "agree":
          if (!value) error = "You must agree to terms";
          break;
        case "city":
          if (!value) error = "City is required";
          break;
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error === "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type } = e.target;

    let value: string | boolean;
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      value = e.target.checked;
    } else {
      value = e.target.value;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: name === "pan" ? String(value).toUpperCase() : value,
    }));

    if (errors[name as keyof typeof errors]) validateField(name, value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;

    Object.entries(formData).forEach(([name, value]) => {
      const valid = validateField(name, value);
      isValid = valid && isValid;
    });

    if (isValid) {
      toast.success("🎉 Form submitted successfully!", { autoClose: 2500 });

      setFormData({
        name: "",
        email: "",
        mobile: "",
        otp: "",
        pan: "",
        pincode: "",
        loanAmount: "",
        occupation: "",
        agree: false,
        city: "",
      });

      setErrors({});
    } else {
      toast.error("Please correct the highlighted errors and try again.", { autoClose: 3000 });
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="container-fluid py-5 px-3"
        style={{
          minHeight: "100vh",
          backgroundImage: `url(/assets/freepik-workingcapital-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white shadow-lg rounded p-4 p-md-5 mx-auto" style={{ maxWidth: "1000px" }}>
          <h4 className="text-center text-blue-900 mb-4">Apply for Working Capital Loan</h4>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {[{ label: "Full Name", name: "name" },
                { label: "Email Address", name: "email" },
                { label: "Mobile Number", name: "mobile" },
                { label: "OTP", name: "otp" },
                { label: "City", name: "city" },
                { label: "Pincode", name: "pincode" },
                { label: "PAN Number", name: "pan" }
              ].map((field) => (
                <div className="col-md-6" key={field.name}>
                  <label className="form-label small">
                    {field.label} <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name={field.name}
                    className={`form-control form-control-sm ${errors[field.name] && "is-invalid"}`}
                    value={formData[field.name as keyof typeof formData] as string}
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors[field.name] && <div className="invalid-feedback">{errors[field.name]}</div>}
                </div>
              ))}

              {/* Occupation Type */}
              <div className="col-md-6">
                <label className="form-label small">Occupation Type <span className="text-danger">*</span></label>
                <select
                  name="occupation"
                  className={`form-select form-select-sm ${errors.occupation && "is-invalid"}`}
                  value={formData.occupation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Select</option>
                  <option value="Small Business">Small Business</option>
                  <option value="Trader">Trader</option>
                  <option value="Retail Shop">Retail Shop</option>
                  <option value="Service Provider">Service Provider</option>
                  <option value="Manufacturer">Manufacturer</option>
                </select>
                {errors.occupation && <div className="invalid-feedback">{errors.occupation}</div>}
              </div>

              {/* Loan Amount */}
              <div className="col-md-6">
                <label className="form-label small">Loan Amount <span className="text-danger">*</span></label>
                <select
                  name="loanAmount"
                  className={`form-select form-select-sm ${errors.loanAmount && "is-invalid"}`}
                  value={formData.loanAmount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Select</option>
                  <option value="50K-2L">₹50K - ₹2L</option>
                  <option value="2L-5L">₹2L - ₹5L</option>
                  <option value="5L-10L">₹5L - ₹10L</option>
                  <option value="10L-25L">₹10L - ₹25L</option>
                  <option value="25L-1Cr">₹25L - ₹1Cr</option>
                  <option value=">1Cr">Above ₹1Cr</option>
                </select>
                {errors.loanAmount && <div className="invalid-feedback">{errors.loanAmount}</div>}
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="form-check mt-4">
              <input
                type="checkbox"
                name="agree"
                className={`form-check-input ${errors.agree && "is-invalid"}`}
                checked={formData.agree}
                onChange={handleChange}
              />
              <label className="form-check-label">
                I agree to the{" "}
                <a href="/term-cond" className="text-blue-900" target="_blank">Terms & Conditions</a> and{" "}
                <a href="/privacy-pol" className="text-blue-900" target="_blank">Privacy Policy</a>
              </label>
              {errors.agree && <div className="invalid-feedback d-block">{errors.agree}</div>}
            </div>

            <div className="text-center mt-4">
            <button
  type="submit"
  className="px-4 py-2 bg-blue-900 text-white rounded transition hover:bg-green-600"
>
  Submit
</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <Footer />
    </>
  );
}
