"use client";

import { ArrowRight, Facebook, Instagram, Youtube, Menu, X, Music2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-xs border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold flex items-center gap-2">
              <Music2 className="text-purple-500" />
              <span className="purple-glow">Void Born Audio</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
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
            <div className="md:hidden py-4">
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

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <Image
            src="/images/hero.avif"
            alt="Hero background"
            fill
            className="w-full h-[120%] object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/90" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 purple-glow">Void Born Audio</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300">
            Where Sound Takes Form
          </p>
          <Link
            href="#contact"
            className="bg-purple-700 text-white px-8 py-3 rounded hover:bg-purple-600 transition-colors purple-glow-box"
          >
            Get Started <ArrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-purple-700">
              <Image
                src="/images/brian-price.avif"
                alt="Recording Studio"
                height={784}
                width={784}
                className="rounded-lg aspect-square purple-glow-box opacity-80"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 purple-glow">About Us</h2>
              <p className="text-gray-300 mb-6">
                Void Born Audio is where innovation meets sound, crafting
                exceptional music productions that resonate with audiences. Our state-of-the-art
                studio and experienced team combine technical mastery with creative artistry
                to bring your musical vision to life.
              </p>
              {/* <Link
                href="/about"
                className="text-purple-400 font-semibold hover:text-purple-300 transition-colors"
              >
                Learn More <ArrowRight className="inline-block ml-1" />
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 purple-glow">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Music Production",
                description:
                  "Full-service music production with state-of-the-art equipment and expertise",
              },
              {
                title: "Mixing & Mastering",
                description:
                  "Professional mixing and mastering to perfect your sound",
              },
              {
                title: "Sound Design",
                description:
                  "Custom sound design and audio engineering for various media",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-black p-8 rounded-lg border border-purple-900/50 hover:border-purple-500/50 transition-colors purple-glow-box"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-400">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 purple-glow">Our Portfolio</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 rounded-lg p-6 purple-glow-box">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Latest Releases</h3>
              <iframe
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405726&color=%236b46c1&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 purple-glow-box">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Featured Work</h3>
              <iframe
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/405726&color=%236b46c1&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 purple-glow">Get in Touch</h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to bring your music to the next level?
          </p>
          <Link
            href="mailto:contact@voidbornaudio.com"
            className="bg-purple-700 text-white px-8 py-3 rounded hover:bg-purple-600 transition-colors purple-glow-box"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 border-t border-purple-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Music2 className="text-purple-500" />
                <span className="purple-glow">Void Born</span>
              </h3>
              <p className="text-gray-400">
                Where Sound Takes Form
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-purple-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-purple-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Contact</h4>
              <p className="text-gray-400">contact@voidbornaudio.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}