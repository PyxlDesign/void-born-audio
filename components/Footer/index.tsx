import { Facebook, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-black text-center md:text-left text-white py-12 px-4 border-t border-purple-900/30">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Image
                                src="/images/logo-words-black.avif"
                                alt="Void Born Audio"
                                width={174}
                                height={50}
                                className="invert m-auto md:ml-0 max-w-full"
                            />
                            <span className="sr-only">Void Born</span>
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
                        <div className="flex space-x-4 justify-center md:justify-start">
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
    )
}