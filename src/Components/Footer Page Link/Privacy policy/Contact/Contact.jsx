import React from 'react';

const Contact = () => {
    return (
        <div className="px-4 py-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
            <p className="mb-6 text-center">
                Have questions or feedback about our website? We'd love to hear from you! Please use the information below to get in touch.
            </p>
            <div className="flex flex-col gap-4 max-w-md mx-auto w-full">
                <div>
                    <strong>Email:</strong> <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a>
                </div>
                <div>
                    <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a>
                </div>
                <div>
                    <strong>Address:</strong>
                    <div>123 Freelancer St,<br />Your City, Country</div>
                </div>
                <form className="flex flex-col gap-2">
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <textarea
                        placeholder="Your Message"
                        required
                        rows={4}
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;