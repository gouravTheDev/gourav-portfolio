'use client'
import React, { useState } from 'react';


function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [resMessage, setResMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResMessage("")
        setSubmitting(true);
        console.log(name, email);


        // Submit the form data using an API route
        const res = await fetch('/api/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, message }),
        });

        if (res.ok) {
            setResMessage("Contact form submitted successfully! We will contat you shortly. Thank you!")
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        } else {
            alert('Failed to send message');
        }

        setSubmitting(false);
    };

    return (
        <div className="p-4 my-4 mx-auto w-1/2 flex flex-col justify-center items-center" id="contact">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Contact</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl mb-">How to reach me</p>
                <p className="mt-2 text-md tracking-tight text-white mb-10">Drop a mail at <span className="font-bold">chatterjeegouravking@gmail.com</span> if you have any queries</p>
            </div>
            <form onSubmit={handleSubmit} className="max-w-full mx-auto">
                <div className="grid grid-cols-3 gap-4">
                    <div className="block mb-2">
                        <span className="text-white">Name:</span>
                        <input
                            placeholder='Enter Name'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-input mt-1 block w-full p-1 rounded-sm text-black"
                            required
                        />
                    </div>
                    <div className="block mb-2">
                        <span className="text-white">Email:</span>
                        <input
                            placeholder='Enter email'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-input mt-1 block w-full p-1 rounded-sm text-black"
                            required
                        />
                    </div>
                    <div className="block mb-2">
                        <span className="text-white">Phone:</span>
                        <input
                            placeholder='Enter phone'
                            type="number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-input mt-1 block w-full p-1 rounded-sm text-black"
                            required
                        />
                    </div>
                </div>
                <div className="block mb-2 mt-4">
                    <span className="text-white">Message:</span>
                    <textarea
                        placeholder='Enter your message'
                        value={message}
                        cols={3}
                        rows={3}
                        onChange={(e) => setMessage(e.target.value)}
                        className="form-textarea mt-1 block w-full p-1 rounded-sm text-black"
                        required
                    />
                </div>

                <div className="flex flex-col items-end">
                    <button
                        type="submit"
                        disabled={submitting}
                        className="bg-slate-400 text-white px-4 py-2 rounded mt-6 disabled:opacity-50 hover:bg-slate-600"
                    >
                        {submitting ? 'Submitting...' : 'Send'}
                    </button>
                </div>

            </form>
            <h5 className="text-center text-white font-medium text-md mt-4">{resMessage}</h5>
        </div>
    )
}

export default Contact