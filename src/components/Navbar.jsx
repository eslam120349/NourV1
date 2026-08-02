import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" aria-label="Easy Group — home">
          <span className="navbar-logo-mark" aria-hidden="true">
            <span className="reg-mark" />
          </span>
          <span className="navbar-logo-text">
            EASY<strong>GROUP</strong>
          </span>
        </Link>

        <nav className="navbar-links" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `navbar-link ${isActive ? 'is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-cta">
          <Link to="/contact" className="btn btn-primary btn-sm">
            Get in touch
          </Link>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`navbar-mobile ${open ? 'is-open' : ''}`}>
        <nav className="navbar-mobile-links" aria-label="Mobile">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `navbar-mobile-link ${isActive ? 'is-active' : ''}`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
          Get in touch
        </Link>
      </div>
    </header>
  )
}
