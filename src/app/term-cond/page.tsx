



// "use client";
// import Footer from "@/components/footer";
// import Navbar from "@/components/navbar";
// import React, { ReactNode } from "react";
// import { Container, Card } from "react-bootstrap";
// import { motion } from "framer-motion";

// // Gradient text component with proper TypeScript typing
// const GradientHeading = ({ children }: { children: ReactNode }) => (
//   <h2 className="fw-semibold text-center mb-4">
//     <motion.span
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       style={{
//         background: "linear-gradient(135deg, #28a745 0%, #0d6efd 100%)",
//         WebkitBackgroundClip: "text",
//         WebkitTextFillColor: "transparent",
//         backgroundClip: "text",
//         display: "inline-block",
//         padding: "0.3rem 1rem",
//         fontWeight: "700",
//         fontSize: "2rem",
//         letterSpacing: "-0.5px"
//       }}
//     >
//       {children}
//     </motion.span>
//   </h2>
// );

// const TermCondition = () => {
//   return (
//     <>
//       <Navbar />

//       {/* Main Content */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="py-5 bg-light min-vh-100"
//       >
//         <Container className="py-4">
//           <GradientHeading>Terms And Conditions</GradientHeading>

//           <motion.div
//             initial={{ scale: 0.98, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
//               <Card.Body className="p-4 p-md-5">
//                 {/* Introduction Section */}
//                 <motion.section 
//                   className="mb-5"
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   <p className="lead text-muted mb-4" style={{ lineHeight: "1.8" }}>
//                     These Terms and Conditions govern your use of the Prefinn website (
//                     <a 
//                       href="https://www.prefinn.com" 
//                       target="_blank" 
//                       rel="noopener noreferrer" 
//                       className="text-decoration-none fw-bold"
//                       style={{ color: "#0d6efd" }}
//                     >
//                       www.prefinn.com
//                     </a>
//                     ) and the services provided by Prefinn, a B2B platform connecting partners 
//                     with loan lead opportunities and financial institutions. By accessing or using our website, 
//                     you agree to be bound by these terms.
//                   </p>
//                 </motion.section>

//                 {/* Acceptance of Terms Section */}
//                 <motion.section 
//                   className="mb-5"
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   <GradientHeading>Acceptance of Terms</GradientHeading>
//                   <ol className="list-group list-group-numbered list-group-flush">
//                     <motion.li 
//                       className="list-group-item bg-transparent border-start-0 border-end-0 py-3"
//                       whileHover={{ x: 5 }}
//                     >
//                       <div className="ms-3">
//                         <p className="mb-0">
//                           Please read these terms and conditions (the Terms) carefully. By accessing
//                           and using our website and any content and features therein (including without
//                           limitation any games, widgets, embeddable media players and RSS feeds)
//                           (together, our Services), you indicate your acceptance of these Terms...
//                         </p>
//                       </div>
//                     </motion.li>
//                     <motion.li 
//                       className="list-group-item bg-transparent border-start-0 border-end-0 py-3"
//                       whileHover={{ x: 5 }}
//                     >
//                       <div className="ms-3">
//                         <p className="mb-0">
//                           If you do not accept these Terms, please do not access and/or use our Services.
//                         </p>
//                       </div>
//                     </motion.li>
//                     <motion.li 
//                       className="list-group-item bg-transparent border-start-0 border-end-0 py-3"
//                       whileHover={{ x: 5 }}
//                     >
//                       <div className="ms-3">
//                         <p className="mb-0">
//                           We may update these Terms at any time. Please review the Terms regularly...
//                         </p>
//                       </div>
//                     </motion.li>
//                   </ol>
//                 </motion.section>

//                 {/* Uses of Our Services Section */}
//                 <motion.section 
//                   className="mb-4"
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   <GradientHeading>Uses of Our Services</GradientHeading>
//                   <ol className="list-group list-group-numbered list-group-flush">
//                     <motion.li 
//                       className="list-group-item bg-transparent border-start-0 border-end-0 py-3"
//                       whileHover={{ x: 5 }}
//                     >
//                       <div className="ms-3">
//                         <p className="mb-0">
//                           You agree to use our Services for lawful purposes only and in a way that
//                           does not infringe the rights of or restrict or inhibit any person's use...
//                         </p>
//                       </div>
//                     </motion.li>
//                     <motion.li 
//                       className="list-group-item bg-transparent border-start-0 border-end-0 py-3"
//                       whileHover={{ x: 5 }}
//                     >
//                       <div className="ms-3">
//                         <p className="mb-0">
//                           In accessing our Services, you agree that you will only access its contents
//                           for your own personal and non-commercial use and not for any commercial...
//                         </p>
//                       </div>
//                     </motion.li>
//                   </ol>
//                 </motion.section>
//               </Card.Body>
//             </Card>
//           </motion.div>
//         </Container>
//       </motion.div>

//       <Footer />
//     </>
//   );
// };

// export default TermCondition; 




























"use client"
import React from 'react';
import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';


const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <>
    <Navbar/>
    <div
      className={cn(
        "min-h-screen bg-background text-foreground",
        "flex flex-col items-center justify-start py-12 px-4 sm:px-6 lg:px-8"
      )}
    >
      <div
        className={cn(
          "w-full max-w-4xl space-y-8",
          "bg-card rounded-xl shadow-lg p-6 sm:p-10",
          "border border-border"
        )}
      >
        <h1
          className={cn(
            "text-2xl sm:text-3xl font-bold text-center",
            "bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          )}
        >
          Terms and Conditions
        </h1>
        <p className="text-sm text-muted-foreground">
          THIS DIGITAL DOCUMENT, UPON ACCEPTANCE, IS INTENDED TO CREATE A LEGALLY BINDING AGREEMENT
          UNDER THE LAWS OF INDIA INCLUDING BUT NOT LIMITED TO THE INFORMATION TECHNOLOGY ACT, 2000
          AND THE RULES MADE THEREUNDER AND ACCORDINGLY CONTAINS A DISPUTE RESOLUTION CLAUSE. THE
          CHANNEL PARTNER (AS DEFINED BELOW) ACCESSING AND AGREEING TO THE TERMS HEREOF IS REQUIRED
          TO PERUSE THROUGH THIS DOCUMENT CAREFULLY BEFORE ACCEPTING TO THE SAME. THE CHANNEL
          PARTNER’S ACCEPTANCE OF THESE TERMS (AS DEFINED BELOW) BY WAY OF THE “I ACCEPT” TAB AT
          THE END OF THE WEB-PAGE WILL DEMONSTRATE UNEQUIVOCAL ACCEPTANCE OF THE OBLIGATIONS
          CONTAINED HEREIN.
        </p>

        <p className="text-base">
          These are the Terms & Conditions (“Terms”) of Prefinn Finserv Private Limited (hereinafter
          referred to as “Prefinn”) for the engagement of any person (whether a natural person or a
          juristic person), who is desirous of acting as the ‘Channel Partner’ (“Channel Partner”)
          (whether directly or through its Authorized Personnel in case the Channel Partner is a
          juristic person) for Prefinn and who has accepted these Terms by way of the [“I Accept” tab]
          at the end of this web-page, to access Prefinn’s proprietary digital platform including its
          software available at [www.prefinn.com] hereinafter collectively referred to as the “Prefinn
          Platform” and to avail the Services (as defined below).
        </p>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">1. Definitions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-medium">1.1 “Account”</span> means the account created by the Channel Partner on the
              Prefinn Platform, using the Credentials to avail the Services.
            </li>
            <li>
              <span className="font-medium">1.2 “Applicable Laws”</span> shall mean any statute, law, rules, regulation,
              ordinance, notification, order, decree, judgment, rule of common law, government approvals,
              bye-laws, or other governmental restrictions or any administrative order or notice in
              effect as of the date of these Terms or anytime thereafter.
            </li>
            <li>
              <span className="font-medium">1.3 “Authorized Personnel”</span> means, in case of a Channel Partner that is a
              juristic person, such natural person who is employed with the Channel Partner and is duly
              authorized by such Channel Partner to access the Account and procure the Services on
              behalf of the Channel Partner.
            </li>
            <li>
              <span className="font-medium">1.4 “Credentials”</span> means the credentials assigned to the Channel
              Partner, including the password, using which the Channel Partner can access the Account.
            </li>
            <li>
              <span className="font-medium">1.5 “Client”</span> means the person/customer for whom the Channel Partner is
              sourcing the Financial Products through the Prefinn Platform.
            </li>
            <li>
              <span className="font-medium">1.6 “Financial Products”</span> means loan(s) for which the Channel Partner
              facilitates/sources applications to be made to financial institutions/lenders on behalf of
              the Client.
            </li>
            <li>
              <span className="font-medium">1.7 “Intellectual Property Rights”</span> means all rights in and in relation to
              all intellectual property rights (including the Prefinn Platform) subsisting in the
              products, software, processes, etc., manufactured, developed, being developed, and/or
              proposed to be developed by Prefinn, including all patents, patent applications, moral
              rights, trademarks, trade names, service marks, service names, brand names, internet
              domain names and sub-domains, inventions, processes, formulae, copyrights, business and
              product names, logos, slogans, trade secrets, industrial models, designs, database rights,
              methodologies, computer programs (including all source codes, technical information,
              manufacturing, engineering and technical drawings, know-how, all pending applications for
              and registrations of patents, entity models, trademarks, service marks, copyrights,
              designs, and internet domain names and sub-domains, and all other intellectual property
              or similar proprietary rights of whatever nature (whether registered or not and
              including applications to register or rights to apply for registration) in each case
              anywhere in the world.
            </li>
            <li>
              <span className="font-medium">1.8 “Licensed Material”</span> means technical documentation, user manuals,
              and other related materials relating to the Prefinn Platform and the Services (if any).
            </li>
            <li>
              <span className="font-medium">1.9 “Services”</span> means simplifying the distribution of the Financial
              Products using different features of the Prefinn Platform.
            </li>
            <li>
              <span className="font-medium">1.10 “Parties”</span> means Prefinn and the Channel Partner collectively
              referred to.
            </li>
            <li>
              <span className="font-medium">1.11 “Party”</span> means each of Prefinn and the Channel Partner individually
              referred to.
            </li>
            <li>
              <span className="font-medium">1.12 “Terms”</span> means these Terms, its schedules, and exhibits together
              with all amendments as approved in writing by the Parties from time to time.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">2. Interpretation</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              2.1 The Annexures form part of these Terms and shall have effect as if set out in full in
              the body of these Terms. Any reference to these Terms includes its Annexure.
            </li>
            <li>
              2.2 These Terms are a sub-set of the Terms of Use of the Company available at [●]
              (“TOU”), especially applicable to Users (as defined in the TOU) who are Channel Partners.
              The Channel Partners are notified that these Terms, the TOU read along with the Privacy
              Policy available at [●] (“Privacy Policy”) form the entire understanding between the
              Parties.
            </li>
            <li>
              2.3 Any expression used in capitalized form that is not defined specifically shall bear
              the meaning assigned to the same in the TOU or the Privacy Policy.
            </li>
            <li>2.4 Clause, Schedule, and paragraph headings shall not affect the interpretation of these Terms.</li>
            <li>
              2.5 Unless the context otherwise requires, words in the singular shall include the plural,
              and in the plural shall include the singular.
            </li>
            <li>2.6 Reference to Channel Partner shall include the reference to the Authorized Personnel unless otherwise indicated.</li>
            <li>
              2.7 Any words following the terms including, include, in particular, for example, or any
              similar expression shall be construed as illustrative and shall not limit the sense of
              the words, description, definition, phrase, or term preceding those terms.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">3. Eligibility and Requirements to On-board</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              3.1 The Channel Partner acknowledges:
              <ul className="list-disc list-inside ml-5 space-y-2">
                <li>(a) If the Channel Partner is a natural person, that he/she has attained 18 (eighteen) years of age and is a citizen and resident of India; or</li>
                <li>(b) If the Channel Partner is a juristic person, that its Authorized Personnel has attained 18 (eighteen) years of age and is a citizen and resident of India.</li>
              </ul>
            </li>
            <li>3.2 No entry fee is required to be paid for participating in these Terms; however, Prefinn may modify/vary these Terms to include such fees as it may deem fit.</li>
            <li>
              3.3 The Channel Partner is required to create its Account to access the Prefinn Platform
              and avail the Services in the manner set in the TOU (Your Registration/Account). The
              Channel Partner is obligated to maintain confidentiality of the Credentials and shall be
              liable for any loss arising due to unauthorized access to the Prefinn Platform using
              his/her/its Credentials.
            </li>
            <li>
              3.4 The Channel Partner shall provide true, accurate, current, and complete information
              while registering its Account on the Prefinn Platform and undertakes to update/inform
              Prefinn of any changes in the information from time to time.
            </li>
            <li>
              3.5 The Channel Partner consents to: The collection, processing, and use of its personal
              information; Receiving communications (including promotional messages) via WhatsApp,
              E-Mail, SMS, and calls; Waiving the Do-Not-Disturb (DND) protocol (if subscribed).
            </li>
            <li>
              3.6 Prefinn reserves the right to: Cancel or amend these Terms without notice; Post
              changes on its website, and the Channel Partner is responsible for staying updated.
              Continued use after changes implies acceptance of the revised Terms.
            </li>
            <li>3.7 The Channel Partner must log in using its Credentials to access the Prefinn Platform.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">4. Relationship Between the Channel Partner and Prefinn</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>4.1 This Agreement is on a principal-to-principal basis. No agency, joint venture, or partnership is created.</li>
            <li>4.2 Use of Prefinn’s logo by the Channel Partner is strictly prohibited except for limited use as required under these Terms.</li>
            <li>4.3 The Channel Partner shall act within Prefinn’s mandate and shall not engage in activities conflicting with Prefinn’s business or reputation.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">5. Grant of License</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>5.1 Prefinn grants the Channel Partner a non-exclusive, non-assignable license to access the Prefinn Platform and use Services, subject to payment of requisite fees (if any).</li>
            <li>5.2 In case of any discrepancy between these Terms and the TOU, these Terms shall prevail.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">6. Sourcing of Financial Products</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>6.1 The Channel Partner agrees to source Financial Products for Clients using the Prefinn Platform.</li>
            <li>6.2 The Channel Partner shall not receive any consideration (monetary or otherwise) from Clients—compensation is via Marketing Fees (defined below).</li>
            <li>
              6.3 The Channel Partner shall adhere to: RBI guidelines on sourcing Financial Products;
              Prefinn’s regulations, lender policies, and Applicable Laws.
            </li>
            <li>6.4 The Channel Partner shall avoid multi-funding beyond the Client’s repayment capacity and shall not engage in fraud, forgery, or misconduct.</li>
            <li>6.5 The Channel Partner must obtain prior written consent from Clients before uploading their information.</li>
            <li>6.6 Prefinn is not liable for violations of Financial Product terms by the Channel Partner or lender.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">7. Limited License and Prohibited Conduct</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>7.1 The Channel Partner has a limited license to access the Prefinn Platform and shall not modify, reverse engineer, or commercially exploit it.</li>
            <li>
              7.2 Prohibited actions include: Unauthorized reproduction, duplication, or resale of the
              Platform; Violation of these Terms, Applicable Laws, or the TOU.
            </li>
            <li>
              7.3 Prefinn may suspend/terminate access for breaches without prejudice to legal
              remedies.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">8. Ownership of Licensed Materials and Restrictions</h2>
          <p>
            The Prefinn Platform and Licensed Materials are proprietary to Prefinn, protected under
            Applicable Law. The Channel Partner has no ownership rights—only a limited, revocable
            license.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">9. Fees and Charges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>9.1 The Channel Partner agrees to pay fees (if applicable) as agreed via email.</li>
            <li>
              9.2 Marketing Fee: Payable upon successful sourcing of Financial Products for Clients.
              Subject to clawback if: The loan is cancelled/recalled by the lender; Fees were
              erroneously paid.
            </li>
            <li>
              9.3 Taxes: Prefinn bears applicable taxes unless input tax credit is denied (recoverable
              from the Channel Partner).
            </li>
            <li>
              9.4 Prefinn may deduct amounts due (Service Fees, tax losses) from Marketing Fees.
            </li>
            <li>
              9.5 Failure to pay within 7 days of the due date may result in
              suspension/termination of access.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">10. Confidentiality</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              10.1 Confidential Information includes all non-public business, technical, and Client
              data.
            </li>
            <li>
              10.2 Exclusions: Publicly available information; Information lawfully obtained from third
              parties.
            </li>
            <li>
              10.3 The Channel Partner shall: Maintain strict confidentiality; Use information only for
              these Terms; Notify Prefinn of unauthorized disclosures.
            </li>
            <li>
              10.4 Breach of confidentiality may lead to injunctive relief and damages.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">11. Data and Privacy</h2>
          <p>
            Prefinn is not liable for unauthorized data breaches by third parties or unforeseeable
            events.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">12. Indemnification</h2>
          <p>
            The Channel Partner shall indemnify Prefinn against losses arising from: Breach of these
            Terms; Violation of Applicable Laws; Client claims due to Channel Partner’s misconduct.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">13. Intellectual Property Rights</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>13.1 Prefinn retains sole ownership of all IP rights in the Prefinn Platform.</li>
            <li>13.2 The Channel Partner shall not claim any rights over Prefinn’s IP.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">14. Term and Termination</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>14.1 These Terms remain valid as long as the Channel Partner uses the Prefinn Platform.</li>
            <li>
              14.2 Termination Rights: Channel Partner may terminate by discontinuing use and notifying
              Prefinn. Prefinn may terminate immediately for breach or for convenience with notice.
            </li>
            <li>14.3 Post-termination obligations (e.g., return of materials) apply.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">15. Governing Law and Dispute Resolution</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Governing Law: Indian law.</li>
            <li>Jurisdiction: Courts of Gurugram, Haryana.</li>
            <li>
              Arbitration: Disputes resolved via arbitration under the Arbitration and Conciliation
              Act, 1996 (seat: Gurugram, virtual proceedings).
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">16. Miscellaneous</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Force Majeure: Prefinn is excused for delays due to uncontrollable events (natural
              disasters, war, etc.).
            </li>
            <li>Notices: Via email (deemed served on acknowledgment).</li>
            <li>Severability: Invalid clauses shall be reformed to minimum enforceability.</li>
          </ul>
        </section>
       

        
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default TermsAndConditions;




























































