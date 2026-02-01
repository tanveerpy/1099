import { getAllPosts } from '@/lib/blog/utils';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import AdPlaceholder from '@/components/Ads/AdPlaceholder';

export const metadata = {
    title: 'Gig Tax Authority Blog | 2026 Tax Tips & News',
    description: 'Expert guides on self-employment taxes, deductions, and IRS updates for the 2026 tax year. Stay compliant and save money.',
};

export default async function BlogIndex() {
    const posts = await getAllPosts();

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-16 space-y-6">
                <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-xs">
                    The Knowledge Base
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Master Your <span className="text-primary">Gig Economy Taxes</span>
                </h1>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">
                    In-depth guides, breaking IRS news, and money-saving strategies for independent contractors in 2026.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Feed */}
                <div className="lg:col-span-8 space-y-12">
                    {posts.map((post) => (
                        <article key={post.slug} className="group bg-surface rounded-3xl border border-border p-8 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                                <span className="font-bold text-primary">{post.category}</span>
                                <span>•</span>
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {post.readTime} min read
                                </div>
                            </div>

                            <Link href={`/blog/${post.slug}`} className="block mb-6 overflow-hidden rounded-2xl">
                                <Image
                                    src={post.image || '/images/blog/placeholder.svg'}
                                    alt={post.title}
                                    width={800}
                                    height={400}
                                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </Link>

                            <Link href={`/blog/${post.slug}`}>
                                <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>
                            </Link>

                            <p className="text-text-muted leading-relaxed mb-6">
                                {post.excerpt}
                            </p>

                            <Link
                                href={`/blog/${post.slug}`}
                                className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:gap-3 transition-all"
                            >
                                Read Article <ArrowRight className="w-4 h-4" />
                            </Link>
                        </article>
                    ))}

                    <div className="text-center py-12">
                        <button disabled className="bg-surface-muted text-text-muted px-6 py-3 rounded-xl font-bold opacity-50 cursor-not-allowed">
                            More Articles Coming Soon...
                        </button>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    <div className="bg-indigo-900 text-white p-8 rounded-3xl relative overflow-hidden">
                        <div className="relative z-10 space-y-4">
                            <BookOpen className="w-10 h-10 text-indigo-300" />
                            <h3 className="text-2xl font-bold">Free Tax Checklist</h3>
                            <p className="text-indigo-200 text-sm">Don't miss a single write-off. Get our comprehensive PDF guide for 2026.</p>
                            <button className="w-full bg-white text-indigo-900 font-bold py-3 rounded-xl hover:bg-indigo-50 transition-colors">
                                Download Now
                            </button>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>
                    </div>

                    <AdPlaceholder slot="blog-index-sidebar" format="vertical" className="min-h-[600px]" />
                </aside>
            </div>
        </div>
    );
}
