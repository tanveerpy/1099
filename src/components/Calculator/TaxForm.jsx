'use client';

import useTaxStore from '@/lib/store';
import { DollarSign, Landmark, Car, Briefcase } from 'lucide-react';

export default function TaxForm() {
    const { inputs, setInputs } = useTaxStore();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ [name]: name === 'filingStatus' ? value : Number(value) });
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Year & Filing Status */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-text-muted">Tax Year</label>
                    <select
                        name="year"
                        value={inputs.year}
                        onChange={handleChange}
                        className="input-field"
                    >
                        <option value={2024}>2024</option>
                        <option value={2025}>2025</option>
                        <option value={2026}>2026</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-text-muted">Filing Status</label>
                    <select
                        name="filingStatus"
                        value={inputs.filingStatus}
                        onChange={handleChange}
                        className="input-field"
                    >
                        <option value="single">Single</option>
                        <option value="married">Married Filing Jointly</option>
                        <option value="headOfHousehold">Head of Household</option>
                    </select>
                </div>
            </div>

            {/* Financial Inputs */}
            <div className="space-y-4">
                <label className="block text-sm font-medium text-text-muted">Annual Gross Income</label>
                <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <input
                        type="number"
                        name="grossIncome"
                        placeholder="0.00"
                        value={inputs.grossIncome || ''}
                        onChange={handleChange}
                        className="input-field !pl-12"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-text-muted">Business Miles Driven</label>
                        <div className="relative">
                            <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                            <input
                                type="number"
                                name="milesDriven"
                                placeholder="0"
                                value={inputs.milesDriven || ''}
                                onChange={handleChange}
                                className="input-field !pl-12"
                            />
                        </div>
                        <p className="text-xs text-text-muted px-1">Covers gas, repairs, and depreciation.</p>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-text-muted">Other Expenses</label>
                        <div className="relative">
                            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                            <input
                                type="number"
                                name="otherExpenses"
                                placeholder="0.00"
                                value={inputs.otherExpenses || ''}
                                onChange={handleChange}
                                className="input-field !pl-12"
                            />
                        </div>
                        <p className="text-xs text-text-muted px-1">Supplies, phone bills, fees, etc.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
