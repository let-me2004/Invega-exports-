import React from 'react';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-[100dvh] pt-32 bg-black selection:bg-[#737373] selection:text-white flex flex-col justify-between">
      <div className="w-full max-w-4xl mx-auto px-6 lg:px-24 pb-24 text-white">
        <h1 className="premium-heading text-3xl md:text-5xl tracking-[0.15em] mb-4">PRIVACY POLICY</h1>
        <div className="w-12 h-1 bg-white mb-12"></div>
        
        <div className="space-y-8 font-light text-white/80 leading-relaxed text-sm md:text-base">
          <p>
            At Invega Exports Pvt. Ltd., we take your privacy seriously. This Privacy Policy outlines the types of personal information we receive and collect when you use our website, as well as some of the steps we take to safeguard information.
          </p>
          <div>
            <h2 className="premium-heading text-lg text-white mb-2 tracking-widest">1. Information Collection</h2>
            <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form, and in connection with other activities, services, features, or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, and phone number.</p>
          </div>
          <div>
            <h2 className="premium-heading text-lg text-white mb-2 tracking-widest">2. How we use collected information</h2>
            <p>Invega Exports Pvt. Ltd. may collect and use Users personal information for the following purposes: To improve customer service, to personalize user experience, to send periodic emails, and to process international trade inquiries securely.</p>
          </div>
          <div>
            <h2 className="premium-heading text-lg text-white mb-2 tracking-widest">3. How we protect your information</h2>
            <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>
          </div>
          <div>
            <h2 className="premium-heading text-lg text-white mb-2 tracking-widest">4. Contacting us</h2>
            <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at consult.invegaexports@gmail.com.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
