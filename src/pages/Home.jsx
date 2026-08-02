import { Link } from 'react-router-dom'
import { Sparkles, Award, Layers, Boxes } from 'lucide-react'
import { useRef, useCallback, useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import CropMarks from '../components/CropMarks.jsx'
import Button from '../components/Button.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { services } from '../data/services.js'
import { projects } from '../data/projects.js'

const whyItems = [
  // ... (نفس البيانات السابقة)
]

export default function Home() {
  const light1Ref = useRef(null)
  const light2Ref = useRef(null)
  const animationRef = useRef(null)
  const [targetPos, setTargetPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const [currentPos, setCurrentPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 })

  // دالة تحديث مستمر (loop)
  const updateLights = useCallback(() => {
    // إضافة حركة دورانية صغيرة (oscillation) حول الـ target
    const time = Date.now() / 1000 // بالثواني
    const radius = 15 // نصف قطر الحركة الدائرية
    const speed = 0.6 // سرعة الدوران

    // إزاحة دائرية
    const offsetX = Math.sin(time * speed) * radius
    const offsetY = Math.cos(time * speed * 0.7) * radius * 0.7 // بيضوي الشكل

    // الموضع النهائي = target + offset
    const finalX = targetPos.x + offsetX
    const finalY = targetPos.y + offsetY

    // تحديث العناصر
    if (light1Ref.current) {
      light1Ref.current.style.transform = `translate(${finalX - 500}px, ${finalY - 500}px)`
    }
    if (light2Ref.current) {
      light2Ref.current.style.transform = `translate(${finalX - 400}px, ${finalY - 400}px)`
    }

    animationRef.current = requestAnimationFrame(updateLights)
  }, [targetPos])

  // بدء الحلقة عند تحميل المكون
  useEffect(() => {
    animationRef.current = requestAnimationFrame(updateLights)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [updateLights])

  // معالج حركة الماوس – يحدّث الـ target فقط
  const handleHeroMouseMove = useCallback((e) => {
    setTargetPos({ x: e.clientX, y: e.clientY })
  }, [])

  // تحديث target عند تغيير حجم الشاشة (اختياري)
  useEffect(() => {
    const handleResize = () => {
      setTargetPos({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scopeRef = useReveal([])
  const featured = projects.slice(0, 3)

  return (
    <div ref={scopeRef}>
      {/* خلفية الإضاءة الثابتة */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          ref={light1Ref}
          className="absolute w-[1000px] h-[1000px] rounded-full bg-red-500/40 blur-[180px] will-change-transform transition-none"
          style={{ left: 0, top: 0 }}
        />
        <div
          ref={light2Ref}
          className="absolute w-[800px] h-[800px] rounded-full bg-red-700/30 blur-[160px] will-change-transform transition-none"
          style={{ left: 0, top: 0 }}
        />
      </div>

      <section
        className="hero relative overflow-hidden"
        onMouseMove={handleHeroMouseMove}
      >
        <CropMarks />
        <div className="container hero-grid relative z-10">
          <div className="hero-copy">
            <span className="eyebrow">Easy Group</span>
            <h1 className="hero-title">
              WE CREATE
              <br />
              BRANDS THAT
              <br />
              <span className="line-accent">STAND OUT.</span>
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

      {/* باقي الأقسام (نفسها) */}
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