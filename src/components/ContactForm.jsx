import { useEffect, useState } from "react";
import { ChevronDown, CircleCheck, CircleAlert, Loader2 } from "lucide-react";
import { services } from "../data/services.js";

// UI-заглушка без бекенду (пряма вимога задачі) — стани "надсилаємо / успіх / помилка"
// емулюються локально. Реальний ендпоінт підключається пізніше.
// `initialService` — назва картки послуги, з якої відкрили модалку (Services.jsx), щоб поле
// "Послуга" вже стояло на потрібному напрямку (пряма вимога 1:1-референсу власника).
export default function ContactForm({ initialService = "" }) {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [consent, setConsent] = useState(false);
  const [service, setService] = useState(initialService);

  // Якщо модалку відкрили заново з іншої картки — підхопити нову преселекцію.
  useEffect(() => {
    setService(initialService);
  }, [initialService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consent) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    window.setTimeout(() => {
      // Демо: без реального бекенду форма завжди показує успіх після згоди.
      setStatus("success");
    }, 900);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center gap-3 py-10">
        <CircleCheck className="w-10 h-10 text-[var(--color-brand)]" strokeWidth={1.8} />
        <p className="font-semibold text-[var(--color-heading)]">Заявку надіслано</p>
        <p className="text-sm text-[var(--color-ink-soft)] max-w-[32ch]">
          Ми зателефонуємо вам, щоб узгодити зручний час консультації.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="block font-display font-semibold text-[12.5px] leading-4 text-[var(--color-heading)] mb-1.5">
          Ім'я
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Як до вас звертатись"
          className="w-full rounded-[25px] border-[1.5px] border-[var(--color-line)] bg-[var(--color-input-bg)] px-4 py-3 text-sm text-[var(--color-heading)] placeholder:text-[var(--color-ink-soft)] focus:outline-none focus:border-[var(--color-brand)] transition-colors"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block font-display font-semibold text-[12.5px] leading-4 text-[var(--color-heading)] mb-1.5">
          Телефон
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="068 000 00 00"
          className="w-full rounded-[25px] border-[1.5px] border-[var(--color-line)] bg-[var(--color-input-bg)] px-4 py-3 text-sm text-[var(--color-heading)] placeholder:text-[var(--color-ink-soft)] focus:outline-none focus:border-[var(--color-brand)] transition-colors"
        />
      </div>
      <div>
        <label htmlFor="service" className="block font-display font-semibold text-[12.5px] leading-4 text-[var(--color-heading)] mb-1.5">
          Послуга
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-[25px] border-[1.5px] border-[var(--color-line)] bg-[var(--color-input-bg)] px-4 py-3 pr-10 text-sm text-[var(--color-heading)] focus:outline-none focus:border-[var(--color-brand)] transition-colors appearance-none"
          >
            <option value="">Оберіть напрямок</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-[var(--color-ink-soft)] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" strokeWidth={2} />
        </div>
      </div>
      <div>
        <label htmlFor="comment" className="block font-display font-semibold text-[12.5px] leading-4 text-[var(--color-heading)] mb-1.5">
          Коментар
        </label>
        <textarea
          id="comment"
          name="comment"
          rows={3}
          placeholder="Коротко опишіть, що турбує (необов'язково)"
          className="w-full rounded-[25px] border-[1.5px] border-[var(--color-line)] bg-[var(--color-input-bg)] px-4 py-3 text-sm text-[var(--color-heading)] placeholder:text-[var(--color-ink-soft)] focus:outline-none focus:border-[var(--color-brand)] transition-colors resize-none"
        />
      </div>

      <label className="flex items-start gap-2.5 text-xs text-[var(--color-ink-soft)] mt-1">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => {
            setConsent(e.target.checked);
            if (status === "error") setStatus("idle");
          }}
          className="mt-0.5 w-4 h-4 accent-[var(--color-brand)] shrink-0"
        />
        <span>
          Я даю згоду на обробку персональних даних відповідно до{" "}
          <a href="#" className="underline underline-offset-2 hover:text-[var(--color-brand)]">
            політики конфіденційності
          </a>
        </span>
      </label>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-600">
          <CircleAlert className="w-4 h-4 shrink-0" strokeWidth={2} />
          Позначте згоду на обробку даних, щоб надіслати заявку.
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn btn-dark justify-center mt-1 disabled:opacity-70">
        <span className="btn__label">
          {status === "sending" && <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2} />}
          {status === "sending" ? "Надсилаємо…" : "Записатись на консультацію"}
        </span>
      </button>
    </form>
  );
}
