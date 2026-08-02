import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ title, category, image, size = 'md', delayClass = '' }) {
  return (
    <article className={`project-card project-card-${size} reveal ${delayClass}`}>
      <div className="project-card-image">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="project-card-overlay">
        <span className="project-card-category">{category}</span>
        <div className="project-card-row">
          <h3 className="project-card-title">{title}</h3>
          <ArrowUpRight className="project-card-arrow" aria-hidden="true" />
        </div>
      </div>
    </article>
  )
}
