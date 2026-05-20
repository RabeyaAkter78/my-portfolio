import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import {  FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    // const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // useEffect(() => {
    //     localStorage.setItem('theme', theme);
    //     document.documentElement.setAttribute('data-theme', theme);
    //     if (theme === 'dark') {
    //         document.documentElement.classList.add('dark');
    //     } else {
    //         document.documentElement.classList.remove('dark');
    //     }
    // }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // const toggleTheme = () => {
    //     setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    // };

    const navLinks = [
        { to: 'home', label: 'Home' },
        { to: 'about', label: 'About' },
        { to: 'experience', label: 'Experience' },
        { to: 'skills', label: 'Skills' },
        { to: 'services', label: 'Services' },
        { to: 'projects', label: 'Projects' },
        // { to: 'testimonials', label: 'Clients' },
        // { to: 'blogs', label: 'Blogs' },
        { to: 'contact', label: 'Contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-black/20' 
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                    >
                        Rabeya Akter
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                activeClass="text-primary"
                                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                    </div>

                    {/* Theme Toggle & Mobile Menu Button */}
                    <div className="flex items-center gap-4">
                        {/* <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <FaSun className="w-5 h-5 text-yellow-400" />
                            ) : (
                                <FaMoon className="w-5 h-5 text-gray-400" />
                            )}
                        </button> */}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <FaTimes className="w-5 h-5" />
                            ) : (
                                <FaBars className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-gray-900/98 backdrop-blur-md border-t border-gray-800"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all cursor-pointer"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;