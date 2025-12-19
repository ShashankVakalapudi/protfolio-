import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
  const [showButton, setShowButton] = useState(false);
  const navRef = useRef(null);
  const linksRef = useRef(null);

  /* ===== Typing Animation State ===== */
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 80;
  const deletingSpeed = 50;
  const pauseDuration = 1200;

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeout;

    if (!isDeleting && text.length < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, text.length + 1));
      }, typingSpeed);
    } 
    else if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } 
    else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1));
      }, deletingSpeed);
    } 
    else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  /* ===== Responsive Menu Overflow ===== */
  const checkOverflow = () => {
    if (!navRef.current || !linksRef.current) return;
    setShowButton(linksRef.current.scrollWidth > navRef.current.offsetWidth);
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <>
      {/* Cursor Animation */}
      <style>
        {`
          .typing-text {
            font-size: 0.75rem;
            color: var(--accent);
            font-weight: 500;
            white-space: nowrap;
          }

          .cursor {
            display: inline-block;
            margin-left: 2px;
            width: 1px;
            height: 0.9em;
            background-color: var(--accent);
            animation: blink 1s steps(2, start) infinite;
          }

          @keyframes blink {
            to {
              visibility: hidden;
            }
          }
        `}
      </style>

      <nav
        ref={navRef}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* LEFT SECTION */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src="/logo VS.png"
              alt="Logo"
              style={{ height: "3rem", width: "auto" }}
            />
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1
              style={{
                margin: 0,
                fontSize: "1.8rem",
                fontWeight: "bold",
                lineHeight: "1",
                color: "white",
              }}
            >
              Shashank Vakalapudi
            </h1>

            {/* Typing Animation */}
            <div className="typing-text">
              {text}
              <span className="cursor" />
            </div>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div
          ref={linksRef}
          style={{
            display: showButton ? "none" : "flex",
            gap: "2rem",
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              style={{
                fontSize: "0.95rem",
                textDecoration: "none",
                color: "white",
                fontWeight: 500,
              }}
            >
              {({ isActive }) => (
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    color: "var(--accent)",
                    textShadow: "0 0 8px var(--accent)",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                  <motion.span
                    animate={{ color: isActive ? "var(--accent)" : "white" }}
                  >
                    {l.label}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      style={{
                        width: "70%",
                        height: "2px",
                        marginTop: "4px",
                        backgroundColor: "var(--accent)",
                        boxShadow: "0 0 6px var(--accent)",
                      }}
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        {showButton && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.8rem",
              cursor: "pointer",
            }}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        )}
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && showButton && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              background: "rgba(0,0,0,0.95)",
              backdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "4rem",
              zIndex: 9999,
            }}
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setIsOpen(false)}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  padding: "1rem 0",
                  width: "100%",
                  textAlign: "center",
                  fontSize: 18,
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
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
