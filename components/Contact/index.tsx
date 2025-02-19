import { Form } from "../Form";
export const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 bg-zinc-900">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 purple-glow">Get in Contact</h2>
                <p className="text-xl text-gray-300 mb-8">
                    Ready to bring your music to the next level?
                </p>
                <Form />
                <p className="mt-6 text-gray-300">Please allow 24 hours for a response.</p>
            </div>
        </section>
    );
};
