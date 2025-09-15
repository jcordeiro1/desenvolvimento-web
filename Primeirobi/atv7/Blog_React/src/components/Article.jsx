export default function Article({ post }) {
  const data = new Date(post.dataISO).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })

  return (
    <article className="card">
      <h2>{post.titulo}</h2>
      <p className="meta">por {post.autor} • <time dateTime={post.dataISO}>{data}</time></p>

      {post.conteudo.map((p, i) => <p key={i}>{p}</p>)}

      {post.imagem && (
        <figure>
          <img src={post.imagem.src} alt={post.imagem.alt} />
          <figcaption>{post.imagem.legenda}</figcaption>
        </figure>
      )}
    </article>
  )
}
