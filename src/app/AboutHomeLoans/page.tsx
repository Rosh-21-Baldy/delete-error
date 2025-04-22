





// "use client";
// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";

// export default function AboutHomeLoans() {
//   const [formData, setFormData] = useState({
//     name: "",
//     // email: "",
//     mobile: "",
//     otp: "",
//     pan: "",
//     pincode: "",
//     loanAmount: "",
//     agree: false,
//     propertyType: "",
//     employmentType: "",
//     monthlyIncome: "",
//     city: "",
//   });

//   const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
//           if (!patterns.name.test(String(value))) error = "Minimum 3 characters required";
//           break;
//         case "email":
//           if (!patterns.email.test(String(value))) error = "Invalid email format";
//           break;
//         case "mobile":
//           if (!patterns.mobile.test(String(value))) error = "Invalid mobile number";
//           break;
//         case "otp":
//           if (!patterns.otp.test(String(value))) error = "6-digit OTP required";
//           break;
//         case "pan":
//           if (!patterns.pan.test(String(value))) error = "Invalid PAN format";
//           break;
//         case "pincode":
//           if (!patterns.pincode.test(String(value))) error = "6-digit pincode required";
//           break;
//         case "loanAmount":
//           if (!value) error = "Select a loan amount";
//           break;
//         case "agree":
//           if (!value) error = "You must agree to terms";
//           break;
//         case "propertyType":
//           if ((value as string).length < 3) error = "Property type is too short";
//           break;
//         case "employmentType":
//           if (!value) error = "Employment type is required";
//           break;
//         case "monthlyIncome":
//           if (!value) error = "Monthly income is required";
//           break;
//         case "city":
//           if (!value) error = "City is required";
//           break;
//       }
//     }

//     setErrors((prev) => ({ ...prev, [name]: error }));
//     return error === "";
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, type } = e.target;

//     let value: string | boolean;
//     if (type === "checkbox" && e.target instanceof HTMLInputElement) {
//       value = e.target.checked;
//     } else {
//       value = e.target.value;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       [name]: name === "pan" ? String(value).toUpperCase() : value,
//     }));

//     if (errors[name as keyof typeof errors]) validateField(name, value);
//   };

//   const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     validateField(name, value);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     let isValid = true;

//     Object.entries(formData).forEach(([name, value]) => {
//       const valid = validateField(name, value);
//       isValid = valid && isValid;
//     });

//     if (isValid) {
//       toast.success("🎉 Form submitted successfully!", { autoClose: 2500 });

//       setFormData({
//         name: "",
//         // email: "",
//         mobile: "",
//         otp: "",
//         pan: "",
//         pincode: "",
//         loanAmount: "",
//         agree: false,
//         propertyType: "",
//         employmentType: "",
//         monthlyIncome: "",
//         city: "",
//       });

//       setErrors({});
//     } else {
//       toast.error("Please correct the highlighted errors and try again.", { autoClose: 3000 });
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div
//         className="container-fluid py-5 px-3"
//         style={{
//           minHeight: "100vh",
//           backgroundImage: `url(/assets/freepik-home-bg.jpg)`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="bg-white shadow-lg rounded p-4 p-md-5 mx-auto" style={{ maxWidth: "1000px" }}>
//           <h4 className="text-center text-danger mb-4">Apply for Home Loan</h4>
//           <form onSubmit={handleSubmit}>
//             <div className="row g-3">
//               {[
//                 { label: "Full Name", name: "name" },
//                 { label: "Mobile Number", name: "mobile" },
//                 { label: "OTP", name: "otp" }, // ✅ OTP Field
//                 { label: "City", name: "city" },
//                 { label: "Pincode", name: "pincode" },
//                 { label: "Property Type", name: "propertyType" },
//                 { label: "PAN Number", name: "pan" },
//               ].map((field) => (
//                 <div className="col-md-6" key={field.name}>
//                   <label className="form-label small">
//                     {field.label} <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name={field.name}
//                     className={`form-control form-control-sm ${errors[field.name] && "is-invalid"}`}
//                     value={formData[field.name as keyof typeof formData] as string}
//                     placeholder={`Enter ${field.label.toLowerCase()}`}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   {errors[field.name] && <div className="invalid-feedback">{errors[field.name]}</div>}
//                 </div>
//               ))}

