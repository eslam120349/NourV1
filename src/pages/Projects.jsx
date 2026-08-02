import { useMemo, useState, useEffect } from 'react'
import { X } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects, categories } from '../data/projects.js'

export default function Projects() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)
  const scopeRef = useReveal([active])

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
  }, [selected])

  return (
    <div ref={scopeRef}>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our Work</span>
          <h1 className="page-hero-heading">
            PROJECTS THAT
            <br />
            MAKE AN IMPACT.
          </h1>
          <p className="page-hero-sub">
            A selection of print, brand, advertising and exhibition work produced end-to-end by
            our studio and press floor.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="filters reveal">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-btn ${active === c ? 'is-active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((p, i) => (
            <div key={p.id} onClick={() => setSelected(p)}>
              <ProjectCard {...p} delayClass={`reveal-delay-${(i % 4) + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close project details"
            >
              <X size={20} />
            </button>
            <img className="modal-image" src={selected.image} alt="" />
            <div className="modal-body">
              <span className="eyebrow">{selected.category}</span>
              <h3 className="modal-title" style={{ marginTop: 14 }}>
                {selected.title}
              </h3>
              <p className="text-mist" style={{ lineHeight: 1.7, fontSize: 15.5 }}>
                A full production run for {selected.title.toLowerCase()}, covering concept
                development, material selection and on-site delivery — handled start to finish
                by the Easy Group team.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
