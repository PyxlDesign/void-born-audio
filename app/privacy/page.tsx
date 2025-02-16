"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-black mb-8"
        >
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="bg-black rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-6">
              We collect information that you provide directly to us, including
              when you fill out a contact form, sign up for our newsletter, or
              communicate with us via email.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-6">
              We use the information we collect to:
              <ul className="list-disc pl-6 mt-2">
                <li>Respond to your inquiries and requests</li>
                <li>Send you updates and marketing communications</li>
                <li>Improve our services and website experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </p>

            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
            <p className="mb-6">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this policy.
            </p>

            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="mb-6">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="mb-6">
              You have the right to:
              <ul className="list-disc pl-6 mt-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </p>

            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us at privacy@example.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}