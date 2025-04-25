


// "use client";

// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import OfferBanner from "./offer-banner";
// import Link from "next/link";
// import Image from "next/image";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown } from "lucide-react"; // Import the down arrow icon

// const useRippleEffect = () => {
//   useEffect(() => {
//     const handleRipple = (e: MouseEvent) => {
//       const target = e.currentTarget as HTMLElement;
//       const circle = document.createElement("span");
//       circle.className = "ripple-effect";
//       const rect = target.getBoundingClientRect();
//       circle.style.left = `${e.clientX - rect.left}px`;
//       circle.style.top = `${e.clientY - rect.top}px`;
//       target.appendChild(circle);
//       setTimeout(() => circle.remove(), 600);
//     };

//     const rippleElements = document.querySelectorAll<HTMLElement>(".ripple");
//     rippleElements.forEach((el) => {
//       el.addEventListener("click", handleRipple);
//     });

//     return () => {
//       rippleElements.forEach((el) => {
//         el.removeEventListener("click", handleRipple);
//       });
//     };
//   }, []);
// };

// const Navbar = () => {
//   useRippleEffect();
//   const [open, setOpen] = useState(false);
//   const [hamburgerOpen, setHamburgerOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginStatus, setLoginStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
//   const [loginMessage, setLoginMessage] = useState("");
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);

//   const handleLogin = async () => {
//     setLoginStatus("submitting");
//     setLoginMessage("Logging in...");
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       if (email && password) {
//         setLoginStatus("success");
//         setLoginMessage("Login successful!");
//         setShowSuccessPopup(true);
//         setOpen(false);
//         setEmail("");
//         setPassword("");
//       } else {
//         setLoginStatus("error");
//         setLoginMessage("Invalid email or password.");
//       }
//     } catch (error) {
//       setLoginStatus("error");
//       setLoginMessage("An error occurred. Please try again.");
//     } finally {
//       if (loginStatus !== "success") {
//         setTimeout(() => {
//           setLoginStatus("idle");
//           setLoginMessage("");
//         }, 3000);
//       }
//     }
//   };

//   useEffect(() => {
//     if (showSuccessPopup) {
//       const timer = setTimeout(() => {
//         setShowSuccessPopup(false);
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [showSuccessPopup]);

//   return (
//     <>
//       <OfferBanner />
//       <style jsx global>{`
//         .ripple {
//           position: relative;
//           overflow: hidden;
//         }
//         .ripple-effect {
//           position: absolute;
//           border-radius: 50%;
//           transform: scale(0);
//           animation: ripple-animation 0.9s linear;
//           background-color: rgba(0, 150, 0, 0.4);
//           width: 100px;
//           height: 100px;
//           pointer-events: none;
//           z-index: 9999;
//         }
//         @keyframes ripple-animation {
//           to {
//             transform: scale(4);
//             opacity: 0;
//           }
//         }

//         .shadow-sm {
//           box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
//         }
//       `}</style>
//       <nav className="py-2 sticky top-0 z-50 shadow-sm" style={{ backgroundColor: "rgb(250, 252, 253)" }}>
//         <div>
//           <div className="ambak-container my-4 flex justify-between items-center mt-5">
//             <Link href="/" className="flex items-center mr-8 ripple">
//               <Image
//                 src="https://www.prefinn.com/_next/static/media/logo.96e5ff96.png"
//                 alt="Prefinn Logo"
//                 width={0}
//                 height={0}
//                 className="h-12 w-100"
//                 priority
//               />
//             </Link>

//             <div className="hidden md:flex items-center space-x-8">
//               <Link href="/" className="text-dark text-fw font-medium text-decoration-none ripple">Home</Link>
//               <Link href="/about-us" className="text-dark text-fw font-medium text-decoration-none ripple">About Us</Link>
//               <div className="relative group">
//                 <button className="flex items-center text-dark text-fw font-medium">
//                   Products
//                   <ChevronDown className="ml-1 h-4 w-4" /> {/* Down arrow icon */}
//                 </button>
//                 <div className="absolute left-0 w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
//                   <Link href="/homeloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">Home Loan</Link>
//                   <Link href="/loanagainstproperty" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">Loan Against Property</Link>
//                   <Link href="/workingCapitalloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">Working Capital Loan</Link>
//                   <Link href="/businessloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">Business Loan</Link>
//                   <Link href="/personalloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">Personal Loan</Link>

//                 </div>
//               </div>
//               <div className="relative group">
//                 <button className="flex items-center text-dark text-fw font-medium">
//                   Tools
//                   <ChevronDown className="ml-1 h-4 w-4" />  {/* Down arrow icon */}
//                 </button>
//                 <div className="absolute left-0 w-60 bg-white shadow-md rounded-md p-2 hidden group-hover:block" style={{ marginLeft: "20px" }}>
//                   <Link href="/emi-calculator" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">EMI Calculator</Link>
//                   <Link href="/balance-transfer-calculator" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">Balance Transfer Calculator</Link>
//                   <Link href="/cibilscore" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">Know Your Credit Score</Link>


//                 </div>
//               </div>
//             </div>

//             {/* Hamburger Icon */}
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={() => setHamburgerOpen(!hamburgerOpen)}
//                 className="focus:outline-none ripple px-2"
//                 aria-label="Toggle menu"
//               >
//                 <svg
//                   className="w-6 h-6 text-gray-800"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d={hamburgerOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//                 </svg>
//               </button>
//             </div>

