import icons from "../data/icons-offline.json";

// perf-задача 2026-09-15, п.1.5 — заміна @iconify/react. Дев'ять іконок послуг раніше
// вантажились рантайм-запитом до api.iconify.design/api.simplesvg.com; сам пакет @iconify/react
// теж носить ці домени в собі як мертвий fallback-конфіг (лишається текстом у dist/ навіть без
// жодного реального виклику). Тому іконки тепер — прямий SVG з офлайн-снепшоту
// (src/data/icons-offline.json, генерується scripts/extract-icons.mjs), без стороннього пакета.
// Візуально ті самі іконки (той самий `body`/viewBox з тих самих Iconify-колекцій) — жодної
// заміни вигляду.
export default function OfflineIcon({ icon, className }) {
  const data = icons[icon];
  if (!data) {
    if (import.meta.env.DEV) {
      console.warn(`OfflineIcon: немає даних для "${icon}" — запусти scripts/extract-icons.mjs`);
    }
    return null;
  }
  return (
    <svg
      viewBox={`0 0 ${data.width} ${data.height}`}
      className={className}
      width="1em"
      height="1em"
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: data.body }}
    />
  );
}
