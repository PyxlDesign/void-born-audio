import Image from "next/image";
import { PyxlPlayer } from "@/components/PyxlPlayer";

{/* 
    
    Use Player: https://github.com/bouzidanas/react-list-player
    Will need song's lists.
    Sing info:
    - Title
    - Artist
    - Album
    - Cover
    - mix/produced (Filter option for mixed and produced)
    - Duration
    - Time
    
    */}

export const Portfolio = () => {
    return (
        <section id="portfolio" className="relative py-20 px-4 bg-black">
            <div className="absolute inset-0">
                <Image
                    src="/images/portfolio-background.avif"
                    alt="Purple sound wave background"
                    layout="fill"
                    className="object-cover object-center opacity-50"
                />
            </div>
            <div className="relative max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 purple-glow">My Portfolio</h2>
                <div className="grid gap-8">

                    <PyxlPlayer />
                </div>
            </div>
        </section>
    );
};