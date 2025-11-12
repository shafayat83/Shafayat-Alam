import React from 'react';
import type { Post } from '../types';

interface PostCardProps {
    post: Post;
    onSelectPost: (post: Post) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onSelectPost }) => {
    return (
        <div 
            className="group perspective-1000 animate-fadeInUp"
            style={{ animationDelay: `${Math.random() * 0.3}s` }}
            onClick={() => onSelectPost(post)}
        >
            <div className="block bg-white dark:bg-slate-800 rounded-xl shadow-md dark:shadow-2xl overflow-hidden transform-style-3d transition-all duration-500 group-hover:shadow-3d-light dark:group-hover:shadow-3d-dark group-hover:-translate-y-2 group-hover:rotate-x-4 cursor-pointer">
                <div className="relative">
                    <img className="w-full h-48 object-cover" src={post.imageUrl} alt={`Featured image for ${post.title}`} loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                    <p className="text-sm text-orange font-semibold">{post.tags[0]}</p>
                    <h3 className="mt-2 text-xl font-bold text-light-text dark:text-white group-hover:text-orange transition-colors">{post.title}</h3>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{post.excerpt}</p>
                    <div className="mt-4 text-xs text-gray-400 dark:text-gray-500">
                        <span>{post.publishedDate}</span> &middot; <span>{post.readTime} min read</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
