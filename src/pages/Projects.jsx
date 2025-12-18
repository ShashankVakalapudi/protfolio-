import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "🔐 Graphical Password Authentication",
    desc: "Cybersecurity-focused system replacing text passwords with image patterns to mitigate brute force and phishing. Features face-detection gating and automated email alerts.",
    ss: "", 
    tech: ["Python", "Django", "SQLite", "OpenCV", "SMTP"],
    code: "https://github.com/ShashankVakalapudi",
  },
  {
    title: "✅ My Task App - SaaS Manager",
    desc: "Multi-user task management application with JWT authentication, full CRUD functionality, and strict user-level data isolation.",
    ss: "",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    code: "https://github.com/ShashankVakalapudi",
  },
  {
    title: "🏠 WELIVING - Housing Platform",
    desc: "High-performance frontend for a travel/housing service featuring segmented flows, animated counters, and testimonial carousels.",
    ss: "",
    tech: ["HTML5", "Tailwind CSS", "JavaScript", "AOS"],
    code: "https://github.com/ShashankVakalapudi",
  },
  {
    title: "🎓 TechLearn Academy LMS",
    desc: "Scalable LMS with normalized relational database schema and MVC architecture for managing courses, instructors, and students.",
    ss: "",
    tech: ["ASP.NET Core", "C#", "MySQL", "Entity Framework"],
    code: "https://github.com/ShashankVakalapudi",
  }
];

export default function Projects() {
  return (
    <motion.section className="container" id="projects" style={{ padding: "40px 20px" }}>
      <h2 className="text-4xl font-semibold text-cyan-400 mb-2">🚀 My Projects</h2>
      <p className="text-gray-400 mb-10">A showcase of full stack development and cybersecurity projects.</p>
      <div className="projects-grid" style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        {PROJECTS.map((p, idx) => (
          <motion.div key={idx} className="project-card" whileHover={{ scale: 1.03 }}
            style={{ background: "rgba(20,20,20,0.9)", border: "1px solid rgba(0,255,255,0.1)", borderRadius: 16, padding: 16 }}>
            <div style={{ height: "200px", background: "rgba(255,255,255,0.05)", borderRadius: 12, marginBottom: 15 }}>
              {/* Image Placeholder */}
            </div>
            <h3 style={{ color: "#0ea5e9", fontSize: 20 }}>{p.title}</h3>
            <p style={{ color: "#bbb", fontSize: 14, margin: "10px 0" }}>{p.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 15 }}>
              {p.tech.map(t => <span key={t} style={{ fontSize: 11, background: "rgba(0,255,255,0.1)", color: "#aaf", padding: "2px 8px", borderRadius: 4 }}>{t}</span>)}
            </div>
            <a href={p.code} target="_blank" rel="noreferrer" style={{ color: "#0ea5e9", textDecoration: "none", fontSize: 14 }}>
              <Github size={16} style={{ verticalAlign: "middle", marginRight: 5 }} /> GitHub Code
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}