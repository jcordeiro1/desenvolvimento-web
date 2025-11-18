import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Solution from "../components/Solution";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer"; // +++

import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";

/* CSS do hero + utilitários */
import "../styles/hero.css";
import "../styles/utility.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* SECTION HERO: imagens dentro da section */}
        <section id="hero" style={{ scrollMarginTop: "var(--header-h)" }}>
          {/* decor topo-esquerda (só desktop) */}
          <span className="desktop-only" aria-hidden="true">
            <img src={HeroRectangleTwo} alt="Retângulo decorativo topo" />
          </span>

          {/* bloco azul da direita */}
          <img
            src={HeroRectangleOne}
            alt="Bloco azul lado direito"
            aria-hidden="true"
          />

          {/* conteúdo */}
          <div className="container content">
            <p className="desktop-only">Olá amigo usuário do software</p>
            <h1>BarberBot — agendamento e gestão para a área de beleza</h1>
            <p>
              Organize horários, clientes, serviços e recebimentos num painel
              simples e direto. Feito para barbearias e salões.
            </p>

            <div className="flex gap-1">
              <span>
                <Button text="Cadastre-se" />
              </span>
              <span className="desktop-only">
                <Button text="Veja mais" secondary />
              </span>
            </div>
          </div>
        </section>
        {/* /HERO */}

        {/* SECTION SOLUTIONS */}
        <Solution />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* PRICING */}
        <Pricing />

        {/* CONTACT */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
