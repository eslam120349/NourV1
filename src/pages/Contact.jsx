import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import Button from '../components/Button.jsx'

const infoItems = [
  { icon: Phone, title: 'Phone', value: '+201013287002 - +201090311995' },
  { icon: Mail, title: 'Email', value: 'easygroupads@' },
  { icon: MapPin, title: 'Location', value: '7964,street 9 beside ezz el din pharmacy el mokattam Cairo Egypt' },
  { icon: Clock, title: 'Working Hours', value: 'Sun – Thu, 9:00 – 18:00' },
]

export default function Contact() {
  const scopeRef = useReveal([])
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div ref={scopeRef}>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Let's Work Together</span>
          <h1 className="page-hero-heading">
            LET'S BRING
            <br />
            YOUR NEXT IDEA
            <br />
            TO LIFE.
          </h1>
          <p className="page-hero-sub">
            Tell us about your project and our team will get back to you.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="contact-layout">
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="you@company.com" required />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" placeholder="+20 1XX XXX XXXX" />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input id="company" type="text" placeholder="Company name" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="service">Service</label>
              <select id="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option>Printing Solutions</option>
                <option>Branding & Identity</option>
                <option>Advertising & Outdoor</option>
                <option>Exhibition & Events</option>
                <option>Something else</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="details">Project Details</label>
              <textarea id="details" placeholder="Tell us a bit about your project…" required />
            </div>

            <div className="form-submit">
              <Button type="submit">{submitted ? 'Message Sent' : 'Send Message'}</Button>
            </div>
            {submitted && (
              <p className="form-note">Thanks — a member of our team will be in touch shortly.</p>
            )}
          </form>

          <div className="contact-info reveal reveal-delay-2">
            {infoItems.map((item) => {
              const Icon = item.icon
              return (
                <div className="info-card" key={item.title}>
                  <span className="info-card-icon">
                    <Icon size={18} />
                  </span>
                  <div>
                    <div className="info-card-title">{item.title}</div>
                    <div className="info-card-value">{item.value}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="map-section reveal">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop"
            alt="Map area near Easy Group studio"
          />
          <div className="map-pin">
            <span className="map-pin-dot" />
            <span className="map-pin-label">Easy Group Studio — 7964,street 9 beside ezz el din pharmacy el mokattam Cairo Egypt</span>
          </div>
        </div>
      </div>
    </div>
  )
}
