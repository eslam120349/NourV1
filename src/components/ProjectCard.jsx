import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ title, category, image, size = 'md', delayClass = '' }) {
  return (
    // 1. ضفنا w-full h-full flex flex-col عشان الكارت ياخد كامل مساحة الصندوق اللي جواه
    <article className={`project-card project-card-${size} reveal ${delayClass} w-full h-full flex flex-col`}>

      {/* 2. ضفنا w-full flex-1 overflow-hidden عشان حاوية الصورة تتمدد وتملأ المساحة المتبقية */}
      <div className="project-card-image w-full flex-1 overflow-hidden">

        {/* 3. ضفنا w-full h-full object-cover للصورة نفسها عشان تملأ المساحة وتتزبط من غير ما تتقطع أو تتمط */}
        <img
          src={image}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
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