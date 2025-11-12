import React from 'react';
import { posts } from '../data/posts';
import { authors } from '../data/authors';
import type { Post } from '../types';

interface SidebarProps {
    onSelectPost: (post: Post) => void;
}

const Sidebar = ({ onSelectPost }: SidebarProps) => {
    const popularPosts = posts.slice(0, 3);
    const allTags = [...new Set(posts.flatMap(p => p.tags))];
    const mainAuthor = authors[0];

    return (
        <aside className="space-y-8 sticky top-24">
            {/* Author Bio */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md text-center group perspective-1000">
                <h3 className="font-display text-xl font-bold text-light-text dark:text-white mb-4">About the Author</h3>
                 <div className="transform-style-3d group-hover:rotate-y-180 transition-transform duration-700 w-24 h-24 mx-auto">
                    <img
                        src={mainAuthor.avatarUrl}
                        alt={mainAuthor.name}
                        className="rounded-full w-24 h-24 object-cover absolute backface-hidden"
                    />
                     <div className="rounded-full w-24 h-24 bg-orange flex items-center justify-center absolute backface-hidden rotate-y-180">
                         <span className="font-display text-white text-4xl font-bold">FB</span>
                     </div>
                </div>
                <h4 className="mt-4 text-lg font-semibold text-light-text dark:text-white">{mainAuthor.name}</h4>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{mainAuthor.bio}</p>
            </div>

            {/* Popular Posts */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                <h3 className="font-display text-xl font-bold text-light-text dark:text-white">Popular Posts</h3>
                <ul className="mt-4 space-y-4">
                    {popularPosts.map(post => (
                        <li key={post.id}>
                            <a onClick={() => onSelectPost(post)} className="font-semibold text-light-text dark:text-silver hover:text-orange cursor-pointer transition-colors">
                                {post.title}
                            </a>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{post.publishedDate}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tag Cloud */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                <h3 className="font-display text-xl font-bold text-light-text dark:text-white">Tags</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                    {allTags.map(tag => (
                        <a key={tag} href="#" className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-sm rounded-full text-gray-600 dark:text-gray-300 hover:bg-orange hover:text-white transition-colors">
                            {tag}
                        </a>
                    ))}
                </div>
            </div>
             {/* Newsletter */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                <h3 className="font-display text-xl font-bold text-light-text dark:text-white">Newsletter</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Join our mailing list for the latest updates.</p>
                <form className="mt-4 flex">
                    <input type="email" placeholder="your.email@example.com" className="w-full text-sm px-3 py-2 rounded-l-md border-gray-300 dark:bg-slate-700 dark:border-slate-600 focus:ring-orange focus:border-orange"/>
                    <button className="px-4 py-2 bg-orange text-white text-sm font-semibold rounded-r-md hover:opacity-90 transition-opacity">
                        Subscribe
                    </button>
                </form>
            </div>
        </aside>
    );
};

export default Sidebar;