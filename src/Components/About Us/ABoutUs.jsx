import React, { useEffect } from 'react';

const ABoutUs = () => {
    useEffect(() => {
        document.title = 'About'
    })
    return (
        <div>
            <h1 className='text-center font-bold md:text-5xl my-10'>About Us</h1>
            <div className="w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 max-w-screen-2xl mx-auto mb-10">
                <div className="mt-10 bg-base-200 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Contact With Us</h2>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                            <h3 className="font-semibold mb-2">Our Company Information</h3>
                            <p className="mb-1">Address: Birulia , Ashulia , Dhaka</p>
                            <p className="mb-1">Phone: (123) 456-7890</p>
                            <p className="mb-1">Email: info@ourcompany.com</p>
                            <p>Working Hours: Mon-Fri, 9:00 AM - 6:00 PM</p>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold mb-2">Our Location</h3>
                            <div className="w-full h-64 rounded overflow-hidden">
                                <iframe
                                    title="Our Company Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.8162792797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f9e3b1%3A0x5045675218ce6e0!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1718000000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ABoutUs;