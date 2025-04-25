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
    // <main className="min-h-screen bg-background">
       <main className=" bg-white px-25">
     
      {/* <OfferBanner /> */}
      <Navbar />
      <HeroSection />
      <PartnerSection />
      <ProcessSection />
      <div className="bg-white">
        <div className="ambak-container">
          <EMICalculator />
        </div>
      </div>
      {/* <LoanOfferings />
      <RateBanner /> */}
      <div className="bg-white py-25">
        <div className="ambak-container">
          <ContactForm />
        </div>
      </div>
      {/* <BlogSection /> */}
      <Footer />
    </main>
  );
}













