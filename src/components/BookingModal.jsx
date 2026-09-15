import { useEffect } from "react";
import { X } from "lucide-react";
import ContactForm from "./ContactForm.jsx";

// Модалка запису — та сама форма, що в #contact, тільки з преселекцією поля "Послуга"
// (відкривається кліком по картці в Services.jsx, пряма вимога 1:1-референсу власника).
export default function BookingModal({ open, service, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Форма запису на консультацію"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md max-h-[90svh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-7 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрити форму"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full text-[var(--color-ink-soft)] hover:bg-[var(--color-surface)] hover:text-[var(--color-heading)] transition-colors"
        >
          <X className="w-5 h-5" strokeWidth={2} />
        </button>
        <p className="eyebrow mb-3">Залишити заявку</p>
        <h2 className="mb-2 !text-2xl">Записатись на консультацію</h2>
        <p className="text-sm text-[var(--color-ink-soft)] mb-6">
          Передзвонимо і підберемо зручний час — попередній запис бажаний.
        </p>
        <ContactForm initialService={service} />
      </div>
    </div>
  );
}
