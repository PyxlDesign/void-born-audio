"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer full-service music production, professional mixing and mastering, sound design, and audio engineering services for artists and media projects.",
    },
    {
      question: "What is your studio setup like?",
      answer:
        "Our state-of-the-art studio features professional-grade recording equipment, industry-standard DAWs, and a carefully treated acoustic environment for optimal sound quality.",
    },
    {
      question: "Do you work with all music genres?",
      answer:
        "Yes, we work with artists across all genres. Our team has experience in hip-hop, rock, electronic, pop, classical, and everything in between.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. A single track typically takes 2-4 weeks from recording to final master, while full albums may take 2-3 months.",
    },
    {
      question: "Do you offer remote sessions?",
      answer:
        "Yes, we offer remote recording sessions and mixing services. We can work with artists worldwide through high-quality video calls and file sharing.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-purple-400 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl tracking-wide font-bold mb-12 purple-glow">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 hover:bg-zinc-800 transition-colors border border-purple-900/50 hover:border-purple-500/50 purple-glow-box"
            >
              <h3 className="text-2xl tracking-wide font-semibold mb-3 text-purple-400">{faq.question}</h3>
              <p className="font-sans tracking-widest leading-loose text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}