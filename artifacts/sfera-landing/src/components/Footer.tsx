import React from 'react';
import { Orbit } from 'lucide-react';
import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Orbit className="text-white w-5 h-5" />
            </div>
            <span className="font-heading font-bold text-lg tracking-tight text-white">SFERA</span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#features" className="text-sm text-muted-foreground hover:text-white transition-colors">Возможности</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-white transition-colors">Тарифы</a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-white transition-colors">Отзывы</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Помощь</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Блог</a>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SFERA. Все права защищены.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
