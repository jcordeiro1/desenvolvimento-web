import Button from "./Button";
import "../styles/contact.css";

export default function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // manter a lógica simples (não envia nada aqui)
  };

  return (
    <section id="contact" className="contact-section" style={{ scrollMarginTop: "var(--header-h)" }}>
      <div className="container contact-wrap">
        <header className="contact-head">
          <p className="eyebrow">Envie sua dúvida</p>
          <h2>Entre em contato</h2>
          <p className="lead">
            Entre em contato, estamos dispostos a tirar qualquer dúvida,
            seja um orçamento, uma dúvida técnica de algum de nossos produtos.
            Estamos à disposição para responder.😎
          </p>
        </header>

        <form className="contact-form" onSubmit={onSubmit}>
          <label className="sr-only" htmlFor="email">Seu melhor Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Seu melhor Email"
            required
          />

          <label className="sr-only" htmlFor="message">
            Motivo do contato
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
            required
          />

          <div className="contact-actions">
            <Button text="Enviar" />
          </div>
        </form>
      </div>
    </section>
  );
}
