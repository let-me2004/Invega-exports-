import React from 'react';
import { Footer } from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-[100dvh] pt-32 bg-black selection:bg-[#737373] selection:text-white flex flex-col justify-between">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 px-6 lg:px-24 pb-24">
        <div>
          <h1 className="premium-heading text-4xl md:text-6xl tracking-[0.15em] mb-4 text-white">CONNECT</h1>
          <div className="w-12 h-1 bg-white"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div>
              <h2 className="premium-heading text-sm tracking-[0.2em] text-[#737373] mb-4">GLOBAL HEADQUARTERS</h2>
              <p className="text-white/80 text-sm leading-relaxed">
                INVEGA EXPORTS PVT. LTD.<br/>
                Delhi, India
              </p>
            </div>
            
            <div>
              <h2 className="premium-heading text-sm tracking-[0.2em] text-[#737373] mb-4">DIRECT INQUIRIES</h2>
              <p className="text-white/80 text-sm leading-relaxed">
                trade@invegaexports.com<br/>
                +91 (11) 4567 8900
              </p>
            </div>
          </div>
          
          <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-none">
            <form className="flex flex-col gap-6">
              <div>
                <label className="block text-[10px] tracking-[0.2em] text-[#737373] mb-2 uppercase">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white focus:outline-none focus:border-white transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] text-[#737373] mb-2 uppercase">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white focus:outline-none focus:border-white transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] text-[#737373] mb-2 uppercase">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white focus:outline-none focus:border-white transition-colors resize-none"></textarea>
              </div>
              <button type="button" className="mt-8 w-full bg-white text-black py-4 text-xs tracking-[0.2em] font-bold uppercase hover:bg-[#737373] hover:text-white transition-all duration-300 rounded-none">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

