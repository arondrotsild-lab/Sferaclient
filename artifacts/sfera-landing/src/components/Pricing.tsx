import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Старт',
    description: 'Идеально для фрилансеров и начинающих мастеров',
    price: { monthly: 0, annual: 0 },
    features: [
      'До 1 сотрудника',
      'До 100 заказов в месяц',
      'Базовая CRM',
      'Онлайн-запись',
      'Поддержка по email'
    ],
    notIncluded: [
      'Учет склада',
      'Финансовая аналитика',
      'SMS-уведомления',
      'API интеграции'
    ],
    buttonText: 'Начать бесплатно',
    buttonVariant: 'outline'
  },
  {
    name: 'Бизнес',
    description: 'Для растущих студий и сервисных центров',
    price: { monthly: 1290, annual: 990 },
    popular: true,
    features: [
      'До 5 сотрудников',
      'Безлимитные заказы',
      'Полная CRM',
      'Учет склада и товаров',
      'Финансовая аналитика',
      'SMS и WhatsApp уведомления',
      'Интеграция с кассой (54-ФЗ)',
      'Приоритетная поддержка'
    ],
    notIncluded: [
      'Открытый API',
      'Персональный менеджер'
    ],
    buttonText: 'Попробовать Бизнес',
    buttonVariant: 'primary'
  },
  {
    name: 'Про',
    description: 'Для крупных сетей и требовательных бизнесов',
    price: { monthly: 2490, annual: 1990 },
    features: [
      'Безлимитные сотрудники',
      'Все функции тарифа Бизнес',
      'Мульти-филиальность',
      'Расчет зарплат (сложные схемы)',
      'Открытый API',
      'Собственный домен для онлайн-записи',
      'Персональный менеджер',
      'Помощь с внедрением'
    ],
    notIncluded: [],
    buttonText: 'Попробовать Про',
    buttonVariant: 'outline'
  }
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Прозрачные тарифы. Без скрытых платежей.</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Выберите план, который подходит вашему бизнесу. Переходите на другой тариф в любой момент. 7 дней полного функционала бесплатно.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-muted-foreground'}`}>Месяц</span>
            <button 
              onClick={() => setAnnual(!annual)}
              className="relative w-16 h-8 rounded-full bg-white/10 border border-white/20 transition-colors focus:outline-none"
            >
              <motion.div 
                animate={{ x: annual ? 32 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-1 bottom-1 w-6 bg-primary rounded-full"
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${annual ? 'text-white' : 'text-muted-foreground'}`}>
              Год
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/20">
                -20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-primary/20 to-black/40 border border-primary/50 shadow-2xl shadow-primary/10 -translate-y-2' 
                  : 'glass-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider">
                  Хит продаж
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-2">
                {plan.price.monthly === 0 ? (
                  <span className="text-5xl font-heading font-extrabold text-white">0 ₽</span>
                ) : (
                  <>
                    <span className="text-5xl font-heading font-extrabold text-white">
                      {annual ? plan.price.annual : plan.price.monthly} ₽
                    </span>
                    <span className="text-muted-foreground">/ мес</span>
                  </>
                )}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold mb-8 transition-all ${
                plan.buttonVariant === 'primary' 
                  ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25' 
                  : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
              }`}>
                {plan.buttonText}
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={`inc-${i}`} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 shrink-0" />
                    <span className="text-sm text-gray-200">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, i) => (
                  <div key={`exc-${i}`} className="flex items-start gap-3 opacity-50">
                    <X className="w-5 h-5 text-muted-foreground shrink-0" />
                    <span className="text-sm text-muted-foreground line-through">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
