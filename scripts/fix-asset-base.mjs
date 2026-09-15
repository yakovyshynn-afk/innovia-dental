// Постбілд-фікс: у вихідному коді компонентів шляхи до public-ассетів
// прописані як кореневі ("/images/..."), бо збірка задумувалась як сайт у
// корені домену. Коли `base` (base.config.mjs) вказує на підкаталог
// (зараз GitHub Pages цього проєкту — /innovia-dental/), Vite сам виправляє
// шлях до JS/CSS бандлів, але НЕ чіпає рядкові літерали "/images/..."
// всередині самого коду — вони потрапляють у dist/assets/*.js як є.
//
// Цей скрипт після білду переписує префікс "/images/" на "<base>images/"
// у згенерованих файлах dist/. Вихідні .jsx/.js файли в src/ не чіпаються —
// жодних правок у компонентах чи даних.
//
// Раніше значення base-шляху було задубльоване (тут — хардкод, окремо —
// `base` у vite.config.js): при переїзді на власний домен хтось міняв
// тільки vite.config.js, а цей скрипт мовчки дописував неіснуючий префікс
// і фото відвалювались без помилки збірки. Тепер обидва місця імпортують
// одне значення з base.config.mjs. При `base: '/'` скрипт нічого не патчить
// (BASE === '/', префікс збігається з уже кореневим шляхом — no-op).
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { BASE } from '../base.config.mjs'

const DIST = new URL('../dist', import.meta.url).pathname

function walk(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    const st = statSync(full)
    if (st.isDirectory()) out.push(...walk(full))
    else if (/\.(js|html|css)$/.test(name)) out.push(full)
  }
  return out
}

if (BASE === '/') {
  console.log('fix-asset-base: base is "/", nothing to patch, skipping')
} else {
  const prefix = `${BASE.replace(/\/$/, '')}/images/`
  let changed = 0
  for (const file of walk(DIST)) {
    const original = readFileSync(file, 'utf8')
    const patched = original.replaceAll('/images/', prefix)
    if (patched !== original) {
      writeFileSync(file, patched)
      changed++
      console.log(`fix-asset-base: patched ${file}`)
    }
  }
  console.log(`fix-asset-base: done, ${changed} file(s) patched`)
}
