
import { ARTICLE_1 } from './article_1';
import { ARTICLE_2 } from './article_2';
import { ARTICLE_3 } from './article_3';
import { ARTICLE_4 } from './article_4';
import { ARTICLE_5 } from './article_5';
import { ARTICLE_6 } from './article_6';
import { ARTICLE_7 } from './article_7';
import { ARTICLE_8 } from './article_8';
import { ARTICLE_9 } from './article_9';
import { ARTICLE_10 } from './article_10';
import { ARTICLE_11 } from './article_11';
import { ARTICLE_12 } from './article_12';
import { ARTICLE_13 } from './article_13';
import { ARTICLE_14 } from './article_14';
import { ARTICLE_15 } from './article_15';
import { ARTICLE_16 } from './article_16';
import { ARTICLE_17 } from './article_17';
import { ARTICLE_18 } from './article_18';
import { ARTICLE_19 } from './article_19';
import { ARTICLE_20 } from './article_20';
import { ARTICLE_21 } from './article_21';
import { ARTICLE_22 } from './article_22';
import { ARTICLE_23 } from './article_23';
import { ARTICLE_24 } from './article_24';
import { ARTICLE_25 } from './article_25';
import { ARTICLE_26 } from './article_26';
import { ARTICLE_27 } from './article_27';
import { ARTICLE_28 } from './article_28';
import { ARTICLE_29 } from './article_29';
import { ARTICLE_30 } from './article_30';

const BLOG_POSTS = [
    ARTICLE_1,
    ARTICLE_2,
    ARTICLE_3,
    ARTICLE_4,
    ARTICLE_5,
    ARTICLE_6,
    ARTICLE_7,
    ARTICLE_8,
    ARTICLE_9,
    ARTICLE_10,
    ARTICLE_11,
    ARTICLE_12,
    ARTICLE_13,
    ARTICLE_14,
    ARTICLE_15,
    ARTICLE_16,
    ARTICLE_17,
    ARTICLE_18,
    ARTICLE_19,
    ARTICLE_20,
    ARTICLE_21,
    ARTICLE_22,
    ARTICLE_23,
    ARTICLE_24,
    ARTICLE_25,
    ARTICLE_26,
    ARTICLE_27,
    ARTICLE_28,
    ARTICLE_29,
    ARTICLE_30,
].sort((a, b) => new Date(b.date) - new Date(a.date));

export async function getAllPosts() {
    return BLOG_POSTS;
}

export async function getPostBySlug(slug) {
    return BLOG_POSTS.find(post => post.slug === slug);
}

export async function getRelatedPosts(currentSlug, category, count = 3) {
    const related = BLOG_POSTS
        .filter(post => post.category === category && post.slug !== currentSlug)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    if (related.length >= count) {
        return related.slice(0, count);
    }

    // Fallback: Add latest posts (excluding current and already found related)
    const others = BLOG_POSTS
        .filter(post => post.slug !== currentSlug && !related.includes(post))
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, count - related.length);

    return [...related, ...others];
}
