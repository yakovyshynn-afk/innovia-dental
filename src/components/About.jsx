import { Check } from "lucide-react";
import Reveal from "./Reveal.jsx";

// Один жирний рядок на пункт, без сірого підрядка — за 1:1 референсом власника (2026-09-14).
// "Лікування під мікроскопом" — з реального референсу власника, НЕ підтверджено окремо в
// brief.md; позначено як відкрите питання в gaps.md, не вигадано мною довільно.
const CHECKLIST = [
  "Сертифіковані матеріали (Німеччина, Швейцарія)",
  "Лікування під мікроскопом",
  "Прозорий план лікування без прихованих платежів",
];

export default function About() {
  return (
    <section id="about" className="!py-16 md:!py-24 bg-[var(--color-surface)]">
      {/* колонки — пропорція фото:текст ≈ 586:520 (figma-export рядки 434-451), не рівні 50/50 */}
      <div className="container-x grid lg:grid-cols-[586fr_520fr] gap-10 lg:gap-16 items-center">
        <Reveal className="order-2 lg:order-1">
          {/* Фото без додаткової кольорової рамки/підложки — тільки саме фото із заокругленими
              кутами (власник прибрав рамку #4F4F4F, яку раніше застосували за буквальним
              читанням CSS-експорту). Пропорції ~586px фото на канві 1440 ≈ 40.7% ширини —
              тримаємо той самий вертикальний формат через aspect-ratio. */}
          <div className="relative rounded-[28px] shadow-xl overflow-hidden aspect-[586/644] max-w-[586px] mx-auto lg:mx-0">
            <img
              src="/images/about-exterior.jpg"
              alt="Фасад клініки INNOVIA dental"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <p className="eyebrow mb-4">Про нас</p>
          {/* h2 — буквально 38px/52px (figma-export рядки 445-447) */}
          <h2 className="mb-5 text-[2rem] sm:text-[2.375rem] leading-[1.37]">
            Стоматологія, яку радять друзям у Кам'янці
          </h2>
          {/* опис — буквально 15px/150% (figma-export рядки 449-451) */}
          <p className="text-[var(--color-ink-soft)] text-[15px] leading-[1.5] mb-2 max-w-[52ch]">
            Дев'ять напрямків лікування в одній клініці на вул. Лесі Українки, 24. Пацієнти приходять за
            порадою знайомих і лишаються — на Google Maps клініка тримає рейтинг 4.8★ із 49 відгуків.
          </p>
          <p className="text-[var(--color-ink-soft)] text-[15px] leading-[1.5] mb-8 max-w-[52ch]">
            Оплата — готівкою, карткою або безконтактно.
          </p>
          <ul className="space-y-3 mb-8">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                {/* чек-лист іконка-плашка: 26x26, bg #E9E9E9 (нейтральна), radius 8px, ✓ #00474A (акцент) */}
                <span className="flex items-center justify-center w-[26px] h-[26px] rounded-[8px] bg-[var(--color-surface-tint)] shrink-0">
                  <Check className="w-3.5 h-3.5 text-[var(--color-brand)]" strokeWidth={3} />
                </span>
                {/* пункт чек-листа — буквально 15px/18px (figma-export рядок 460) */}
                <p className="font-semibold text-[15px] leading-[18px] text-[var(--color-heading)]">{item}</p>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-dark">
            <span className="btn__label">Записатись на консультацію</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
