export default function Sidebar({ titulo, itens = [] }) {
  return (
    <section className="card">
      <h3>{titulo}</h3>
      <ul>
        {itens.map((item) => (
          <li key={item}><a href="#">{item}</a></li>
        ))}
      </ul>
    </section>
  )
}
