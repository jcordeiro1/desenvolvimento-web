export default function Navigation({ links = [] }) {
  return (
    <nav className="nav" aria-label="principal">
      {links.map((txt) => (
        <a href="#" key={txt}>{txt}</a>
      ))}
    </nav>
  )
}
