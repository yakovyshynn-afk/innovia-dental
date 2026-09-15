import { Icon } from "@iconify/react";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services.js";
import Reveal from "./Reveal.jsx";

// Кожна картка темніє при наведенні (hover), а клік відкриває модалку запису з преселекцією
// цієї послуги — пряма вимога 1:1-референсу власника (2026-09-14), заміна попередньої версії,
// де темна картка була статичним "featured"-стилем лише першого напрямку.
// ⚠️ У figma-експорті картка 1 статично темна — це ілюстрація hover-стану (Figma не показує
// live :hover). Тут темний стиль застосовано як :hover для ВСІХ 9 карток однаково.
export default function Services({ onSelectService }) {
  return (
    <section id="services" className="!py-16 md:!py-24 bg-white">
      <div className="container-x">
        <Reveal className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p className="eyebrow mb-4 justify-center">Напрямки клініки</p>
          <h2 className="mb-4">Комплексна стоматологія: всі послуги в одній клініці</h2>
          <p className="text-[var(--color-ink-soft)] max-w-[48ch] mx-auto">
            Точну вартість називаємо після консультації та огляду — план лікування погоджуємо з вами
            заздалегідь.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => onSelectService?.(service.title)}
                className="card-service group relative h-full w-full text-left rounded-[25px] py-7 px-6 bg-white shadow-[0_4px_20px_rgba(20,20,18,0.07)] flex flex-col gap-2 min-h-[220px] cursor-pointer transition-colors duration-500 hover:bg-[var(--color-dark)]"
              >
                <ArrowUpRight
                  className="card-service-arrow absolute top-6 right-6 w-6 h-6 text-transparent group-hover:text-white/70 group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.8}
                />
                {/* Іконка без фонової плашки — просто іконка, більша за попередній розмір,
                    колір #4F4F4F (var(--color-dark)), той самий що й кнопки на сайті —
                    НЕ брендовий зелений (власник прямо прибрав зелений і кругову підложку). */}
                <div className="flex items-center justify-center mb-3">
                  <Icon
                    icon={service.icon}
                    className="w-9 h-9 text-[var(--color-dark)] group-hover:text-white transition-colors duration-500"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-[var(--color-heading)] group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--color-ink-soft)] group-hover:text-white/70 leading-relaxed transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
