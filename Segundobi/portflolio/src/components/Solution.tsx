import Champion from "../assets/champion.svg";
import "../styles/Solution.css";

export default function Solution() {
  return (
    <section className="container" id="solution">
      {/* Cabeçalho */}
      <header>
        <span>
          <h2>Recursos</h2>
          <span className="desktop-only">
            <h2>Que vão revolucionar seu negócio</h2>
          </span>
        </span>

        <p>
          Sistema de agendamento pelo <strong>WhatsApp</strong>,
          gestão financeira e lembretes automáticos, 
          aumente o faturamento em até 40% com o BarberBot.
        </p>
      </header>

      {/* Cards */}
      <section className="even-columns">
        <div className="card">
          <span>
            <img src={Champion} alt="ícone campeão" width={64} height={64} />
          </span>
          <div>
            <h3>Agendamento 24/7</h3>
            <p>
              Seus clientes agendam pelo WhatsApp a qualquer hora, 
              sem precisar ligar ou esperar atendimento.
             O sistema confirma automaticamente!
            </p>
            <hr />
          </div>
        </div>

        <div className="card">
          <span>
            <img src={Champion} alt="ícone campeão" width={64} height={64} />
          </span>
          <div>
            <h3>Controle financeiro </h3>
            <p>
              Simplifique sua gestão financeira com relatórios de vendas, 
              compras, contas a pagar e a receber, recebimentos vencidos e comissões.
            </p>
            <hr />
          </div>
        </div>

        <div className="card">
          <span>
            <img src={Champion} alt="ícone campeão" width={64} height={64} />
          </span>
          <div>
            <h3>Marketing automático</h3>
            <p>
              O sistema envia mensagens automáticas de lembretes, 
              promoções e recupera clientes inativos. 
              Tudo no piloto automático!
            </p>
            <hr />
          </div>
        </div>
      </section>
    </section>
  );
}
