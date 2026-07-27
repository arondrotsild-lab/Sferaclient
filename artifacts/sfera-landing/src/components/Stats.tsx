import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '12,000+', label: 'Активных бизнесов' },
  { value: '4.8★', label: 'Средняя оценка' },
  { value: '3M+', label: 'Заказов в месяц' },
  { value: '99.9%', label: 'Uptime платформы' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-primary/5 border-y border-white/5 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-2"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
