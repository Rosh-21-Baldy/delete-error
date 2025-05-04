

// updated code 

"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const logo = '/company.logo.jpg';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
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
  const [showRegistration, setShowRegistration] = useState(false);
  const [registrationEmail, setRegistrationEmail] = useState("");
  const [registrationPassword, setRegistrationPassword] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState<RegistrationStatus>("idle");
  const [registrationMessage, setRegistrationMessage] = useState("");
  const [loginMode, setLoginMode] = useState<"customer" | "partner" | null>(null);

  const handleLogin = async () => {
    setLoginStatus("submitting");
    setLoginMessage("Logging in...");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (email && password && loginMode) {
        setLoginStatus("success");
        setLoginMessage(`Login successful as ${loginMode}!`);
        setShowSuccessPopup(true);
        setOpen(false);
        setEmail("");
        setPassword("");
        setLoginMode(null);
      } else {
        setLoginStatus("error");
        setLoginMessage("Please select a login type and enter valid credentials.");
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
        setOpen(true);
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
      <nav className="py-0 sticky top-0 z-50 shadow-sm" style={{ backgroundColor: "rgb(250, 252, 253)" }}>
        <div>
          <div className="ambak-container my-4 flex justify-between items-center mt-5">
            {/* <Link href="/" className="flex items-center mr-8 ripple" onClick={closeMobileMenu}>
              <Image
                src="https://www.prefinn.com/_next/static/media/logo.96e5ff96.png"
                alt="Prefinn Logo"
                width={0}
                height={0}
                className="h-12 w-auto"
                priority
              />
            </Link> */}
         <Link href="/" className="flex items-center mr-8 ripple" onClick={closeMobileMenu}>
        <img src={logo} alt="Prefinn-Logo" height={20} width={120}/>
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
                  <Link href="/cibilscore" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Know Your CreditScore</Link>
                  <Link href="/eligibilitycheck" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Check Your Eligibility</Link>
                </div>
              </div>
            </div>

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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("ripple px-6", "hover:bg-blue-500/20 hover:text-blue-400", "transition-colors duration-200")}
                  >
                    Login
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem onClick={() => { setOpen(true); setLoginMode("customer"); }}>
                    Login as Customer
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => { setOpen(true); setLoginMode("partner"); }}>
                    Login as Partner
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {hamburgerOpen && (
          <div className="md:hidden mt-4 bg-white shadow-md rounded-md p-4 space-y-2">
            <Link href="/" className="block text-dark font-medium ripple" onClick={closeMobileMenu}>Home</Link>
            <Link href="/about-us" className="block text-dark font-medium ripple" onClick={closeMobileMenu}>About Us</Link>
            <div>
              <p className="font-medium text-dark mb-2">Products</p>
              <div className="space-y-1 pl-4">
                <Link href="/homeloans" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Home Loan</Link>
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
                <Link href="/cibilscore" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Know Your CreditScore</Link>
                <Link href="/eligibilitycheck" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Check Your Eligibility</Link>
               
              </div>
            </div>
            <Link href="/loan-apply" className="block text-dark font-medium ripple" onClick={closeMobileMenu}>Apply For Loan</Link>
            <Link href="/become-partner" className="block text-dark font-medium ripple" onClick={closeMobileMenu}>Become A Partner</Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className={cn("w-full mt-2 ripple px-6", "hover:bg-blue-500/20 hover:text-blue-400", "transition-colors duration-200")}>
                  Login
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem onClick={() => { setOpen(true); setHamburgerOpen(false); setLoginMode("customer"); }}>
                  Login as Customer
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => { setOpen(true); setHamburgerOpen(false); setLoginMode("partner"); }}>
                  Login as Partner
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </nav>

      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            key="successPopup"
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
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {showRegistration ? "Create an account" : `Login as ${loginMode === 'customer' ? 'Customer' : loginMode === 'partner' ? 'Partner' : ''}`}
            </DialogTitle>
            <DialogDescription>
              {showRegistration ? "Enter your email and password to create your account." : "Enter your email and password to log in."}
            </DialogDescription>
          </DialogHeader>

          {showRegistration ? (
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="registration-email">Email</Label>
                <Input
                  id="registration-email"
                  placeholder="your.email@example.com"
                  value={registrationEmail}
                  onChange={(e) => setRegistrationEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="registration-password">Password</Label>
                <Input
                  type="password"
                  id="registration-password"
                  value={registrationPassword}
                  onChange={(e) => setRegistrationPassword(e.target.value)}
                />
              </div>
              {registrationStatus === "error" && (
                <p className="text-red-500 text-sm">{registrationMessage}</p>
              )}
              {registrationStatus === "submitting" && (
                <p className="text-gray-500 text-sm">{registrationMessage}</p>
              )}
              {registrationStatus === "success" && (
                <p className="text-green-500 text-sm">{registrationMessage}</p>
              )}
            </div>
          ) : (
            <div className="grid gap-4 py-4">
              {loginMode && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </>
              )}
              {loginStatus === "error" && (
                <p className="text-red-500 text-sm">{loginMessage}</p>
              )}
              {loginStatus === "submitting" && (
                <p className="text-gray-500 text-sm">{loginMessage}</p>
              )}
              {loginStatus === "success" && (
                <p className="text-green-500 text-sm">{loginMessage}</p>
              )}
              {!loginMode && (
                <p className="text-yellow-500 text-sm">Please select a login type from the dropdown.</p>
              )}
            </div>
          )}

          <DialogFooter>
            <Button type="button" variant="secondary" onClick={() => { setOpen(false); setShowRegistration(false); setLoginStatus("idle"); setLoginMessage(""); setRegistrationStatus("idle"); setRegistrationMessage(""); }}>
              Cancel
            </Button>
            {showRegistration ? (
              <Button type="button" onClick={handleRegistration} disabled={registrationStatus === "submitting"}>
                Create Account
              </Button>
            ) : (
              <Button type="button" onClick={handleLogin} disabled={loginStatus === "submitting" || !loginMode}>
                Log In
              </Button>
            )}
            <div className="w-full text-center mt-2">
              {!showRegistration ? (
                <button
                  type="button"
                  className="text-sm text-blue-500 hover:underline"
                  onClick={() => setShowRegistration(true)}
                >
                  Create an account
                </button>
              ) : (
                <button
                  type="button"
                  className="text-sm text-blue-500 hover:underline"
                  onClick={() => setShowRegistration(false)}
                >
                  Already have an account? Log in
                </button>
              )}
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;

























// new code 


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
//   const [showRegistration, setShowRegistration] = useState(false);
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
//         setOpen(true);
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
//       <nav className="py-0 px-1 sticky top-0 z-50 shadow-sm" style={{ backgroundColor: "rgb(250, 252, 253)" }}>
//         <div className="container mx-auto">
//           <div className="flex justify-between items-center py-2">
//             <Link href="/" className="flex items-center mr-4 ripple" onClick={closeMobileMenu}>
//               <Image
//                 src="https://www.prefinn.com/_next/static/media/logo.96e5ff96.png"
//                 alt="Prefinn Logo"
//                 width={100}
//                 height={28}
//                 className="h-auto w-auto"
//                 priority
//               />
//             </Link>

//             <div className="hidden md:flex items-center justify-end flex-grow space-x-16"> {/* Use justify-end and flex-grow */}
//               <div className="flex space-x-28"> {/* Container for main links */}
//                 <Link href="/" className="text-dark text-fw font-medium text-decoration-none ripple" onClick={closeMobileMenu}>Home</Link>
//                 <Link href="/about-us" className="text-dark text-fw font-medium text-decoration-none ripple" onClick={closeMobileMenu}>About Us</Link>
//                 <div className="relative group">
//                   <button className="flex items-center text-dark text-fw font-medium">
//                     Products
//                     <ChevronDown className="ml-1 h-4 w-4" />
//                   </button>
//                   <div className="absolute left-0 mt-1 w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block z-10">
//                     <Link href="/homeloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Home Loan</Link>
//                     <Link href="/loanagainstproperty" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Loan Against Property</Link>
//                     <Link href="/workingCapitalloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Working Capital Loan</Link>
//                     <Link href="/businessloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Business Loan</Link>
//                     <Link href="/personalloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Personal Loan</Link>
//                   </div>
//                 </div>
//                 <div className="relative group">
//                   <button className="flex items-center text-dark text-fw font-medium">
//                     Tools
//                     <ChevronDown className="ml-1 h-4 w-4" />
//                   </button>
//                   <div className="absolute left-0 mt-1 w-60 bg-white shadow-md rounded-md p-2 hidden group-hover:block z-10" style={{ marginLeft: "0" }}>
//                     <Link href="/emi-calculator" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>EMI Calculator</Link>
//                     <Link href="/balance-transfer-calculator" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Balance Transfer Calculator</Link>
//                     <Link href="/cibilScore" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple" onClick={closeMobileMenu}>Know Your CreditScore</Link>
//                   </div>
//                 </div>
//                 <Link href="/loan-apply" className="text-dark rounded-md py-2 px-3 text-sm text-fw font-medium text-decoration-none ripple" style={{ whiteSpace: 'nowrap' }} onClick={closeMobileMenu}>Apply For Loan</Link>
//                 <Link href="/become-partner" className="text-dark rounded-md py-2 px-3 text-sm text-fw font-medium text-decoration-none ripple" onClick={closeMobileMenu}>Become A Partner</Link>
//               </div>
//               <Dialog open={open} onOpenChange={setOpen}>
//                 <DialogTrigger asChild>
//                   <Button
//                     variant="outline"
//                     className={cn("ripple px-3 py-2 text-sm ml-4", "hover:bg-blue-500/20 hover:text-blue-400", "transition-colors duration-200")} // Added ml-4
//                   >
//                     Login
//                   </Button>
//                 </DialogTrigger>
//                 <DialogContent className="sm:max-w-[425px] p-0">
//                   {/* ... Dialog Content ... */}
//                 </DialogContent>
//               </Dialog>
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
//           </div>

//           {/* Mobile Menu Dropdown */}
//           {hamburgerOpen && (
//             <div className="md:hidden mt-4 bg-white shadow-md rounded-md p-4 space-y-2">
//               {/* ... Mobile Menu Links ... */}
//               <div className="md:hidden mt-4 bg-white shadow-md rounded-md p-4 space-y-2">
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
//                   <Link href="/cibilScore" className="block text-dark text-sm ripple" onClick={closeMobileMenu}>Know Your CreditScore</Link>
//                 </div>
//               </div>
//               <Link href="/loan-apply" className="block text-dark font-medium ripple" onClick={closeMobileMenu}>Apply For Loan</Link>
//               <Link href="/become-partner" className="block text-dark font-medium ripple" onClick={closeMobileMenu}>Become A Partner</Link>
//               <Button onClick={() => { setOpen(true); setHamburgerOpen(false); }} variant="outline" className={cn("w-full mt-2 ripple px-6", "hover:bg-blue-500/20 hover:text-blue-400", "transition-colors duration-200")}>
//                 Login
//               </Button>
//             </div>
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