//             <div className="flex items-center gap-4">
//               <Link href="/loan-apply" className="text-dark rounded-md py-2 px-4 text-fw font-medium text-decoration-none ripple">Apply For Loan</Link>
//               <Link href="/become-partner" className="text-dark rounded-md py-2 px-4 text-fw font-medium text-decoration-none ripple">Become A Partner</Link>
//               <Dialog open={open} onOpenChange={setOpen}>
//                 <DialogTrigger asChild>
//                   <Button
//                     variant="outline"
//                     className={cn("ripple px-6", "hover:bg-blue-500/20 hover:text-blue-400", "transition-colors duration-200")}
//                   >
//                     Login
//                   </Button>
//                 </DialogTrigger>
//                 <DialogContent className="sm:max-w-[425px] p-0">
//                   <DialogHeader className="px-6 pt-6">
//                     <DialogTitle>Login</DialogTitle>
//                     <DialogDescription>Login to your account to continue</DialogDescription>
//                   </DialogHeader>
//                   <div className="grid gap-4 py-4 px-6">
//                     <div className="grid grid-cols-4 items-center gap-4">
//                       <Label htmlFor="email" className="text-right">Email</Label>
//                       <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" disabled={loginStatus === "submitting"} />
//                     </div>
//                     <div className="grid grid-cols-4 items-center gap-4">
//                       <Label htmlFor="password" className="text-right">Password</Label>
//                       <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="col-span-3" disabled={loginStatus === "submitting"} />
//                     </div>
//                   </div>
//                   <div className="px-6 pb-6">
//                     {loginMessage && (
//                       <p className={cn("text-sm text-center transition-colors duration-200", loginStatus === "success" && !showSuccessPopup ? "text-green-500" : "text-red-500")}>
//                         {loginMessage}
//                       </p>
//                     )}
//                     <Button type="submit" onClick={handleLogin} className="w-full mt-4" disabled={loginStatus === "submitting"}>
//                       {loginStatus === "submitting" ? "Logging in..." : "Login"}
//                     </Button>
//                   </div>
//                 </DialogContent>
//               </Dialog>
//             </div>
//           </div>

//           {/* Mobile Menu Dropdown */}
//           {hamburgerOpen && (
//             <div className="md:hidden mt-4 bg-white shadow-md rounded-md p-4 space-y-2">
//               <Link href="/" className="block text-dark font-medium ripple">Home</Link>
//               <Link href="/about-us" className="block text-dark font-medium ripple">About Us</Link>
//               <div>
//                 <p className="font-medium text-dark mb-2">Products</p>
//                 <div className="space-y-1 pl-4">
//                   <Link href="/homeloans" className="block text-dark text-sm ripple">Home-Loan</Link>
//                   <Link href="/personalloans" className="block text-dark text-sm ripple">Personal Loan</Link>
//                   <Link href="/businessloans" className="block text-dark text-sm ripple">Business Loan</Link>
//                   <Link href="/loanagainstproperty" className="block text-dark text-sm ripple">Loan Against Property</Link>
//                   <Link href="/workingCapitalloans" className="block text-dark text-sm ripple">Working Capital Loan</Link>
//                 </div>
//               </div>
//               <div>
//                 <p className="font-medium text-dark mb-2">Tools</p>
//                 <div className="space-y-1 pl-4">
//                   <Link href="/emi-calculator" className="block text-dark text-sm ripple">EMI Calculator</Link>
//                   <Link href="/balance-transfer-calculator" className="block text-dark text-sm ripple">Balance Transfer Calculator</Link>
//                 </div>
//               </div>
//               <Link href="/loan-apply" className="block text-dark font-medium ripple">Apply For Loan</Link>
//               <Link href="/become-partner" className="block text-dark font-medium ripple">Become A Partner</Link>
//               <Button onClick={() => { setOpen(true); setHamburgerOpen(false); }} variant="outline" className={cn("w-full mt-2 ripple px-6", "hover:bg-blue-500/20 hover:text-blue-400", "transition-colors duration-200")}>
//                 Login
//               </Button>
//             </div>
//           )}
//         </div>
//       </nav>

//       <AnimatePresence>
//         {showSuccessPopup && (
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             transition={{ duration: 0.3 }}
//             className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg z-50"
//           >
//             Login successful!
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;


































// "use client";

// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import OfferBanner from "./offer-banner";
// import Link from "next/link";
// import Image from "next/image";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown } from "lucide-react";

// const useRippleEffect = () => {
//   useEffect(() => {
//     const handleRipple = (e: MouseEvent) => {
//       const target = e.currentTarget as HTMLElement;
//       const circle = document.createElement("span");
//       circle.className = "ripple-effect";
//       const rect = target.getBoundingClientRect();
//       circle.style.left = `${e.clientX - rect.left}px`;
//       circle.style.top = `${e.clientY - rect.top}px`;
//       target.appendChild(circle);
//       setTimeout(() => circle.remove(), 600);
//     };

//     const rippleElements = document.querySelectorAll<HTMLElement>(".ripple");
//     rippleElements.forEach((el) => {
//       el.addEventListener("click", handleRipple);
//     });

//     return () => {
//       rippleElements.forEach((el) => {
//         el.removeEventListener("click", handleRipple);
//       });
//     };
//   }, []);
// };

// const Navbar = () => {
//   useRippleEffect();
//   const [open, setOpen] = useState(false);
//   const [hamburgerOpen, setHamburgerOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginStatus, setLoginStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
//   const [loginMessage, setLoginMessage] = useState("");
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);

