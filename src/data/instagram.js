// Instagram-профіль (brief.md розділ 1 і 5, доповнено деталізацією з 1:1-референсу власника
// 2026-09-14, звірено з реальним скріншотом профілю власника повторно 2026-09-15).
// Статистика — буквально зі скріншота власника: 86 дописів / 999 читачів / 15 за ким стежить
// (раніше було помилково 16 — виправлено на 15).
export const instagramProfile = {
  username: "@innovia_dental_kp",
  displayName: "INNOVIA dental",
  // Рядок під ніком у мокапі профілю (видно на скріншоті власника) — категорія + місто,
  // окремим рядком над описом напрямків.
  categoryLine: "Стоматологія INNOVIA dental • Кам'янець-Подільський",
  bioDirections: ["Терапевтична", "Ортопедична", "Хірургічна", "Ортодонтична", "Дитяча"],
  phoneLine: "Запис на прийом: 068 777 53 42",
  hoursLine: "Графік роботи: Пн-Сб 08:00-20:00, Нд 08:00-15:00",
  posts: 86,
  followers: 999,
  following: 15,
  avatar: "/images/instagram-avatar.jpg",
  url: "https://www.instagram.com/innovia_dental_kp/",
  mapsUrl:
    "https://www.google.com/maps/place/INNOVIA+dental+%D1%81%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%B0+%D0%BA%D0%BB%D1%96%D0%BD%D1%96%D0%BA%D0%B0/@48.6806397,26.583753,17z",
};

// instagramHighlights — НЕ використовується в поточному InstagramSection.jsx (макет не має
// рукописного HTML-профілю з highlight-кружечками, увесь цей UI вже видно на скріншоті
// instagram-grid-1.jpg). Лишено в даних на майбутнє, не видалено за прямою вказівкою задачі.
export const instagramHighlights = [
  { label: "ВІДГУКИ", src: "/images/instagram-grid-1.jpg" },
  { label: "ХІРУРГІЯ", src: "/images/instagram-grid-2.jpg" },
  { label: "ОРТОПЕДІЯ", src: "/images/instagram-grid-3.jpg" },
  { label: "Реставрації", src: "/images/instagram-grid-4.jpg" },
  { label: "РОБОЧИЙ ПРОЦЕС", src: "/images/instagram-grid-5.jpg" },
];

// instagram-grid-1.jpg — це СКРІНШОТ Instagram-профілю (стрілка назад, нік, лого-аватар,
// 86/999/15, біо, кнопки, highlights, вкладки), а НЕ фото роботи клініки — стоїть великим
// зліва в мозаїці. instagram-grid-2..8.jpg — реальні кадри клініки: grid-2 широке зверху
// справа (566×275), grid-3..8 — 6 плиток 168×226 у два ряди по 3. Розкладка — мозаїка різних
// розмірів (figma-export-node-6-250.css рядок 538), НЕ рівна сітка 4×2.
export const instagramGrid = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `/images/instagram-grid-${i + 1}.jpg`,
}));