//               {/* Employment Type */}
//               <div className="col-md-6">
//                 <label className="form-label small">Employment Type <span className="text-danger">*</span></label>
//                 <select
//                   name="employmentType"
//                   className={`form-select form-select-sm ${errors.employmentType && "is-invalid"}`}
//                   value={formData.employmentType}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 >
//                   <option value="">Select</option>
//                   <option value="Salaried">Salaried</option>
//                   <option value="Self-Employed">Self-Employed</option>
//                   <option value="Retired">Retired</option>
//                 </select>
//                 {errors.employmentType && <div className="invalid-feedback">{errors.employmentType}</div>}
//               </div>

//               {/* Monthly Income */}
//               <div className="col-md-6">
//                 <label className="form-label small">Monthly Income <span className="text-danger">*</span></label>
//                 <input
//                   type="number"
//                   name="monthlyIncome"
//                   className={`form-control form-control-sm ${errors.monthlyIncome && "is-invalid"}`}
//                   value={formData.monthlyIncome}
//                   placeholder="Enter your monthly income"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.monthlyIncome && <div className="invalid-feedback">{errors.monthlyIncome}</div>}
//               </div>

//               {/* Loan Amount */}
//               <div className="col-md-6">
//                 <label className="form-label small">Loan Amount <span className="text-danger">*</span></label>
//                 <select
//                   name="loanAmount"
//                   className={`form-select form-select-sm ${errors.loanAmount && "is-invalid"}`}
//                   value={formData.loanAmount}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 >
//                   <option value="">Select</option>
//                   <option value="1L-5L">1L-5L</option>
//                   <option value="5L-10L">5L-10L</option>
//                   <option value="10L-20L">10L-20L</option>
//                   <option value="20L-50L">20L-50L</option>
//                   <option value="50L-1Cr">50L-1Cr</option>
//                   <option value="1Cr-5Cr">1Cr-5Cr</option>
//                   <option value=">5Cr">&gt;5Cr</option>
//                 </select>
//                 {errors.loanAmount && <div className="invalid-feedback">{errors.loanAmount}</div>}
//               </div>
//             </div>

//             {/* Checkbox */}
//             <div className="form-check mt-4">
//               <input
//                 type="checkbox"
//                 name="agree"
//                 className={`form-check-input ${errors.agree && "is-invalid"}`}
//                 checked={formData.agree}
//                 onChange={handleChange}
//               />
//               <label className="form-check-label">
//                 I agree to the{" "}
//                 <a href="/term-cond" className="text-danger" target="_blank">Terms & Conditions</a> and{" "}
//                 <a href="/privacy-pol" className="text-danger" target="_blank">Privacy Policy</a>
//               </label>
//               {errors.agree && <div className="invalid-feedback d-block">{errors.agree}</div>}
//             </div>

//             {/* Submit Button */}
//             <div className="text-center mt-4">
//               <button
//                 type="submit"
//                 className="btn btn-danger px-4 py-2"
//                 style={{ transition: "0.3s" }}
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
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

export default function AboutHomeLoans() {
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
          backgroundImage: `url(/assets/freepik-home-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white shadow-lg rounded p-4 p-md-5 mx-auto" style={{ maxWidth: "1000px" }}>
          <h4 className="text-center text-blue-900 mb-4">Apply for Home Loan</h4>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {[
                { label: "Full Name", name: "name" },
                { label: "Email Address", name: "email" },
                { label: "Mobile Number", name: "mobile" },
                { label: "OTP", name: "otp" },
                { label: "City", name: "city" },
                { label: "Pincode", name: "pincode" },
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

              {/* Occupation */}
              <div className="col-md-6">
                <label className="form-label small">
                  Occupation Type <span className="text-danger">*</span>
                </label>
                <select
                  name="occupation"
                  className={`form-select form-select-sm ${errors.occupation && "is-invalid"}`}
                  value={formData.occupation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Select</option>
                  <option value="Salaried">Salaried</option>
                  <option value="Self-employed">Self-employed</option>
                  <option value="Business">Business</option>
                  <option value="Retired">Retired</option>
                  <option value="Student">Student</option>
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