//   const handleLogin = async () => {
//     setLoginStatus("submitting");
//     setLoginMessage("Logging in...");
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       if (email && password) {
//         setLoginStatus("success");
//         setLoginMessage("Login successful!");
//         setShowSuccessPopup(true);
//         setOpen(false);
//         setEmail("");
//         setPassword("");
//       } else {
//         setLoginStatus("error");
//         setLoginMessage("Invalid email or password.");
//       }
//     } catch (error) {
//       setLoginStatus("error");
//       setLoginMessage("An error occurred. Please try again.");
//     } finally {
//       if (loginStatus !== "success") {
//         setTimeout(() => {
//           setLoginStatus("idle");
//           setLoginMessage("");
//         }, 3000);
//       }
//     }
//   };

//   useEffect(() => {
//     if (showSuccessPopup) {
//       const timer = setTimeout(() => {
//         setShowSuccessPopup(false);
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [showSuccessPopup]);

//   const closeMobileMenu = () => {
//     setHamburgerOpen(false); // Add this function to close the menu
//   };

//   return (
//     <>
//       <OfferBanner />
//       <style jsx global>{`
//         .ripple {
//           position: relative;
//           overflow: hidden;
//         }
//         .ripple-effect {
//           position: absolute;
//           border-radius: 50%;
//           transform: scale(0);
//           animation: ripple-animation 0.9s linear;
//           background-color: rgba(0, 150, 0, 0.4);
//           width: 100px;
//           height: 100px;
//           pointer-events: none;
//           z-index: 9999;
//         }
//         @keyframes ripple-animation {
//           to {
//             transform: scale(4);
//             opacity: 0;
//           }
//         }

//         .shadow-sm {
//           box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
//         }
//       `}</style>
//       <nav className="py-2 sticky top-0 z-50 shadow-sm" style={{ backgroundColor: "rgb(250, 252, 253)" }}>
//         <div>
//           <div className="ambak-container my-4 flex justify-between items-center mt-5">
//             <Link href="/" className="flex items-center mr-8 ripple" onClick={closeMobileMenu}>
//               <Image
//                 src="https://www.prefinn.com/_next/static/media/logo.96e5ff96.png"
//                 alt="Prefinn Logo"
//                 width={0}
//                 height={0}
//                 className="h-12 w-100"
//                 priority
//               />
//             </Link>

//             <div className="hidden md:flex items-center space-x-8">
//               <Link href="/" className="text-dark text-fw font-medium text-decoration-none ripple" onClick={closeMobileMenu}>Home</Link>
//               <Link href="/about-us" className="text-dark text-fw font-medium text-decoration-none ripple" onClick={closeMobileMenu}>About Us</Link>
//               <div className="relative group">
//                 <button className="flex items-center text-dark text-fw font-medium">
//                   Products
//                   <ChevronDown className="ml-1 h-4 w-4" />
//                 </button>
//                 <div className="absolute left-0 w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
//                   <Link href="/homeloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Home Loan</Link>
//                   <Link href="/loanagainstproperty" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Loan Against Property</Link>
//                   <Link href="/workingCapitalloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Working Capital Loan</Link>
//                   <Link href="/businessloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Business Loan</Link>
//                   <Link href="/personalloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Personal Loan</Link>
//                 </div>
//               </div>
//               <div className="relative group">
//                 <button className="flex items-center text-dark text-fw font-medium">
//                   Tools
//                   <ChevronDown className="ml-1 h-4 w-4" />
//                 </button>
//                 <div className="absolute left-0 w-60 bg-white shadow-md rounded-md p-2 hidden group-hover:block" style={{ marginLeft: "20px" }}>
//                   <Link href="/emi-calculator" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>EMI Calculator</Link>
//                   <Link href="/balance-transfer-calculator" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Balance Transfer Calculator</Link>
//                   <Link href="/cibilscore" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Know Your Credit Score</Link>
//                 </div>
//               </div>
//             </div>

//             {/* Hamburger Icon */}
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={() => setHamburgerOpen(!hamburgerOpen)}
//                 className="focus:outline-none ripple px-2"
//                 aria-label="Toggle menu"
//               >
//                 <svg
//                   className="w-6 h-6 text-gray-800"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d={hamburgerOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//                 </svg>
//               </button>
//             </div>

//             <div className="flex items-center gap-4">
//               <Link href="/loan-apply" className="text-dark rounded-md py-2 px-4 text-fw font-medium text-decoration-none ripple" onClick={closeMobileMenu}>Apply For Loan</Link>
//               <Link href="/become-partner" className="text-dark rounded-md py-2 px-4 text-fw font-medium text-decoration-none ripple" onClick={closeMobileMenu}>Become A Partner</Link>
//               <Dialog open={open} onOpenChange={setOpen}>
//                 <DialogTrigger asChild>
//                   <Button
//                     variant="outline"
//                     className={cn("ripple px-6", "hover:bg-blue-500/20 hover:text-blue-400", "transition-colors duration-200")}
//                   >
//                     Login
//                   </Button>
//                 </DialogTrigger>
//                 <DialogContent className="sm:max-w-[425px] p-0">
//                   <DialogHeader className="px-6 pt-6">
//                     <DialogTitle>Login</DialogTitle>
//                     <DialogDescription>Login to your account to continue</DialogDescription>
//                   </DialogHeader>
//                   <div className="grid gap-4 py-4 px-6">
//                     <div className="grid grid-cols-4 items-center gap-4">
//                       <Label htmlFor="email" className="text-right">Email</Label>
//                       <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" disabled={loginStatus === "submitting"} />
//                     </div>
//                     <div className="grid grid-cols-4 items-center gap-4">
//                       <Label htmlFor="password" className="text-right">Password</Label>
//                       <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="col-span-3" disabled={loginStatus === "submitting"} />
//                     </div>
//                   </div>
//                   <div className="px-6 pb-6">
//                     {loginMessage && (
//                       <p className={cn("text-sm text-center transition-colors duration-200", loginStatus === "success" && !showSuccessPopup ? "text-green-500" : "text-red-500")}>
//                         {loginMessage}
//                       </p>
//                     )}
//                     <Button type="submit" onClick={handleLogin} className="w-full mt-4" disabled={loginStatus === "submitting"}>
//                       {loginStatus === "submitting" ? "Logging in..." : "Login"}
//                     </Button>
//                   </div>
//                 </DialogContent>
//               </Dialog>
//             </div>
//           </div>

