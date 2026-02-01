'use client';

import { Calculator } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Calculator', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: 'How it works', href: '/how-it-works' },
        { name: 'Deductions Guide', href: '/deductions-guide' },
    ];

    return (
        <header className="border-b border-border bg-surface/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-primary p-1.5 rounded-lg text-white">
                        <Calculator className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">GigTaxCalc</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-muted">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`hover:text-primary transition-colors py-1 ${pathname === link.href ? 'text-primary border-b-2 border-primary' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <button className="hidden sm:block text-sm font-bold text-primary hover:bg-primary/5 px-4 py-2 rounded-xl transition-colors">
                        Log In
                    </button>
                    <button className="btn-primary text-sm py-2 px-4 shadow-lg shadow-primary/20">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
}

export function Footer() {
    return (
        <footer className="bg-surface border-t border-border mt-20 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-primary" />
                            <span className="font-bold text-lg">GigTaxCalc</span>
                        </Link>
                        <p className="text-sm text-text-muted leading-relaxed">
                            Professional tax estimation tool for the modern gig economy.
                            Helping independent contractors stay ahead of the IRS.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-sm uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-2 text-sm text-text-muted">
                            <li><Link href="/deductions-guide" className="hover:text-primary transition-colors font-medium">2026 Mileage Rates</Link></li>
                            <li><Link href="/how-it-works" className="hover:text-primary transition-colors font-medium">How Calculation works</Link></li>
                            <li><Link href="/" className="hover:text-primary transition-colors font-medium">Quarterly Tax Deadlines</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-sm uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-2 text-sm text-text-muted">
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Term of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-border mt-12 pt-8 text-center text-xs text-text-muted">
                    <p>© {new Date().getFullYear()} GigTaxCalc. Professional Tax Tooling for Freelancers.</p>
                </div>
            </div>
        </footer>
    );
}
