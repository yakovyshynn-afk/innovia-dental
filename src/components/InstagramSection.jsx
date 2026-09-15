import { instagramGrid, instagramProfile } from "../data/instagram.js";
import InstagramIcon from "./InstagramIcon.jsx";
import Reveal from "./Reveal.jsx";

// 1:1 з figma-export-node-6-250.css (рядки 534, 538): жодного рукописного HTML-профілю —
// instagram-grid-1.jpg це вже готовий скріншот профілю (аватар/біо/кнопки/highlights усередині
// самої картинки), тому зліва просто велика картинка. Праворуч — мозаїка різних розмірів
// (1 широке зверху + 2 ряди по 3 плитки), не рівна сітка 4×2.
const [profileShot, wideShot, ...tiles] = instagramGrid;
const topTiles = tiles.slice(0, 3);
const bottomTiles = tiles.slice(3, 6);

export default function InstagramSection() {
  return (
    <section id="instagram" className="!py-16 md:!py-24 bg-[var(--color-surface)]">
      <div className="container-x">
        <Reveal className="text-center mb-10">
          {/* Ми в INSTAGRAM — Onest 600 26px/33px (НЕ дефолтний clamp h2 сайту) */}
          <h2 className="mb-4 text-[26px] leading-[33px]">Ми в INSTAGRAM</h2>
          {/* pill: padding 14px 26px, bg #4F4F4F, border 1.5px #DCE7E2, radius 999px,
              текст 700 16px letter-spacing 0.18em, колір #F4F4F4 */}
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-dark)] border-[1.5px] border-[var(--color-line)] px-[26px] py-[14px] font-display font-bold text-base tracking-[0.18em] text-[#F4F4F4]">
            <InstagramIcon className="w-4 h-4 text-white" />
            {instagramProfile.username.toUpperCase()}
          </span>
        </Reveal>

        {/* Мозаїка 476:566, gap 42px між колонками, 32px усередині правої — на мобілці
            стек в один стовпець (без grid-cols-[..fr]), gap звужується до 8/16px. */}
        <Reveal delay={80} className="max-w-[1084px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[476fr_566fr] gap-2 sm:gap-4 lg:gap-[42px]">
            <img
              src={profileShot.src}
              alt="Скріншот Instagram-профілю INNOVIA dental (@innovia_dental_kp)"
              className="w-full h-auto aspect-[476/791] object-cover rounded-[25px]"
              loading="lazy"
            />

            <div className="flex flex-col gap-2 sm:gap-4 lg:gap-[32px]">
              <img
                src={wideShot.src}
                alt={`Публікація Instagram клініки ${wideShot.id}`}
                className="w-full h-auto aspect-[566/275] object-cover rounded-[25px]"
                loading="lazy"
              />

              <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-[32px]">
                {topTiles.map((post) => (
                  <img
                    key={post.id}
                    src={post.src}
                    alt={`Публікація Instagram клініки ${post.id}`}
                    className="w-full h-auto aspect-[168/226] object-cover rounded-[25px]"
                    loading="lazy"
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-[32px]">
                {bottomTiles.map((post) => (
                  <img
                    key={post.id}
                    src={post.src}
                    alt={`Публікація Instagram клініки ${post.id}`}
                    className="w-full h-auto aspect-[168/226] object-cover rounded-[25px]"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
