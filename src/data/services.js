// Джерело фактів — виключно workspace/innovia-dental/brief.md, розділ 2 "Послуги (напрямки)".
// Порядок і назви — точно як у брифі й у попередній ітерації index.html. Жодних вигаданих
// напрямків (напр. "відбілювання") не додано — його немає в брифі.
// Іконки — точні Iconify-ідентифікатори з шарів Figma (figma-export-node-6-250.css, рядки
// 491-501), НЕ lucide-react. Порядок карток = порядок іконок з експорту.
export const services = [
  {
    id: "therapy",
    title: "Терапевтична стоматологія",
    description: "Лікування та пломбування — базовий напрямок, з якого починається план лікування.",
    icon: "icon-park-outline:massage-chair-one",
  },
  {
    id: "prosthetics",
    title: "Ортопедична стоматологія",
    description: "Протезування та вініри — відновлення форми й функції зубного ряду.",
    icon: "griddy-icons:tooth-implant-crown",
  },
  {
    id: "surgery",
    title: "Хірургічна стоматологія",
    description: "Видалення зубів, зокрема зубів мудрості.",
    icon: "griddy-icons:dental-forceps",
  },
  {
    id: "orthodontics",
    title: "Ортодонтія",
    description: "Виправлення прикусу, підбір і заміна ретейнерів.",
    icon: "griddy-icons:tooth-braces",
  },
  {
    id: "pediatric",
    title: "Дитяча стоматологія",
    description: "Лікування зубів у дітей.",
    icon: "tabler:mood-kid",
  },
  {
    id: "endodontics",
    title: "Ендодонтія",
    description: "Лікування кореневих каналів.",
    icon: "griddy-icons:tooth-root-canal",
  },
  {
    id: "implants",
    title: "Імплантація",
    description: "Відновлення відсутніх зубів імплантами.",
    icon: "griddy-icons:tooth-implant",
  },
  {
    id: "hygiene",
    title: "Професійна гігієна",
    description: "Чистка зубів у кабінеті клініки.",
    icon: "mdi:toothbrush",
  },
  {
    id: "ct",
    title: "КТ щелепи",
    description: "Комп'ютерна діагностика перед лікуванням.",
    icon: "griddy-icons:tooth-x-ray",
  },
];
