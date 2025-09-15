import Header from './components/Header.jsx'
import Navigation from './components/Navigation.jsx'
import Article from './components/Article.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const post = {
    titulo: 'Descobrindo as Praias do Nordeste',
    autor: 'Jacy Cordeiro',
    dataISO: '2024-08-15',
    conteudo: [
      'O Nordeste do Brasil tem praias incríveis, água morna e paisagens únicas. Aqui vai um relato direto ao ponto, com dicas úteis para planejar sua viagem.',
      'Falamos de melhores épocas, roteiros curtos, e como evitar perrengues sem gastar demais.'
    ],
    imagem: {
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      alt: 'Praia paradisíaca no Nordeste',
      legenda: 'Areia clara, mar azul e bons ventos — o clássico do litoral nordestino.'
    }
  }

  const relacionados = [
    'Roteiro Gastronômico no Nordeste',
    'Como Economizar em Viagens',
    'Melhores Pousadas à Beira-mar'
  ]

  return (
    <div className="layout">
      <header className="header">
        <Header titulo="Meu Blog de Viagens" />
        <Navigation links={['Home', 'Sobre', 'Contato']} />
      </header>

      <main className="content">
        <Article post={post} />
      </main>

      <aside className="sidebar">
        <Sidebar titulo="Posts Relacionados" itens={relacionados} />
      </aside>

      <footer className="footer">
        <Footer texto="© 2025 — Todos os direitos reservados." />
      </footer>
    </div>
  )
}
