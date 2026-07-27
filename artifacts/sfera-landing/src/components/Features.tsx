import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardList, 
  Users, 
  PackageSearch, 
  Wallet, 
  UsersRound, 
  FileText, 
  Blocks 
} from 'lucide-react';

const features = [
  {
    icon: <ClipboardList className="w-6 h-6 text-primary" />,
    title: 'Ведение заказов',
    description: 'Полный цикл работы с заказом: от приема до выдачи. Статусы, сроки, ответственные — всё как на ладони.'
  },
  {
    icon: <Users className="w-6 h-6 text-secondary" />,
    title: 'База клиентов',
    description: 'История обращений, LTV, скидки и предпочтения. Знайте своих клиентов в лицо и повышайте их лояльность.'
  },
  {
    icon: <PackageSearch className="w-6 h-6 text-blue-400" />,
    title: 'Склад и товары',
    description: 'Учет запчастей и расходников. Автоматическое списание при выполнении работ и уведомления о нехватке.'
  },
  {
    icon: <Wallet className="w-6 h-6 text-emerald-400" />,
    title: 'Финансы и касса',
    description: 'Приход, расход, прибыль. Интеграция с онлайн-кассами (54-ФЗ) и расчет зарплат сотрудникам.'
  },
  {
    icon: <UsersRound className="w-6 h-6 text-orange-400" />,
    title: 'Команда и задачи',
    description: 'Графики работы, KPI, распределение задач и контроль их выполнения в реальном времени.'
  },
  {
    icon: <FileText className="w-6 h-6 text-pink-400" />,
    title: 'Документооборот',
    description: 'Акты приема-передачи, гарантийные талоны и чеки в один клик. Печать по вашим шаблонам.'
  },
  {
    icon: <Blocks className="w-6 h-6 text-primary" />,
    title: 'Интеграции',
    description: 'Подключение IP-телефонии, SMS-уведомлений, мессенджеров (WhatsApp, Telegram) и онлайн-записи.'
  }
];

export default function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Один инструмент для всего</h2>
          <p className="text-muted-foreground text-lg">
            SFERA закрывает 100% потребностей сервисного бизнеса. Мы собрали лучшие практики рынка и упаковали их в интуитивно понятный интерфейс.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className={`glass-card p-6 rounded-2xl flex flex-col group hover:bg-white/[0.04] transition-colors ${
                index === 6 ? 'md:col-span-2 lg:col-span-3 xl:col-span-2 bg-gradient-to-br from-primary/5 to-transparent' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
