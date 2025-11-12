import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './hooks/useTheme';
import { posts as allPosts } from './data/posts';
import type { Post } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import Sidebar from './components/Sidebar';

const AppContent: React.FC = () => {
    const [activePost, setActivePost] = useState<Post | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const { theme } = useTheme();

    useEffect(() => {
        if (activePost) {
            document.title = `${activePost.title} — Falcon Blog`;
        } else {
            document.title = 'Falcon Blog — Soar with Words';
        }
    }, [activePost]);

    const filteredPosts = allPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelectPost = (post: Post) => {
        setActivePost(post);
        window.scrollTo(0, 0);
    };

    const handleGoHome = () => {
        setActivePost(null);
    };

    return (
        <div className={`flex flex-col min-h-screen transition-colors duration-300 ${theme}`}>
            <a href="#main-content" className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden focus:left-auto focus:top-auto focus:w-auto focus:h-auto focus:p-2 focus:m-2 focus:bg-orange focus:text-white focus:rounded-md focus:z-50">
                Skip to main content
            </a>
            <Header onSearch={setSearchTerm} onGoHome={handleGoHome} />

            <main id="main-content" className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className={activePost ? 'lg:col-span-12' : 'lg:col-span-8'}>
                        {activePost ? (
                            <PostPage post={activePost} onGoBack={handleGoHome} />
                        ) : (
                            <HomePage posts={filteredPosts} onSelectPost={handleSelectPost} />
                        )}
                    </div>
                    {!activePost && (
                         <div className="hidden lg:block lg:col-span-4">
                            <Sidebar onSelectPost={handleSelectPost} />
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;