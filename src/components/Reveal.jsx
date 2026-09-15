import { useReveal } from "../hooks/useReveal.js";

export default function Reveal({ as: Tag = "div", delay = 0, className = "", children }) {
  const { ref, isIn } = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${isIn ? "is-in" : ""} ${className}`} style={{ "--d": `${delay}ms` }}>
      {children}
    </Tag>
  );
}
