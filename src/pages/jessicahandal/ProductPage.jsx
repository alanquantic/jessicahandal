import './mirrored.css'
import './product.css'

import { productPages } from './pageData.js'

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/#sobremi', label: 'Sobre mi' },
  { href: '/#instituciones', label: 'Instituciones' },
  { href: '/consciencia-reflexiva/', label: 'Consciencia reflexiva' },
  { href: '/#contacto', label: 'Contacto' },
]

function RelatedCard({ slug, item }) {
  return (
    <a className="product-related__card" href={`/producto/${slug}/`}>
      <img
        className="product-related__thumb"
        src={item.image}
        alt={item.title}
        loading="lazy"
      />
      <span className="product-related__name">{item.title}</span>
    </a>
  )
}

export default function ProductPage({ slug }) {
  const page = productPages[slug] || productPages['mi-cuenta']
  const related = Object.entries(productPages)
    .filter(([key]) => key !== slug && key !== 'mi-cuenta')
    .slice(0, 3)

  return (
    <div className="product-shell">
      <header className="product-shell__header">
        <a href="/">
          <img
            className="product-shell__logo"
            src="/public_clean/jessicahandal/wp-content/uploads/2022/08/Recurso-9.png"
            alt="Jessica Handal"
          />
        </a>
        <nav className="product-shell__nav" aria-label="Navegación">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="product-shell__main">
        <article className="product-hero">
          <figure className="product-hero__media">
            <img src={page.image} alt={page.title} />
          </figure>
          <div>
            <p className="product-hero__kicker">{page.kicker}</p>
            <h1 className="product-hero__title">{page.title}</h1>
            <p className="product-hero__meta">
              <strong>Duración:</strong> {page.duration}
            </p>
            {page.price ? (
              <p className="product-hero__price">{page.price}</p>
            ) : null}
            <p className="product-hero__copy">{page.description}</p>
            <div className="product-hero__actions">
              <a className="product-button product-button--filled" href="/#contacto">
                Contactar
              </a>
              <a className="product-button" href="/">
                Volver al inicio
              </a>
            </div>
          </div>
        </article>

        <section className="product-related">
          <h2 className="product-related__title">Otras propuestas</h2>
          <div className="product-related__grid">
            {related.map(([slugKey, item]) => (
              <RelatedCard key={slugKey} slug={slugKey} item={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
