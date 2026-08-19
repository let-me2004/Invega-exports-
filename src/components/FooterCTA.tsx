import React from 'react';

export const FooterCTA = () => {
  return (
    <section className="w-full bg-black text-white py-32 px-6 md:px-12 flex flex-col items-center text-center relative overflow-hidden">
      {/* Brutalist Grid Pattern instead of blue glow */}
      <div className="absolute inset-0 w-full h-full opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="premium-heading text-4xl md:text-7xl mb-8 leading-tight">
          READY TO SOURCE <br/>
          <span className="text-[#737373]">FROM INDIA?</span>
        </h2>
        <p className="text-lg md:text-xl text-[#737373] max-w-2xl mx-auto mb-10 font-light">
          Partner with an export agency that treats your supply chain with engineering precision. No black boxes. No unnecessary delays.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-white text-black px-12 py-5 uppercase tracking-[0.2em] text-xs font-bold hover:bg-black hover:text-white hover:shadow-[0_0_0_1px_white_inset] transition-all duration-300"
        >
          Start the Conversation
        </a>
      </div>
    </section>
  );
};
