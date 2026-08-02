import { Link } from 'react-router-dom'
import { Sparkles, Award, Layers, Boxes } from 'lucide-react'
import { useRef, useCallback, useEffect } from 'react'
import useReveal from '../hooks/useReveal.js'
import CropMarks from '../components/CropMarks.jsx'
import Button from '../components/Button.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { services } from '../data/services.js'
import { projects } from '../data/projects.js'

const whyItems = [
  {
    icon: Sparkles,
    title: 'Creative Solutions',
    desc: 'Concepts developed from strategy first — never a template stretched to fit.',
  },
  {
    icon: Award,
    title: 'High Quality Production',
    desc: 'Color-accurate presses, premium substrates and finishing done in-house.',
  },
  {
    icon: Layers,
    title: 'Professional Execution',
    desc: 'On-time delivery from first proof to final install, every time.',
  },
  {
    icon: Boxes,
    title: 'Complete Visual Experience',
    desc: 'Print, brand, advertise and exhibit — one team across every touchpoint.',
  },
]

export default function Home() {
  const light1Ref = useRef(null)
  const light2Ref = useRef(null)
  const sectionRef = useRef(null) // مرجع للـ section عشان نحدد مكانها
  const animationRef = useRef(null)

  const handleHeroMouseMove = useCallback((e) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    animationRef.current = requestAnimationFrame(() => {
      // جلب مستطيل الـ section
      const rect = sectionRef.current?.getBoundingClientRect()
      if (!rect) return

      // إحداثيات الماوس بالنسبة للـ section
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      // الضوء الأول – في نفس مكان الماوس
      if (light1Ref.current) {
        light1Ref.current.style.left = mouseX + 'px'
        light1Ref.current.style.top = mouseY + 'px'
      }

      // الضوء الثاني – في نفس مكان الماوس (أو عكسي لو حبيت)
      if (light2Ref.current) {
        light2Ref.current.style.left = mouseX + 'px'
        light2Ref.current.style.top = mouseY + 'px'
      }
    })
  }, [])

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  const scopeRef = useReveal([])
  const featured = projects.slice(0, 3)

  return (
    <div ref={scopeRef}>
      <section
        ref={sectionRef} // ربط المرجع بالـ section
        className="hero relative overflow-hidden"
        onMouseMove={handleHeroMouseMove}
      >
        <CropMarks />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* الدائرة الأولى */}
          <div
            ref={light1Ref}
            className="
              absolute
              w-[1000px]
              h-[1000px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-red-500/40
              blur-[180px]
              will-change-transform
            "
            style={{
              left: '0px',
              top: '0px',
              transition: 'left 0.08s ease-out, top 0.08s ease-out', // نعومة في الحركة
            }}
          />
          {/* الدائرة الثانية – اختياري: لو عايزها في نفس المكان */}
          <div
            ref={light2Ref}
            className="
              absolute
              w-[800px]
              h-[800px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-red-700/30
              blur-[160px]
              will-change-transform
            "
            style={{
              left: '0px',
              top: '0px',
              transition: 'left 0.08s ease-out, top 0.08s ease-out',
            }}
          />
        </div>

        <div className="container hero-grid relative z-10">
          <div className="hero-copy">
            <h1 className="hero-title font-display">
              WE CREATE
              <br />
              BRANDS THAT
              <br />
              <span className="line-accent font-display">STAND OUT.</span>
            </h1>
            <p className="hero-sub">
              From printing and branding to advertising and exhibition solutions,
              we turn ideas into powerful visual experiences.
            </p>
            <div className="hero-actions">
              <Button to="/projects">Explore Our Projects</Button>
              <Button to="/contact" variant="outline">Contact Us</Button>
            </div>
          </div>

          <div className="hero-visual relative">
            <img
              src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1400&auto=format&fit=crop"
              alt="Large-format print production"
              className="w-full h-full object-cover"
            />
            <div className="hero-visual-tag absolute bottom-6 left-6 flex items-center gap-4 bg-black/50 backdrop-blur-md px-5 py-3 rounded-xl">
              <span>PRINT · BRAND · EXHIBIT</span>
              <span className="reg-mark" />
            </div>
          </div>
        </div>

        <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
          <span>Scroll</span>
          <span className="hero-scroll-line" />
        </div>
      </section>

      {/* باقي الأقسام (نفسها من غير تغيير) */}
      <section className="section">
        <div className="container intro-grid">
          <div className="reveal">
            <span className="eyebrow">Who We Are</span>
            <h2 className="intro-heading" style={{ marginTop: 14 }}>
              WE TURN IDEAS
              <br />
              INTO VISUAL
              <br />
              EXPERIENCES.
            </h2>
          </div>
          <div className="intro-body reveal reveal-delay-1">
            <p>
              Easy Group is a full-service creative production house. We design and build the
              printed, branded and physical experiences that put a company in front of its
              audience — from a single business card to a full exhibition floor.
            </p>
            <p>
              Our studio and press work side by side, so every idea moves from concept to
              production without losing the details that make a brand recognizable.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">What We Do</span>
              <h2 className="section-heading">Services</h2>
            </div>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.number} {...s} delayClass={`reveal-delay-${(i % 4) + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Our Work</span>
              <h2 className="section-heading">Selected Projects</h2>
            </div>
          </div>
          <div className="featured-grid">
            {featured.map((p, i) => (
              <Link key={p.id} to="/projects" style={{ display: 'block' }}>
                <ProjectCard {...p} delayClass={`reveal-delay-${i + 1}`} />
              </Link>
            ))}
          </div>
          <div className="featured-cta reveal">
            <Button to="/projects" variant="outline">View All Projects</Button>
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <h2 className="why-heading reveal">
            BUILT TO MAKE <span className="accent">YOUR BRAND</span>
            <br />
            IMPOSSIBLE TO IGNORE.
          </h2>
          <div className="why-grid">
            {whyItems.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={item.title} className={`why-item reveal reveal-delay-${i + 1}`}>
                  <span className="why-item-index">0{i + 1}</span>
                  <Icon size={26} color="#ff3b30" style={{ marginBottom: 18 }} />
                  <h3 className="why-item-title">{item.title}</h3>
                  <p className="why-item-desc">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-box reveal">
            <CropMarks />
            <h2 className="cta-heading">
              HAVE A PROJECT
              <br />
              IN MIND?
            </h2>
            <p className="cta-text">Let's create something powerful together.</p>
            <div className="cta-actions">
              <Button to="/contact">Get in touch</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}