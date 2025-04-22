// "use client";
// import React, { useState } from "react";
// import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function AboutBusinessLoans() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     otp: "",
//     pan: "",
//     pincode: "",
//     loanAmount: "",
//     agree: false,
//     businessName: "",
//     gstNumber: "",
//     turnover: "",
//     businessVintage: "",
//     city: "", // Added city
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     otp: "",
//     pan: "",
//     pincode: "",
//     loanAmount: "",
//     agree: "",
//     businessName: "",
//     gstNumber: "",
//     turnover: "",
//     businessVintage: "",
//   });

//   const patterns = {
//     name: /^[a-zA-Z ]{3,}$/,
//     email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//     mobile: /^[0-9]{10}$/,
//     otp: /^[0-9]{6}$/,
//     pan: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
//     pincode: /^[0-9]{6}$/,
//     gstNumber: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/,
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
//         case "loanAmount":
//           if (!value) error = "Please select a loan amount range";
//           break;
//         case "agree":
//           if (!value) error = "You must agree to terms";
//           break;
//         case "businessName":
//           if ((value as string).length < 3)
//             error = "Business name too short";
//           break;
//         case "gstNumber":
//           if (!patterns.gstNumber.test(String(value)))
//             error = "Invalid GST number";
//           break;
//         case "turnover":
//           if (!value) error = "Annual turnover is required";
//           break;
//         case "businessVintage":
//           if (!value) error = "Select business vintage";
//           break;
//       }
//     }

//     setErrors((prev) => ({ ...prev, [name]: error }));
//     return error === "";
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const target = e.target as HTMLInputElement;
//     const { name, value, type, checked } = target;
//     const val = type === "checkbox" ? checked : value;

//     setFormData((prev) => ({
//       ...prev,
//       [name]:
//         name === "pan" || name === "gstNumber" ? value.toUpperCase() : val,
//     }));

//     if (errors[name as keyof typeof errors]) validateField(name, val);
//   };

//   const handleBlur = (
//     e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
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
//         loanAmount: "",
//         agree: false,
//         businessName: "",
//         gstNumber: "",
//         turnover: "",
//         businessVintage: "",
//         city: "",
//       });
//     }
//   };

//   const toggleCard = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <>
//       <Navbar />
//       <div
//         className="container-fluid p-0"
//         style={{ fontFamily: "Arial, sans-serif", position: "relative" }}
//       >
//         {/* Banner Section */}
//         <div className="position-relative">
//           <img
//             src="/assets/new-business-loan-banner.jpg"
//             className="img-fluid w-100"
//             style={{ height: "100vh", objectFit: "cover" }}
//             alt="Business Loan"
//           />

//           {/* Form Container */}
//           <div
//             className="position-absolute"
//             style={{
//               top: "50%",
//               right: "5%",
//               transform: "translateY(-50%)",
//               width: "100%",
//               maxWidth: "500px",
//               background: "#ffffff",
//               borderRadius: "12px",
//               boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
//               padding: "24px",
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <h5 className="text-center text-danger mb-3">
//               Apply for Business Loan
//             </h5>

//             <form onSubmit={handleSubmit}>
//               {/* Full Name */}
//               <div className="mb-2">
//                 <label className="form-label small">
//                   Full Name <span className="text-danger">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   className={`form-control form-control-sm ${
//                     errors.name && "is-invalid"
//                   }`}
//                   placeholder="Enter your full name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.name && (
//                   <div className="invalid-feedback">{errors.name}</div>
//                 )}
//               </div>

//               {/* Mobile Number */}
//               <div className="mb-2">
//                 <label className="form-label small">
//                   Mobile Number <span className="text-danger">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="mobile"
//                   className={`form-control form-control-sm ${
//                     errors.mobile && "is-invalid"
//                   }`}
//                   placeholder="Enter mobile number"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.mobile && (
//                   <div className="invalid-feedback">{errors.mobile}</div>
//                 )}
//               </div>

