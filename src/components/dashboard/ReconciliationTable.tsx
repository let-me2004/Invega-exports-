'use client';
import React from 'react';

interface ReconciliationTableProps {
  progress: number;
}

const tableData = [
  { field: 'INVOICE NO.', invoice: 'INV-2026-0847', irm: 'INV-2026-0847', threshold: 0.2 },
  { field: 'FOB VALUE', invoice: '$125,000.00', irm: '$125,000.00', threshold: 0.4 },
  { field: 'BUYER', invoice: 'MERIDIAN LLC', irm: 'MERIDIAN LLC', threshold: 0.6 },
  { field: 'CURRENCY', invoice: 'USD', irm: 'USD', threshold: 0.8 },
  { field: 'AD CODE', invoice: '0412070XXXXXX', irm: '0412070XXXXXX', threshold: 1.0 },
];

export const ReconciliationTable: React.FC<ReconciliationTableProps> = ({ progress }) => {
  return (
    <div className="w-full bg-[#151b24] p-6 border border-white/5">
      <h3 className="premium-heading text-sm text-white/50 mb-6 tracking-[0.1em]">INVOICE VS. IRM MATCH</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-white/40 text-xs tracking-widest">
              <th className="py-3 px-4 font-normal uppercase">Field</th>
              <th className="py-3 px-4 font-normal uppercase">Invoice</th>
              <th className="py-3 px-4 font-normal uppercase">IRM (Bank)</th>
              <th className="py-3 px-4 font-normal uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => {
              const localProgress = progress * 2.5; 
              const isRevealed = localProgress >= row.threshold;
              
              return (
                <tr 
                  key={index} 
                  className={`border-b border-white/5 transition-colors duration-500`}
                >
                  <td className="py-3 px-4 text-white/60 text-xs tracking-wider uppercase">{row.field}</td>
                  <td className="py-3 px-4 font-mono text-white/90 text-sm">{isRevealed ? row.invoice : '---'}</td>
                  <td className="py-3 px-4 font-mono text-white/90 text-sm">{isRevealed ? row.irm : '---'}</td>
                  <td className="py-3 px-4">
                    {isRevealed ? (
                      <span className="text-xs uppercase tracking-widest text-white border border-white/20 px-2 py-1">MATCHED</span>
                    ) : (
                      <span className="text-xs uppercase tracking-widest text-white/20">PENDING</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
