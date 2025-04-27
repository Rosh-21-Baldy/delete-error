
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
//           <div className="w-full md:w-1/2 space-y-8"> {/* Added vertical spacing */}
//             {/* Header */}
//             <div className="space-y-2"> {/* Tight header spacing */}
//               <h3 className="text-3xl font-semibold text-gray-900 tracking-tight">
//                Drop Us a Message
//               </h3>
//               <p className="text-lg text-gray-600">
//               For Loan and Partner Query
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6"> {/* Consistent spacing */}
//               {/* Full Name */}
//               <div className="space-y-2">
//                 <Label className="text-gray-700 font-medium" htmlFor="fullName">
//                   Full Name
//                 </Label>
//                 <Input
//                   id="fullName"
//                   name="fullName"
//                   type="text"
//                   placeholder="Enter your full name"
//                   className="py-3 px-4 border-gray-300 focus:ring-2 focus:ring-blue-500"
//                   value={formState.fullName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* Email */}
//               <div className="space-y-2">
//                 <Label className="text-gray-700 font-medium" htmlFor="email">
//                   Email Address
//                 </Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="name@company.com"
//                   className="py-3 px-4 border-gray-300 focus:ring-2 focus:ring-blue-500"
//                   value={formState.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* Phone Number */}
//               <div className="space-y-2">
//   <Label className="text-gray-700 font-medium" htmlFor="phone">
//     Phone Number
//   </Label>
//   <div className="flex items-center">
//     <div className="inline-flex items-center px-4 py-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-md">
//       +91
//     </div>
//     <Input
//       id="phone"
//       name="phone"
//       type="tel"
//       placeholder="98765 43210"
//       className="py-3 px-4 border-gray-300 rounded-r-md rounded-l-none focus:ring-2 focus:ring-blue-500 focus:z-10 relative"
//       value={formState.phone}
//       onChange={handleChange}
//       required
//       pattern="[0-9]{10}"
//       style={{ marginLeft: '-1px' }}
//     />
//   </div>
// </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full py-3 px-6 bg-blue-900 hover:bg-blue-900 text-white font-medium rounded-md transition-colors shadow-sm"
//               >
//                 Submit 
//               </button>

//               {/* Legal Text */}
//               <p className="text-sm text-gray-500 text-center mt-6 leading-relaxed">
//                 By submitting, you acknowledge our{" "}
//                 <Link href="/term-cond" className="text-blue-900 hover:underline">
//                   Terms of Service
//                 </Link>{" "}
//                 and{" "}
//                 <Link href="privacy-pol" className="text-blue-900 hover:underline">
//                   Privacy Policy
//                 </Link>
//               </p>
//             </form>
//           </div>

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
//           <div className="w-full md:w-1/2 space-y-8"> {/* Added vertical spacing */}
//             {/* Header */}
//             <div className="space-y-2"> {/* Tight header spacing */}
//               <h3 className="text-3xl font-semibold text-gray-900 tracking-tight">
//                Drop Us a Message
//               </h3>
//               <p className="text-lg text-gray-600">
//               For Loan and Partner Query
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6"> {/* Consistent spacing */}
//               {/* Full Name */}
//               <div className="space-y-2">
//                 <Label className="text-gray-700 font-medium" htmlFor="fullName">
//                   Full Name
//                 </Label>
//                 <Input
//                   id="fullName"
//                   name="fullName"
//                   type="text"
//                   placeholder="Enter your full name"
//                   className="py-3 px-4 border-gray-300 focus:ring-2 focus:ring-blue-500"
//                   value={formState.fullName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* Email */}
//               <div className="space-y-2">
//                 <Label className="text-gray-700 font-medium" htmlFor="email">
//                   Email Address
//                 </Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="name@company.com"
//                   className="py-3 px-4 border-gray-300 focus:ring-2 focus:ring-blue-500"
//                   value={formState.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* Phone Number */}
//               <div className="space-y-2">
//   <Label className="text-gray-700 font-medium" htmlFor="phone">
//     Phone Number
//   </Label>
//   <div className="flex items-center">
//     <div className="inline-flex items-center px-4 py-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-md">
//       +91
//     </div>
//     <Input
//       id="phone"
//       name="phone"
//       type="tel"
//       placeholder="98765 43210"
//       className="py-3 px-4 border-gray-300 rounded-r-md rounded-l-none focus:ring-2 focus:ring-blue-500 focus:z-10 relative"
//       value={formState.phone}
//       onChange={handleChange}
//       required
//       pattern="[0-9]{10}"
//       style={{ marginLeft: '-1px' }}
//     />
//   </div>
// </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full py-3 px-6 bg-blue-900 hover:bg-blue-900 text-white font-medium rounded-md transition-colors shadow-sm"
//               >
//                 Submit 
//               </button>

//               {/* Legal Text */}
//               <p className="text-sm text-gray-500 text-center mt-6 leading-relaxed">
//                 By submitting, you acknowledge our{" "}
//                 <Link href="/term-cond" className="text-blue-900 hover:underline">
//                   Terms of Service
//                 </Link>{" "}
//                 and{" "}
//                 <Link href="privacy-pol" className="text-blue-900 hover:underline">
//                   Privacy Policy
//                 </Link>
//               </p>
//             </form>
//           </div>

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
              <h3 className="text-3xl font-bold text-blue-900 tracking-tight">
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
                <Link href="/term-cond" className="text-blue-900 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="privacy-pol" className="text-blue-900 hover:underline">
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










