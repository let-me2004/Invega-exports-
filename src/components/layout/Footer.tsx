import React from 'react';
import { PolaroidStack } from '@/components/animations/PolaroidStack';

export const Footer = () => {
  return (
    <footer 
      className="relative w-full bg-black"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative w-full h-[90vh] min-h-[700px]">
        <div className="fixed bottom-0 left-0 w-full h-[90vh] min-h-[700px] bg-white text-black rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden">
          
          <div className="w-full relative z-20 pt-8 pb-4">
            <PolaroidStack />
          </div>

          <div className="w-full flex-1 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 z-10 relative">
            
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-black text-lg font-bold tracking-[0.2em] uppercase mb-4">Invega Exports</h3>
              <p className="leading-relaxed mb-6 font-light text-[#737373]">
                A tech-driven merchant exporter based in India, facilitating seamless global trade with mathematical precision.
              </p>
              <div className="flex gap-4 font-bold text-xs uppercase tracking-widest">
                <a href="#" className="text-black hover:text-[#737373] transition-colors">LinkedIn</a>
                <a href="#" className="text-black hover:text-[#737373] transition-colors">Twitter</a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-black font-bold tracking-[0.2em] uppercase mb-4 text-xs">Company</h4>
              <ul className="space-y-4 font-light text-[#737373]">
                <li><a href="/" className="hover:text-black transition-colors">The Journey</a></li>
                <li><a href="/story" className="hover:text-black transition-colors">Our Story</a></li>
                <li><a href="/contact" className="hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-black font-bold tracking-[0.2em] uppercase mb-4 text-xs">Capabilities</h4>
              <ul className="space-y-4 font-light text-[#737373]">
                <li><span className="cursor-default">Dynamic Sourcing</span></li>
                <li><span className="cursor-default">Regulatory Compliance</span></li>
                <li><span className="cursor-default">Digital Freight Routing</span></li>
                <li><span className="cursor-default">Quality Assurance</span></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-black font-bold tracking-[0.2em] uppercase mb-4 text-xs">Reach Out</h4>
              <ul className="space-y-4 font-light text-[#737373]">
                <li>Mumbai, India</li>
                <li><a href="mailto:contact@invegaexports.com" className="hover:text-black transition-colors">contact@invegaexports.com</a></li>
              </ul>
            </div>
          </div>

          <div className="w-full max-w-7xl mx-auto pb-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs z-10 font-bold tracking-widest uppercase border-t border-black/10 pt-8 mt-12 text-[#737373]">
            <p>&copy; {new Date().getFullYear()} Invega Exports. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            </div>
          </div>

          {/* Massive Watermark Text */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center items-end pointer-events-none z-0 select-none overflow-hidden pb-4">
            <span className="text-[14vw] font-black text-black/[0.03] tracking-tighter whitespace-nowrap leading-[0.75]">
              INVEGA EXPORTS
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};
