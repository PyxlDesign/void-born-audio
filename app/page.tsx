import Link from "next/link";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Porfolio";
import { Footer } from "@/components/Footer";

export default function Home() {

  return (
    <main className="bg-black text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Portfolio Section */}
      <Portfolio />

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
      <Footer />
    </main>
  );
}