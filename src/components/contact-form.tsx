




// corrected code 



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
//     toast.success("Your details have been submitted successfully!", {
//       position: "top-right",
//       autoClose: 3000,
//     });
//     setFormState({ fullName: "", email: "", phone: "" });
//   };

//   return (
//     <div className="bg-white">
//       <div className="rounded-lg p-8"> {/* Increased padding */}
//         <ToastContainer />

//         <div className="flex flex-col md:flex-row gap-8 items-start"> {/* Balanced gap */}
//           {/* Form Section */}
//           <div className="w-full md:w-1/2 space-y-8">
//   {/* Header */}
//   <div className="space-y-2">
//     <h3 className="text-3xl font-bold text-blue-900 tracking-tight">
//       For Loan and Partner Query
//     </h3>
//     <p className="text-lg text-dark-600">Drop Us a Message</p>
//   </div>
//     <form onSubmit={handleSubmit} className="space-y-3">
//   {/* Full Name */}
//   <div className="flex items-center gap-0">
//     <label htmlFor="fullName" className="w-28 text-gray-700 font-medium">
//       Full Name
//     </label>
//     <input
//       id="fullName"
//       name="fullName"
//       type="text"
//       placeholder="Enter your full name"
//       className="flex-1 py-3 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//       value={formState.fullName}
//       onChange={handleChange}
//       required
//     />
//   </div>

//   {/* Email */}
//   <div className="flex items-center gap-0">
//     <label htmlFor="email" className="w-28 text-gray-700 font-medium">
//       E-mail
//     </label>
//     <input
//       id="email"
//       name="email"
//       type="email"
//       placeholder="Enter your email"
//       className="flex-1 py-3 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//       value={formState.email}
//       onChange={handleChange}
//       required
//     />
//   </div>

//   {/* Phone */}
//   <div className="flex items-center gap-0">
//     <label htmlFor="phone" className="w-28 text-gray-700 font-medium">
//       Mobile
//     </label>
//     <div className="flex flex-1 items-center">
//       <span className="inline-flex items-center px-4 py-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-md">
//         +91
//       </span>
//       <input
//         id="phone"
//         name="phone"
//         type="tel"
//         placeholder="98765 43210"
//         className="flex-1 py-3 px-4 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-blue-500 focus:z-10"
//         value={formState.phone}
//         onChange={handleChange}
//         required
//         pattern="[0-9]{10}"
//       />
//     </div>
//   </div>

//     {/* Submit Button */}
//     <div className="flex justify-center mt-4">
//   <button
//     type="submit"
//     className="py-2 px-6 bg-blue-900 hover:bg-green-600 text-white font-medium rounded-md transition-colors shadow-sm text-sm"
//   >
//     Submit
//   </button>
// </div>

//     {/* Legal Text */}
//     <p className="text-sm text-gray-500 text-center mt-6 leading-relaxed">
//       By submitting, you acknowledge our{" "}
//       <Link href="/term-cond" className="text-blue-900 hover:underline">
//         Terms of Service
//       </Link>{" "}
//       and{" "}
//       <Link href="privacy-pol" className="text-blue-900 hover:underline">
//         Privacy Policy
//       </Link>
//     </p>
//   </form>
// </div>


//           {/* Visual Spacer */}
//           <div className="hidden md:block w-px bg-gray-200 h-[600px] mx-8" />

//           {/* Image Section */}
//           <div className="w-full md:w-1/2 flex items-center justify-center p-8">
//             <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
//               <Image
//                 src="https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4983.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
//                 alt="Financial consultation"
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, 50vw"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;






// the responsive one 




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
    toast.success("Your details have been submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
    setFormState({ fullName: "", email: "", phone: "" });
  };

  return (
    <div className="bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ToastContainer />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Form Section */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-blue-900">
                For Loan and Partner Query
              </h3>
              <p className="text-lg fw-bold text-dark-600">Drop Us a Message</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <label htmlFor="fullName" className="w-28 text-gray-700 font-medium">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full flex-1 py-3 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  value={formState.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <label htmlFor="email" className="w-28 text-gray-700 font-medium">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full flex-1 py-3 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <label htmlFor="phone" className="w-28 text-gray-700 font-medium">
                  Mobile
                </label>
                <div className="w-full flex-1 flex items-center">
                  <span className="px-4 py-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-md">
                    +91
                  </span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="98765 43210"
                    className="w-full py-3 px-4 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-blue-500 focus:z-10"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="py-2 px-6 bg-blue-900 hover:bg-green-600 text-white font-medium rounded-md transition-colors shadow-sm text-sm"
                >
                  Submit
                </button>
              </div>

              {/* Legal */}
              <p className="text-sm text-gray-500 text-center mt-6 leading-relaxed">
                By submitting, you acknowledge our{" "}
                <Link href="/term-cond" className="text-blue-900 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy-pol" className="text-blue-900 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-80 sm:h-96 md:h-[500px] rounded-xl overflow-hidden shadow-md">
              <Image
                src="https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4983.jpg"
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




