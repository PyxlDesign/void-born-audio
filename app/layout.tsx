import clsx from 'clsx';
import type { Metadata } from 'next';

import './globals.css';
import { Cormorant_SC } from 'next/font/google';

const cormorant = Cormorant_SC({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Void Born Audio - Professional Music Production Studio',
  description: 'Professional music production studio offering mixing, mastering, and sound design services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={clsx(cormorant.className)}>{children}</body>
    </html >
  );
}