import { Clock, Mail, MapPin, Phone } from "lucide-react";
import InstagramIcon from "./InstagramIcon.jsx";

const NAV = [
  { href: "#hero", label: "Головна" },
  { href: "#services", label: "Послуги" },
  { href: "#doctors", label: "Лікарі" },
  { href: "#reviews", label: "Відгуки" },
  { href: "#contact", label: "Контакти" },
];

// Значно компактніший футер (~286px на 1440px канві), дрібніші розміри тексту 11-13.5px
// (figma-export-node-6-250.css рядки 574-579), а не типовий важкий футер.
export default function FooterBottom() {
  return (
    <footer className="bg-[var(--color-dark)] text-white/80 border-t border-white/10">
      <div className="container-x !py-8 grid sm:grid-cols-3 gap-8">
        <div>
          {/* Лого без підложки/плашки — сидить прямо на фоні футера (власник прибрав
              bg-white/10-плашку, яку раніше додали за буквальним читанням CSS-експорту). */}
          <img
            src="/images/logo.png"
            alt="INNOVIA dental"
            width="100"
            height="57"
            className="h-8 w-auto object-contain mb-3"
            style={{ filter: "invert(1) brightness(2)" }}
            loading="lazy"
            decoding="async"
          />
          <p className="text-[12px] leading-relaxed max-w-[26ch]">
            Стоматологічна клініка в Кам'янці-Подільському. Дев'ять напрямків лікування в одній
            клініці.
          </p>
          <a
            href="https://www.instagram.com/innovia_dental_kp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-[12px] hover:text-white transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5" /> @innovia_dental_kp
          </a>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50 mb-3">Навігація</p>
          <ul className="space-y-2 text-[12px]">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50 mb-3">Контакти</p>
          <ul className="space-y-2 text-[12px]">
            <li className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-white/50" strokeWidth={1.8} />
              вул. Лесі Українки, 24, Кам'янець-Подільський, 32301
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 shrink-0 text-white/50" strokeWidth={1.8} />
              <a href="tel:+380687775342" className="hover:text-white transition-colors">
                068 777 53 42
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 shrink-0 text-white/50" strokeWidth={1.8} />
              <a href="mailto:innoviadentalkp@gmail.com" className="hover:text-white transition-colors">
                innoviadentalkp@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-3.5 h-3.5 mt-0.5 shrink-0 text-white/50" strokeWidth={1.8} />
              <span>
                Пн–Сб 08:00–20:00
                <br />
                Нд 08:00–15:00
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x !py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/40">
          <p>© {new Date().getFullYear()} INNOVIA dental. Усі права захищено.</p>
          <p>вул. Лесі Українки, 24, Кам'янець-Подільський, Хмельницька обл., 32301</p>
        </div>
      </div>
    </footer>
  );
}
