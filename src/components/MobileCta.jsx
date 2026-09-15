import { Phone } from "lucide-react";

// Sticky CTA знизу на мобільних — пряма вимога brief.md розділ 8 ("Кнопки дзвінка і запису —
// контрастні, завжди видимі на мобільному"), не суперечить новому 1:1-макету (це наскрізний
// UI-шар поверх секцій, не частина їхньої композиції).
export default function MobileCta() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-[var(--color-line)] px-4 py-3 flex gap-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <a href="tel:+380687775342" className="btn btn-ghost flex-1 justify-center !px-4">
        <span className="btn__fill" />
        <span className="btn__label">
          <Phone className="w-4 h-4" strokeWidth={2} />
          Подзвонити
        </span>
      </a>
      <a href="#contact" className="btn btn-dark flex-1 justify-center !px-4">
        <span className="btn__label">Записатись</span>
      </a>
    </div>
  );
}
