import Reveal from "./Reveal.jsx";

const STATS = [
  { value: "4.8★", label: "рейтинг Google" },
  { value: "49", label: "відгуків на Google" },
  { value: "9", label: "напрямків лікування" },
];

// Плаваюча "вирізана" картка статистики (figma-export-node-6-250.css, "Rectangle 2" /
// "Group 5", рядки 261-269): background: #F4F4F4 — той самий колір, що й фон сторінки,
// НІЯКОГО box-shadow у CSS-експорті немає (це раніше додана вигадана тінь, прибрана) —
// тому картка виглядає приклеєною/вирізаною з фону, плоскою, без відкидання тіні. Нижня
// частина картки візуально зливається з фоном, а верхня частина заходить на фото hero —
// негативний margin-top підтягує картку вгору поверх нижнього краю фото.
// Цифри (рядки 282-296 CSS): font-size 30px. Підписи (рядки 300-314 CSS): font-size 12px.
export default function StatsBar() {
  return (
    <div className="relative z-10 -mt-14 sm:-mt-16 px-4">
      <Reveal
        delay={200}
        className="mx-auto max-w-[644px] rounded-[28px] bg-[var(--color-surface)] flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-line)] px-8 py-6 sm:py-7"
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="flex-1 flex flex-col items-center text-center px-6 py-3 sm:py-0">
            <span className="font-display font-extrabold text-[30px] text-[var(--color-dark)] leading-none">
              {stat.value}
            </span>
            <span className="text-[12px] text-[var(--color-dark)] mt-2">{stat.label}</span>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
