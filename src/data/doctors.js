// Джерело — brief.md розділ 3 "Лікарі (з відгуків Google)". Тексти карток — ідентичні
// формулюванням із попередньої ітерації index.html (описово, за відгуками, без формального
// титулу-кваліфікації, якої бриф не підтверджує). Прізвища позначені брифом як "варто звірити
// з клієнтом" — не показувати клієнту без підтвердження власника (див. state.md).
// photoBase/photoWidth/photoHeight — для srcset (perf-задача 2026-09-15, п.1.3): реальні
// intrinsic-розміри оригіналів (виміряні sips), потрібні для width/height-атрибутів (CLS) і
// дескрипторів "Nw" у srcset. Показ картки — 242px, оригінали лише трохи більші за це.
export const doctors = [
  {
    id: "sukhoverko",
    name: "Назарій Суховерко",
    role: "За відгуками Google",
    description:
      "Видалення зубів мудрості, лікування, заміна ретейнерів. Пацієнти відзначають тактовність і те, що пояснює кожен крок.",
    photo: "/images/doctor-sukhoverko.jpg",
    photoBase: "/images/doctor-sukhoverko",
    photoWidth: 323,
    photoHeight: 330,
  },
  {
    id: "palamarchuk",
    name: "Дмитро Паламарчук",
    role: "За відгуками Google",
    description: "Лікування. Пацієнти хвалять професіоналізм і комфортну, світлу атмосферу в кабінеті.",
    photo: "/images/doctor-palamarchuk.jpg",
    photoBase: "/images/doctor-palamarchuk",
    photoWidth: 322,
    photoHeight: 335,
  },
  {
    id: "sytnyk",
    name: "Юрій Ситник",
    role: "За відгуками Google",
    description: "КТ щелепи — діагностика перед лікуванням. Пацієнти відзначають фаховість і уважність.",
    photo: "/images/doctor-sytnyk.jpg",
    photoBase: "/images/doctor-sytnyk",
    photoWidth: 323,
    photoHeight: 335,
  },
];
