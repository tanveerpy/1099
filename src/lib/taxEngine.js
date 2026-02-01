/**
 * Self-Employment Tax Calculator Logic (1099)
 * Based on IRS rules for 2024, 2025, and 2026.
 */

export const TAX_CONFIG = {
  2024: {
    mileageRate: 0.67,
    ssWageCap: 168600,
    standardDeduction: {
      single: 14600,
      married: 29200,
      headOfHousehold: 21900,
    },
  },
  2025: {
    mileageRate: 0.70,
    ssWageCap: 176100,
    standardDeduction: {
      single: 15750,
      married: 31500,
      headOfHousehold: 23625,
    },
  },
  2026: {
    mileageRate: 0.725,
    ssWageCap: 184500,
    standardDeduction: {
      single: 16100,
      married: 32200,
      headOfHousehold: 24150,
    },
  },
};

export const calculateTax = ({
  year = 2026,
  grossIncome = 0,
  milesDriven = 0,
  otherExpenses = 0,
  filingStatus = 'single',
}) => {
  const config = TAX_CONFIG[year] || TAX_CONFIG[2026];

  // 1. Calculate Business Expenses
  const mileageExemption = milesDriven * config.mileageRate;
  const totalExpenses = mileageExemption + otherExpenses;

  // 2. Calculate Net Profit
  const netProfit = Math.max(0, grossIncome - totalExpenses);

  // 3. Calculate Self-Employment (SE) Tax
  // SE tax is on 92.35% of net profit
  const taxableSEIncome = netProfit * 0.9235;

  // Social Security (12.4% up to cap)
  const ssTaxable = Math.min(taxableSEIncome, config.ssWageCap);
  const ssTax = ssTaxable * 0.124;

  // Medicare (2.9% - no cap)
  const medicareTax = taxableSEIncome * 0.029;

  // Additional Medicare Tax (0.9% over $200k for single, simplified)
  let additionalMedicare = 0;
  const threshold = filingStatus === 'married' ? 250000 : 200000;
  if (taxableSEIncome > threshold) {
    additionalMedicare = (taxableSEIncome - threshold) * 0.009;
  }

  const totalSETax = ssTax + medicareTax + additionalMedicare;

  // 4. Calculate Adjusted Gross Income (AGI)
  // Deduct 50% of SE tax from net profit
  const agi = Math.max(0, netProfit - (totalSETax * 0.5));

  // 5. Apply Standard Deduction
  const deduction = config.standardDeduction[filingStatus];
  const incomeAfterStandardDeduction = Math.max(0, agi - deduction);

  // 6. Apply QBI Deduction (20% of net profit, simplified)
  // Constraint: Cannot exceed 20% of (Taxable Income - Capital Gains)
  const qbiDeduction = incomeAfterStandardDeduction * 0.20;
  const taxableIncome = Math.max(0, incomeAfterStandardDeduction - qbiDeduction);

  // 7. Calculate Federal Income Tax (Simplified Brackets)
  const calculateFederalIncomeTax = (taxable) => {
    // 2026 Baseline Brackets (Estimated)
    if (taxable <= 12000) return taxable * 0.10;
    if (taxable <= 49000) return 1200 + (taxable - 12000) * 0.12;
    if (taxable <= 104000) return 5640 + (taxable - 49000) * 0.22;
    if (taxable <= 198000) return 17740 + (taxable - 104000) * 0.24;
    return 17740 + (198000 - 104000) * 0.24 + (taxable - 198000) * 0.32;
  };

  const federalIncomeTax = calculateFederalIncomeTax(taxableIncome);

  const totalTaxLiability = totalSETax + federalIncomeTax;
  const takeHome = netProfit - totalTaxLiability;
  const quarterlyPayment = totalTaxLiability / 4;

  return {
    netProfit,
    totalExpenses,
    totalSETax,
    federalIncomeTax,
    totalTaxLiability,
    takeHome,
    quarterlyPayment,
    effectiveRate: netProfit > 0 ? (totalTaxLiability / netProfit) * 100 : 0,
  };
};
