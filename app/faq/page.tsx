"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "How much does it cost to record a song?",
      answer: "Each project is different and can take more or less time. Contact me so we can discuss your project, and I can give you an accurate quote."
    },
    {
      question: "Do you charge by the hour?",
      answer: "I charge a flat-rate fee instead of hourly. This helps keep things simple with less confusion and stress."
    },
    {
      question: "How do I pay for my session?",
      answer: "I accept cash and card. Upon payment, I will issue you a receipt."
    },
    {
      question: "How many revisions can I get on a mix?",
      answer: "We aim for up to three revisions if needed before additional labor charges apply."
    },
    {
      question: "Do you do remote sessions?",
      answer: "Yes! If you are not local and would like me to mix your song, we can absolutely do that. Reach out to me to discuss this option."
    }
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