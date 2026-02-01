import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import AdPlaceholder from '@/components/Ads/AdPlaceholder';
import { getPostBySlug, getRelatedPosts, getAllPosts } from '@/lib/blog/utils';

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | GigTaxCalc Blog`,
        description: post.excerpt,
        keywords: post.keywords,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    const relatedPosts = post ? await getRelatedPosts(slug, post.category) : [];

    if (!post) {
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto px-4 py-12">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-text-muted mb-8">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="opacity-50">/</span>
                <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                <span className="opacity-50">/</span>
                <span className="text-text truncate max-w-[200px]">{post.title}</span>
            </nav>

            {/* Hero Header */}
            <header className="space-y-6 mb-12">
                <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
                        {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime} min read
                    </div>
                    <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        Tax Specialist Team
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                    {post.title}
                </h1>

                {post.image && (
                    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl my-8">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <p className="text-xl text-text-muted leading-relaxed font-medium italic">
                    "{post.excerpt}"
                </p>
            </header>

            {/* Top Ad */}
            <AdPlaceholder slot="blog-top" className="mb-12" />

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8">
                    <div
                        className="prose prose-slate prose-lg max-w-none 
              prose-headings:font-bold prose-headings:tracking-tight 
              prose-p:leading-relaxed prose-p:text-slate-700 dark:prose-p:text-slate-300
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-3xl prose-img:shadow-xl"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Social Share & Bottom Ad */}
                    <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 text-sm font-bold bg-surface border border-border px-4 py-2 rounded-xl hover:bg-slate-50 transition-colors">
                                <Share2 className="w-4 h-4" /> Share Article
                            </button>
                        </div>
                        <Link href="/" className="text-primary font-bold inline-flex items-center gap-2 hover:underline">
                            Try the 2026 Calculator <ArrowLeft className="w-4 h-4 rotate-180" />
                        </Link>
                    </div>

                    {/* Related Posts Section */}
                    {relatedPosts.length > 0 && (
                        <div className="mt-16 pt-8 border-t border-border">
                            <h3 className="text-2xl font-bold mb-6">Read Next</h3>
                            <div className="grid gap-6 md:grid-cols-2">
                                {relatedPosts.slice(0, 2).map((related) => (
                                    <Link key={related.slug} href={`/blog/${related.slug}`} className="group block bg-surface border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="relative h-48 w-full">
                                            {related.image && (
                                                <Image
                                                    src={related.image}
                                                    alt={related.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            )}
                                        </div>
                                        <div className="p-5">
                                            <p className="text-xs text-primary font-bold uppercase tracking-wider mb-2">{related.category}</p>
                                            <h4 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">{related.title}</h4>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    <AdPlaceholder slot="blog-bottom" className="mt-12" />
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    <div className="sticky top-24">
                        <div className="bg-surface rounded-3xl border border-border p-6 shadow-sm mb-8">
                            <h3 className="font-bold mb-4 uppercase text-xs tracking-widest text-text-muted">Table of Contents</h3>
                            <nav className="space-y-3 text-sm">
                                {post.toc.map((item, i) => (
                                    <a key={i} href={`#${item.id}`} className="block text-text-muted hover:text-primary transition-colors">
                                        {item.text}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <div className="bg-primary text-white p-6 rounded-3xl shadow-lg">
                            <h3 className="font-bold mb-2">Estimate Your Taxes</h3>
                            <p className="text-xs opacity-90 mb-4">Calculate your 2026 take-home pay in seconds.</p>
                            <Link href="/" className="block text-center bg-white text-primary py-2 rounded-xl font-bold text-sm hover:bg-slate-50">
                                Go to Calculator
                            </Link>
                        </div>

                        <AdPlaceholder slot="blog-sidebar" format="vertical" className="mt-8 min-h-[400px]" />
                    </div>
                </aside>
            </div>
        </article>
    );
}
