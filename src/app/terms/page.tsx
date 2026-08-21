import React from 'react';
import { Footer } from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-[100dvh] pt-32 bg-black selection:bg-[#737373] selection:text-white flex flex-col justify-between">
      <div className="w-full max-w-4xl mx-auto px-6 lg:px-24 pb-24 text-white">
        <h1 className="premium-heading text-3xl md:text-5xl tracking-[0.15em] mb-4">TERMS OF SERVICE</h1>
        <div className="w-12 h-1 bg-white mb-12"></div>
        
        <div className="space-y-8 font-light text-white/80 leading-relaxed text-sm md:text-base">
          <p>
            By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>
          <div>
            <h2 className="premium-heading text-lg text-white mb-2 tracking-widest">1. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Invega Exports Pvt. Ltd.'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
          </div>
          <div>
            <h2 className="premium-heading text-lg text-white mb-2 tracking-widest">2. Disclaimer</h2>
            <p>The materials on Invega Exports Pvt. Ltd.'s website are provided "as is". Invega Exports Pvt. Ltd. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </div>
          <div>
            <h2 className="premium-heading text-lg text-white mb-2 tracking-widest">3. Limitations</h2>
            <p>In no event shall Invega Exports Pvt. Ltd. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Invega Exports Pvt. Ltd.'s Internet site.</p>
          </div>
          <div>
            <h2 className="premium-heading text-lg text-white mb-2 tracking-widest">4. Governing Law</h2>
            <p>Any claim relating to Invega Exports Pvt. Ltd.'s website shall be governed by the laws of India, specifically under the jurisdiction of Delhi, without regard to its conflict of law provisions.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
