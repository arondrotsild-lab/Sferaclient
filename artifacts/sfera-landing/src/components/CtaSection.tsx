import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#0f0f14] border border-white/10 rounded-[3rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Inner decorative grid */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
              Готовы навести <span className="text-gradient-primary">порядок</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Присоединяйтесь к тысячам предпринимателей, которые уже автоматизировали свой бизнес и увеличили прибыль со SFERA.
            </p>

            <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex-1 h-14 bg-white/5 border border-white/10 rounded-xl px-6 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                required
              />
              <button 
                type="submit"
                className="h-14 px-8 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5"
              >
                Начать бесплатно
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            <p className="text-sm text-muted-foreground mt-4">
              7 дней бесплатно. Кредитная карта не требуется.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
