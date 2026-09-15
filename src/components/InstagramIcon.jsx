// lucide-react (версія в проєкті) більше не постачає брендові іконки соцмереж —
// власний мінімальний контур Instagram замість emoji/glyph (§8 design-ai-rules.md
// забороняє emoji в інтерфейсі, брендовий SVG-контур — не emoji).
export default function InstagramIcon({ className = "w-4 h-4", strokeWidth = 2 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
