export const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 bg-zinc-900">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 purple-glow">Get in Contact</h2>
                <p className="text-xl text-gray-300 mb-8">
                    Ready to bring your music to the next level?
                </p>
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    className="grid gap-4 mt-8 max-w-lg mx-auto"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="bg-zinc-800 text-white px-4 py-2 rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="bg-zinc-800 text-white px-4 py-2 rounded"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        className="bg-zinc-800 text-white px-4 py-2 rounded"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-purple-700 text-white px-8 py-3 rounded-full hover:bg-transparent cursor-pointer border-purple-700 border-2 transition-colors purple-glow-box"
                    >
                        Send
                    </button>
                    <p className="text-sm text-gray-300 ">Please allow 24 hours for a response.</p>
                </form>
            </div>
        </section>
    );
};
