'use client';
import React from 'react';

interface NetRealisedCalculatorProps {
  progress: number;
}

const calculationLines = [
  { label: 'FOB VALUE REALISED', amount: 125000, isDeduction: false, threshold: 0.1 },
  { label: 'COMMISSION (2%)', amount: 2500, isDeduction: true, threshold: 0.3 },
  { label: 'DISCOUNT', amount: 0, isDeduction: true, threshold: 0.5 },
  { label: 'INSURANCE (1%)', amount: 1250, isDeduction: true, threshold: 0.7 },
  { label: 'FREIGHT', amount: 3750, isDeduction: true, threshold: 0.9 },
];

const totalLine = { label: 'NET REALISED (FC)', amount: 117500, threshold: 1.0 };

export const NetRealisedCalculator: React.FC<NetRealisedCalculatorProps> = ({ progress }) => {
  const localProgress = Math.max(0, Math.min(1, (progress - 0.3) / 0.4)); 

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

  return (
    <div className="w-full bg-[#151b24] p-6 border border-white/5">
      <h3 className="premium-heading text-sm text-white/50 mb-8 tracking-[0.1em]">NET REALISED VALUE CALCULATION</h3>
      
      <div className="space-y-4">
        {calculationLines.map((line, idx) => {
          const isVisible = localProgress >= line.threshold;
          const currentAmount = isVisible ? line.amount : 0; 
          
          return (
            <div 
              key={idx} 
              className={`flex justify-between transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <span className="text-white/60 text-xs tracking-wider uppercase">{line.label}</span>
              <span className={`font-mono text-sm ${line.isDeduction ? 'text-white/40' : 'text-white'}`}>
                {line.isDeduction ? '−' : ''}{formatCurrency(currentAmount)}
              </span>
            </div>
          );
        })}
        
        <div className={`pt-6 mt-6 border-t border-white/20 flex justify-between transition-opacity duration-700 ${localProgress >= totalLine.threshold ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-white text-sm uppercase tracking-widest font-bold">{totalLine.label}</span>
          <span className="text-white font-mono text-lg font-bold">
            {formatCurrency(totalLine.amount)}
          </span>
        </div>
      </div>
      
      <div className={`mt-8 pt-4 border-t border-white/5 text-[10px] uppercase tracking-widest text-white/30 transition-opacity duration-700 delay-300 ${localProgress >= 1.0 ? 'opacity-100' : 'opacity-0'}`}>
        NET REALISED (FC) = FOB VALUE − COMMISSION − DISCOUNT − INSURANCE − FREIGHT
      </div>
    </div>
  );
};
