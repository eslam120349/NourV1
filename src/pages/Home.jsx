import { Link } from 'react-router-dom'
import { Sparkles, Award, Layers, Boxes } from 'lucide-react'
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
  const scopeRef = useReveal([])
  const featured = projects.slice(0, 3)

  return (
    <div ref={scopeRef}>
      {/* HERO */}
      <section className="hero">
        <CropMarks />
        <div className="container hero-grid">
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
              From printing and branding to advertising and exhibition solutions, we turn ideas
              into powerful visual experiences.
            </p>
            <div className="hero-actions">
              <Button to="/projects">Explore Our Projects</Button>
              <Button to="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1400&auto=format&fit=crop"
              alt="Large-format print production for an outdoor advertising campaign"
            />
            <div className="hero-visual-tag">
              <span>PRINT · BRAND · EXHIBIT</span>
              <span className="reg-mark" />
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <span className="hero-scroll-line" />
        </div>
      </section>

      {/* INTRO */}
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

      {/* SERVICES */}
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

      {/* FEATURED PROJECTS */}
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
            <Button to="/projects" variant="outline">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* WHY EASY GROUP */}
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

      {/* CTA */}
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
