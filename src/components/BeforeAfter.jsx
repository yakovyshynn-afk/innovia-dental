import { ArrowRight } from "lucide-react";
import { beforeAfterCases } from "../data/beforeafter.js";
import InstagramIcon from "./InstagramIcon.jsx";
import Reveal from "./Reveal.jsx";

export default function BeforeAfter() {
  return (
    <section id="beforeafter" className="!py-16 md:!py-24 bg-white relative">
      <div className="container-x">
        <Reveal className="max-w-2xl mx-auto text-center mb-12 relative">
          <p className="eyebrow mb-4 justify-center">Рубрика До/Після в Instagram</p>
          <h2 className="mb-4">До і після лікування</h2>
          <p className="text-[var(--color-ink-soft)] max-w-[50ch] mx-auto">
            За кожним кейсом стоїть план лікування, узгоджений із пацієнтом заздалегідь.
          </p>
          <ArrowRight
            className="hidden md:block absolute -right-2 top-1 w-6 h-6 text-[var(--color-ink-soft)]"
            strokeWidth={1.8}
          />
        </Reveal>

        {/* Без підпису "Кейс N" під кожним фото — прямий референс власника (2026-09-14)
            показує лише самі колажі, без додаткового тексту під ними. */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {beforeAfterCases.map((item, i) => (
            <Reveal key={item.id} delay={i * 80}>
              <div className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(20,20,18,0.07)] aspect-square">
                <img src={item.image} alt={`Кейс ${item.id} — фото до і після лікування`} className="w-full h-full object-cover" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* ba-cta: панель 1160x75, bg білий, shadow 0 4 40 rgba(0,0,0,.25), radius 25,
            padding 0 20 0 23, justify space-between (figma-export рядки 526-528) */}
        <Reveal delay={200} className="mt-12">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 rounded-[25px] bg-white shadow-[0_4px_40px_rgba(0,0,0,0.25)] px-5 sm:pl-[23px] sm:pr-5 py-5 sm:py-0 sm:min-h-[75px]">
            <p className="text-sm text-[var(--color-ink-soft)] text-center sm:text-left">
              Більше реальних кейсів — у рубриці «До/Після» нашого Instagram.
            </p>
            <a
              href="https://www.instagram.com/innovia_dental_kp/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark border-[1.5px] border-[var(--color-line)] shrink-0"
            >
              <span className="btn__label">
                <InstagramIcon className="w-4 h-4" strokeWidth={2} />
                Дивитись Instagram
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
