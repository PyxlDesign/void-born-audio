import Link from "next/link";

export const Contact = () => {
    return (
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
    );
};
