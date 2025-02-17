const servicesArray = [
    {
        title: "Music Production",
        description:
            "Full-service music production with state-of-the-art equipment and expertise",
    },
    {
        title: "Mixing & Mastering",
        description:
            "Professional mixing and mastering to perfect your sound",
    },
    {
        title: "Sound Design",
        description:
            "Custom sound design and audio engineering for various media",
    },
]
export const Services = () => {
    return (
        <section id="services" className="py-20 px-4 bg-zinc-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-title text-center mb-12 purple-glow">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {servicesArray.map((service, index) => (
                        <div
                            key={index}
                            className="bg-black p-8 rounded-lg border border-purple-900/50 hover:border-purple-500/50 transition-colors purple-glow-box"
                        >
                            <h3 className="text-purple-title">{service.title}</h3>
                            <p className="font-sans text-lg text-pretty tracking-wide leading-loose text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};