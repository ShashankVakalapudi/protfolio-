import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Navbar.css"; 

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "About Me", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const roles = [
  "Cyber Security Engineer",
  "Software Developer",
  "Cyber Security Graduate",
  "SIEM & Malware Analysis Enthusiast",
  "Python & MERN Developer",
  "Security Applications Developer",
  "Entry-Level Cyber Security Engineer",
  "Full Stack Developer",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  /* ===== Typing Animation State ===== */
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text.length < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, text.length + 1));
      }, 80);
    } 
    else if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } 
    else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1));
      }, 50);
    } 
    else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <>
      <nav className="nav">
        {/* LEFT SECTION */}
        <div className="nav-left">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src="/logo VS.png"
              alt="Logo"
              className="nav-logo-img"
            />
          </motion.div>

          <div className="nav-name">
            <h1>Shashank Vakalapudi</h1>
            <div className="typing-text">
              {text}
              <span className="cursor" />
            </div>
          </div>
        </div>

        {/* DESKTOP LINKS - Hidden on mobile via CSS */}
        <div className="nav-links desktop-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {({ isActive }) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="nav-link-content"
                >
                  <span style={{ color: isActive ? "var(--accent)" : "white" }}>
                    {l.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="underline"
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {/* MOBILE MENU BUTTON - Visible on mobile via CSS */}
        <div className="mobile-btn-container">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-toggle-btn"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-dropdown"
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setIsOpen(false)}
                className="mobile-link"
              >
                {l.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}