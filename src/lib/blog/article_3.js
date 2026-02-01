export const ARTICLE_3 = {
  slug: 'how-to-calculate-self-employment-tax',
  title: 'How to Calculate Self-Employment Tax: A Step-by-Step Guide for 2026',
  category: 'Tax Basics',
  date: '2026-01-30',
  readTime: 14,
  image: '/images/blog/article-3-deductions-guide.webp',
  excerpt: 'The math seems scary, but it follows a predictable 3-step formula. We walk you through calculating SE Tax, Income Tax, and your final effective rate.',
  keywords: 'how to calculate self employment tax 2026, schedule se instructions, form 1040-es worksheet, tax calculator formula manual',
  toc: [
    { id: 'key-takeaways', text: 'Key Takeaways' },
    { id: 'step-1', text: 'Step 1: Calculate Net Profit' },
    { id: 'step-2', text: 'Step 2: Calculate SE Tax (15.3%)' },
    { id: 'step-3', text: 'Step 3: Calculate Income Tax' },
    { id: 'step-4', text: 'Step 4: Combine Them' },
    { id: 'example', text: 'Full Example: The $60k Freelancer' },
    { id: 'faq', text: 'Calculation FAQs' }
  ],
  content: `
    <div id="key-takeaways" class="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mb-8">
      <h3 class="text-indigo-900 font-bold text-lg mb-2 flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        Calculation Cheat Sheet
      </h3>
      <ul class="space-y-2 text-indigo-800">
        <li>🧮 <strong>Formula:</strong> (Profit x 92.35%) x 15.3% = SE Tax.</li>
        <li>⛔ <strong>Deduction:</strong> You can deduct HALF of your SE Tax from your gross income before calculating Income Tax.</li>
        <li>📉 <strong>Standard Deduction:</strong> Subtract $14,600 (Single) from your income before calculating Income Tax.</li>
        <li>💰 <strong>Total Tax:</strong> SE Tax + Income Tax = Total Liability.</li>
      </ul>
    </div>

    <p>Using our <a href="/">Tax Calculator</a> is the easy way. But understanding the math <em>behind</em> the calculator is how you verify it and plan for the future. The IRS worksheet (Schedule SE) is confusing, but the logic is simple.</p>

    <h2 id="step-1">Step 1: Calculate Net Profit</h2>
    <p>Tax is based on PROFIT, not Revenue.</p>
    <p><strong>Revenue (Gross Income):</strong> $80,000 (Total checks received).</p>
    <p><strong>Minus Expenses:</strong><br/>
    - Software: $1,000<br/>
    - Advertising: $2,000<br/>
    - Home Office: $1,500<br/>
    - Mileage: $3,000<br/>
    <strong>Total Expenses: $7,500.</strong></p>
    <p><strong>Net Profit (Schedule C): $72,500.</strong> <br/>
    <em>This is the number we use for everything below.</em></p>

    <h2 id="step-2">Step 2: Calculate SE Tax (15.3%)</h2>
    <p>This is the tax for Social Security and Medicare.</p>
    <p><strong>The 92.35% Adjustment:</strong><br/>
    $72,500 x 0.9235 = <strong>$66,953.75</strong> (Taxable SE Income).</p>
    <p><strong>The 15.3% Rate:</strong><br/>
    $66,953.75 x 0.153 = <strong>$10,243.92</strong>.</p>
    <p><strong>SE Tax Bill: $10,244.</strong></p>

    <h2 id="step-3">Step 3: Calculate Income Tax</h2>
    <p>Now we calculate the Federal Income Tax. This is trickier because of deductions.</p>
    <p><strong>Starting Income:</strong> $72,500.</p>
    <p><strong>Minus "Half SE Tax Deduction":</strong><br/>
    You get to deduct 50% of the SE Tax you just calculated. <br/>
    $10,244 / 2 = <strong>$5,122</strong>.</p>
    <p><strong>Minus QBI Deduction (20%):</strong><br/>
    (Profit - Half SE Tax) x 20%. <br/>
    ($72,500 - $5,122) x 0.20 = <strong>$13,475</strong>.</p>
    <p><strong>Minus Standard Deduction:</strong><br/>
    Single Filer 2026: <strong>$14,600</strong>.</p>
    <p><strong>Taxable Income:</strong><br/>
    $72,500 - $5,122 - $13,475 - $14,600 = <strong>$39,303.</strong></p>
    <p>Now apply the Tax Brackets (See Article 4) to $39,303. <br/>
    Bucket 1 ($0-$11k @ 10%) = $1,100. <br/>
    Bucket 2 ($11k-$39k @ 12%) = ~$3,300.<br/>
    <strong>Total Income Tax: ~$4,400.</strong></p>

    <h2 id="step-4">Step 4: Combine Them</h2>
    <p><strong>SE Tax:</strong> $10,244 <br/>
    <strong>Income Tax:</strong> $4,400 <br/>
    <strong>Total Tax Bill: $14,644.</strong></p>
    <p><strong>Effective Tax Rate:</strong> $14,644 / $80,000 (Gross) = <strong>18.3%.</strong></p>

    <h2 id="example">Full Example: The $60k Freelancer</h2>
    <div class="bg-white border border-slate-200 rounded-xl overflow-hidden my-6">
        <table class="min-w-full text-left text-sm">
            <tbody class="divide-y">
                <tr><td class="p-3 font-medium">Gross Revenue</td><td class="p-3 text-right">$60,000</td></tr>
                <tr><td class="p-3 font-medium text-red-600">Expenses</td><td class="p-3 text-right text-red-600">-$10,000</td></tr>
                <tr class="bg-slate-50"><td class="p-3 font-bold">Net Profit</td><td class="p-3 text-right font-bold">$50,000</td></tr>
                <tr><td class="p-3 font-medium text-indigo-700">SE Tax (15.3%)</td><td class="p-3 text-right text-indigo-700">$7,065</td></tr>
                <tr><td class="p-3 font-medium text-green-700">Income Tax (Approx)</td><td class="p-3 text-right text-green-700">$1,800</td></tr>
                <tr class="bg-slate-900 text-white"><td class="p-3 font-bold">TOTAL TAX OBILGATION</td><td class="p-3 text-right font-bold">$8,865</td></tr>
            </tbody>
        </table>
    </div>

    <h2 id="faq">Calculation FAQs</h2>
    <div class="space-y-6">
        <div>
            <h4 class="font-bold text-lg mb-2">Q: Why is my Income Tax so low in the example?</h4>
            <p class="text-text-muted">Because of the Standard Deduction ($14,600) and QBI Deduction ($10,000). A huge chunk of your income (nearly $25,000) is taxed at 0%. Freelancers pay heavy SE Tax, but surprisingly low Income Tax at lower brackets.</p>
        </div>
        <div>
            <h4 class="font-bold text-lg mb-2">Q: Does this include State Tax?</h4>
            <p class="text-text-muted">NO. This is just Federal. If you live in California, add another ~4-6% on top.</p>
        </div>
    </div>
  `
};
