import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const NAV = [
  { href: "#about", label: "Про нас" },
  { href: "#services", label: "Послуги" },
  { href: "#doctors", label: "Лікарі" },
  { href: "#reviews", label: "Відгуки" },
  { href: "#contact", label: "Контакти" },
];

const PHONE_DISPLAY = "068 777 53 42";
const PHONE_HREF = "tel:+380687775342";

// Плаваючий скляний бар (figma-export-node-6-250.css, "Frame 2"), НЕ full-width смуга:
// rgba(255,255,255,0.75) + blur(10px), border-radius 25px, з відступами від країв екрана
// і невеликим top-відступом — fixed поверх контенту, а не sticky-в-потоці.
export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container-x pt-3 sm:pt-[29px]">
        <div className="flex items-center justify-between gap-4 h-[71px] rounded-[25px] bg-white/75 backdrop-blur-md shadow-[0_8px_30px_rgba(20,20,18,0.08)] px-4 sm:px-6">
          <a href="#hero" className="flex items-center shrink-0 min-w-0">
            <img src="/images/logo.png" alt="INNOVIA dental" className="h-7 sm:h-8 w-auto object-contain" />
          </a>

          <nav className="hidden lg:flex items-center gap-8 mx-auto" aria-label="Основна навігація">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--color-dark)] hover:text-[var(--color-brand)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-sm font-semibold text-[var(--color-heading)] hover:text-[var(--color-brand)] transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" strokeWidth={2} />
              {PHONE_DISPLAY}
            </a>
            <a href="#contact" className="btn btn-dark !py-[14px] !px-[26px] !text-sm shrink-0">
              <span className="btn__label">Залишити заявку</span>
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden flex items-center justify-center w-10 h-10 -mr-1.5 text-[var(--color-heading)]"
            aria-label={open ? "Закрити меню" : "Відкрити меню"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 rounded-[25px] bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgba(20,20,18,0.12)] overflow-hidden">
            <nav className="flex flex-col px-5 py-3 gap-1" aria-label="Мобільна навігація">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium text-[var(--color-heading)] border-b border-[var(--color-line)] last:border-0"
                >
                  {item.label}
                </a>
              ))}
              <a href={PHONE_HREF} className="flex items-center gap-2 py-3 text-base font-semibold text-[var(--color-brand)]">
                <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-dark mt-2 mb-1 justify-center">
                <span className="btn__label">Залишити заявку</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
