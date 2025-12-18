import React from 'react'
import { motion } from 'framer-motion'
import "../CSS/Home.css"
import '../index.css' 

// 🖼️ Updated Assets
import photo from '/my image.jpeg' 
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'

export default function Home() {
  const professions = [
    "Full Stack Developer",
    "Freelancer",
    "Security Enthusiast",
  ]

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/ShashankVakalapudi' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/vakalapudi-shashank/' },
    { img: gmailLogo, title: 'Email', link: 'mailto:vakalapudishashank19@gmail.com' },
  ]

  return (
    <section className="home-section">
      <div className="home-top">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="photo-ring"
          />
          <motion.div className="photo-frame">
            <img src={photo} alt="Shashank" className="profile-photo" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I’m <span className="home-name">Shashank Vakalapudi</span>
          </h1>

          <p className="typing-effect">
            Full Stack Developer | Building Web Applications | Frontend Developer | Freelancer
          </p>

          <div className="profession-tags">
            {professions.map((role, i) => (
              <div key={i} className="profession-tag">{role}</div>
            ))}
          </div>

          <div className="info-cards">
            {[
              { label: '📍 Location', value: 'Nizamabad, Telangana' },
              { label: '💼 Expertise', value: 'Full Stack & Cybersecurity' },
              { label: '📧 Contact', value: 'vakalapudishashank19@gmail.com' },
            ].map((info, i) => (
              <div key={i} className="info-card">
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </div>
            ))}
          </div>

          {/* Resume Download Feature */}
          <motion.a
            href="/RESUME_ Updated.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "12px 24px",
              background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "8px",
              textDecoration: "none",
              boxShadow: "0 0 15px rgba(0,255,200,0.3)"
            }}
          >
            Download Resume 📄
          </motion.a>
        </motion.div>
      </div>

      <div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a key={i} href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.img} alt={item.title} className="quick-link-img" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}