import React from 'react';
import { useTheme } from '../hooks/useTheme';

const FalconLogo: React.FC = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-orange">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" style={{ transform: 'translateZ(10px)' }}/>
        <path d="M2 17L12 22L22 17L12 12L2 17Z" fill="currentColor" style={{ opacity: 0.6 }} />
        <path d="M2 7L12 12L22 7L12 2L2 7Z" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17L12 12L2 17Z" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" />
    </svg>
);

const SunIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-silver hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange transition-colors"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
    );
};

interface HeaderProps {
    onSearch: (term: string) => void;
    onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onGoHome }) => {
    return (
        <header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/80 dark:bg-navy/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div
                        className="flex items-center space-x-3 cursor-pointer group perspective-1000"
                        onClick={onGoHome}
                    >
                        <div className="transform-style-3d group-hover:rotate-y-12 transition-transform duration-300">
                             <FalconLogo />
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-display font-bold text-light-text dark:text-white">Falcon Blog</h1>
                            <p className="text-xs text-silver hidden sm:block">Soar with Words.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <input
                            type="search"
                            placeholder="Search posts..."
                            onChange={(e) => onSearch(e.target.value)}
                            className="hidden md:block w-48 lg:w-64 px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-light-text dark:text-silver placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange transition-all"
                        />
                        <ThemeToggle />
                        <button className="px-4 py-2 text-sm font-medium rounded-full bg-orange text-white hover:opacity-90 transition-opacity">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
