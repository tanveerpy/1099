export const ARTICLE_30 = {
  slug: 'digital-nomad-tax-guide-feie-2026',
  title: 'Tax-Free in Bali? The Digital Nomad Guide to the FEIE (Foreign Earned Income Exclusion) for 2026',
  category: 'Advanced Tactics',
  date: '2026-04-07',
  readTime: 18,
  image: '/images/blog/article-30-feie.webp',
  excerpt: 'If you stay out of the US for 330 days, you might pay $0 tax on your first $130,000. But the "Physical Presence Test" is brutal. Learn the rules, the risks, and the FBAR penalties.',
  keywords: 'digital nomad taxes 2026, foreign earned income exclusion limit 2026, physical presence test 330 days, expat tax return 2555, renunciations of citizenship tax',
  toc: [
    { id: 'key-takeaways', text: 'Key Takeaways' },
    { id: 'feie-basics', text: 'The ~$130,000 Loophole' },
    { id: 'physical-presence', text: 'The 330-Day Rule (Physical Presence)' },
    { id: 'bona-fide', text: 'The Bona Fide Residence Test' },
    { id: 'social-security', text: 'The SE Tax Trap (15.3%)' },
    { id: 'state-tax', text: 'The State Tax Nightmare' },
    { id: 'fbar', text: 'The $10,000 FBAR Penalty' },
    { id: 'scenario', text: 'Real Life Scenario: Sarah in Thailand' },
    { id: 'faq', text: 'Expat FAQs' }
  ],
  content: `
    <div id="key-takeaways" class="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mb-8">
      <h3 class="text-indigo-900 font-bold text-lg mb-2 flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        Expat Cheat Sheet
      </h3>
      <ul class="space-y-2 text-indigo-800">
        <li>🏖️ <strong>FEIE Limit:</strong> For 2026, you can exclude approx. $130,000 of Foreign Earned Income from Federal Income Tax.</li>
        <li>📅 <strong>The Test:</strong> You must be physically outside the US for 330 full 24-hour periods in a 12-month window. Travel days involving US airspace do NOT count.</li>
        <li>⚠️ <strong>SE Tax:</strong> The FEIE does NOT apply to Social Security/Medicare tax. You still owe 15.3% unless you are in a Totalization Agreement country.</li>
        <li>🏦 <strong>FBAR:</strong> You must report foreign bank accounts if their aggregate value exceeds $10,000 at any instant.</li>
        <li>🇺🇸 <strong>Citizenship:</strong> Unlike almost every other country, the US taxes based on Citizenship, not Residency.</li>
      </ul>
    </div>

    <p>The dream is seductive: Earn a San Francisco salary as a software engineer while living in a $600/month villa in Bali or Chiang Mai. Your purchasing power triples. But what about your taxes? Many new nomads mistakenly believe that if they leave the US, they stop paying US taxes. This is false. The US is one of the only countries in the world that taxes on <strong>Citizenship</strong>, not Residence. Whether you live in Ohio or Osaka, Uncle Sam wants his cut.</p>
    <p>However, the IRS offers a massive olive branch to true expats: <strong>The Foreign Earned Income Exclusion (FEIE)</strong>. If you qualify, you can wipe out the federal income tax on your first ~$130,000 of earnings. But the qualification rules are strict, binary, and devoid of mercy.</p>

    <h2 id="feie-basics">The ~$130,000 Loophole (Form 2555)</h2>
    <p>The FEIE (Form 2555) allows you to "exclude" earned income from your tax return. "Earned Income" means money you worked for (salary, consulting fees). It does NOT include "Passive Income" like stocks, crypto gains, or rental income from your house back home. Those are still taxed normally.</p>
    
    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm my-6">
        <h4 class="font-bold text-slate-900 mb-4">The Math of the Exclusion</h4>
        <p class="mb-2"><strong>Gross Income:</strong> $150,000</p>
        <p class="mb-2"><strong>2026 FEIE Limit:</strong> -$130,000 (Estimated)</p>
        <hr class="my-2 border-slate-100">
        <p class="font-bold text-indigo-600">Taxable Income: $20,000</p>
        <p class="text-sm text-slate-500 mt-2">You only pay Federal Income Tax on the remaining $20,000. Effectively, your effective tax rate drops to single digits.</p>
    </div>

    <h2 id="physical-presence">The 330-Day Rule (Physical Presence Test)</h2>
    <p>This is the test 90% of digital nomads use. To qualify, you must be physically present in a foreign country (or countries) for <strong>330 full days</strong> during any 12-month period.</p>
    <p><strong>What is a "Full Day"?</strong></p>
    <p>A full day is a 24-hour period from midnight to midnight. If you are on a plane over international waters, that might not count. If you have a layover in Miami, that definitely doesn't count.</p>
    <p><strong>The "35 Day" Limit:</strong></p>
    <p>This effectively means you can only spend roughly 35 days per year in the United States. Weddings, funerals, holidays—you have to fit it all into 35 days. If you stay for 36 days? You fail the test. The exclusion drops to $0. You retroactively owe tax on the full $130,000. There are no "partial credit" points for staying 329 days.</p>

    <h2 id="bona-fide">The Bona Fide Residence Test</h2>
    <p>This is the alternative test, usually for people who actually move permanently. To pass, you must be a "Bona Fide Resident" of a foreign country for an entire tax year (Jan 1 to Dec 31).</p>
    <p><strong>Evidence Required:</strong></p>
    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>A long-term residency visa (not a tourist visa).</li>
        <li>A signed long-term lease or property deed.</li>
        <li>Paying local income taxes in that country.</li>
        <li>Bringing your family with you.</li>
    </ul>
    <p>Digital Nomads hopping from Airbnb to Airbnb on tourist visas usually <strong>fail</strong> this test. Stick to the 330-day Physical Presence Test.</p>

    <h2 id="social-security">The SE Tax Trap (15.3%)</h2>
    <p>This is the most common shock for new expats. The FEIE only excludes <strong>Income Tax</strong>. It explicitly does NOT exclude <strong>Self-Employment Tax</strong> (Social Security & Medicare).</p>
    <p>Even if you live on the moon, if you are a US citizen, you owe 15.3% SE Tax on your net profit. On $100,000 of income, that is <strong>$14,130</strong> that the FEIE does not touch.</p>
    <p><strong>The Only Exception (Totalization Agreements):</strong></p>
    <p>If you move to a country that has a "Totalization Agreement" with the US (mostly Western Europe, Canada, Australia) AND you pay social security taxes to that country, you can be exempt from US Social Security taxes. But then you are paying French or German social security, which is often higher than 15.3%. For nearly all nomads in low-tax hubs like Bali, Thailand, or Mexico, you are stuck paying the 15.3% to the IRS.</p>

    <h2 id="state-tax">The State Tax Nightmare</h2>
    <p>Leaving the US does not automatically mean leaving your state. States like <strong>California, Virginia, New Mexico, and South Carolina</strong> are "Sticky."</p>
    <p>If you leave California to travel for 2 years but keep your CA Driver's License, maintain a bank account there, and intend to return, California says: "You never left. You are still a resident. Pay us 13%."</p>
    <p><strong>The "Exit Strategy":</strong></p>
    <p>Before you leave the country, you should formally move your "Domicile" to a tax-free state like Florida, Texas, or South Dakota.</p>
    <ol class="list-decimal pl-6 space-y-2 my-4">
        <li>Fly to Florida.</li>
        <li>Rent a place or use a domicile service (like St. Brendan's Isle).</li>
        <li>Get a Florida Driver's License.</li>
        <li>Register to vote in Florida.</li>
        <li>Open a local bank account.</li>
    </ol>
    <p>Only THEN do you leave for Thailand. Now, you are a Florida resident (0% state tax) traveling abroad. California can't touch you.</p>

    <h2 id="fbar">The $10,000 FBAR Penalty</h2>
    <p>The US really hates hidden offshore money. If you have foreign financial accounts (Bank accounts, Investment accounts) and the <strong>aggregate maximum value</strong> exceeds $10,000 at ANY time during the year, you must file FinCEN Form 114.</p>
    <p><strong>It is not a tax return.</strong> It is an information disclosure. But the penalty for "Willful Failure to File" can be the greater of $100,000 or 50% of the account balance. Even "Non-Willful" mistakes cost $10,000 per violation. If you open a Thai bank account to pay your apartment rent, watch your balance closely.</p>

    <h2 id="scenario">Real Life Scenario: Sarah in Thailand</h2>
    <p><strong>Profile:</strong> Sarah is a Graphic Designer from California. She decides to move to Chiang Mai for 2026.</p>
    <p><strong>The Mistake:</strong> She just buys a ticket and leaves. She keeps her CA license. She works remotely, making $80,000.<br/>
    <strong>The Result:</strong><br/>
    1. She passes the FEIE test (stays 335 days). Federal Income Tax: $0.<br/>
    2. She owes SE Tax (15.3% of $80k): ~$11,300.<br/>
    3. California audits her. They see her license and voting record. They demand CA Income Tax on the full $80k (~$6,000).<br/>
    <strong>Total Tax Bill: $17,300.</strong></p>

    <p><strong>The Fix:</strong><br/>
    1. Sarah moves her domicile to Nevada (0% tax) in Dec 2025.<br/>
    2. She leaves for Thailand.<br/>
    3. She qualifies for FEIE.<br/>
    4. She owes SE Tax: $11,300.<br/>
    5. State Tax: $0.<br/>
    <strong>Total Tax Bill: $11,300. Savings: $6,000.</strong></p>

    <h2 id="faq">Expat FAQs</h2>
    <div class="space-y-6">
        <div>
            <h4 class="font-bold text-lg mb-2">Q: Can I use the Standard Deduction AND the FEIE?</h4>
            <p class="text-text-muted">Yes, but only against income that wasn't already excluded. If you exclude ALL your income ($100k income vs $130k limit), your Standard Deduction is wasted because you can't deduct against $0 income.</p>
        </div>
        <div>
            <h4 class="font-bold text-lg mb-2">Q: What about my 401(k)?</h4>
            <p class="text-text-muted">You generally cannot contribute to a pre-tax Solo 401(k) or IRA if you have $0 taxable income due to FEIE. You need "Taxable Compensation" to contribute. This is a hidden downside of FEIE—you lose a year of retirement compounding.</p>
        </div>
        <div>
            <h4 class="font-bold text-lg mb-2">Q: Does the "Foreign Housing Exclusion" help?</h4>
            <p class="text-text-muted">Yes! On top of the ~$130k income exclusion, you can also deduct reasonable housing expenses (Rent, Utilities, Insurance) that exceed a certain base amount (~$20k). In expensive cities like Tokyo or London, this is huge. In cheap hubs like Bali, the deduction is often $0 because your rent is too low.</p>
        </div>
    </div>
  `
};
