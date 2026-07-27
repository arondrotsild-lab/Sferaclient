import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Scissors, 
  CarFront, 
  Sparkles, 
  Shirt, 
  Dumbbell, 
  MonitorSmartphone 
} from 'lucide-react';

const niches = [
  { name: 'Ремонт техники', icon: <MonitorSmartphone className="w-8 h-8" /> },
  { name: 'Салоны красоты', icon: <Scissors className="w-8 h-8" /> },
  { name: 'Автосервисы', icon: <CarFront className="w-8 h-8" /> },
  { name: 'Студии маникюра', icon: <Sparkles className="w-8 h-8" /> },
  { name: 'Клининг', icon: <Sparkles className="w-8 h-8" /> }, // Reusing icon or could use another
  { name: 'Ателье', icon: <Shirt className="w-8 h-8" /> },
  { name: 'Фитнес-клубы', icon: <Dumbbell className="w-8 h-8" /> },
  { name: 'Мастерские', icon: <Wrench className="w-8 h-8" /> },
];

export default function WhoItsFor() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Создано для вашего бизнеса</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          SFERA адаптируется под специфику любой ниши, где есть запись, услуги, товары и клиенты.
        </p>
      </div>

      {/* Infinite scrolling row */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6">
        {/* Row 1 */}
        <div className="flex w-max animate-[scroll_40s_linear_infinite]">
          {[...niches, ...niches].map((niche, i) => (
            <div 
              key={`row1-${i}`}
              className="flex items-center gap-4 px-8 py-5 mx-3 rounded-2xl glass-card hover:bg-white/[0.05] transition-colors whitespace-nowrap"
            >
              <div className="text-primary">{niche.icon}</div>
              <span className="text-xl font-bold">{niche.name}</span>
            </div>
          ))}
        </div>
        
        {/* Row 2 (reverse) */}
        <div className="flex w-max animate-[scroll_40s_linear_infinite_reverse]">
          {[...niches.slice(4), ...niches.slice(0, 4), ...niches.slice(4), ...niches.slice(0, 4)].map((niche, i) => (
            <div 
              key={`row2-${i}`}
              className="flex items-center gap-4 px-8 py-5 mx-3 rounded-2xl glass-card hover:bg-white/[0.05] transition-colors whitespace-nowrap"
            >
              <div className="text-secondary">{niche.icon}</div>
              <span className="text-xl font-bold">{niche.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Add custom CSS for the scrolling animation inline for simplicity */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
