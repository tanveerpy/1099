'use client';

import TaxForm from '@/components/Calculator/TaxForm';
import TaxResults from '@/components/Calculator/TaxResults';
import AdPlaceholder from '@/components/Ads/AdPlaceholder';
import { Info, HelpCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      {/* Hero Section */}
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Self-Employment <span className="text-primary">Tax Calculator</span>
        </h1>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Built for gig workers, freelancers, and 1099 contractors.
          Calculate your net profit and estimate your quarterly payments in seconds.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Calculator Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Top Banner Ad */}
          <AdPlaceholder slot="1234567890" className="w-full" />

          {/* Calculator Card */}
          <div className="bg-surface rounded-3xl border border-border shadow-xl overflow-hidden">
            <div className="flex border-b border-border">
              <div className="bg-primary/5 px-8 py-4 border-b-2 border-primary">
                <span className="font-bold text-primary">Estimate Taxes</span>
              </div>
            </div>

            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                    1. Financial Details
                    <HelpCircle className="w-4 h-4 text-text-muted cursor-help" />
                  </h2>
                  <p className="text-sm text-text-muted mb-6">Enter your estimated annual income and business usage.</p>
                  <TaxForm />
                </div>
              </div>

              <div className="space-y-8 lg:border-l lg:border-border lg:pl-12">
                <div>
                  <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                    2. Your Estimates
                    <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full uppercase">Instant</span>
                  </h2>
                  <p className="text-sm text-text-muted mb-6">Real-time tax calculation for 2024-2026.</p>
                  <TaxResults />
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content for SEO & Trust */}
          <div className="prose prose-slate max-w-none bg-surface p-8 rounded-3xl border border-border space-y-6">
            <h2 className="text-2xl font-bold">Understanding 1099 Taxes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg h-fit">
                    <Info className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">What is Self-Employment Tax?</h3>
                    <p className="text-sm text-text-muted">It's a Social Security and Medicare tax primarily for individuals who work for themselves. It's similar to the FICA taxes withheld from the pay of most wage earners.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-success/10 p-2 rounded-lg h-fit">
                    <Info className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="font-bold">Quarterly Estimated Payments</h3>
                    <p className="text-sm text-text-muted">Since 1099 income doesn't have withholding, you must pay taxes manually 4 times a year to avoid underpayment penalties from the IRS.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Ad */}
          <AdPlaceholder slot="0987654321" className="w-full" />
        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {/* Sidebar Ad (High CTR) */}
          <AdPlaceholder slot="5432167890" format="vertical" className="min-h-[400px]" />

          {/* Quick Tips Box */}
          <div className="bg-indigo-900 text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <h3 className="text-lg font-bold mb-4 relative z-10 text-indigo-100 uppercase tracking-widest text-xs">Pro Tip</h3>
            <p className="text-sm leading-relaxed mb-6 opacity-90">
              Don't forget to track your "dead miles"—the driving you do between deliveries. These are 100% tax-deductible!
            </p>
            <button className="w-full bg-white text-indigo-900 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors">
              View Deduction Guide
            </button>
          </div>

          {/* Newsletter / CTA */}
          <div className="bg-surface rounded-3xl border border-border p-6 shadow-sm">
            <h3 className="font-bold mb-2">Get Tax Updates</h3>
            <p className="text-sm text-text-muted mb-4">Stay informed about IRS rate changes and deadlines.</p>
            <input type="email" placeholder="email@example.com" className="input-field mb-3" />
            <button className="btn-primary w-full py-2.5 text-sm">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
