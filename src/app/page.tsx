// import Navbar from "@/components/navbar";
// import OfferBanner from "@/components/offer-banner";
// import HeroSection from "@/components/hero-section";
// import PartnerSection from "@/components/partner-section";
// import ProcessSection from "@/components/process-section";
// import EMICalculator from "@/components/emi-calculator";
// import LoanOfferings from "@/components/loan-offerings";
// // import RateBanner from "@/components/rate-banner";
// import ContactForm from "@/components/contact-form";
// // import BlogSection from "@/components/blog-section";
// import Footer from "@/components/footer";

// export default function Home() {
//   return (
    
//     // <main className="min-h-screen bg-background">
//       //  <main className=" bg-white px-25">
//       <main className=" bg-white px-25 mt-0 mb-2">

     
//       {/* <OfferBanner /> */}
//       <Navbar />
//       <HeroSection />
//       <PartnerSection />
//       <ProcessSection />
//       <div className="bg-white">
//         <div className="ambak-container">
//           <EMICalculator />
//         </div>
//       </div>
//       {/* <LoanOfferings />
//       <RateBanner /> */}
//       <div className="bg-white py-25">
//         <div className="ambak-container">
//           <ContactForm />
//         </div>
//       </div>
//       {/* <BlogSection /> */}
//       <Footer />
//     </main>
//   );
// }









import Navbar from "@/components/navbar";
import OfferBanner from "@/components/offer-banner";
import HeroSection from "@/components/hero-section";
import PartnerSection from "@/components/partner-section";
import ProcessSection from "@/components/process-section";
import EMICalculator from "@/components/emi-calculator";
import LoanOfferings from "@/components/loan-offerings";
// import RateBanner from "@/components/rate-banner";
import ContactForm from "@/components/contact-form";
// import BlogSection from "@/components/blog-section";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main className="bg-white">
      
      <HeroSection />
      <PartnerSection />
      <ProcessSection />

      {/* Standardized Section: EMI Calculator */}
      <section className="py-5">
        <div className="container">
          <EMICalculator />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5">
        <div className="container">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}



