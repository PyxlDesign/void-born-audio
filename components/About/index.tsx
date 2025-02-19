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
                            height={550}
                            width={550}
                            className="rounded-lg aspect-square purple-glow-box opacity-80"
                        />
                    </div>
                    <div className="grid gap-8">
                        <h2 className="text-title purple-glow">About Me</h2>
                        <p className="text-gray-300 text-body">
                            Hi, I'm Brian Price, a producer from central pennsylvania who specializes in heavy music.</p>
                        <p className="text-gray-300 text-body">
                            My mission is to help you achieve the best version of yourself and take your projects to the level you want and deserve!
                        </p>
                        <p className="text-gray-300 text-body">
                            Let's make some music that makes people want to flip some furniture and head bang till their head hurts ( Chiroprator appointment sold seperately )
                        </p>
                        <Link
                            href="#contact"
                            className="bg-purple-700 mr-auto text-white px-10 py-2 rounded-full hover:bg-transparent cursor-pointer border-purple-700 border-2 transition-colors purple-glow-box"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};