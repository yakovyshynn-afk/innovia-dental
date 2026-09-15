// perf-задача 2026-09-15, п.1.5 — офлайн-іконки для Services.jsx.
// Раніше `<Icon icon="prefix:name">` з @iconify/react тягнув SVG-дані рантайм-запитом до
// api.iconify.design/api.simplesvg.com (зайва залежність від чужого сервера + затримка).
// Перша спроба — зареєструвати дані локально через addCollection() з @iconify/react — не
// прибрала згадки цих доменів з dist/: сам пакет @iconify/react носить їх у собі як
// дефолтний fallback-конфіг API-провайдера (мертвий код, що не викликається, але текстово
// лишається в бандлі). Тому іконки рендеряться БЕЗ @iconify/react — напряму через SVG,
// компонент src/components/OfflineIcon.jsx.
//
// Скрипт: читає реальний список іконок напряму з src/data/services.js (щоб не розсинхронитись,
// якщо іконки там зміняться), витягує ТІЛЬКИ ці конкретні іконки з повних @iconify-json/*
// колекцій (кожна колекція — сотні KB/кілька MB, нам треба лише 9 SVG), і пише плаский
// офлайн-снепшот у src/data/icons-offline.json (ключ "prefix:name" -> {body, width, height}).
//
// Запуск (лише коли з'являється НОВА іконка в services.js, якої ще нема в offline-снепшоті):
//   npm install --save-dev @iconify-json/<prefix> @iconify/utils  (якщо пак ще не встановлений)
//   node scripts/extract-icons.mjs
//
// @iconify-json/* пакети й @iconify/utils лишаються devDependencies — потрібні тільки для
// генерації снепшоту, у продакшн-бандл не потрапляють (нічого з них не імпортується в
// рантайм-коді компонентів).
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { getIcons } from "@iconify/utils";

const require = createRequire(import.meta.url);
const root = fileURLToPath(new URL("..", import.meta.url));

const servicesSrc = readFileSync(`${root}src/data/services.js`, "utf8");
const iconRefs = [...servicesSrc.matchAll(/"([a-z0-9-]+):([a-z0-9-]+)"/g)];
if (iconRefs.length === 0) {
  console.error("Не знайдено жодного посилання icon: у services.js — перевір регекс/файл.");
  process.exit(1);
}

const wanted = {};
for (const [, prefix, name] of iconRefs) {
  (wanted[prefix] ??= new Set()).add(name);
}

const flat = {};
for (const [prefix, namesSet] of Object.entries(wanted)) {
  const names = [...namesSet];
  const full = require(`@iconify-json/${prefix}/icons.json`);
  const reduced = getIcons(full, names);
  if (!reduced) {
    console.error(`Не вдалось витягти з колекції "${prefix}": ${names.join(", ")}`);
    console.error(`Встанови пакет: npm install --save-dev @iconify-json/${prefix}`);
    process.exit(1);
  }
  for (const name of names) {
    const icon = reduced.icons[name];
    flat[`${prefix}:${name}`] = {
      body: icon.body,
      width: icon.width ?? reduced.width ?? 24,
      height: icon.height ?? reduced.height ?? 24,
    };
  }
  console.log(`${prefix} -> ${names.join(", ")}`);
}

writeFileSync(`${root}src/data/icons-offline.json`, JSON.stringify(flat));
console.log(`\nЗаписано src/data/icons-offline.json (${iconRefs.length} іконок, ${Object.keys(wanted).length} колекцій).`);
