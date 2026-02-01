'use client';

import useTaxStore from '@/lib/store';
import { Landmark, TrendingDown, Wallet, Calendar } from 'lucide-react';

const StatCard = ({ label, value, icon: Icon, colorClass }) => (
    <div className="p-4 rounded-xl border border-border bg-surface shadow-sm">
        <div className="flex items-center gap-3 mb-1 text-text-muted">
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">{label}</span>
        </div>
        <div className={`text-2xl font-bold ${colorClass}`}>
            {typeof value === 'number' ? `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : value}
        </div>
    </div>
);

export default function TaxResults() {
    const { results } = useTaxStore();

    if (!results) {
        return (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                <TrendingDown className="w-12 h-12 text-border" />
                <p className="text-text-muted">Enter your income details to see your calculated tax estimates.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <StatCard
                    label="Total Tax Liability"
                    value={results.totalTaxLiability}
                    icon={Landmark}
                    colorClass="text-red-500"
                />
                <StatCard
                    label="Estimated Quarterly"
                    value={results.quarterlyPayment}
                    icon={Calendar}
                    colorClass="text-primary"
                />
                <StatCard
                    label="Net Take Home"
                    value={results.takeHome}
                    icon={Wallet}
                    colorClass="text-success"
                />
                <StatCard
                    label="Effective Tax Rate"
                    value={`${results.effectiveRate.toFixed(1)}%`}
                    icon={TrendingDown}
                    colorClass="text-accent"
                />
            </div>

            <div className="bg-surface-muted p-6 rounded-2xl border border-border space-y-4">
                <h3 className="font-bold text-lg">Breakdown</h3>
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span className="text-text-muted">Net Business Profit</span>
                        <span className="font-medium">${results.netProfit.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-text-muted">Self-Employment Tax (SE)</span>
                        <span className="font-medium text-red-500">-${results.totalSETax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-text-muted">Federal Income Tax</span>
                        <span className="font-medium text-red-500">-${results.federalIncomeTax.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-border pt-2 flex justify-between font-bold text-base">
                        <span>Remaining Take-Home</span>
                        <span className="text-success">${results.takeHome.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
