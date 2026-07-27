import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Radial gradient background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50 z-0"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-8"
        >
          <Zap className="w-4 h-4" />
          <span>Новое поколение управления бизнесом</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight mb-8"
        >
          Всё для сервиса. <br className="hidden md:block" />
          <span className="text-gradient-primary">В одной сфере.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Забудьте про хаос из таблиц и чатов. SFERA — это премиальная CRM для сервисных бизнесов. Заказы, клиенты, финансы и склад, работающие как единый слаженный механизм.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a 
            href="#pricing" 
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
          >
            Попробовать бесплатно
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#demo" 
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold text-lg flex items-center justify-center transition-all backdrop-blur-sm"
          >
            Заказать демо
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>7 дней бесплатно</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Карта не нужна</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Бесплатный перенос данных</span>
          </div>
        </motion.div>
      </div>

      {/* Interface Mockup Preview */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mt-20 container mx-auto px-6 max-w-6xl relative"
      >
        <div className="relative rounded-2xl md:rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-2xl p-2 md:p-4 shadow-2xl overflow-hidden aspect-video">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
          {/* Mockup Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          {/* Mockup Content - Abstract representation of the CRM */}
          <div className="grid grid-cols-12 gap-4 h-[calc(100%-60px)] px-2 pb-2">
            <div className="col-span-3 hidden md:flex flex-col gap-2">
              <div className="h-8 w-full bg-white/5 rounded-md"></div>
              <div className="h-8 w-3/4 bg-white/5 rounded-md"></div>
              <div className="h-8 w-5/6 bg-white/5 rounded-md"></div>
              <div className="h-8 w-full bg-white/5 rounded-md"></div>
            </div>
            <div className="col-span-12 md:col-span-9 flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-24 bg-primary/20 border border-primary/30 rounded-xl"></div>
                <div className="h-24 bg-white/5 border border-white/10 rounded-xl"></div>
                <div className="h-24 bg-white/5 border border-white/10 rounded-xl"></div>
              </div>
              <div className="flex-1 bg-white/5 border border-white/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