//           {/* Mobile Menu Dropdown */}
//           {hamburgerOpen && (
//             <div className="md:hidden mt-4 bg-white shadow-md rounded-md p-4 space-y-2">
//               <Link href="/" className="block text-dark font-medium ripple" onClick={closeMobileMenu}>Home</Link>
//               <Link href="/about-us" className="block text-dark font-medium ripple" onClick={closeMobileMenu}>About Us</Link>
//               <div>
//                 <p className="font-medium text-dark mb-2">Products</p>
//                 <div className="space-y-1 pl-4">
//                   <Link href="/homeloans" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Home-Loan</Link>
//                   <Link href="/personalloans" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Personal Loan</Link>
//                   <Link href="/businessloans" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Business Loan</Link>
//                   <Link href="/loanagainstproperty" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Loan Against Property</Link>
//                   <Link href="/workingCapitalloans" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Working Capital Loan</Link>
//                 </div>
//               </div>
//               <div>
//                 <p className="font-medium text-dark mb-2">Tools</p>
//                 <div className="space-y-1 pl-4">
//                   <Link href="/emi-calculator" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>EMI Calculator</Link>
//                   <Link href="/balance-transfer-calculator" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Balance Transfer Calculator</Link>
//                 </div>
//               </div>
//               <Link href="/loan-apply" className="block text-dark font-medium ripple" onClick={closeMobileMenu}>Apply For Loan</Link>
//               <Link href="/become-partner" className="block text-dark font-medium ripple" onClick={closeMobileMenu}>Become A Partner</Link>
//               <Button onClick={() => { setOpen(true); setHamburgerOpen(false); }} variant="outline" className={cn("w-full mt-2 ripple px-6", "hover:bg-blue-500/20 hover:text-blue-400", "transition-colors duration-200")}>
//                 Login
//               </Button>
//             </div>
//           )}
//         </div>
//       </nav>

//       <AnimatePresence>
//         {showSuccessPopup && (
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             transition={{ duration: 0.3 }}
//             className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg z-50"
//           >
//             Login successful!
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;





















// corrected one 


"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import OfferBanner from "./offer-banner";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const useRippleEffect = () => {
  useEffect(() => {
    const handleRipple = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const circle = document.createElement("span");
      circle.className = "ripple-effect";
      const rect = target.getBoundingClientRect();
      circle.style.left = `${e.clientX - rect.left}px`;
      circle.style.top = `${e.clientY - rect.top}px`;
      target.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    };

    const rippleElements = document.querySelectorAll<HTMLElement>(".ripple");
    rippleElements.forEach((el) => {
      el.addEventListener("click", handleRipple);
    });

    return () => {
      rippleElements.forEach((el) => {
        el.removeEventListener("click", handleRipple);
      });
    };
  }, []);
};

type LoginStatus = "idle" | "submitting" | "success" | "error";
type RegistrationStatus = "idle" | "submitting" | "success" | "error";

