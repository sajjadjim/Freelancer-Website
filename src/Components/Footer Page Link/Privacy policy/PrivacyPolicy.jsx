import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8 bg-white rounded shadow-md text-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
            <p className="mb-4">
                Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">Information We Collect</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                    <strong>Personal Information:</strong> We may collect your name, email address, and other contact details when you register or contact us.
                </li>
                <li>
                    <strong>Usage Data:</strong> We collect information about how you use our website, such as pages visited and time spent on the site.
                </li>
                <li>
                    <strong>Cookies:</strong> We use cookies to enhance your experience and analyze website traffic.
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To communicate with you</li>
                <li>To improve our website and user experience</li>
                <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-2">Information Sharing</h2>
            <p className="mb-4">
                We do not sell or share your personal information with third parties except as required by law or to provide our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">Security</h2>
            <p className="mb-4">
                We take reasonable measures to protect your information from unauthorized access, alteration, or disclosure.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">Your Rights</h2>
            <p className="mb-4">
                You have the right to access, update, or delete your personal information. Contact us if you wish to exercise these rights.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">Changes to This Policy</h2>
            <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@example.com" className="text-blue-600 underline">support@example.com</a>.
            </p>
        </div>
    );
};

export default PrivacyPolicy;