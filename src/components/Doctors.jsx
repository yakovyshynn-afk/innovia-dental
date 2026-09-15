import { doctors } from "../data/doctors.js";
import Reveal from "./Reveal.jsx";

export default function Doctors() {
  return (
    <section id="doctors" className="!py-16 md:!py-24 bg-[var(--color-surface)]">
      <div className="container-x">
        <Reveal className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p className="eyebrow mb-4 justify-center">Лікарі</p>
          <h2 className="mb-4">Наша команда для вашої ідеальної посмішки</h2>
          <p className="text-[var(--color-ink-soft)] max-w-[46ch] mx-auto">
            Спеціалізація — за тим, з чим пацієнти найчастіше звертаються, за відгуками на Google Maps.
          </p>
        </Reveal>

        {/* doc-card: ВЕЛИКА картка (padding 30px 24px, figma-export рядок 510) → відносно
            НЕВЕЛИКЕ фото всередині, з полями навколо → текст під фото. Не фото впритул до
            країв картки — власник підкреслив це шкодом в Figma як головну структурну відмінність. */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc, i) => (
            <Reveal key={doc.id} delay={i * 100}>
              <article className="bg-white rounded-[25px] shadow-[0_4px_20px_rgba(20,20,18,0.07)] h-full p-6 sm:p-7 flex flex-col">
                <div className="aspect-square overflow-hidden rounded-[18px] mb-5">
                  <img src={doc.photo} alt={`Фото лікаря — ${doc.name}, з Instagram клініки`} className="w-full h-full object-cover" />
                </div>
                <div className="text-center mt-auto">
                  <h3 className="mb-1.5">{doc.name}</h3>
                  <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">{doc.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
