import { useState, useEffect } from "react";

export default function StickyCTA(){
  const [visible, setVisible] = useState(true);

  // Opcional: esconder CTA no topo e mostrar após rolar um pouco
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setVisible(y > 220);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if(!visible) return null;

  return (
    <aside className="sticky-cta" role="complementary" aria-label="Chamada para ação">
      <div className="sticky-cta__inner container">
        <p><strong>Teste grátis</strong> e coloque sua agenda no automático.</p>
        <div className="sticky-cta__actions">
          <a className="btn-primary" href="#pricing">Ver planos</a>
          <a className="btn-secondary" href="#contact">Falar no WhatsApp</a>
        </div>
        <button className="sticky-cta__close" aria-label="Fechar barra" onClick={()=>setVisible(false)}>×</button>
      </div>
    </aside>
  );
}
