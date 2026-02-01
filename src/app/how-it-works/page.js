'use client';

import AdPlaceholder from '@/components/Ads/AdPlaceholder';
import { CheckCircle2, ArrowRight, Scale, Calculator, Landmark } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorks() {
    const steps = [
        {
            title: "Determine Net Profit",
            desc: "Subtract your business expenses (like mileage and equipment) from your gross 1099 income.",
            icon: Scale,
        },
        {
            title: "Calculate SE Taxable Income",
            desc: "Only 92.35% of your net profit is subject to self-employment tax.",
            icon: Calculator,
        },
        {
            title: "Apply SE Tax Rate",
            desc: "The 15.3% SE tax (12.4% Social Security + 2.9% Medicare) is applied to your taxable income.",
            icon: Landmark,
        },
        {
            title: "Federal Income Tax",
            desc: "Your net income (minus half of your SE tax and your standard deduction) is taxed at federal levels.",
            icon: CheckCircle2,
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight">How it Works</h1>
                <p className="text-lg text-text-muted">A clear breakdown of the 1099 self-employment tax calculation logic.</p>
            </div>

            <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-surface p-6 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <step.icon className="w-24 h-24" />
                            </div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-primary/10 p-2.5 rounded-xl text-primary font-bold">
                                    0{i + 1}
                                </div>
                                <h3 className="font-bold text-xl">{step.title}</h3>
                            </div>
                            <p className="text-text-muted leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <AdPlaceholder slot="how-it-works-middle" className="my-12" />

                <div className="bg-primary text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-3xl font-bold">The Simplified Formula</h2>
                        <div className="bg-black/20 p-6 rounded-2xl font-mono text-sm md:text-base space-y-2 border border-white/10">
                            <p>Profit = Gross Income - Expenses</p>
                            <p>SE Tax = Profit × 0.9235 × 0.153</p>
                            <p>Taxable Income = Profit - (SE Tax × 0.5) - Deduction - QBI</p>
                            <p className="pt-4 border-t border-white/20 mt-4 text-emerald-300 font-bold">Total Liability = SE Tax + Federal Tax</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/" className="bg-white text-primary px-8 py-3 rounded-xl font-bold text-center hover:bg-slate-100 transition-colors inline-flex items-center justify-center gap-2">
                                Back to Calculator <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
