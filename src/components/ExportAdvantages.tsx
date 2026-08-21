"use client";

import ScrollStack, { ScrollStackItem } from './animations/ScrollStack';

export default function ExportAdvantages() {
  return (
    <section className="w-full bg-black text-white py-32 relative overflow-hidden">
      
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 w-full h-full opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-24 relative z-10">
        <h2 className="text-sm tracking-[0.3em] text-[#737373] uppercase mb-4 font-bold">
          The Pricing Advantage
        </h2>
        <h3 className="text-4xl md:text-6xl premium-heading text-white mb-6 leading-none">
          WHY GLOBAL BUYERS <br/>
          <span className="text-[#737373]">CHOOSE INDIA</span>
        </h3>
        <p className="text-[#737373] max-w-2xl mx-auto text-lg font-light leading-relaxed">
          We combine India's massive manufacturing power with advanced tax optimizations to give you the lowest prices and zero friction.
        </p>
      </div>

      <div className="relative z-10 pt-12 md:pt-0">
        <ScrollStack useWindowScroll={true} itemDistance={150} stackPosition="20%">
          
          <ScrollStackItem itemClassName="bg-white text-black border border-black/10">
            <div className="flex flex-col h-full justify-center pt-28 md:pt-0">
              <span className="text-xs font-bold tracking-[0.2em] text-[#737373] mb-4 uppercase">01 // Financial Engineering</span>
              <h2 className="text-4xl md:text-5xl premium-heading mb-6">Zero Embedded Taxes</h2>
              <p className="text-lg md:text-xl leading-relaxed text-[#737373] font-light">
                We leverage Indian government export rebate schemes (RoDTEP) to strip away all local and domestic taxes from our pricing. Our foreign buyers never pay for Indian domestic taxes, ensuring you get the most aggressive, globally competitive FOB price possible.
              </p>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-black text-white border border-white/20">
            <div className="flex flex-col h-full justify-center pt-28 md:pt-0">
              <span className="text-xs font-bold tracking-[0.2em] text-[#737373] mb-4 uppercase">02 // Supply Chain Agility</span>
              <h2 className="text-4xl md:text-5xl premium-heading mb-6">Agile Supply Chain</h2>
              <p className="text-lg md:text-xl leading-relaxed text-[#737373] font-light">
                Our highly optimized working capital model allows us to offer flexible Minimum Order Quantities (MOQs) and scalable sourcing solutions tailored to your inventory needs. No locked-up cash means better terms for you.
              </p>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-white text-black border border-black/10">
            <div className="flex flex-col h-full justify-center pt-28 md:pt-0">
              <span className="text-xs font-bold tracking-[0.2em] text-[#737373] mb-4 uppercase">03 // Global Quality</span>
              <h2 className="text-4xl md:text-5xl premium-heading mb-6">Global Materials</h2>
              <p className="text-lg md:text-xl leading-relaxed text-[#737373] font-light">
                Through the Advance Authorisation scheme, we can source world-class raw materials duty-free. This means you receive premium, internationally compliant products assembled at Indian manufacturing costs.
              </p>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-black text-white border border-white/20">
            <div className="flex flex-col h-full justify-center pt-28 md:pt-0">
              <span className="text-xs font-bold tracking-[0.2em] text-[#737373] mb-4 uppercase">04 // Compliance</span>
              <h2 className="text-4xl md:text-5xl premium-heading mb-6">100% Reliability</h2>
              <p className="text-lg md:text-xl leading-relaxed text-[#737373] font-light">
                We are a fully compliant, DGFT-registered export house. Our strict adherence to government standards ensures seamless customs clearance, accurate documentation, and zero shipping delays for our international partners.
              </p>
            </div>
          </ScrollStackItem>

        </ScrollStack>
      </div>
    </section>
  );
}
