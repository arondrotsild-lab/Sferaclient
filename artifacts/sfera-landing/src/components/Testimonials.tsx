import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Алексей Смирнов',
    role: 'Владелец сети "Ремонт 360"',
    badge: 'Ремонт техники',
    content: 'Перепробовали 4 разные CRM до SFERA. То функционала не хватает, то интерфейс из 2005 года. Здесь мы получили всё из коробки. Приемка техники ускорилась в 2 раза, мастера сами отмечают статусы с телефонов.',
    initials: 'АС'
  },
  {
    name: 'Елена Ковалева',
    role: 'Основатель "Nail Studio E"',
    badge: 'Студия маникюра',
    content: 'Для меня было критично, чтобы запись, склад материалов и расчет зарплат были в одном месте. В SFERA я вижу чистую прибыль за день в два клика. А клиенты в восторге от удобной онлайн-записи.',
    initials: 'ЕК'
  },
  {
    name: 'Дмитрий Волков',
    role: 'Директор "АвтоТехЦентр"',
    badge: 'Автосервис',
    content: 'Интеграция с каталогами запчастей и автоматическое формирование заказ-нарядов сэкономили нам часы рутины каждый день. Система работает как швейцарские часы. Рекомендую.',
    initials: 'ДВ'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative bg-black/30 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Говорят наши клиенты</h2>
          <p className="text-muted-foreground text-lg">
            Мы не просто пишем код, мы решаем реальные проблемы бизнеса. Вот что говорят те, кто уже доверил нам свои процессы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl flex flex-col"
            >
              <div className="mb-6 flex justify-between items-start">
                <span className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground">
                  {review.badge}
                </span>
                <div className="flex text-yellow-500">
                  {'★★★★★'}
                </div>
              </div>
              
              <p className="text-white text-lg leading-relaxed flex-1 mb-8">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white shadow-lg">
                  {review.initials}
                </div>
                <div>
                  <div className="font-bold text-white">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
