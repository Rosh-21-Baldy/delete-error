


// update code 




"use client";

import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import Link from "next/link";

interface EMICalculatorProps {
  defaultLoanAmount?: number;
  defaultInterestRate?: number;
  defaultTenure?: number;
}

const EMICalculator = ({
  defaultLoanAmount = 5000000,
  defaultInterestRate = 8.4,
  defaultTenure = 20,
}: EMICalculatorProps) => {
  const [loanAmount, setLoanAmount] = useState(defaultLoanAmount);
  const [interestRate, setInterestRate] = useState(defaultInterestRate);
  const [tenure, setTenure] = useState(defaultTenure);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calculate EMI
    const p = loanAmount;
    const r = interestRate / 12 / 100; // Monthly interest rate
    const n = tenure * 12; // Total number of months

    const emiValue = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emiValue * n;
    const totalInterestValue = totalPayment - p;

    setEmi(Math.round(emiValue));
    setTotalInterest(Math.round(totalInterestValue));
    setTotalAmount(Math.round(totalPayment));
  }, [loanAmount, interestRate, tenure]);

  const handleLoanAmountChange = (value: number[]) => {
    setLoanAmount(value[0]);
  };

  const handleInterestRateChange = (value: number[]) => {
    setInterestRate(value[0]);
  };

  const handleTenureChange = (value: number[]) => {
    setTenure(value[0]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const value = Number(e.target.value);

    if (type === 'loan') {
      if (value > 0) setLoanAmount(value);
    } else if (type === 'rate') {
      if (value > 0 && value < 20) setInterestRate(value);
    } else if (type === 'tenure') {
      if (value > 0 && value <= 30) setTenure(value);
    }
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="mt-4">
      <div className="bg-white p-4 md:p-10 rounded-xl shadow-sm border border-gray-100">
        <h2 className="fw-bold text-center">
        <span
  style={{
    background: " #0d53b7 ",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block",
    padding: "0.2rem 0.5rem",
    fontWeight: "800",
  }}
 >
  EMI Calculator
 </span>
        </h2>

        <p className="text-center text-muted-success mb-3">
          Aapki Monthly EMI Kuch Ye Hogi !
        </p>
        <p className="text-2xl md:text-4xl font-bold text-dark text-center mb-8">
          ₹{emi.toLocaleString('en-IN')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-3 space-y-10">
            {/* Loan Amount Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="loanAmount" className="text-sm font-medium text-dark-900">
                  Loan Amount
                </label>
                <Input
                  id="loanAmount"
                  type="number"
                  value={loanAmount}
                  onChange={(e) => handleInputChange(e, 'loan')}
                  className="w-32 text-right text-dark-900 font-medium"
                />
              </div>
              <Slider 
  id="loanAmount"
  min={100000}
  max={10000000}
  step={100000}
  value={[loanAmount]}
  onValueChange={handleLoanAmountChange}
  className="my-6
    [&_[role=slider]]:bg-black
    [&_[role=slider]]:border-black
    [&_[role=slider]]:focus:ring-black
    [&_[role=range]]:bg-black
    [&_[role=track]]:bg-black"
/>
            </div>

            {/* Interest Rate Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="interestRate" className="text-sm font-medium text-dark-900">
                  Interest Rate (% P.A.)
                </label>
                <div className="flex items-center">
                  <Input
                    id="interestRate"
                    type="number"
                    value={interestRate}
                    onChange={(e) => handleInputChange(e, 'rate')}
                    className="w-20 text-right text-dark-900 font-medium"
                    step={0.1}
                  />
                  <span className="ml-2 text-dark-900 font-medium"></span>
                </div>
              </div>
              <Slider
                id="interestRate"
                min={5}
                max={15}
                step={0.1}
                value={[interestRate]}
                onValueChange={handleInterestRateChange}
                className="my-6
                  [&_[role=slider]]:bg-blue-500
                  [&_[role=slider]]:border-blue-700
                  [&_[role=slider]]:focus:ring-blue-500
                  [&_[role=range]]:bg-blue-700
                  [&_[role=track]]:bg-blue-300"
              />
            </div>

            {/* Tenure Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="tenure" className="text-sm font-medium text-blue-900">
                  Tenure (Years)
                </label>
                <div className="flex items-center">
                  <Input
                    id="tenure"
                    type="number"
                    value={tenure}
                    onChange={(e) => handleInputChange(e, 'tenure')}
                    className="w-20 text-right text-dark-900 font-medium"
                  />
                  <span className="ml-2 text-blue-900 font-medium"></span>
                </div>
              </div>
              <Slider
                id="tenure"
                min={1}
                max={30}
                step={1}
                value={[tenure]}
                onValueChange={handleTenureChange}
                className="my-6
                  [&_[role=slider]]:bg-green-500
                  [&_[role=slider]]:border-green-700
                  [&_[role=slider]]:focus:ring-green-500
                  [&_[role=range]]:bg-green-700
                  [&_[role=track]]:bg-grey-300"
              />
            </div>
          </div>

          <div className="md:col-span-2 bg-gray-50 p-10 rounded-lg">
            <div className="space-y-6">
              <div>
                <p className="text-dark-foreground text-sm mb-1">Principal Amount</p>
                <p className="text-xl font-bold text-dark">
                  {formatCurrency(loanAmount)}
                </p>
              </div>

              <div>
                <p className="text-dark-foreground text-sm mb-1">Interest Amount</p>
                <p className="text-xl font-bold text-primary">
                  {formatCurrency(totalInterest)}
                </p>
              </div>

              <div>
                <p className="text-dark-foreground text-sm mb-1">Total Amount Paid</p>
                <p className="text-xl font-bold text-success">
                  {formatCurrency(totalAmount)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-10 mt-5">
          <h4 className="text-lg md:text-xl font-semibold mb-3" style={{ color: "#041184" }}>
            From Application to Disbursement, Prefinn Ensures Success at Every Step.
          </h4>
          <h6 className="text-xl font-medium mt-1" style={{ color: "#041184" }}>
            Your Loan is Just a Click Away
          </h6>
          <div className="mt-6">
            <Link
              href="/loan-apply"
              className="text-2xl text-decoration-none inline-block bg-blue-900 text-white py-2 px-6 rounded-md font-medium hover:bg-green-600 transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;


