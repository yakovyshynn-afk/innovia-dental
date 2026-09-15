import { ExternalLink } from "lucide-react";
import ContactForm from "./ContactForm.jsx";
import Reveal from "./Reveal.jsx";

const MAP_SRC =
  "https://maps.google.com/maps?q=%D0%92%D1%83%D0%BB.%20%D0%9B%D0%B5%D1%81%D1%96%20%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%BA%D0%B8%2C%2024%2C%20%D0%9A%D0%B0%D0%BC%27%D1%8F%D0%BD%D0%B5%D1%86%D1%8C-%D0%9F%D0%BE%D0%B4%D1%96%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B8%D0%B9&t=&z=16&ie=UTF8&iwloc=&output=embed";
const MAPS_LINK_URL =
  "https://www.google.com/maps/place/INNOVIA+dental+%D1%81%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%B0+%D0%BA%D0%BB%D1%96%D0%BD%D1%96%D0%BA%D0%B0/@48.6806397,26.583753,17z";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative !py-16 md:!py-24 bg-[var(--color-dark)] text-white overflow-hidden"
    >
      <img
        src="/images/footer-texture.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-[var(--color-dark)]/70" />

      <div className="container-x relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {/* Карта — статичний образ, не робочий інтерактивний iframe (1:1-референс власника
            2026-09-14): той самий Google-скріншот локації, але pointer-events вимкнено на самому
            iframe, а клік по всьому блоку веде на реальну сторінку Google Maps в новій вкладці —
            так само, як звичайне зображення-посилання на карту. */}
        <Reveal className="relative min-h-[320px] lg:min-h-full rounded-2xl overflow-hidden shadow-2xl group">
          <iframe
            title="Розташування INNOVIA dental на карті"
            src={MAP_SRC}
            className="map-media w-full h-full min-h-[320px] border-0 pointer-events-none select-none"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            tabIndex={-1}
            aria-hidden="true"
          />
          <a
            href={MAPS_LINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-end justify-start p-5"
            aria-label="Відкрити розташування INNOVIA dental на Google Maps"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/95 text-[var(--color-heading)] text-xs font-semibold px-4 py-2.5 shadow-lg group-hover:bg-white transition-colors">
              <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
              Відкрити на Google Maps
            </span>
          </a>
        </Reveal>

        <Reveal delay={120}>
          {/* form-card: rgba(244,244,244,0.9), backdrop-blur(10px), radius 28px, padding 32px
              (figma-export рядок 567) */}
          <div className="bg-[rgba(244,244,244,0.9)] backdrop-blur-md text-[var(--color-heading)] rounded-[28px] shadow-2xl p-7 sm:p-8">
            <p className="eyebrow mb-3">Залишити заявку</p>
            <h2 className="mb-2 !text-3xl">Записатись на консультацію</h2>
            <p className="text-sm text-[var(--color-ink-soft)] mb-6">
              Передзвонимо і підберемо зручний час — попередній запис бажаний.
            </p>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
