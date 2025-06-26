import React from 'react';

const TermsOfUse = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>Terms of Use</h1>
            <div style={{ maxWidth: 800, margin: '0 auto', padding: '1rem' }}>
                <section>
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using this website, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use the website.
                    </p>
                </section>
                <section>
                    <h2>2. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of the revised terms.
                    </p>
                </section>
                <section>
                    <h2>3. Use of Content</h2>
                    <p>
                        All content on this website is for informational purposes only. You may not reproduce, distribute, or use any content without our prior written consent.
                    </p>
                </section>
                <section>
                    <h2>4. User Conduct</h2>
                    <ul>
                        <li>Do not use the website for unlawful purposes.</li>
                        <li>Do not attempt to gain unauthorized access to any part of the website.</li>
                        <li>Do not upload or transmit harmful code or content.</li>
                    </ul>
                </section>
                <section>
                    <h2>5. Disclaimer</h2>
                    <p>
                        This website is provided "as is" without warranties of any kind. We do not guarantee the accuracy or completeness of any information on the site.
                    </p>
                </section>
                <section>
                    <h2>6. Limitation of Liability</h2>
                    <p>
                        We are not liable for any damages arising from your use of the website.
                    </p>
                </section>
                <section>
                    <h2>7. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms of Use, please contact us via our contact page.
                    </p>
                </section>
            </div>
            <style>
            {`
                @media (max-width: 600px) {
                    div[style*="max-width: 800px"] {
                        padding: 0.5rem;
                    }
                    h1 {
                        font-size: 1.5rem;
                    }
                    h2 {
                        font-size: 1.1rem;
                    }
                }
            `}
            </style>
        </div>
    );
};

export default TermsOfUse;