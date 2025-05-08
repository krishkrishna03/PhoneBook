import React from 'react';

const ContactUs = () => {
    return (
        <div className="bg-gray-100 font-sans">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 shadow-md">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                    <p className="mt-2">We'd love to hear from you! Reach out with any questions or feedback.</p>
                </div>
            </header>

            {/* Contact Form */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="6"
                                placeholder="Write your message here..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-12 bg-blue-50">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    <div className="bg-white shadow-md p-6 rounded-lg flex items-center">
                        <div className="flex-shrink-0">
                            <svg
                                className="h-12 w-12 text-blue-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 10a4 4 0 004-4V3h4m5 0h4v4a4 4 0 004 4v1m-5 6H7m4-9v9"
                                />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-bold text-gray-800">Email</h3>
                            <p className="text-gray-600">hackathon@contact.com</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md p-6 rounded-lg flex items-center">
                        <div className="flex-shrink-0">
                            <svg
                                className="h-12 w-12 text-blue-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 4v8"
                                />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-bold text-gray-800">Phone</h3>
                            <p className="text-gray-600">+1 (234) 567-8901</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-4">
                <p>&copy; 2024 Hackathon Hosting. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default ContactUs;
