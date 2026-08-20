'use client';
import React, { useState } from 'react';
import { Footer } from '@/components/layout/Footer';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Using Web3Forms for easy form submission without a backend
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE',
          ...formData,
          subject: 'New Inquiry from Invega Exports Website'
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          
          <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-none relative overflow-hidden">
            {status === 'success' ? (
              <div className="absolute inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center text-center p-8 z-10 animate-fade-in">
                <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="premium-heading text-xl text-white tracking-[0.2em] mb-4 uppercase">Transmission Received</h3>
                <p className="text-[#737373] text-sm leading-relaxed mb-8">
                  Your inquiry has been securely routed to our operations team. We will be in touch shortly.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-transparent border border-white/20 text-white px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block text-[10px] tracking-[0.2em] text-[#737373] mb-2 uppercase">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white focus:outline-none focus:border-white transition-colors disabled:opacity-50" 
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] text-[#737373] mb-2 uppercase">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white focus:outline-none focus:border-white transition-colors disabled:opacity-50" 
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] text-[#737373] mb-2 uppercase">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white focus:outline-none focus:border-white transition-colors resize-none disabled:opacity-50"
                ></textarea>
              </div>
              
              {status === 'error' && (
                <p className="text-red-500 text-xs tracking-widest uppercase">Connection failed. Please try again.</p>
              )}

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="mt-8 flex items-center justify-center w-full bg-white text-black py-4 text-xs tracking-[0.2em] font-bold uppercase hover:bg-[#737373] hover:text-white transition-all duration-300 rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  "Submit Inquiry"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
