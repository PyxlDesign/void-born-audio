"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-xl font-bold flex items-center gap-2">
                        <Image
                            src="/images/logo-words-black.avif" alt="Void Born Audio Logo"
                            width={174} height={50}
                            className="invert"
                        />
                        <span className="sr-only">Void Born Audio</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 text-lg tracking-widest">
                        <Link href="/#about" className="text-gray-300 hover:text-purple-400 transition-colors">
                            About
                        </Link>
                        <Link href="/#services" className="text-gray-300 hover:text-purple-400 transition-colors">
                            Services
                        </Link>
                        <Link href="/#portfolio" className="text-gray-300 hover:text-purple-400 transition-colors">
                            Portfolio
                        </Link>
                        <Link href="/faq" className="text-gray-300 hover:text-purple-400 transition-colors">
                            FAQ
                        </Link>
                        <Link href="/#contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                            Contact
                        </Link>
                        <Link
                            href="/#contact"
                            className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-600 transition-colors purple-glow-box"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-300 hover:text-purple-400"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 text-xl tracking-widest">
                        <div className="flex flex-col space-y-4">
                            <Link
                                href="/#about"
                                className="text-gray-300 hover:text-purple-400"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/#services"
                                className="text-gray-300 hover:text-purple-400"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href="/#portfolio"
                                className="text-gray-300 hover:text-purple-400"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Portfolio
                            </Link>
                            <Link
                                href="/faq"
                                className="text-gray-300 hover:text-purple-400"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                FAQ
                            </Link>
                            <Link
                                href="/#contact"
                                className="text-gray-300 hover:text-purple-400"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <Link
                                href="/#contact"
                                className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-600 transition-colors inline-block text-center purple-glow-box"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};