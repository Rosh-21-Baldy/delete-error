

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Phone } from "lucide-react";
// import OfferBanner from "./offer-banner";
// import { useEffect } from "react";

// // Ripple hook
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
//       `}</style>
//       <nav
//         className="py-4 sticky top-0 z-50 shadow-sm"
//         style={{ backgroundColor: "rgb(250, 252, 253)" }}
//       >
//         <div className="ambak-container my-4 flex justify-between items-center">
//           {/* Logo */}
//           <Link href="/" className="flex items-center ripple">
//             <Image
//               src="https://www.prefinn.com/_next/static/media/logo.96e5ff96.png"
//               alt="Prefinn Logo"
//               width={0}
//               height={0}
//               className="h-12 w-100"
//               priority
//             />
//           </Link>

//           {/* Desktop navigation */}
//           <div className="hidden md:flex items-center space-x-12 ">
          
//             <Link
//               href="/"
//               className="text-dark text-fw font-medium text-decoration-none ripple"
//             >
//               Home
//             </Link>

//             <Link
//               href="/about-us"
//               className="text-dark text-fw font-medium text-decoration-none ripple"
//             >
//               About Us
//             </Link>

//             {/* Products dropdown */}
//             <div className="relative group">
//               <button className="flex items-center text-dark text-fw font-medium ">
//                 Products
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="ml-1 h-4 w-4"
//                 >
//                   <path d="m6 9 6 6 6-6" />
//                 </svg>
//               </button>
//               <div className="absolute left-0 w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
//                 <Link href="/homeloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
//                   Home-Loans
//                 </Link>
//                 <Link href="/personalloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
//                   Personal Loan
//                 </Link>
//                 <Link href="/businessloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
//                   Business Loan
//                 </Link>
//                 <Link href="/loanagainstproperty" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
//                   Loan Against Property
//                 </Link>
//                 <Link href="/workingCapitalloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
//                   Working Capital Loan
//                 </Link>
//               </div>
//             </div>

//             {/* Tools dropdown */}
//             <div className="relative group">
//               <button className="flex items-center text-dark text-fw font-medium">
//                 Tools
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="ml-1 h-4 w-4"
//                 >
//                   <path d="m6 9 6 6 6-6" />
//                 </svg>
//               </button>
//               <div className="absolute left-0 w-60 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
//                 <Link href="/emi-calculator" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
//                   EMI Calculator
//                 </Link>
//                 <Link href="/balance-transfer-calculator" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
//                   Balance Transfer Calculator
//                 </Link>
//               </div>
//             </div>

//             {/* Partners dropdown */}
//             {/* <div className="relative group">
//               <button className="flex items-center text-dark text-fw font-medium">
//                 Partners
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="ml-1 h-4 w-4"
//                 >
//                   <path d="m6 9 6 6 6-6" />
//                 </svg>
//               </button>
//               <div className="absolute left-0 w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
//                 <Link href="/corporate" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
//                   Corporate
//                 </Link>
//                 <Link href="/builder" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
//                   Builders
//                 </Link>
//               </div>
//             </div> */}
//           </div>

//           {/* Action buttons */}
//           <div>
//             <Link
//               href="/loan-apply"
//               className="text-dark rounded-md py-2 px-0 text-fw font-medium text-decoration-none ripple "
//             >
//               Apply For Loan
//             </Link>
//           </div>
//           <div>
//             <Link
//               href="/become-partner"
//               className="text-dark rounded-md py-2 px-0  text-fw font-medium text-decoration-none ripple"
//             >
//               Become A Partner
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


































































"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {  } from "lucide-react";
import OfferBanner from "./offer-banner";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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

const Navbar = () => {
  useRippleEffect();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [loginMessage, setLoginMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleLogin = async () => {
    setLoginStatus("submitting");
    setLoginMessage("Logging in...");
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
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

  useEffect(() => {
    if (showSuccessPopup) {
      const timer = setTimeout(() => {
        setShowSuccessPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessPopup]);

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

        /* Add this style to reduce the height of the shadow */
        .shadow-sm {
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* Reduced shadow height */
        }
      `}</style>
      <nav
        className="py-2 sticky top-0 z-50 shadow-sm"
        style={{ backgroundColor: "rgb(250, 252, 253)" }}
      >
        <div>
        <div className="ambak-container my-4 flex justify-between items-center mt-5">
          {/* Logo */}
          <Link href="/" className="flex items-center mr-8 ripple  ">
            <Image
              src="https://www.prefinn.com/_next/static/media/logo.96e5ff96.png"
              alt="Prefinn Logo"
              width={0}
              height={0}
              className="h-12 w-100"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-dark text-fw font-medium text-decoration-none ripple"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-dark text-fw font-medium text-decoration-none ripple"
            >
              About Us
            </Link>
            <div className="relative group">
              <button className="flex items-center text-dark text-fw font-medium">
                Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="absolute left-0 w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
                <Link
                  href="/homeloans"
                  className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple"
                >
                  Home-Loans
                </Link>
                <Link
                  href="/personalloans"
                  className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple"
                >
                  Personal Loan
                </Link>
                <Link
                  href="/businessloans"
                  className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple"
                >
                  Business Loan
                </Link>
                <Link
                  href="/loanagainstproperty"
                  className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple"
                >
                  Loan Against Property
                </Link>
                <Link
                  href="/workingCapitalloans"
                  className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple"
                >
                  Working Capital Loan
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-dark text-fw font-medium">
                Tools
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="absolute left-0 w-60 bg-white shadow-md rounded-md p-2 hidden group-hover:block" style={{ marginLeft: '20px' }}>
                <Link
                  href="/emi-calculator"
                  className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple"
                >
                  EMI Calculator
                </Link>
                <Link
                  href="/balance-transfer-calculator"
                  className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple"
                >
                  Balance Transfer Calculator
                </Link>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-4">
             <Link
              href="/loan-apply"
              className="text-dark rounded-md py-2 px-4 text-fw font-medium text-decoration-none ripple "
            >
              Apply For Loan
            </Link>
            <Link
              href="/become-partner"
              className="text-dark rounded-md py-2 px-4  text-fw font-medium text-decoration-none ripple"
            >
              Become A Partner
            </Link>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "ripple px-6",
                    "hover:bg-blue-500/20 hover:text-blue-400",
                    "transition-colors duration-200"
                  )}
                >
                  Login
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] p-0">
                <DialogHeader className="px-6 pt-6">
                  <DialogTitle>Login</DialogTitle>
                  <DialogDescription>
                  Login to your account to continue
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 px-6">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="col-span-3"
                      disabled={loginStatus === "submitting"}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="password" className="text-right">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="col-span-3"
                      disabled={loginStatus === "submitting"}
                    />
                  </div>
                </div>
                <div className="px-6 pb-6">
                  {loginMessage && (
                    <p
                      className={cn(
                        "text-sm text-center transition-colors duration-200",
                        loginStatus === "success" && !showSuccessPopup ? "text-green-500" : "text-red-500"
                      )}
                    >
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
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        </div>
      </nav>
      {/* Success Popup */}
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














































