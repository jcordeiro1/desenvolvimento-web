import { useEffect, useMemo, useRef, useState } from "react";
import "../styles/testimonials.css";

import Stars   from "../assets/stars.png";
import Avatar1 from "../assets/circle.png";
import Avatar2 from "../assets/circle (1).png";
import Avatar3 from "../assets/circle (2).png";

type Testimony = {
  name: string;
  role: string;
  text: string;
  avatar: string;
};

const DATA: Testimony[] = [
  {
    name: "Robson",
    role: "Programador",
    text:
      "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    avatar: Avatar1,
  },
  {
    name: "Isaque",
    role: "Ceo de produtos",
    text:
      "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    avatar: Avatar2,
  },
  {
    name: "Jaão Vitor",
    role: "Programador",
    text:
      "Ferramenta simples e direta, organizou o time e o calendário do jeito que a gente precisava.",
    avatar: Avatar3,
  },
];

// util: quebra em páginas de “perPage” itens
function chunk<T>(arr: T[], size: number) {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function Testimonials() {
  
  const getBasePerPage = () => (window.innerWidth >= 1280 ? 2 : 1);
  const baseRef = useRef(getBasePerPage());
  const [perPage, setPerPage] = useState<number>(baseRef.current);

  // hover: pausa e mostra +1 card (até o máximo possível)
  const [hovering, setHovering] = useState(false);

  // autoplay rapidinho
  const AUTOPLAY_MS = 1500;
  const pausedRef = useRef(false);

  // recalcula base em resize
  useEffect(() => {
    const onResize = () => {
      baseRef.current = getBasePerPage();
      setPerPage(hovering ? Math.min(baseRef.current + 1, DATA.length) : baseRef.current);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [hovering]);

  // aplica +1 no hover e pausa
  useEffect(() => {
    pausedRef.current = hovering;
    setPerPage(hovering ? Math.min(baseRef.current + 1, DATA.length) : baseRef.current);
  }, [hovering]);

  const pages = useMemo(() => chunk(DATA, perPage), [perPage]);
  const [index, setIndex] = useState(0);

  // garante índice válido quando perPage muda
  useEffect(() => {
    if (index >= pages.length) setIndex(0);
  }, [pages.length, index]);

  // autoplay
  useEffect(() => {
    if (pausedRef.current) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % pages.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [pages.length, index]);

  const prev = () => setIndex((i) => (i - 1 + pages.length) % pages.length);
  const next = () => setIndex((i) => (i + 1) % pages.length);

  return (
    <section
      id="testimonials"
      className="t-wrap"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onTouchStart={() => setHovering(true)}
      onTouchEnd={() => setHovering(false)}
    >
      <header className="t-head">
        <span className="t-eyebrow">Conselho de quem conhece</span>
        <h2>Cada cliente importa!</h2>
        <p>
          Problems trying to resolve the conflict between the two major realms of Classical
          physics: Newtonian mechanics
        </p>
      </header>

      <div className="t-viewport">
        <div className="t-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {pages.map((page, pIdx) => (
            <div
              className="t-slide"
              key={pIdx}
              style={{ ["--cols" as any]: page.length }} 
            >
              {page.map((item, cIdx) => (
                <article className="t-card" key={cIdx}>
                  <img className="t-avatar" src={item.avatar} width={96} height={96} alt={item.name} />
                  <p className="t-text">{item.text}</p>
                  <img className="t-stars" src={Stars} width={110} height={20} alt="avaliação" />
                  <h3 className="t-name">{item.name}</h3>
                  <span className="t-role">{item.role}</span>
                </article>
              ))}
            </div>
          ))}
        </div>

        <button className="t-nav t-prev" onClick={prev} aria-label="Anterior">‹</button>
        <button className="t-nav t-next" onClick={next} aria-label="Próximo">›</button>
      </div>

      <div className="t-dots">
        {pages.map((_, i) => (
          <button
            key={i}
            className={`t-dot ${i === index ? "is-active" : ""}`}
            aria-label={`Ir para slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
