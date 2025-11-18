import Button from "../components/Button";
import "../styles/pricing.css";
import Vector from "../assets/Vector.png";

type Plan = {
  id: string;
  title: string;
  subtitle: string;
  price: string;          // ex: "Grátis", "R$ 19,90"
  suffix?: string;        // ex: "/mês", "/mês"
  ctaText: string;
  ctaHref?: string;
  features: string[];
  badge?: string;         // ex: "1º MÊS GRÁTIS"
  featured?: boolean;     // destaque (card do meio)
};

const PLANS: Plan[] = [
  {
    id: "basic",
    title: "Básico",
    subtitle: "Baixe o ferramenta e comece a utilizar agora mesmo!",
    price: "Grátis",
    ctaText: "Baixar agora",
    ctaHref: "#download",
    features: [
      "Com anúncios",
      "Até 10 produtos por dia",
      "Utilize sem limitação X",
    ],
  },
  {
    id: "premium",
    title: "Premium",
    subtitle: "Para quem deseja utilizar nossa ferramenta sem limitações!",
    price: "R$ 19,90",
    suffix: "/mês",
    ctaText: "Experimente de graça",
    ctaHref: "#try",
    features: [
      "Sem interrupção de anúncios",
      "Utilize quantas vezes quiser",
      "Utilize todos os produtos disponíveis na plataforma",
    ],
    badge: "1º MÊS GRÁTIS",
    featured: true,
  },
  {
    id: "enterprise",
    title: "Empresarial",
    subtitle:
      "Utilize nossa solução na sua empresa. Aprimore seu fluxo.",
    price: "R$ 12,90",
    suffix: "/mês por dev",
    ctaText: "Baixar agora",
    ctaHref: "#enterprise",
    features: [
      "Com anúncios",
      "Até 10 produtos por dia",
      "Utilize sem limitação X",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section" style={{ scrollMarginTop: "var(--header-h)" }}>
      <div className="container">
        <header className="pricing-head">
          <p className="eyebrow">Planos e preços</p>
          <h2>Nossos planos</h2>
        </header>

        <div className="pricing-grid">
          {PLANS.map((p) => (
            <article
              key={p.id}
              className={`pricing-card ${p.featured ? "is-featured" : ""}`}
              aria-label={`Plano ${p.title}`}
            >
              {p.badge && (
                <div className="pricing-badge" role="note" aria-label={p.badge}>
                  {/* decor opcional */}
                  <img className="badge-decor" src={Vector} alt="" aria-hidden="true" />
                  <span>{p.badge}</span>
                </div>
              )}

              <div className="pricing-body">
                <h3 className="pricing-title">{p.title}</h3>
                <p className="pricing-subtitle">{p.subtitle}</p>

                <div className="pricing-price">
                  <strong className="price">{p.price}</strong>
                  {p.suffix && <span className="price-suffix">{p.suffix}</span>}
                </div>

                <div className="pricing-cta">
                  <a href={p.ctaHref || "#"} aria-label={`${p.ctaText} - ${p.title}`}>
                    <Button text={p.ctaText} secondary={!p.featured} />
                  </a>
                </div>

                <hr className="pricing-divider" />

                <ul className="pricing-features">
                  {p.features.map((f, i) => (
                    <li key={i}>
                      <span className="tick" aria-hidden="true">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
