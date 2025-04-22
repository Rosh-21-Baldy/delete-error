// real one 

// "use client";

// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import Image from "next/image";
// import Link from "next/link";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


// const ContactForm = () => {
//   const [formState, setFormState] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormState((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form submitted:", formState);
//     toast.success("Your details has been submitted successfully!", {
//       position: "top-right",
//       autoClose: 3000,
//     });
//     setFormState({ fullName: "", email: "", phone: "" });

//   };

//   return (
// <div className="bg-white">
//   <div
//     className="text-white rounded-lg p-4"
//     style={{ backgroundColor: "#ffffff" }}
//   >
//     <ToastContainer />

//     <div className="d-flex flex-row gap-6 items-start">
//       <div className="p-0 d-flex flex-column gap-3 w-full md:w-1/2">
//         {/* Horizontal Title and Subtitle */}
//         <div className="flex flex-row items-center gap-2 mb-2">
//           <h3 className="text-2xl font-bold text-primary m-0">
//             Drop Us a Message
//           </h3>
//           <span className="text-sm font-medium text-muted-foreground">
//             For Loan and Partner Query
//           </span>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <div>
//               <Label htmlFor="fullName" className="text-dark mb-1 block">
//                 Full Name
//               </Label>
//               <Input
//                 id="fullName"
//                 name="fullName"
//                 type="text"
//                 placeholder="Enter your full name"
//                 className="bg-white border-green-400 text-black placeholder:text-gray-500 rounded-md p-2"
//                 value={formState.fullName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div>
//               <Label htmlFor="email" className="text-black mb-1 block">
//                 Email Address
//               </Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 className="bg-white border-green-400 text-black placeholder:text-gray-500 rounded-md p-2"
//                 value={formState.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div>
//               <Label htmlFor="phone" className="text-black mb-1 block">
//                 Phone Number
//               </Label>
//               <div className="flex">
//                 <div className="bg-primary border border-green-400 rounded-l-md px-3 flex items-center text-white">
//                   +91
//                 </div>
//                 <Input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   placeholder="Enter your phone number"
//                   className="bg-white border-green-400 text-black placeholder:text-gray-500 rounded-r-md p-2 w-full"
//                   value={formState.phone}
//                   onChange={handleChange}
//                   required
//                   pattern="[0-9]{10}"
//                   title="Please enter a 10-digit phone number"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="border-2 border-success-600 text-primary rounded-md py-2 px-4 text-lg font-semibold hover:bg-success transition-all w-full mt-2"
//               >
//                 Submit
//               </button>
//             </div>

//             <p className="text-sm text-dark mt-2">
//               By clicking "Submit", you agree to our{" "}
//               <Link
//                 href="/term-cond"
//                 className="text-gray-500 underline hover:text-black"
//               >
//                 Terms & Conditions
//               </Link>
//               ,{" "}
//               <Link
//                 href="/privacy-pol"
//                 className="text-gray-500 underline hover:text-black"
//               >
//                 Privacy Policy
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>

//       {/* Side Image */}
//       <div className="hidden md:block p-3">
//         <Image
//           src="https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4983.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
//           alt="Contact us illustration"
//           width={550}
//           height={400}
//           className="h-auto"
//         />
//       </div>
//     </div>
//   </div>
// </div>

//   );
// };

// export default ContactForm;







































// diiffernt format 

// "use client";

// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ContactForm = () => {
//   const [formState, setFormState] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     occupation: ""
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormState((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form submitted:", formState);
//     toast.success("Your details have been submitted successfully!", {
//       position: "top-right",
//       autoClose: 3000,
//     });
//     setFormState({ 
//       fullName: "", 
//       email: "", 
//       phone: "", 
//       occupation: "" 
//     });
//   };

//   return (
//     <div className="bg-white">
//       <div className="text-white rounded-lg p-4" style={{ backgroundColor: "#ffffff" }}>
//         <ToastContainer />
//         <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
//           <div className="mb-6 text-center">
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">
//               Drop Us a Message
//             </h2>
//             <p className="text-gray-600">
//               For Loan and Partner Query
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Full Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   required
//                   placeholder="Enter Your Full Name"
//                   className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                   value={formState.fullName}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Occupation <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   name="occupation"
//                   required
//                   className="w-full px-4 py-2.5 border-2 border-gray-400 rounded-lg 
//                     focus:ring-2 focus:ring-blue-600 focus:border-blue-600 
//                     outline-none appearance-none bg-gray-50
//                     bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0QjU1NjMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPjwvc3ZnPg==')] 
//                     bg-no-repeat bg-[right_1rem_center] text-gray-900
//                     hover:border-gray-500 transition-colors"
//                   value={formState.occupation}
//                   onChange={handleChange}
//                 >
//                   <option value="" className="text-gray-500">Select Occupation</option>
//                   <option value="Salaried Employee" className="hover:bg-gray-100">Salaried Employee</option>
//                   <option value="Self-Employed" className="hover:bg-gray-100">Self-Employed</option>
//                   <option value="Business Owner" className="hover:bg-gray-100">Business Owner</option>
//                   <option value="Professional" className="hover:bg-gray-100">Professional</option>
//                   <option value="Retired" className="hover:bg-gray-100">Retired</option>
//                   <option value="Other" className="hover:bg-gray-100">Other</option>
//                 </select>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email Address <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   placeholder="john.doe@example.com"
//                   className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                   value={formState.email}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Phone Number <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">+91</span>
//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     placeholder="98765 43210"
//                     className="w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                     value={formState.phone}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
//               >
//                 Submit Query
//               </button>
//             </div>

//             <p className="text-xs text-gray-500 text-center mt-4">
//               By clicking "Submit Query", you agree to our<br />
//               <a href="/terms" className="text-blue-600 hover:underline">Terms & Conditions</a> and 
//               <a href="/privacy" className="text-blue-600 hover:underline"> Privacy Policy</a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;


























"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    toast.success("Your details have been submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
    setFormState({ fullName: "", email: "", phone: "" });
  };

  return (
    <div className="bg-white">
      <div className="rounded-lg p-8"> {/* Increased padding */}
        <ToastContainer />

        <div className="flex flex-col md:flex-row gap-8 items-start"> {/* Balanced gap */}
          {/* Form Section */}
          <div className="w-full md:w-1/2 space-y-8"> {/* Added vertical spacing */}
            {/* Header */}
            <div className="space-y-2"> {/* Tight header spacing */}
              <h3 className="text-3xl font-semibold text-gray-900 tracking-tight">
               Drop Us a Message
              </h3>
              <p className="text-lg text-gray-600">
              For Loan and Partner Query
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6"> {/* Consistent spacing */}
              {/* Full Name */}
              <div className="space-y-2">
                <Label className="text-gray-700 font-medium" htmlFor="fullName">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="py-3 px-4 border-gray-300 focus:ring-2 focus:ring-blue-500"
                  value={formState.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label className="text-gray-700 font-medium" htmlFor="email">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  className="py-3 px-4 border-gray-300 focus:ring-2 focus:ring-blue-500"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
  <Label className="text-gray-700 font-medium" htmlFor="phone">
    Phone Number
  </Label>
  <div className="flex items-center">
    <div className="inline-flex items-center px-4 py-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-md">
      +91
    </div>
    <Input
      id="phone"
      name="phone"
      type="tel"
      placeholder="98765 43210"
      className="py-3 px-4 border-gray-300 rounded-r-md rounded-l-none focus:ring-2 focus:ring-blue-500 focus:z-10 relative"
      value={formState.phone}
      onChange={handleChange}
      required
      pattern="[0-9]{10}"
      style={{ marginLeft: '-1px' }}
    />
  </div>
</div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-900 hover:bg-blue-900 text-white font-medium rounded-md transition-colors shadow-sm"
              >
                Submit 
              </button>

              {/* Legal Text */}
              <p className="text-sm text-gray-500 text-center mt-6 leading-relaxed">
                By submitting, you acknowledge our{" "}
                <Link href="/terms" className="text-blue-900 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-900 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </div>

          {/* Visual Spacer */}
          <div className="hidden md:block w-px bg-gray-200 h-[600px] mx-8" />

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-8">
            <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4983.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
                alt="Financial consultation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;