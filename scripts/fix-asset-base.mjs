// Постбілд-фікс: у вихідному коді компонентів шляхи до public-ассетів
// прописані як кореневі ("/images/..."), бо збірка задумувалась як сайт у
// корені домену. GitHub Pages цього проєкту віддає сайт з підкаталогу
// (/innovia-dental/), тому Vite `base` виправляє шлях до JS/CSS бандлів,
// але НЕ чіпає рядкові літерали "/images/..." всередині самого коду —
// вони потрапляють у dist/assets/*.js як є.
//
// Цей скрипт після білду переписує лише префікс "/images/" на
// "/innovia-dental/images/" у згенерованих файлах dist/. Вихідні .jsx/.js
// файли в src/ не чіпаються — жодних правок у компонентах чи даних.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const BASE = '/innovia-dental'
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

let changed = 0
for (const file of walk(DIST)) {
  const original = readFileSync(file, 'utf8')
  const patched = original.replaceAll('/images/', `${BASE}/images/`)
  if (patched !== original) {
    writeFileSync(file, patched)
    changed++
    console.log(`fix-asset-base: patched ${file}`)
  }
}
console.log(`fix-asset-base: done, ${changed} file(s) patched`)
