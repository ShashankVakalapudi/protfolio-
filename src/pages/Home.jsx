import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import "../CSS/Home.css"
import '../index.css' 

// 🖼️ Assets
import photo from '/my image.jpeg' 
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'

export default function Home() {

  /* ===== Typing Headers (same position) ===== */
  const headers = [
    "Cyber Security Engineer",
    "Software Developer",
    "Cyber Security Graduate",
    "SIEM & Malware Analysis Enthusiast",
    "Python & MERN Developer",
    "Security Applications Developer",
    "Entry-Level Cyber Security Engineer",
    "Full Stack Developer",
    "Frontend Developer"
  ]

  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = headers[index]
    let timer

    if (!isDeleting && text.length < current.length) {
      timer = setTimeout(() => {
        setText(current.slice(0, text.length + 1))
      }, 80)
    } 
    else if (!isDeleting && text === current) {
      timer = setTimeout(() => setIsDeleting(true), 1200)
    } 
    else if (isDeleting && text.length > 0) {
      timer = setTimeout(() => {
        setText(current.slice(0, text.length - 1))
      }, 50)
    } 
    else if (isDeleting && text.length === 0) {
      setIsDeleting(false)
      setIndex((prev) => (prev + 1) % headers.length)
    }

    return () => clearTimeout(timer)
  }, [text, isDeleting, index])

  const professions = [
    "Developer",
    "Security Enthusiast",
    "Freelancer",
  ]

  const quickLinks = [
    { img: githubLogo, link: 'https://github.com/ShashankVakalapudi' },
    { img: linkedinLogo, link: 'https://www.linkedin.com/in/vakalapudi-shashank/' },
    { img: gmailLogo, link: 'mailto:vakalapudishashank19@gmail.com' },
  ]

  return (
    <section className="home-section">
      <div className="home-top">

        {/* PHOTO — unchanged */}
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

        {/* INFO — unchanged structure */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I’m <span className="home-name">Shashank Vakalapudi</span>
          </h1>

          {/* 🔁 Typing text (same alignment) */}
          <p className="typing-effect">
            {text}
            <span className="typing-cursor"></span>
          </p>

          <div className="profession-tags">
            {professions.map((role, i) => (
              <div key={i} className="profession-tag">{role}</div>
            ))}
          </div>

          <div className="info-cards">
            <div className="info-card">
              <strong>📍 Location</strong>
              <p>Nizamabad, Telangana</p>
            </div>

            <div className="info-card">
              <strong>💼 Expertise</strong>
              <p>Full Stack & Cybersecurity</p>
            </div>

            <div className="info-card">
              <strong>📧 Contact</strong>
              <p>vakalapudishashank19@gmail.com</p>
            </div>
          </div>

          {/* ❌ Download Resume REMOVED */}
        </motion.div>
      </div>

      {/* Social Icons — unchanged layout */}
      <div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a key={i} href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.img} className="quick-link-img" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
