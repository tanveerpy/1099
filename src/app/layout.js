import { Header, Footer } from '@/components/Layout/Layout';
import './globals.css';

export const metadata = {
  title: 'Self-Employment Tax Calculator 2026 | Gig Worker Tax Tool',
  description: 'Estimate your 1099 taxes, self-employment tax, and quarterly payments for 2024, 2025, and 2026. Perfect for Uber, DoorDash, and freelancers.',
  keywords: 'self employment tax calculator, 1099 tax calculator, gig worker taxes, quarterly estimated taxes, uber driver taxes, doordash taxes',
  openGraph: {
    title: 'Self-Employment Tax Calculator 2026',
    description: 'Accurate tax estimates for gig workers and freelancers.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {/* AdSense Script Placeholder */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXX" crossorigin="anonymous"></script> */}
      </body>
    </html>
  );
}
