import { create } from 'zustand';
import { calculateTax } from './taxEngine';

const useTaxStore = create((set, get) => ({
    inputs: {
        year: 2026,
        grossIncome: 0,
        milesDriven: 0,
        otherExpenses: 0,
        filingStatus: 'single',
    },
    results: null,

    setInputs: (newInputs) => {
        set((state) => {
            const updatedInputs = { ...state.inputs, ...newInputs };
            const results = calculateTax(updatedInputs);
            return { inputs: updatedInputs, results };
        });
    },

    calculate: () => {
        const results = calculateTax(get().inputs);
        set({ results });
    },
}));

export default useTaxStore;