const Navbar = () => {
  useRippleEffect();
  const [open, setOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState<LoginStatus>("idle");
  const [loginMessage, setLoginMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false); // State for registration form
  const [registrationEmail, setRegistrationEmail] = useState("");
  const [registrationPassword, setRegistrationPassword] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState<RegistrationStatus>("idle");
  const [registrationMessage, setRegistrationMessage] = useState("");

  const handleLogin = async () => {
    setLoginStatus("submitting");
    setLoginMessage("Logging in...");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (email && password) {
        setLoginStatus("success");
        setLoginMessage("Login successful!");
        setShowSuccessPopup(true);
        setOpen(false);
        setEmail("");
        setPassword("");
      } else {
        setLoginStatus("error");
        setLoginMessage("Invalid email or password.");
      }
    } catch (error) {
      setLoginStatus("error");
      setLoginMessage("An error occurred. Please try again.");
    } finally {
      if (loginStatus !== "success") {
        setTimeout(() => {
          setLoginStatus("idle");
          setLoginMessage("");
        }, 3000);
      }
    }
  };

  const handleRegistration = async () => {
    setRegistrationStatus("submitting");
    setRegistrationMessage("Registering...");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (registrationEmail && registrationPassword) {
        setRegistrationStatus("success");
        setRegistrationMessage("Registration successful! You can now log in.");
        setTimeout(() => {
          setShowRegistration(false);
          setRegistrationStatus("idle");
          setRegistrationMessage("");
        }, 2000);
        setOpen(true); // Optionally go back to login after successful registration
        setRegistrationEmail("");
        setRegistrationPassword("");
      } else {
        setRegistrationStatus("error");
        setRegistrationMessage("Please enter a valid email and password.");
      }
    } catch (error) {
      setRegistrationStatus("error");
      setRegistrationMessage("An error occurred during registration. Please try again.");
    } finally {
      if (registrationStatus !== "success") {
        setTimeout(() => {
          setRegistrationStatus("idle");
          setRegistrationMessage("");
        }, 3000);
      }
    }
  };

  useEffect(() => {
    if (showSuccessPopup) {
      const timer = setTimeout(() => {
        setShowSuccessPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessPopup]);

  const closeMobileMenu = () => {
    setHamburgerOpen(false);
  };

  return (
    <>
      <OfferBanner />
      <style jsx global>{`
        .ripple {
          position: relative;
          overflow: hidden;
        }
        .ripple-effect {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple-animation 0.9s linear;
          background-color: rgba(0, 150, 0, 0.4);
          width: 100px;
          height: 100px;
          pointer-events: none;
          z-index: 9999;
        }
        @keyframes ripple-animation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        .shadow-sm {
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }
      `}</style>
      <nav className="py-2 sticky top-0 z-50 shadow-sm" style={{ backgroundColor: "rgb(250, 252, 253)" }}>
        <div>
          <div className="ambak-container my-4 flex justify-between items-center mt-5">
            <Link href="/" className="flex items-center mr-8 ripple" onClick={closeMobileMenu}>
              <Image
                src="https://www.prefinn.com/_next/static/media/logo.96e5ff96.png"
                alt="Prefinn Logo"
                width={0}
                height={0}
                className="h-12 w-100"
                priority
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-dark text-fw font-medium text-decoration-none ripple" onClick={closeMobileMenu}>Home</Link>
              <Link href="/about-us" className="text-dark text-fw font-medium text-decoration-none ripple" onClick={closeMobileMenu}>About Us</Link>
              <div className="relative group">
                <button className="flex items-center text-dark text-fw font-medium">
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
                  <Link href="/homeloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Home Loan</Link>
                  <Link href="/loanagainstproperty" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Loan Against Property</Link>
                  <Link href="/workingCapitalloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Working Capital Loan</Link>
                  <Link href="/businessloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Business Loan</Link>
                  <Link href="/personalloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Personal Loan</Link>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center text-dark text-fw font-medium">
                  Tools
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 w-60 bg-white shadow-md rounded-md p-2 hidden group-hover:block" style={{ marginLeft: "20px" }}>
                  <Link href="/emi-calculator" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>EMI Calculator</Link>
                  <Link href="/balance-transfer-calculator" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Balance Transfer Calculator</Link>
                  <Link href="/cibilscore" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Know Your Credit Score</Link>
                </div>
              </div>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setHamburgerOpen(!hamburgerOpen)}
                className="focus:outline-none ripple px-2"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={hamburgerOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/loan-apply" className="text-dark rounded-md py-2 px-4 text-fw font-medium text-decoration-none ripple" onClick={closeMobileMenu}>Apply For Loan</Link>
              <Link href="/become-partner" className="text-dark rounded-md py-2 px-4 text-fw font-medium text-decoration-none ripple" onClick={closeMobileMenu}>Become A Partner</Link>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("ripple px-6", "hover:bg-blue-500/20 hover:text-blue-400", "transition-colors duration-200")}
                  >
                    Login
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] p-0">
                  <DialogHeader className="px-6 pt-6">
                    <DialogTitle>{showRegistration ? "Customer Registration" : "Login"}</DialogTitle>
                    <DialogDescription>
                      {showRegistration ? "Register as a new customer" : "Login to your account to continue"}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4 px-6">
                    {showRegistration ? (
                      <>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="registration-email" className="text-right">Email</Label>
                          <Input
                            id="registration-email"
                            type="email"
                            value={registrationEmail}
                            onChange={(e) => setRegistrationEmail(e.target.value)}
                            className="col-span-3"
                            disabled={registrationStatus === "submitting"}
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="registration-password" className="text-right">Password</Label>
                          <Input
                            id="registration-password"
                            type="password"
                            value={registrationPassword}
                            onChange={(e) => setRegistrationPassword(e.target.value)}
                            className="col-span-3"
                            disabled={registrationStatus === "submitting"}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="email" className="text-right">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="col-span-3"
                            disabled={loginStatus === "submitting"}
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="password" className="text-right">Password</Label>
                          <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="col-span-3"
                            disabled={loginStatus === "submitting"}
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="px-6 pb-6">
                    {showRegistration ? (
                      <>
                        {registrationMessage && (
                          <p className={cn("text-sm text-center transition-colors duration-200", registrationStatus === "success" ? "text-green-500" : "text-red-500")}>
                            {registrationMessage}
                          </p>
                        )}
                        <Button
                          type="submit"
                          onClick={handleRegistration}
                          className="w-full mt-4"
                          disabled={registrationStatus === "submitting"}
                        >
                          {registrationStatus === "submitting" ? "Registering..." : "Register"}
                        </Button>
                        <p className="mt-2 text-sm text-center text-gray-500">
                          Already have an account?{" "}
                          <button type="button" className="text-blue-500 hover:underline" onClick={() => setShowRegistration(false)}>
                            Login
                          </button>
                        </p>
                      </>
                    ) : (
                      <>
                        {loginMessage && (
                          <p className={cn("text-sm text-center transition-colors duration-200", loginStatus === "success" && !showSuccessPopup ? "text-green-500" : "text-red-500")}>
                            {loginMessage}
                          </p>
                        )}
                        <Button
                          type="submit"
                          onClick={handleLogin}
                          className="w-full mt-4"
                          disabled={loginStatus === "submitting"}
                        >
                          {loginStatus === "submitting" ? "Logging in..." : "Login"}
                        </Button>
                        <p className="mt-2 text-sm text-center text-gray-500">
                          Don't have an account?{" "}
                          <button type="button" className="text-blue-500 hover:underline" onClick={() => setShowRegistration(true)}>
                            Register here
                          </button>
                        </p>
                      </>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {hamburgerOpen && (
            <div className="md:hidden mt-4 bg-white shadow-md rounded-md p-4 space-y-2">
              <Link href="/" className="block text-dark font-medium ripple" onClick={closeMobileMenu}>Home</Link>
              <Link href="/about-us" className="block text-dark font-medium ripple" onClick={closeMobileMenu}>About Us</Link>
              <div>
                <p className="font-medium text-dark mb-2">Products</p>
                <div className="space-y-1 pl-4">
                  <Link href="/homeloans" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Home-Loan</Link>
                  <Link href="/personalloans" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Personal Loan</Link>
                  <Link href="/businessloans" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Business Loan</Link>
                  <Link href="/loanagainstproperty" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Loan Against Property</Link>
                  <Link href="/workingCapitalloans" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Working Capital Loan</Link>
                </div>
              </div>
              <div>
                <p className="font-medium text-dark mb-2">Tools</p>
                <div className="space-y-1 pl-4">
                  <Link href="/emi-calculator" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>EMI Calculator</Link>
                  <Link href="/balance-transfer-calculator" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Balance Transfer Calculator</Link>
                </div>
              </div>
              <Link href="/loan-apply" className="block text-dark font-medium ripple" onClick={closeMobileMenu}>Apply For Loan</Link>
              <Link href="/become-partner" className="block text-dark font-medium ripple" onClick={closeMobileMenu}>Become A Partner</Link>
              <Button onClick={() => { setOpen(true); setHamburgerOpen(false); }} variant="outline" className={cn("w-full mt-2 ripple px-6", "hover:bg-blue-500/20 hover:text-blue-400", "transition-colors duration-200")}>
                Login
              </Button>
            </div>
          )}
        </div>
      </nav>

      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg z-50"
          >
            Login successful!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;




















// "use client";
// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import OfferBanner from "./offer-banner";
// import Link from "next/link";
// import Image from "next/image";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown } from "lucide-react";

// const useRippleEffect = () => {
//   useEffect(() => {
//     const handleRipple = (e: MouseEvent) => {
//       const target = e.currentTarget as HTMLElement;
//       const circle = document.createElement("span");
//       circle.className = "ripple-effect";
//       const rect = target.getBoundingClientRect();
//       circle.style.left = `${e.clientX - rect.left}px`;
//       circle.style.top = `${e.clientY - rect.top}px`;
//       target.appendChild(circle);
//       setTimeout(() => circle.remove(), 600);
//     };

//     const rippleElements = document.querySelectorAll<HTMLElement>(".ripple");
//     rippleElements.forEach((el) => {
//       el.addEventListener("click", handleRipple);
//     });

//     return () => {
//       rippleElements.forEach((el) => {
//         el.removeEventListener("click", handleRipple);
//       });
//     };
//   }, []);
// };

// type LoginStatus = "idle" | "submitting" | "success" | "error";
// type RegistrationStatus = "idle" | "submitting" | "success" | "error";

// const Navbar = () => {
//   useRippleEffect();
//   const [open, setOpen] = useState(false);
//   const [hamburgerOpen, setHamburgerOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginStatus, setLoginStatus] = useState<LoginStatus>("idle");
//   const [loginMessage, setLoginMessage] = useState("");
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);
//   const [showRegistration, setShowRegistration] = useState(false); // State for registration form
//   const [registrationEmail, setRegistrationEmail] = useState("");
//   const [registrationPassword, setRegistrationPassword] = useState("");
//   const [registrationStatus, setRegistrationStatus] = useState<RegistrationStatus>("idle");
//   const [registrationMessage, setRegistrationMessage] = useState("");

//   const handleLogin = async () => {
//     setLoginStatus("submitting");
//     setLoginMessage("Logging in...");
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       if (email && password) {
//         setLoginStatus("success");
//         setLoginMessage("Login successful!");
//         setShowSuccessPopup(true);
//         setOpen(false);
//         setEmail("");
//         setPassword("");
//       } else {
//         setLoginStatus("error");
//         setLoginMessage("Invalid email or password.");
//       }
//     } catch (error) {
//       setLoginStatus("error");
//       setLoginMessage("An error occurred. Please try again.");
//     } finally {
//       if (loginStatus !== "success") {
//         setTimeout(() => {
//           setLoginStatus("idle");
//           setLoginMessage("");
//         }, 3000);
//       }
//     }
//   };

//   const handleRegistration = async () => {
//     setRegistrationStatus("submitting");
//     setRegistrationMessage("Registering...");
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       if (registrationEmail && registrationPassword) {
//         setRegistrationStatus("success");
//         setRegistrationMessage("Registration successful! You can now log in.");
//         setTimeout(() => {
//           setShowRegistration(false);
//           setRegistrationStatus("idle");
//           setRegistrationMessage("");
//         }, 2000);
//         setOpen(true); // Optionally go back to login after successful registration
//         setRegistrationEmail("");
//         setRegistrationPassword("");
//       } else {
//         setRegistrationStatus("error");
//         setRegistrationMessage("Please enter a valid email and password.");
//       }
//     } catch (error) {
//       setRegistrationStatus("error");
//       setRegistrationMessage("An error occurred during registration. Please try again.");
//     } finally {
//       if (registrationStatus !== "success") {
//         setTimeout(() => {
//           setRegistrationStatus("idle");
//           setRegistrationMessage("");
//         }, 3000);
//       }
//     }
//   };

//   useEffect(() => {
//     if (showSuccessPopup) {
//       const timer = setTimeout(() => {
//         setShowSuccessPopup(false);
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [showSuccessPopup]);

//   const closeMobileMenu = () => {
//     setHamburgerOpen(false);
//   };

//   return (
//     <>
//       <OfferBanner />
//       <style jsx global>{`
//         .ripple {
//           position: relative;
//           overflow: hidden;
//         }
//         .ripple-effect {
//           position: absolute;
//           border-radius: 50%;
//           transform: scale(0);
//           animation: ripple-animation 0.9s linear;
//           background-color: rgba(0, 150, 0, 0.4);
//           width: 100px;
//           height: 100px;
//           pointer-events: none;
//           z-index: 9999;
//         }
//         @keyframes ripple-animation {
//           to {
//             transform: scale(4);
//             opacity: 0;
//           }
//         }

//         .shadow-sm {
//           box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
//         }
//       `}</style>
//       <nav className="py-2 sticky top-0 z-50 shadow-sm" style={{ backgroundColor: "rgb(250, 252, 253)" }}>
//         <div className="container mx-auto px-4"> {/* Added container for better responsiveness */}
//           <div className="flex justify-between items-center mt-2 md:mt-4"> {/* Adjusted margin-top */}
//             <Link href="/" className="flex items-center mr-4 md:mr-8 ripple" onClick={closeMobileMenu}> {/* Reduced right margin on mobile */}
//               <Image
//                 src="https://www.prefinn.com/_next/static/media/logo.96e5ff96.png"
//                 alt="Prefinn Logo"
//                 width={80}
//                 height={30} 
//                 className="h-auto w-auto" 
//                 priority
//               />
//             </Link>

//             <div className="hidden md:flex items-center space-x-4 md:space-x-8"> {/* Reduced horizontal spacing on mobile */}
//               <Link href="/" className="text-dark text-fw font-medium text-decoration-none ripple" onClick={closeMobileMenu}>Home</Link>
//               <Link href="/about-us" className="text-dark text-fw font-medium text-decoration-none ripple" onClick={closeMobileMenu}>About Us</Link>
//               <div className="relative group">
//                 <button className="flex items-center text-dark text-fw font-medium">
//                   Products
//                   <ChevronDown className="ml-1 h-4 w-4" />
//                 </button>
//                 <div className="absolute left-0 w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block z-10"> {/* Added z-10 to ensure it's above other elements */}
//                   <Link href="/homeloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Home Loan</Link>
//                   <Link href="/loanagainstproperty" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Loan Against Property</Link>
//                   <Link href="/workingCapitalloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Working Capital Loan</Link>
//                   <Link href="/businessloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Business Loan</Link>
//                   <Link href="/personalloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Personal Loan</Link>
//                 </div>
//               </div>
//               <div className="relative group">
//                 <button className="flex items-center text-dark text-fw font-medium">
//                   Tools
//                   <ChevronDown className="ml-1 h-4 w-4" />
//                 </button>
//                 <div className="absolute left-0 w-60 bg-white shadow-md rounded-md p-2 hidden group-hover:block z-10" style={{ marginLeft: "0" }}> {/* Adjusted marginLeft for better mobile positioning */}
//                   <Link href="/emi-calculator" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>EMI Calculator</Link>
//                   <Link href="/balance-transfer-calculator" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Balance Transfer Calculator</Link>
//                   <Link href="/cibilscore" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Know Your Credit Score</Link>
//                 </div>
//               </div>
//             </div>

//             {/* Hamburger Icon */}
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={() => setHamburgerOpen(!hamburgerOpen)}
//                 className="focus:outline-none ripple px-2"
//                 aria-label="Toggle menu"
//               >
//                 <svg
//                   className="w-6 h-6 text-gray-800"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d={hamburgerOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//                 </svg>
//               </button>
//             </div>

//             <div className="hidden md:flex items-center gap-2 md:gap-4"> {/* Reduced gap on mobile */}
//               <Link href="/loan-apply" className="text-dark rounded-md py-2 px-3 md:px-4 text-fw font-medium text-decoration-none ripple" onClick={closeMobileMenu}>Apply For Loan</Link>
//               <Link href="/become-partner" className="text-dark rounded-md py-2 px-3 md:px-4 text-fw font-medium text-decoration-none ripple" onClick={closeMobileMenu}>Become A Partner</Link>
//               <Dialog open={open} onOpenChange={setOpen}>
//                 <DialogTrigger asChild>
//                   <Button
//                     variant="outline"
//                     className={cn("ripple px-4 md:px-6 text-sm md:text-base", "hover:bg-blue-500/20 hover:text-blue-400", "transition-colors duration-200")}
//                   >
//                     Login
//                   </Button>
//                 </DialogTrigger>
//                 <DialogContent className="sm:max-w-[425px] p-0">
//                   <DialogHeader className="px-6 pt-6">
//                     <DialogTitle>{showRegistration ? "Customer Registration" : "Login"}</DialogTitle>
//                     <DialogDescription>
//                       {showRegistration ? "Register as a new customer" : "Login to your account to continue"}
//                     </DialogDescription>
//                   </DialogHeader>
//                   <div className="grid gap-4 py-4 px-6">
//                     {showRegistration ? (
//                       <>
//                         <div className="grid grid-cols-4 items-center gap-4">
//                           <Label htmlFor="registration-email" className="text-right">Email</Label>
//                           <Input
//                             id="registration-email"
//                             type="email"
//                             value={registrationEmail}
//                             onChange={(e) => setRegistrationEmail(e.target.value)}
//                             className="col-span-3"
//                             disabled={registrationStatus === "submitting"}
//                           />
//                         </div>
//                         <div className="grid grid-cols-4 items-center gap-4">
//                           <Label htmlFor="registration-password" className="text-right">Password</Label>
//                           <Input
//                             id="registration-password"
//                             type="password"
//                             value={registrationPassword}
//                             onChange={(e) => setRegistrationPassword(e.target.value)}
//                             className="col-span-3"
//                             disabled={registrationStatus === "submitting"}
//                           />
//                         </div>
//                       </>
//                     ) : (
//                       <>
//                         <div className="grid grid-cols-4 items-center gap-4">
//                           <Label htmlFor="email" className="text-right">Email</Label>
//                           <Input
//                             id="email"
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="col-span-3"
//                             disabled={loginStatus === "submitting"}
//                           />
//                         </div>
//                         <div className="grid grid-cols-4 items-center gap-4">
//                           <Label htmlFor="password" className="text-right">Password</Label>
//                           <Input
//                             id="password"
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="col-span-3"
//                             disabled={loginStatus === "submitting"}
//                           />
//                         </div>
//                       </>
//                     )}
//                   </div>
//                   <div className="px-6 pb-6">
//                     {showRegistration ? (
//                       <>
//                         {registrationMessage && (
//                           <p className={cn("text-sm text-center transition-colors duration-200", registrationStatus === "success" ? "text-green-500" : "text-red-500")}>
//                             {registrationMessage}
//                           </p>
//                         )}
//                         <Button
//                           type="submit"
//                           onClick={handleRegistration}
//                           className="w-full mt-4 text-sm md:text-base" 
//                           disabled={registrationStatus === "submitting"}
//                         >
//                           {registrationStatus === "submitting" ? "Registering..." : "Register"}
//                         </Button>
//                         <p className="mt-2 text-sm text-center text-gray-500">
//                           Already have an account?{" "}
//                           <button type="button" className="text-blue-500 hover:underline" onClick={() => setShowRegistration(false)}>
//                             Login
//                           </button>
//                         </p>
//                       </>
//                     ) : (
//                       <>
//                         {loginMessage && (
//                           <p className={cn("text-sm text-center transition-colors duration-200", loginStatus === "success" && !showSuccessPopup ? "text-green-500" : "text-red-500")}>
//                             {loginMessage}
//                           </p>
//                         )}
//                         <Button
//                           type="submit"
//                           onClick={handleLogin}
//                           className="w-full mt-4 text-sm md:text-base" 
//                           disabled={loginStatus === "submitting"}
//                         >
//                           {loginStatus === "submitting" ? "Logging in..." : "Login"}
//                         </Button>
//                         <p className="mt-2 text-sm text-center text-gray-500">
//                           Don't have an account?{" "}
//                           <button type="button" className="text-blue-500 hover:underline" onClick={() => setShowRegistration(true)}>
//                             Register here
//                           </button>
//                         </p>
//                       </>
//                     )}
//                   </div>
//                 </DialogContent>
//               </Dialog>
//             </div>
//           </div>
//                {/* Mobile Menu Dropdown */}
//           {hamburgerOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden mt-4 bg-white shadow-md rounded-md p-4 space-y-2"
//             >
//               <Link href="/" className="block text-dark font-medium ripple" onClick={closeMobileMenu}>Home</Link>
//               <Link href="/about-us" className="block text-dark font-medium ripple" onClick={closeMobileMenu}>About Us</Link>
//               <div>
//                 <p className="font-medium text-dark mb-2">Products</p>
//                 <div className="space-y-1 pl-4">
//                   <Link href="/homeloans" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Home Loan</Link>
//                   <Link href="/personalloans" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Personal Loan</Link>
//                   <Link href="/businessloans" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Business Loan</Link>
//                   <Link href="/loanagainstproperty" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Loan Against Property</Link>
//                   <Link href="/workingCapitalloans" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Working Capital Loan</Link>
//                 </div>
//               </div>
//               <div>
//                 <p className="font-medium text-dark mb-2">Tools</p>
//                 <div className="space-y-1 pl-4">
//                   <Link href="/emi-calculator" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>EMI Calculator</Link>
//                   <Link href="/balance-transfer-calculator" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Balance Transfer Calculator</Link>
//                   <Link href="/cibilscore" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Know Your Credit Score</Link>
//                 </div>
//               </div>
//               <Link href="/loan-apply" className="block text-dark font-medium ripple" onClick={closeMobileMenu}>Apply For Loan</Link>
//               <Link href="/become-partner" className="block text-dark font-medium ripple" onClick={closeMobileMenu}>Become A Partner</Link>
//               <Button onClick={() => { setOpen(true); setHamburgerOpen(false); }} variant="outline" className={cn("w-full mt-2 ripple px-6 text-sm md:text-base", "hover:bg-blue-500/20 hover:text-blue-400", "transition-colors duration-200")}>
//                 Login
//               </Button>
//             </motion.div>
//           )}
//         </div>
//       </nav>

//       <AnimatePresence>
//         {showSuccessPopup && (
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             transition={{ duration: 0.3 }}
//             className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg z-50 text-sm md:text-base"
//           >
//             Login successful!
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;


















