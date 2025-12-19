
import React from 'react';

const highlights = [
  "FREE SHIPPING ON $50+", "AS SEEN IN VOGUE", "100% RECYCLABLE", 
  "PLANT POWERED", "30-DAY SATISFACTION", "AS SEEN IN GQ",
  "COLD PRESSED ONLY", "ZERO SYNTHETIC COLORS", "MONTMORENCY PEAK",
  "AS SEEN IN WIRED", "ANTIOXIDANT POWERHOUSE"
];

export const InfiniteTicker: React.FC = () => {
  return (
    <div className="w-full bg-black/60 backdrop-blur-xl border-y border-white/10 py-5 overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-[scroll_60s_linear_infinite] hover:[animation-play-state:paused]">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {highlights.map((text, idx) => (
              <React.Fragment key={idx}>
                <span className="text-white font-bold text-[11px] tracking-[0.4em] uppercase mx-16 opacity-70 hover:opacity-100 transition-opacity cursor-default">
                  {text}
                </span>
                <span className="w-1.5 h-1.5 bg-bajorines-red rounded-full shadow-[0_0_12px_rgba(176,0,32,0.8)]"></span>
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
