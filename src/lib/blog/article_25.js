export const ARTICLE_25 = {
  slug: 'remote-work-state-tax-nexus-guide',
  title: 'Living in Texas, Working in California? The 2026 State Tax Nexus Guide for Remote Workers',
  category: 'Tools & Resources',
  date: '2026-03-24',
  readTime: 18,
  image: '/images/blog/article-25-digital-nomad.webp',
  excerpt: 'Double taxation is a real threat for digital nomads. Learn about "Sticky States," "Convenience of the Employer" rules, and how to break domicile legally.',
  keywords: 'state tax nexus remote work 2026, convenience of the employer rule states, double taxation remote worker, working in different state tax credit, breaking domicile checklist',
  toc: [
    { id: 'key-takeaways', text: 'Key Takeaways' },
    { id: 'nexus-basics', text: 'What is Nexus?' },
    { id: 'residency', text: 'Residency vs. Non-Residency' },
    { id: 'sticky-states', text: 'The "Sticky" States (CA, VA)' },
    { id: 'convenience-rule', text: 'The "Convenience" Trap (NY)' },
    { id: 'reciprocity', text: 'Reciprocity Agreements' },
    { id: 'nomad-strategy', text: 'Strategy for Nomads' },
    { id: 'faq', text: 'State Tax FAQs' }
  ],
  content: `
    <div id="key-takeaways" class="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mb-8">
      <h3 class="text-indigo-900 font-bold text-lg mb-2 flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        State Tax Cheat Sheet
      </h3>
      <ul class="space-y-2 text-indigo-800">
        <li>📍 <strong>Physical Presence:</strong> You generally pay tax to the state where you are physically sitting when you do the work.</li>
        <li>⚠️ <strong>Convenience Rule:</strong> 5 States (NY, PA, DE, CT, NE) tax you if your <em>employer</em> is there, even if you never visit.</li>
        <li>🔄 <strong>Tax Credit:</strong> You usually get a credit on your Resident return for taxes paid to a Non-Resident state (prevents double tax, but you pay the higher rate).</li>
        <li>📝 <strong>183 Day Rule:</strong> If you spend >183 days in a state, you become a "Statutory Resident" and owe tax on ALL income.</li>
      </ul>
    </div>

    <p>The "Digital Nomad" dream often hits a wall of bureaucratic nightmare fuel called "State Tax Nexus." If you code on a laptop in Austin (0% tax) for a client in NYC (high tax), who gets your money? In 2026, states are more aggressive than ever about claiming their slice. With remote work becoming the norm, states are losing commuter revenue and are auditing remote workers to make up the difference.</p>

    <h2 id="nexus-basics">What is Nexus?</h2>
    <p>"Nexus" is legalese for "sufficient physical presence." If you have Nexus in a state, the Supreme Court says that state has the right to tax you. Freelancers create Nexus much more easily than they think.</p>
    <p><strong>Freelancers create Nexus by:</strong></p>
    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Physical Presence:</strong> Working there (even for a few weeks).</li>
        <li><strong>Property:</strong> Owning a rental property or vacation home.</li>
        <li><strong>Inventory:</strong> Storing goods in an Amazon FBA warehouse in that state.</li>
        <li><strong>Employees:</strong> Hiring a sub-contractor who lives there (sometimes).</li>
        <li><strong>Economic Nexus:</strong> Selling >$100k of digital goods to residents (see Article 28).</li>
    </ul>

    <h2 id="residency">Residency vs. Source Income</h2>
    <p>To understand the math, you must separate "Resident" from "Source."</p>
    <p><strong>1. Resident State:</strong> Where you live (domicile). They tax 100% of your worldwide income. <br/>
    <em>Example: You live in New Jersey.</em></p>
    <p><strong>2. Source State:</strong> Where you earn money. They tax only the money earned within their borders. <br/>
    <em>Example: You commute to New York to work.</em></p>
    <p><strong>The "Credit" Mechanism:</strong><br/>
    You file a Non-Resident return in NY and pay tax. <br/>
    You file a Resident return in NJ. NJ calculates your tax, but gives you a <strong>Credit</strong> for the money you paid NY. <br/>
    <strong>Result:</strong> You don't pay double. You essentially pay the rate of the <em>higher</em> tax state. (If NY is 8% and NJ is 6%, you pay 8% total. If NY is 4% and NJ is 6%, you pay 4% to NY and 2% to NJ).</p>

    <h2 id="sticky-states">The "Sticky" States (California, Virginia)</h2>
    <p>Some states are notoriously hard to leave. They are "Sticky."</p>
    <p><strong>California:</strong> If you leave CA to travel for 18 months but plan to return, CA considers you a resident the entire time. They look at:</p>
    <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Did you keep your CA Driver's License?</li>
        <li>Did you keep a bank account in CA?</li>
        <li>Did you keep your doctor/dentist in CA?</li>
        <li>Did you store your furniture in CA?</li>
    </ul>
    <p>If the answer is "Yes," prepare for a tax bill. To leave CA, you must "Break Domicile" completely: Sell your house, move your license, move your bank, and establish a new permanent home elsewhere.</p>

    <h2 id="convenience-rule">The "Convenience of the Employer" Trap</h2>
    <p>Five states (<strong>New York, Pennsylvania, Nebraska, Delaware, Connecticut</strong>) play dirty. They utilize the "Convenience of the Employer" rule.</p>
    <p><strong>The Rule:</strong> "If you work remotely for a NY company for your own convenience (not because the employer <em>requires</em> you to be elsewhere), valid NY work days include days you worked from home in another state."</p>
    <p><strong>Scenario:</strong> You live in Florida (0% tax). You begin a W-2 job for a NY firm. You never visit NY. <br/>
    <strong>Outcome:</strong> NY taxes you as if you worked in Manhattan every day. You pay ~8% NY tax. Florida has no income tax, so there is no "Credit" to offset it. You just lose 8% of your income.</p>
    <p><strong>Workaround:</strong> This rule generally applies to <strong>Employees (W-2)</strong>. It rarely applies to <strong>Independent Contractors (1099)</strong>. This is a huge reason to stay freelance if your client is in NY.</p>

    <h2 id="reciprocity">Reciprocity Agreements</h2>
    <p>Some neighbor states play nice to avoid the paperwork nightmare. Maryland, Virginia, and DC have reciprocity. If you live in VA and work in DC, you only file in VA. DC agrees not to tax you. Check if your states have a pact.</p>

    <h2 id="nomad-strategy">Strategy for Nomads</h2>
    <p>If you live in a van, you still have a "Domicile." It is usually the last place you lived. You cannot just say "I live nowhere." The IRS will likely assign you to the state where you have the most ties (usually your mom's house or your old apartment).</p>
    <p><strong>The Fix:</strong> Establish a domicile in a tax-free state (SD, TX, FL) before you hit the road.</p>
    <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-100 my-4">
        <h4 class="font-bold text-indigo-900 mb-2">The South Dakota Method</h4>
        <p>South Dakota is famous for RVers.</p>
        <ol class="list-decimal pl-6 space-y-1 text-sm text-indigo-800">
            <li>Review a mail forwarding service (like America's Mailbox).</li>
            <li>Stay ONE night in a hotel in SD.</li>
            <li>Get a receipt.</li>
            <li>Go to the DMV with your receipt and mail service contract.</li>
            <li>Get a South Dakota Driver's License.</li>
            <li>You are now a resident of a 0% tax state.</li>
        </ol>
    </div>

    <h2 id="faq">State Tax FAQs</h2>
    <div class="space-y-6">
        <div>
            <h4 class="font-bold text-lg mb-2">Q: Do I need to file for every state I drive through?</h4>
            <p class="text-text-muted">Generally, no, unless you earn money <em>in</em> that state. An Uber driver doing rides in 3 states needs to file in 3 states. A graphic designer sending emails from a hotel in Utah for 2 days likely falls under "de minimis" rules and doesn't need to file there.</p>
        </div>
        <div>
            <h4 class="font-bold text-lg mb-2">Q: What if I move on July 1st?</h4>
            <p class="text-text-muted">You file "Part-Year Resident" returns for both states. You split your income based on the date you moved. (Jan-June income to State A, July-Dec income to State B).</p>
        </div>
    </div>
  `
};
