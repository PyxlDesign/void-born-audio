"use client";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';


export function Hero() {
    const parallaxRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        let lastScrollY = 0;
        let ticking = false;

        const handleScroll = () => {
            lastScrollY = window.scrollY;
            if (!ticking) {
                requestAnimationFrame(() => {
                    setOffset(lastScrollY * 0.5);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <section className="relative min-h-screen overflow-hidden flex items-center justify-center p-4 md:p-6 lg:p-8">
            <div
                ref={parallaxRef}
                className="absolute inset-0"
                style={{
                    transform: `translate3d(0, ${offset * 0.75}px, 0)`
                }}
            >
                <Image
                    src="/images/hero.avif"
                    alt="Sound board with purple lighting"
                    fill
                    className="w-full h-[120%] object-cover brightness-80"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/90" />
            </div>
            <div className="absolute inset-0 grid gap-8 content-center justify-center"
                style={{
                    transform: `translate3d(0, ${offset * 0.75}px, 0)`
                }}>
                <Image
                    src="/images/logo.avif"
                    alt="Void Born Audio Logo"
                    width={768}
                    height={506}
                    loading='eager'
                    className="relative h-auto w-3xl max-w-2/3 opacity-90 m-auto"
                />
                <h1 className="sr-only">Void Born Audio</h1>
                <p className="purple-glow text-center text-xl md:text-4xl">Production & Mixing </p>

                <Link
                    href="#contact"
                    className="bg-purple-700 mx-auto text-white px-10 py-2 rounded-full hover:bg-transparent cursor-pointer border-purple-700 border-2 transition-colors purple-glow-box"
                >
                    Contact Me
                </Link>

            </div>
            <div className="sr-only">
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300">
                        Where Sound Takes Form
                    </p>
                </div>
            </div>
        </section>
    );
}