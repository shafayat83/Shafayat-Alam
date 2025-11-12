import React, { useState, useEffect, useCallback } from 'react';
import type { Post } from '../types';
import PostCard from '../components/PostCard';

interface HomePageProps {
    posts: Post[];
    onSelectPost: (post: Post) => void;
}

const Carousel: React.FC<{ posts: Post[], onSelectPost: (post: Post) => void }> = ({ posts, onSelectPost }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }, [posts.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
    };

    useEffect(() => {
        const timer = setTimeout(nextSlide, 5000);
        return () => clearTimeout(timer);
    }, [currentIndex, nextSlide]);

    if (!posts.length) return null;

    return (
        <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl mb-12 animate-fadeInUp">
            <div className="w-full h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {posts.map((post) => (
                    <div key={post.id} className="w-full h-full flex-shrink-0 relative cursor-pointer" onClick={() => onSelectPost(post)}>
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 text-white">
                            <span className="px-3 py-1 bg-orange text-white text-sm font-semibold rounded-full">{post.tags[0]}</span>
                            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold">{post.title}</h2>
                            <p className="mt-2 text-lg text-silver hidden md:block max-w-2xl">{post.excerpt}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-orange transition-colors" aria-label="Previous post">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-orange transition-colors" aria-label="Next post">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {posts.map((_, index) => (
                    <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-orange' : 'bg-white/50'}`}></button>
                ))}
            </div>
        </div>
    );
};


const HomePage: React.FC<HomePageProps> = ({ posts, onSelectPost }) => {
    const featuredPosts = posts.filter(p => p.featured);
    const regularPosts = posts.filter(p => !p.featured);

    return (
        <div>
            <Carousel posts={featuredPosts} onSelectPost={onSelectPost} />

            <h2 className="text-3xl font-display font-bold text-light-text dark:text-white border-b-2 border-orange pb-2 mb-8">
                Latest Posts
            </h2>

            {posts.length > 0 ? (
                 <div className="grid gap-8 md:grid-cols-2">
                    {regularPosts.map((post) => (
                        <PostCard key={post.id} post={post} onSelectPost={onSelectPost} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <h3 className="text-2xl font-bold text-light-text dark:text-white">No Posts Found</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search term.</p>
                </div>
            )}
        </div>
    );
};

export default HomePage;
