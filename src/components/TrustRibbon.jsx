// Стрічка переваг під hero — була у попередній (статичній) версії сайту, випала з
// React-перезбірки. Повернена за прямою вказівкою власника (2026-09-14, "внизу де переваги").
const ITEMS = [
  "Пояснюємо кожен крок лікування",
  "Рейтинг 4.8★ на Google",
  "Попередній запис — свій час",
  "Безконтактна оплата приймається",
];

export default function TrustRibbon() {
  return (
    <div className="bg-[var(--color-surface-tint)] border-y border-[var(--color-line)]">
      <div className="container-x flex flex-wrap justify-center divide-x divide-[var(--color-line)] !py-4">
        {ITEMS.map((item) => (
          <span
            key={item}
            className="px-5 py-1.5 text-sm font-semibold text-[var(--color-dark)] whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
