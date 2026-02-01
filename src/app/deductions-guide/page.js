'use client';

import AdPlaceholder from '@/components/Ads/AdPlaceholder';
import { Car, Home, Phone, Heart, HardDrive, Info } from 'lucide-react';

export default function DeductionsGuide() {
    const deductions = [
        {
            title: "Mileage (Business Use)",
            desc: "The largest deduction for most gig workers. For 2026, the IRS rate is 72.5 cents per mile.",
            icon: Car,
            color: "text-blue-500",
            bg: "bg-blue-50",
        },
        {
            title: "Home Office",
            desc: "If you use a portion of your home exclusively for work, you can deduct rent, utilities, and insurance.",
            icon: Home,
            color: "text-emerald-500",
            bg: "bg-emerald-50",
        },
        {
            title: "Phone & Internet",
            desc: "Deduct the business percentage of your monthly bills if you use them to find or manage work.",
            icon: Phone,
            color: "text-purple-500",
            bg: "bg-purple-50",
        },
        {
            title: "Health Insurance",
            desc: "Self-employed individuals can often deduct 100% of their health insurance premiums.",
            icon: Heart,
            color: "text-red-500",
            bg: "bg-red-50",
        },
        {
            title: "Equipment & Supplies",
            desc: "Laptops, delivery bags, software subscriptions, and office supplies are all deductible.",
            icon: HardDrive,
            color: "text-orange-500",
            bg: "bg-orange-50",
        }
    ];

    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-12">
                {/* Main Content */}
                <div className="flex-1 space-y-12">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-extrabold tracking-tight">The Ultimate 1099 <span className="text-primary">Deduction Guide</span></h1>
                        <p className="text-lg text-text-muted">Maximized your tax savings with these common gig economy business expenses.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {deductions.map((item, i) => (
                            <div key={i} className="flex gap-6 p-6 rounded-3xl border border-border bg-surface shadow-sm">
                                <div className={`${item.bg} ${item.color} p-4 rounded-2xl h-fit`}>
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-xl">{item.title}</h3>
                                    <p className="text-text-muted leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-amber-50 border border-amber-200 p-8 rounded-3xl space-y-4">
                        <div className="flex items-center gap-2 text-amber-800 font-bold">
                            <Info className="w-5 h-5" />
                            <span>Pro Tip: Save Receipts</span>
                        </div>
                        <p className="text-sm text-amber-900/80 leading-relaxed">
                            Always keep digital copies of your receipts. For mileage, apps like Stride or Everlance can automate your tracking and ensure your deductions stand up to an IRS audit.
                        </p>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="w-full md:w-80 space-y-8">
                    <div className="bg-surface rounded-3xl border border-border p-6 shadow-sm">
                        <h3 className="font-bold mb-4 uppercase text-xs tracking-widest text-text-muted">2026 Mileage Rates</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Business</span>
                                <span className="font-bold text-primary">72.5¢</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Medical</span>
                                <span className="font-bold text-text-muted">20.5¢</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Charity</span>
                                <span className="font-bold text-text-muted">14.0¢</span>
                            </div>
                        </div>
                    </div>

                    <AdPlaceholder slot="deductions-sidebar" format="vertical" className="min-h-[600px]" />
                </aside>
            </div>
        </div>
    );
}
