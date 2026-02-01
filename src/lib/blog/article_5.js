export const ARTICLE_5 = {
  slug: '1099-nec-vs-1099-k-explained-2026',
  title: '1099-NEC vs. 1099-K: Why You Got Two Different Forms in 2026',
  category: 'Tax Basics',
  date: '2026-02-02',
  readTime: 12,
  image: '/images/blog/article-5-nec-vs-k.webp',
  excerpt: 'The IRS has cracked down on Venmo and PayPal. Learn the difference between "Non-Employee Compensation" and "Payment Card Transactions" so you don\'t double-count income.',
  keywords: '1099-nec vs 1099-k 2026, venmo tax reporting threshold 2026, what to do if i didnt get a 1099, double counting income 1099-k',
  toc: [
    { id: 'key-takeaways', text: 'Key Takeaways' },
    { id: 'the-confusion', text: 'Why Do These Forms Exist?' },
    { id: '1099-nec', text: 'Form 1099-NEC (The "Old" Way)' },
    { id: '1099-k', text: 'Form 1099-K (The "Venmo" Way)' },
    { id: 'thresholds', text: 'The $600 vs $5,000 Threshold' },
    { id: 'double-counting', text: 'The Double-Counting Trap' },
    { id: 'no-form', text: 'What If I Didn\'t Get a Form?' },
    { id: 'faq', text: 'Forms FAQs' }
  ],
  content: `
    <div id="key-takeaways" class="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mb-8">
      <h3 class="text-indigo-900 font-bold text-lg mb-2 flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        Forms Cheat Sheet
      </h3>
      <ul class="space-y-2 text-indigo-800">
        <li>📄 <strong>1099-NEC:</strong> Comes from a client (Company) who paid you >$600 via Check or ACH.</li>
        <li>💳 <strong>1099-K:</strong> Comes from a "Payment Processor" (PayPal, Stripe, Upwork, Uber) who processed your credit card payments.</li>
        <li>⚠️ <strong>Danger:</strong> Do not report the same money twice! If a client paid you $1,000 via PayPal, you will get a 1099-K from PayPal, NOT a 1099-NEC from the client.</li>
        <li>📉 <strong>Thresholds:</strong> The IRS delayed the $600 threshold for 1099-K again. For 2026, it is likely $5,000 (check latest guidance).</li>
      </ul>
    </div>

    <p>January is "Mailbox Anxiety Month." You open your mailbox and find a stack of envelopes marked "Important Tax Document." <br/>
    You open them. Some say "NEC." Some say "K." Some look like they are duplicates. <br/>
    If you enter these wrong in TurboTax, the IRS might think you made double the money you actually did.</p>

    <h2 id="the-confusion">Why Do These Forms Exist?</h2>
    <p>The IRS wants to know how much money you made. <br/>
    In the old days, companies just told the IRS "I paid Bob $5,000." <br/>
    In the digital age, companies pay via PayPal. So the IRS told PayPal: "Hey, YOU tell us how much you processed for Bob."</p>

    <h2 id="1099-nec">Form 1099-NEC (The "Old" Way)</h2>
    <p><strong>NEC = Non-Employee Compensation.</strong></p>
    <p><strong>Who sends it:</strong> A business that hired you.</p>
    <p><strong>Triggers:</strong><br/>
    1. They paid you >$600 during the year.<br/>
    2. They paid you via <strong>Check, Cash, or Direct Deposit (ACH).</strong></p>
    <p><strong>Example:</strong> You did a logo design for a local bakery. They wrote you a check for $800. In Jan, they mail you a 1099-NEC for $800.</p>

    <h2 id="1099-k">Form 1099-K (The "Venmo" Way)</h2>
    <p><strong>K = Payment Card Transactions.</strong></p>
    <p><strong>Who sends it:</strong> A "Third Party Settlement Organization" (TPSO). <br/>
    Examples: Uber, DoorDash, Lyft, eBay, Etsy, PayPal, Venmo, CashApp, Stripe, Square.</p>
    <p><strong>Triggers:</strong><br/>
    They processed payments for you above the threshold (see below).</p>
    <p><strong>Example:</strong> You sold $3,000 of crafts on Etsy. Etsy (not the buyers) sends you a 1099-K.</p>

    <h2 id="thresholds">The $600 vs $5,000 Threshold</h2>
    <p>This has been a political football.</p>
    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Original Law (Pre-2022):</strong> The threshold was $20,000 AND 200 transactions. (Huge loophole).</li>
        <li><strong>New Law (American Rescue Plan):</strong> The threshold was lowered to $600. (To catch everyone).</li>
        <li><strong>Current Status (2026):</strong> The IRS realized $600 was too low and caused chaos (people selling old couches getting tax forms). They implemented a "Phase In." For 2026, the threshold is often cited as <strong>$5,000</strong>.</li>
    </ul>
    <p><em>Note: Some states (MA, VT, VA, MD) have their own $600 threshold override. You might get a form anyway.</em></p>

    <h2 id="double-counting">The Double-Counting Trap</h2>
    <p>This is where freelancers get burned.</p>
    <p><strong>Scenario:</strong> You did a project for $1,000. The Client paid you via PayPal.</p>
    <p><strong>Correct Outcome:</strong><br/>
    - PayPal sends you a 1099-K for $1,000. <br/>
    - The Client sends you NOTHING. (The IRS instructions explicitly say: "Do not issue 1099-NEC if you paid via credit card/PayPal").</p>
    <p><strong>The Mistake Outcome:</strong><br/>
    - The Client's accountant is lazy. They issue you a 1099-NEC anyway. <br/>
    - PayPal issues you a 1099-K. <br/>
    - <strong>Result:</strong> The IRS computer thinks you made $2,000. </p>
    <p><strong>The Fix:</strong> If this happens, ask the Client to issue a "Corrected 1099-NEC" with $0. Tell them: "Since you paid via PayPal, the income is reported on the 1099-K. Please void the NEC to prevent double taxation."</p>

    <h2 id="no-form">What If I Didn't Get a Form?</h2>
    <p>If you made $400 from a client, they are not legally required to send you a form.</p>
    <p><strong>Does that mean it's tax-free?</strong> <br/>
    <strong>NO.</strong> You are legally required to report ALL income wether you got a form or not. <br/>
    "I didn't get a 1099" is not a defense in an audit. The IRS looks at your bank deposits.</p>

    <h2 id="faq">Forms FAQs</h2>
    <div class="space-y-6">
        <div>
            <h4 class="font-bold text-lg mb-2">Q: I sold my old couch on Venmo for $800. Do I owe tax?</h4>
            <p class="text-text-muted">No. Selling personal items at a loss (you bought it for $2,000, sold for $800) is not taxable income. But Venmo might send you a 1099-K anyway. You have to file it on your return and then issue a corresponding "Adjustment" to zero it out.</p>
        </div>
        <div>
            <h4 class="font-bold text-lg mb-2">Q: What is Form 1099-MISC?</h4>
            <p class="text-text-muted">It's the old version of the NEC. It is now mostly used for Rents, Royalties, and Prize Winnings. If you are a standard freelancer, you shouldn't see it much for work.</p>
        </div>
    </div>
  `
};