//               {/* City */}
//               <div className="mb-2">
//                 <label className="form-label small">
//                   City <span className="text-danger">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="city"
//                   className="form-control form-control-sm"
//                   placeholder="Enter your city"
//                   value={formData.city}
//                   onChange={handleChange}
//                 />
//               </div>

//               {/* Pincode */}
//               <div className="mb-2">
//                 <label className="form-label small">
//                   Pincode <span className="text-danger">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="pincode"
//                   className={`form-control form-control-sm ${
//                     errors.pincode && "is-invalid"
//                   }`}
//                   placeholder="Enter pincode"
//                   value={formData.pincode}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.pincode && (
//                   <div className="invalid-feedback">{errors.pincode}</div>
//                 )}
//               </div>

//               {/* Business Name */}
//               <div className="mb-2">
//                 <label className="form-label small">
//                   Business Name <span className="text-danger">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="businessName"
//                   className={`form-control form-control-sm ${
//                     errors.businessName && "is-invalid"
//                   }`}
//                   placeholder="Enter your business name"
//                   value={formData.businessName}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.businessName && (
//                   <div className="invalid-feedback">
//                     {errors.businessName}
//                   </div>
//                 )}
//               </div>

//               {/* GST Number */}
//               <div className="mb-2">
//                 <label className="form-label small">
//                   GST Number <span className="text-danger">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="gstNumber"
//                   className={`form-control form-control-sm ${
//                     errors.gstNumber && "is-invalid"
//                   }`}
//                   placeholder="Enter GST number"
//                   value={formData.gstNumber}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.gstNumber && (
//                   <div className="invalid-feedback">{errors.gstNumber}</div>
//                 )}
//               </div>

//               {/* Annual Turnover */}
//               <div className="mb-2">
//                 <label className="form-label small">
//                   Annual Turnover <span className="text-danger">*</span>
//                 </label>
//                 <select
//                   name="turnover"
//                   className={`form-select form-select-sm ${
//                     errors.turnover && "is-invalid"
//                   }`}
//                   value={formData.turnover}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 >
//                   <option value="">Select</option>
//                   <option value="Below 10L">Below 10L</option>
//                   <option value="10L-50L">10L - 50L</option>
//                   <option value="50L-1Cr">50L - 1Cr</option>
//                   <option value="1Cr-5Cr">1Cr - 5Cr</option>
//                   <option value="Above 5Cr">Above 5Cr</option>
//                 </select>
//                 {errors.turnover && (
//                   <div className="invalid-feedback">{errors.turnover}</div>
//                 )}
//               </div>

//               {/* Business Vintage */}
//               <div className="mb-2">
//                 <label className="form-label small">
//                   Business Vintage <span className="text-danger">*</span>
//                 </label>
//                 <select
//                   name="businessVintage"
//                   className={`form-select form-select-sm ${
//                     errors.businessVintage && "is-invalid"
//                   }`}
//                   value={formData.businessVintage}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 >
//                   <option value="">Select</option>
//                   <option value="Less than 1 year">Less than 1 year</option>
//                   <option value="1-3 years">1 - 3 years</option>
//                   <option value="3-5 years">3 - 5 years</option>
//                   <option value="5+ years">More than 5 years</option>
//                 </select>
//                 {errors.businessVintage && (
//                   <div className="invalid-feedback">
//                     {errors.businessVintage}
//                   </div>
//                 )}
//               </div>
//     {/* Agree */}
//     <div className="mb-2 form-check">
//                   <input
//                     type="checkbox"
//                     name="agree"
//                     className={`form-check-input ${errors.agree && "is-invalid"}`}
//                     checked={formData.agree}
//                     onChange={handleChange}
//                     required
//                   />
//                   <label className="form-check-label">
//                     I agree to the{" "}
//                     <a href="/term-cond" target="_blank" className="text-danger">Terms & Conditions</a> and{" "}
//                     <a href="/privacy-pol" target="_blank" className="text-danger">Privacy Policy</a>
//                   </label>
//                   {errors.agree && <div className="invalid-feedback d-block">{errors.agree}</div>}
//                 </div>
//               {/* Submit */}
//               <div className="text-center mt-3">
//                   <button
//                     type="submit"
//                     className="bg-danger text-white px-3 py-1 rounded border-0"
//                     style={{ transition: "0.3s" }}
//                     onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
//                     onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
//                   >
//                     Submit
//                   </button>
//                 </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
//       <Footer />
//     </>
//   );
// }



















