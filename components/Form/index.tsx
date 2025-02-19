'use client';
import { useState } from 'react';

export function Form() {
    const [form, setForm] = useState({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
        subject: "Void Born Audio - Contact Form Submission",
        name: "",
        email: "",
        form_name: "Void Born Audio - Contact Form Submission",
    });

    const [honeypot, setHoneypot] = useState(false);
    const [result, setResult] = useState("Submit");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        setResult("Please wait...");

        if (honeypot) {
            setResult("Unable to submit");
            return;
        }

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, subject: `${form.name} says hi!` }),
            });

            const data = await response.json();
            setResult(data.message);

            if (response.ok) {
                setForm(prev => ({
                    ...prev,
                    name: "",
                    email: "",
                    message: ""
                }));

                setTimeout(() => {
                    setResult("Submit");
                }, 5000);
            }
        } catch (error) {
            console.error('Error:', error);
            setResult("Something went wrong!");
        }
    };

    return (
        <form id="contact" className="text-white max-w-4xl w-full mx-auto flex flex-col gap-4 text-left" onSubmit={submitForm}>
            <input type="checkbox" name="botcheck" className="hidden" checked={honeypot} onChange={(e) => setHoneypot(e.target.checked)} />

            <div className="grid gap-2">
                <label className="sr-only" htmlFor="name">Name *</label>
                <input
                    onChange={handleChange} id="name" placeholder="Name *" name="name" type="text" required
                    className='bg-zinc-800 text-white px-4 py-2 rounded'
                />
            </div>

            <div className="grid gap-2">
                <label className="sr-only" htmlFor="email">Email *</label>
                <input
                    onChange={handleChange} id="email" placeholder="Email *" name="email" type="email" required
                    className='bg-zinc-800 text-white px-4 py-2 rounded'
                />
            </div>

            <div className="grid gap-2">
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                    onChange={handleChange}
                    name="message"
                    placeholder="Message"
                    className='bg-zinc-800 text-white px-4 py-2 rounded'
                ></textarea>
            </div>

            <button type="submit" className="bg-purple-700 text-white px-8 py-3 rounded-full hover:bg-transparent cursor-pointer border-purple-700 border-2 transition-colors purple-glow-box">
                {result}
            </button>
        </form>
    );
}