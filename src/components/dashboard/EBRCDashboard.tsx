'use client';
import React from 'react';
import { ReconciliationTable } from './ReconciliationTable';
import { NetRealisedCalculator } from './NetRealisedCalculator';
import { EBRCCertificate } from './EBRCCertificate';

interface EBRCDashboardProps {
  scrollProgress: number;
}

export const EBRCDashboard: React.FC<EBRCDashboardProps> = ({ scrollProgress }) => {
  if (scrollProgress < 0.75) return null;

  const localProgress = (scrollProgress - 0.75) / 0.25;

  return (
    <div className="w-full flex justify-end pointer-events-none perspective-1000">
      <div 
        className="w-full max-w-[700px] p-10 transition-all duration-700"
        style={{
          background: 'rgba(21, 27, 36, 0.9)', // Solid slate navy, no blur/glassmorphism
          border: '1px solid rgba(255, 255, 255, 0.1)',
          opacity: localProgress > 0 ? 1 : 0,
          transform: `translateY(${localProgress > 0 ? '0' : '40px'})`,
        }}
      >
        <div className="mb-8 border-b border-white/10 pb-4">
          <h2 className="premium-heading text-xl text-white tracking-[0.2em]">eBRC REALIZATION ENGINE</h2>
        </div>

        <div className="space-y-6 relative h-[500px]">
          {/* Section 1: 0 - 0.4 */}
          <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: localProgress < 0.4 ? 1 : 0, pointerEvents: localProgress < 0.4 ? 'auto' : 'none' }}>
            <ReconciliationTable progress={localProgress} />
          </div>

          {/* Section 2: 0.3 - 0.7 */}
          <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: localProgress >= 0.4 && localProgress < 0.7 ? 1 : 0, pointerEvents: localProgress >= 0.4 && localProgress < 0.7 ? 'auto' : 'none' }}>
            <NetRealisedCalculator progress={localProgress} />
          </div>

          {/* Section 3: 0.6 - 1.0 */}
          <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: localProgress >= 0.7 ? 1 : 0, pointerEvents: localProgress >= 0.7 ? 'auto' : 'none' }}>
            <EBRCCertificate progress={localProgress} />
          </div>
        </div>
      </div>
    </div>
  );
};
