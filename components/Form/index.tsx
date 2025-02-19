'use client';
import { useState } from 'react';
import Button from '@/components/Elements/Button';
import Input from '@/components/Elements/Input';
import Select from '@/components/Elements/Select';
import Textarea from '@/components/Elements/Textarea';

export default function ContactForm() {
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
                <Input
                    handleChange={handleChange} id="name" label="Name" name="name" type="text" required />
            </div>

            <div className="grid gap-2">
                <Input
                    handleChange={handleChange} id="email" label="Email" name="email" type="email" required />
            </div>

            <div className="grid gap-2">
                <Select handleChange={handleSelectChange} label="What type of session are you looking for?" name="session_type" options={[
                    { value: 'placeholder', name: 'Please make a selection' },
                    { value: 'wedding', name: 'Wedding/Destination/Elopement' },
                    { value: 'engagement', name: 'Engagement' },
                    { value: 'family', name: 'Family' },
                    { value: 'couples', name: 'Casual Couples Session' },
                    { value: 'senior', name: 'Senior' },
                    { value: 'other', name: 'Other' }
                ]} />
            </div>

            {(form.session_type === "wedding" || form.session_type === "engagement") ? (<div className="grid gap-2">
                <Textarea
                    handleChange={handleChange}
                    label="Tell us about your Love Story!"
                    name="love_story"
                    placeholder=""
                />
            </div>) : (
                <div className="grid gap-2">
                    <Textarea handleChange={handleChange} label="Tell us your story!" name="story" placeholder="" />
                </div>
            )}

            <div className="grid gap-2">
                <Textarea
                    handleChange={handleChange}
                    label="What Draws You To Our Work?"
                    name="attraction"
                    placeholder=""
                />
            </div>

            <div className="grid gap-2">
                <Input
                    handleChange={handleChange}
                    id="vibe"
                    label="Tell Us About The Vibe/Aesthetic Of Your Wedding Day"
                    name="vibe"
                    type="text"
                />
            </div>

            <div className="grid gap-2">
                <Textarea
                    handleChange={handleChange}
                    label="Anything Else You Would Like Us To Know?"
                    name="additional_info"
                    placeholder=""
                />
            </div>

            <Button type="submit" className="self-start">
                {result}
            </Button>
        </form>
    );
}