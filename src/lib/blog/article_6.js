export const ARTICLE_6 = {
  slug: 'standard-mileage-vs-actual-expenses-2026',
  title: 'Standard Mileage vs. Actual Expenses: Which Car Deduction Is Better in 2026?',
  category: 'Deductions Guide',
  date: '2026-02-04',
  readTime: 15,
  image: '/images/blog/article-6-section-179.webp',
  excerpt: 'The Standard Mileage Rate is 69 cents/mile (est). Is that better than tracking gas and repairs? We run the math for Uber drivers vs. Real Estate Agents.',
  keywords: 'standard mileage rate 2026, actual expenses car deduction calculator, depreciation on business car, uber driver mileage deduction rules',
  toc: [
    { id: 'key-takeaways', text: 'Key Takeaways' },
    { id: 'method-1', text: 'Method 1: Standard Mileage (Easy)' },
    { id: 'method-2', text: 'Method 2: Actual Expenses (Hard)' },
    { id: 'decision-matrix', text: 'Decision Matrix: Who Wins?' },
    { id: 'switching', text: 'The "Switching" Trap' },
    { id: 'leased-cars', text: 'Leased Cars' },
    { id: 'tracking', text: 'How to Track (Logs are Mandatory)' },
    { id: 'faq', text: 'Car FAQs' }
  ],
  content: `
    <div id="key-takeaways" class="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mb-8">
      <h3 class="text-indigo-900 font-bold text-lg mb-2 flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        Vehicle Cheat Sheet
      </h3>
      <ul class="space-y-2 text-indigo-800">
        <li>🚗 <strong>Standard Rate:</strong> For 2026, we estimate ~69¢ per mile. This covers gas, insurance, repairs, and depreciation.</li>
        <li>🔧 <strong>Actual Expenses:</strong> You track every receipt (Gas, Oil, Tires) and calculate the Business %.</li>
        <li>⚠️ <strong>The Golden Rule:</strong> If you choose Actual Expenses in Year 1, you are STUCK with it for the life of the car. If you choose Standard Mileage in Year 1, you can switch back and forth later. <strong>Always start with Standard Mileage.</strong></li>
        <li>📉 <strong>Bonus Depreciation:</strong> Only available with Actual Expenses. Allows you to write off the whole car (if >6,000 lbs).</li>
      </ul>
    </div>

    <p>The vehicle deduction is typically the single largest deduction for gig workers (Uber/DoorDash) and mobile professionals (Realtors/Sales). <br/>
    But it requires a choice: Do you take the "IRS Gift" (Mileage Rate) or do you do the "Real Math" (Actual Expenses)?</p>

    <h2 id="method-1">Method 1: Standard Mileage (Easy)</h2>
    <p>The IRS gives you a flat rate for every business mile driven. <br/>
    <strong>2026 Estimated Rate:</strong> $0.69 per mile.</p>
    <p><strong>What it includes:</strong> <br/>
    - Gas<br/>
    - Car Insurance<br/>
    - Repairs/Maintenance (Oil changes, Tires)<br/>
    - Depreciation<br/>
    - Registration Fees</p>
    <p><strong>What is EXTRA (You can deduct ON TOP):</strong><br/>
    - Parking Fees (Business stops only).<br/>
    - Tolls.<br/>
    - Car Loan Interest (Business % only).</p>
    <p><strong>Example:</strong> You drive 20,000 miles for Uber. <br/>
    20,000 * $0.69 = <strong>$13,800 Deduction.</strong> <br/>
    You need $0 gas receipts. Just a mileage log.</p>

    <h2 id="method-2">Method 2: Actual Expenses (Hard)</h2>
    <p>You track everything. Then you multiply by the Business Use Percentage.</p>
    <p><strong>Total Costs for Year:</strong><br/>
    Gas: $3,000<br/>
    Insurance: $1,200<br/>
    Repairs: $800<br/>
    Depreciation: $4,000 (standard)<br/>
    <strong>Total: $9,000.</strong></p>
    <p><strong>Usage:</strong> You drove 20,000 miles total. 18,000 were business. <br/>
    Business Use = 90%.</p>
    <p><strong>Deduction:</strong> $9,000 * 90% = <strong>$8,100.</strong></p>
    <p>In this case, Actual Expenses ($8,100) is LOWER than Standard Mileage ($13,800). You would lose money doing the hard work.</p>

    <h2 id="decision-matrix">Decision Matrix: Who Wins?</h2>
    <div class="overflow-x-auto my-6">
        <table class="min-w-full text-left text-sm border-collapse">
            <thead>
                <tr class="bg-indigo-900 !text-white">
                    <th class="p-3">Profile</th>
                    <th class="p-3">Winner</th>
                    <th class="p-3">Why?</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b"><td class="p-3"><strong>Uber Driver (Prius)</strong></td><td class="p-3 font-bold text-green-400">Standard Mileage</td><td class="p-3">Prius is cheap to run (high MPG, low repairs). The IRS rate (69¢) is much higher than your actual cost (~30¢). You pocket the difference tax-free.</td></tr>
                <tr class="border-b"><td class="p-3"><strong>Realtor (G-Wagon)</strong></td><td class="p-3 font-bold text-yellow-400">Actual Expenses</td><td class="p-3">Gas guzzler (12 MPG). Expensive repairs. High depreciation. Actual costs are massive.</td></tr>
                <tr class="border-b"><td class="p-3"><strong>Old Beater Car</strong></td><td class="p-3 font-bold text-green-400">Standard Mileage</td><td class="p-3">Car is fully depreciated already. Repairs are cheap. Take the rate.</td></tr>
            </tbody>
        </table>
    </div>

    <h2 id="switching">The "Switching" Trap</h2>
    <p>This is a weird IRS rule.</p>
    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>If you verify <strong>Standard Mileage</strong> in the FIRST year you use the car for business, you can switch to Actual Expenses in Year 2 (and back again in Year 3).</li>
        <li>If you verify <strong>Actual Expenses</strong> in the FIRST year (e.g., you take Section 179 depreciation), you are <strong>BANNED</strong> from using Standard Mileage for that car forever.</li>
    </ul>
    <p><strong>Strategy:</strong> Unless you are buying a massive heavy SUV for Section 179, choose Standard Mileage in Year 1 to keep your options open.</p>

    <h2 id="leased-cars">Leased Cars</h2>
    <p>If you lease, you can deduct the <strong>Lease Payment</strong> (Business %) under Actual Expenses. <br/>
    However, you cannot depreciate a leased car. <br/>
    Often, deducting the Lease Payment is more valuable than Standard Mileage, but do the math.</p>

    <h2 id="tracking">How to Track (Logs are Mandatory)</h2>
    <p>If you get audited, the IRS will ask for a "Contemporaneous Log."</p>
    <p><strong>What fails:</strong> "I just estimated I drove 50% for work." (Denied). <br/>
    <strong>What fails:</strong> A spreadsheet created on the day of the audit. (Denied - metadata reveals creation date).</p>
    <p><strong>What works:</strong> <br/>
    1. An app (MileIQ, Hurdlr, QuickBooks) that tracks GPS automatically. <br/>
    2. A paper notebook in the glovebox where you wrote odometer readings daily.</p>

    <h2 id="faq">Car FAQs</h2>
    <div class="space-y-6">
        <div>
            <h4 class="font-bold text-lg mb-2">Q: Is driving to the office commuting?</h4>
            <p class="text-text-muted">Yes. Commuting is NEVER deductible. Driving from Home -> Office is personal. Driving from Office -> Client is business. <br/>
            <em>Hack:</em> If you have a Home Office (Article 11), your commute is $0. Driving from Home (Office) -> Client is 100% deductible.</p>
        </div>
        <div>
            <h4 class="font-bold text-lg mb-2">Q: Does the sign on my car make it 100% business?</h4>
            <p class="text-text-muted">No. This is a myth. Putting a "Bob's Plumbing" magnet on your truck does not make your trip to the grocery store deductible. The purpose of the trip matters, not the sticker.</p>
        </div>
    </div>
  `
};
