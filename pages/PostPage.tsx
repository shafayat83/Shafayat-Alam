import React from 'react';
import type { Post } from '../types';
import { authors } from '../data/authors';

interface PostPageProps {
    post: Post;
    onGoBack: () => void;
}

const PostPage: React.FC<PostPageProps> = ({ post, onGoBack }) => {
    const author = authors.find(a => a.id === post.authorId);

    return (
        <article className="max-w-4xl mx-auto animate-fadeInUp">
            <button onClick={onGoBack} className="mb-8 text-orange font-semibold hover:underline">
                &larr; Back to all posts
            </button>

            <header className="mb-8">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-2">
                    <span>{post.publishedDate}</span>
                    <span>&middot;</span>
                    <span>{post.readTime} min read</span>
                </div>
                <h1 className="mt-2 text-4xl md:text-5xl font-display font-extrabold text-light-text dark:text-white leading-tight">
                    {post.title}
                </h1>
                {author && (
                     <div className="mt-6 flex items-center">
                        <img className="h-12 w-12 rounded-full object-cover" src={author.avatarUrl} alt={author.name} />
                        <div className="ml-4">
                            <p className="text-base font-semibold text-light-text dark:text-white">{author.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{author.bio.substring(0, 40)}...</p>
                        </div>
                    </div>
                )}
            </header>

            <div className="relative perspective-1000">
                 <img
                    className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl mb-8 transform rotate-x-2"
                    src={post.imageUrl}
                    alt={`Hero image for ${post.title}`}
                />
            </div>

            <div
                className="prose prose-lg dark:prose-invert max-w-none text-light-text dark:text-silver prose-a:text-orange prose-strong:text-light-text dark:prose-strong:text-white prose-headings:font-display"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-8 border-t dark:border-gray-700 pt-6">
                <h3 className="text-xl font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                     {post.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-sm rounded-full text-gray-600 dark:text-gray-300">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-display font-bold border-b-2 border-orange pb-2">Comments</h2>
                <div className="mt-6 bg-slate-100 dark:bg-slate-800 p-8 rounded-xl text-center">
                    <p className="text-gray-600 dark:text-gray-400">Comments are powered by an external service. Feature coming soon!</p>
                </div>
            </div>
        </article>
    );
};

export default PostPage;
