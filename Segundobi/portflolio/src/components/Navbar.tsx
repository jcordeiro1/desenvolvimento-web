import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg"; // ajuste se o caminho for outro
import "../styles/navbar.css";
import "../styles/utility.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // aplica efeito “sticky + translúcido ao rolar”
  useEffect(() => {
    const el = document.querySelector(".site-header");
    const onScroll = () => {
      if (!el) return;
      el.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // garante a mesma altura usada no hero
  useEffect(() => {
    document.documentElement.style.setProperty("--header-h", "72px");
  }, []);

  return (
    <header className="site-header">
      <nav className="container nav">
        {/* Brand */}
        <a href="#" className="nav__brand" aria-label="BarberBot">
          <img src={Logo} alt="BarberBot" width={160} height={40} />
        </a>

        {/* Links (desktop) */}
        <ul className="nav__links">
          <li><a className="nav__link" href="#home">Home</a></li>
          <li><a className="nav__link" href="#solution">Soluções</a></li>
          <li><a className="nav__link" href="#testimonials">Depoimentos</a></li>
          <li><a className="nav__link" href="#pricing">Preços</a></li>
          <li><a className="nav__link" href="#contact">Contato</a></li>
        </ul>

        {/* Ações (desktop) */}
        <div className="nav__auth">
          <a className="nav__login" href="#login">Login</a>
          <a className="btn-primary" href="#signup">Cadastre-se</a>
        </div>

        {/* Toggle (mobile) */}
        <button
          className="nav__toggle"
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* Drawer mobile */}
      {open && (
        <div className="nav__drawer" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <div className="nav__panel" onClick={(e) => e.stopPropagation()}>
            <button className="nav__close" aria-label="Fechar menu" onClick={() => setOpen(false)}>×</button>
            <ul>
              <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
              <li><a href="#solution" onClick={() => setOpen(false)}>Soluções</a></li>
              <li><a href="#testimonials" onClick={() => setOpen(false)}>Depoimentos</a></li>
              <li><a href="#pricing" onClick={() => setOpen(false)}>Preços</a></li>
              <li><a href="#contact" onClick={() => setOpen(false)}>Contato</a></li>
            </ul>
            <div className="nav__drawer-actions">
              <a href="#login" onClick={() => setOpen(false)}>Login</a>
              <a href="#signup" className="btn-primary" onClick={() => setOpen(false)}>Cadastre-se</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
