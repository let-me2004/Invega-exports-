'use client';
import React from 'react';

interface EBRCCertificateProps {
  progress: number;
}

export const EBRCCertificate: React.FC<EBRCCertificateProps> = ({ progress }) => {
  const localProgress = Math.max(0, Math.min(1, (progress - 0.6) / 0.4));
  const isVisible = localProgress > 0.5;
  const isStamped = localProgress > 0.8;

  if (!isVisible) return null;

  return (
    <div className="w-full perspective-1000">
      <div 
        className={`relative bg-white text-[#1e2630] border border-[#1e2630] p-10 transition-all duration-1000 transform ${localProgress > 0.1 ? 'translate-y-0 opacity-100 rotate-x-0' : 'translate-y-20 opacity-0 rotate-x-12'}`}
      >
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="premium-heading text-lg font-bold text-center border-b border-[#1e2630]/20 pb-4 mb-2 tracking-[0.1em] w-full">
            ELECTRONIC BANK REALISATION CERTIFICATE
          </h2>
          <h3 className="premium-heading text-[10px] text-[#1e2630]/60 mb-8 tracking-[0.1em]">
            DIRECTORATE GENERAL OF FOREIGN TRADE
          </h3>
          
          <div className="w-full flex justify-between mb-8 border-b border-[#1e2630]/10 pb-4">
            <div className="text-xs uppercase tracking-widest">
              <span className="text-[#1e2630]/50 mr-2">CERTIFICATE NO:</span> 
              <span className="font-mono font-bold">EBRC/26-27/MUM/084712</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest border border-[#1e2630] px-2 py-1">
                SELF-CERTIFIED
              </span>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-y-6 gap-x-8 text-xs uppercase tracking-wider mb-12">
            <div>
              <p className="text-[#1e2630]/50 mb-1">EXPORTER</p>
              <p className="font-bold">INVEGA EXPORTS PVT. LTD.</p>
            </div>
            <div>
              <p className="text-[#1e2630]/50 mb-1">IEC</p>
              <p className="font-mono font-bold">0412XXXXXX</p>
            </div>
            <div>
              <p className="text-[#1e2630]/50 mb-1">SHIPPING BILL NO</p>
              <p className="font-bold">9847125 DTD 15-JUL-2026</p>
            </div>
            <div>
              <p className="text-[#1e2630]/50 mb-1">INVOICE NO</p>
              <p className="font-bold">INV-2026-0847</p>
            </div>
            <div>
              <p className="text-[#1e2630]/50 mb-1">NET REALISED</p>
              <p className="font-mono font-bold">USD 117,500.00</p>
            </div>
            <div>
              <p className="text-[#1e2630]/50 mb-1">BANK</p>
              <p className="font-bold">STATE BANK OF INDIA</p>
            </div>
          </div>

          <div className="w-full text-center text-[9px] uppercase tracking-widest text-[#1e2630]/40 border-t border-[#1e2630]/10 pt-4">
            PROTECTED UNDER SECTION 2(6) OF THE IGST ACT.
          </div>

          {/* Stamp - Clean, black/white corporate stamp */}
          <div 
            className={`absolute bottom-8 right-8 w-28 h-28 border-[3px] border-[#1e2630] rounded-full flex flex-col items-center justify-center text-[#1e2630] transform transition-all duration-300 ${isStamped ? 'scale-100 opacity-90 -rotate-12' : 'scale-150 opacity-0'}`}
          >
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase mt-2">DGFT</span>
            <span className="text-xl font-bold border-y-2 border-[#1e2630] py-1 my-1 tracking-widest">VERIFIED</span>
            <span className="text-[9px] font-mono tracking-widest mb-2">API SECURE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
