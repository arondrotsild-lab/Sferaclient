import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Регистрация',
    description: 'Займет 30 секунд. Введите email, название компании и выберите сферу деятельности.',
  },
  {
    number: '02',
    title: 'Перенос данных',
    description: 'Загрузите Excel со старой базой или воспользуйтесь нашим бесплатным сервисом миграции из других CRM.',
  },
  {
    number: '03',
    title: 'Начало работы',
    description: 'Пригласите сотрудников, настройте статусы и создайте первый заказ. Всё готово к взлету.',
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-black/50 border-y border-white/5 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Запуск быстрее, <br />чем чашка кофе</h2>
              <p className="text-muted-foreground text-lg mb-10">
                Внедрение CRM обычно ассоциируется с болью и долгим обучением. Со SFERA всё иначе. Мы сделали онбординг настолько простым, что ваши сотрудники начнут работать в ней с первого дня без инструкций.
              </p>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-6 relative">
                    {/* Timeline line */}
                    {index !== steps.length - 1 && (
                      <div className="absolute left-6 top-14 bottom-[-32px] w-px bg-white/10"></div>
                    )}
                    
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-heading font-bold text-primary">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden glass-card p-2 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              <div className="w-[80%] h-[80%] relative rounded-2xl overflow-hidden bg-[#0d0d12] border border-white/10 shadow-2xl flex flex-col">
                <div className="h-10 border-b border-white/5 flex items-center px-4">
                  <div className="text-xs text-white/40 font-medium">Новый заказ</div>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="h-10 bg-white/5 rounded-lg w-full"></div>
                  <div className="h-10 bg-white/5 rounded-lg w-2/3"></div>
                  <div className="flex gap-4 mt-auto">
                    <div className="h-10 bg-primary/20 border border-primary/30 rounded-lg flex-1"></div>
                    <div className="h-10 bg-white/5 rounded-lg w-24"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
