import { Star } from "lucide-react";
import { reviews } from "../data/reviews.js";
import Reveal from "./Reveal.jsx";

export default function Reviews() {
  return (
    <section id="reviews" className="!py-16 md:!py-24 bg-white">
      <div className="container-x grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">
        <Reveal className="flex lg:block justify-center">
          <div className="w-48 h-48 lg:w-full lg:aspect-square rounded-[28px] bg-[var(--color-dark)] text-white flex flex-col items-center justify-center gap-2 shadow-xl">
            <span className="font-display font-extrabold text-5xl leading-none">4.8</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-white text-white" strokeWidth={0} />
              ))}
            </div>
            <span className="text-xs text-white font-semibold mt-1">49 відгуків на Google</span>
          </div>
        </Reveal>

        <div>
          <Reveal delay={80} className="mb-10">
            {/* Єдине місце на сайті, де eyebrow брендово-зелений (#2F7566), не сірий #4F4F4F —
                !important, щоб перебити unlayered .eyebrow (index.css) */}
            <p className="eyebrow mb-4 !text-[var(--color-brand)]">Відгуки пацієнтів</p>
            <h2 className="mb-4">Що кажуть на Google Maps</h2>
            <p className="text-[var(--color-ink-soft)] max-w-[56ch]">
              Цитати без редагування, тільки перекладені на українську.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <Reveal key={review.id} delay={i * 90}>
                <blockquote className="h-full rounded-[20px] bg-white border border-[var(--color-line)] py-[26px] px-[22px] flex flex-col justify-between min-h-[190px]">
                  <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">«{review.quote}»</p>
                  <footer className="mt-5">
                    <p className="font-display font-semibold text-[var(--color-heading)] text-sm">{review.author}</p>
                    <p className="text-xs text-[var(--color-ink-soft)] mt-0.5">{review.source}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
