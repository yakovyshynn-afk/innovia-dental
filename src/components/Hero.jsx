import { Phone } from "lucide-react";
import Reveal from "./Reveal.jsx";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92svh] flex items-center overflow-hidden">
      <img
        src="/images/hero-bg.jpg"
        alt="Кабінет клініки INNOVIA dental"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

      <div className="container-x relative py-24 md:py-16">
        <Reveal
          delay={100}
          className="max-w-xl bg-[rgba(244,244,244,0.85)] backdrop-blur-md shadow-xl rounded-[25px] p-7 sm:p-8"
        >
          <p className="eyebrow mb-4">Стоматологія в Кам'янці-Подільському</p>
          {/* h1 — буквально за figma-export: font-size 52px, line-height 96% (не generic clamp) */}
          <h1 className="mb-4 text-[2.35rem] sm:text-[2.9rem] lg:text-[52px] leading-[0.96] tracking-tight">
            Лікуємо зуби без страху.
            <br />
            Пояснюємо кожен&nbsp;крок.
          </h1>
          {/* опис — буквально 17px/150% (figma-export рядки 112-122) */}
          <p className="text-[var(--color-dark)] text-[17px] leading-[1.5] mb-6 max-w-[42ch]">
            Пояснюємо складні діагнози простою мовою. Складаємо чіткий план дій, щоб ви розуміли кожен
            етап та контролювали бюджет лікування.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-dark">
              <span className="btn__label">Записатись на консультацію</span>
            </a>
            <a href="tel:+380687775342" className="btn btn-ghost">
              <span className="btn__fill" />
              <span className="btn__label">
                <Phone className="w-4 h-4" strokeWidth={2} />
                Подзвонити зараз
              </span>
            </a>
          </div>
          <p className="text-xs text-[var(--color-ink-soft)] mt-3">
            Попередній запис — обираєте свій час
          </p>
        </Reveal>
      </div>
    </section>
  );
}