"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AboutBusinessLoans() {
  const [formData, setFormData] = useState({
    name: "",
    // email: "",
    mobile: "",
    otp: "",
    pan: "",
    pincode: "",
    loanAmount: "",
    agree: false,
    propertyType: "",
    employmentType: "",
    monthlyIncome: "",
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
        case "agree":
          if (!value) error = "You must agree to terms";
          break;
        case "propertyType":
          if ((value as string).length < 3) error = "Property type is too short";
          break;
        case "employmentType":
          if (!value) error = "Employment type is required";
          break;
        case "monthlyIncome":
          if (!value) error = "Monthly income is required";
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
        // email: "",
        mobile: "",
        otp: "",
        pan: "",
        pincode: "",
        loanAmount: "",
        agree: false,
        propertyType: "",
        employmentType: "",
        monthlyIncome: "",
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
          backgroundImage: `url(/assets/freepik-home-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white shadow-lg rounded p-4 p-md-5 mx-auto" style={{ maxWidth: "1000px" }}>
          <h4 className="text-center text-blue-900 mb-4">Apply for Business Loan</h4>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {[
                { label: "Full Name", name: "name" },
                { label: "Mobile Number", name: "mobile" },
                { label: "OTP", name: "otp" }, // ✅ OTP Field
                { label: "City", name: "city" },
                { label: "Pincode", name: "pincode" },
                { label: "Property Type", name: "propertyType" },
                { label: "PAN Number", name: "pan" },
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

              {/* Employment Type */}
              <div className="col-md-6">
                <label className="form-label small">Employment Type <span className="text-danger">*</span></label>
                <select
                  name="employmentType"
                  className={`form-select form-select-sm ${errors.employmentType && "is-invalid"}`}
                  value={formData.employmentType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Select</option>
                  <option value="Salaried">Salaried</option>
                  <option value="Self-Employed">Self-Employed</option>
                  <option value="Retired">Retired</option>
                </select>
                {errors.employmentType && <div className="invalid-feedback">{errors.employmentType}</div>}
              </div>

              {/* Monthly Income */}
              <div className="col-md-6">
                <label className="form-label small">Monthly Income <span className="text-danger">*</span></label>
                <input
                  type="number"
                  name="monthlyIncome"
                  className={`form-control form-control-sm ${errors.monthlyIncome && "is-invalid"}`}
                  value={formData.monthlyIncome}
                  placeholder="Enter your monthly income"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.monthlyIncome && <div className="invalid-feedback">{errors.monthlyIncome}</div>}
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
                  <option value="1L-5L">1L-5L</option>
                  <option value="5L-10L">5L-10L</option>
                  <option value="10L-20L">10L-20L</option>
                  <option value="20L-50L">20L-50L</option>
                  <option value="50L-1Cr">50L-1Cr</option>
                  <option value="1Cr-5Cr">1Cr-5Cr</option>
                  <option value=">5Cr">&gt;5Cr</option>
                </select>
                {errors.loanAmount && <div className="invalid-feedback">{errors.loanAmount}</div>}
              </div>
            </div>

            {/* Checkbox */}
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

            {/* Submit Button */}
            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn btn-primary px-4 py-2"
                style={{ transition: "0.3s" }}
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













