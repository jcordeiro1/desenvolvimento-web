// src/components/Footer.tsx
import "../styles/Footer.css";
import Logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={Logo} alt="Logo" className="brand-logo" />

          <nav className="social" aria-label="Redes sociais">
            <a href="#" aria-label="Instagram">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
            </a>

            <a href="#" aria-label="Facebook">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M13.5 21v-7h2.3l.4-3H13.5V9.1c0-.9.3-1.5 1.6-1.5H16.3V5.1c-1.1 0-2.1.1-2.4.1-2.4 0-3.9 1.3-3.9 3.8V11H7.5v3h2.5v7h3.5z" fill="currentColor"/>
              </svg>
            </a>

            <a href="#" aria-label="YouTube">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2.5" y="6" width="19" height="12" rx="3" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M10 9.5L15 12L10 14.5V9.5Z" fill="currentColor"/>
              </svg>
            </a>
          </nav>
        </div>

        <div className="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Faça parte do time</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* coluna 3 */}
        <div className="footer-col">
          <h4>Funcionalidades</h4>
          <ul>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Análise de dados</a></li>
            <li><a href="#">Boot discord</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Recursos</h4>
          <ul>
            <li><a href="#">IOS &amp; Android</a></li>
            <li><a href="#">Teste a Demo</a></li>
            <li><a href="#">Clientes</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bar">
        <div className="container">
          Feito com amor na aula de Programação Web💙 ©2024 AktieTech - Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
