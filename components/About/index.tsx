import Image from 'next/image';
import Link from 'next/link';

export const About = () => {
    return (
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
                        <h2 className="text-title mb-6 purple-glow">About Me</h2>
                        <p className="text-gray-300 mb-6 text-body">
                            Void Born Audio is where innovation meets sound, crafting
                            exceptional music productions that resonate with audiences. Our state-of-the-art
                            studio and experienced team combine technical mastery with creative artistry
                            to bring your musical vision to life.
                        </p>

                        <Link
                            href="#contact"
                            className="bg-purple-700 mx-auto text-xl text-white px-10 py-2 rounded-full hover:bg-transparent cursor-pointer border-purple-700 border-2 transition-colors purple-glow-box"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};