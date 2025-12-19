import React from 'react';

const highlights = [
  "ANTIOXIDANT RICH", "ZERO ADDED SUGAR", "COLD PRESSED", 
  "IONIC ELECTROLYTES", "SUSTAINABLY SOURCED", "GLUTEN FREE",
  "PEAK RIPENESS", "PLANT BASED", "NO ARTIFICIALS"
];

export const InfiniteTicker: React.FC = () => {
  return (
    <div className="w-full bg-black/40 backdrop-blur-md border-y border-white/10 py-4 overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {highlights.map((text, idx) => (
              <React.Fragment key={idx}>
                <span className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase mx-12">
                  {text}
                </span>
                <span className="w-1 h-1 bg-bajorines-red rounded-full"></span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};