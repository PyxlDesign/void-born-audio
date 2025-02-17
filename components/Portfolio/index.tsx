import Image from "next/image";

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
                <h2 className="text-4xl font-bold text-center mb-12 purple-glow">Our Portfolio</h2>
                <div className="grid gap-8">

                    <div className="bg-zinc-900 rounded-lg p-6 purple-glow-box">
                        <h3 className="text-2xl font-bold mb-4 text-purple-400">Featured Work</h3>
                        <iframe
                            width="600"
                            height="350"
                            allow="autoplay"
                            className="w-full"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734879357&color=%236b46c1&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};