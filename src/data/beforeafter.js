// Instagram-рубрика "ДО/ПІСЛЯ" (brief.md розділ 5, Highlights). Реальні файли від власника
// (2026-09-14, папка /Users/romanyakovyshynn/Desktop/ІНОВІЯ/, "ДО ПІСЛЯ 1..4.png") — 4 кейси,
// кожен УЖЕ готовий колаж (фото "до" згори, "після" знизу, одним зображенням; перші три з
// водяним знаком INNOVIA в кутку, четвертий без). Показані як статичні картки-колажі, НЕ через
// react-compare-slider — власник сам позначив це безпечнішим шляхом (нарізка навпіл без
// гарантії точної межі ризикує зрізати частину фото/водяний знак).
// width/height — intrinsic розміри оригіналів (sips), для CLS-безпечного lazy-load
// (perf-задача 2026-09-15, п.1.1) поверх контейнера aspect-square, що вже задає пропорцію.
const DIMENSIONS = {
  1: { width: 294, height: 293 },
  2: { width: 301, height: 299 },
  3: { width: 297, height: 295 },
  4: { width: 300, height: 298 },
};

export const beforeAfterCases = [1, 2, 3, 4].map((n) => ({
  id: n,
  image: `/images/beforeafter-${n}.jpg`,
  imageWebp: `/images/beforeafter-${n}.webp`,
  caption: `Кейс ${n} — до і після лікування`,
  ...DIMENSIONS[n],
}));
