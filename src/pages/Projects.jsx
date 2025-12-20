import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Graphical Password Authentication",
    desc: "Cybersecurity-focused system replacing text passwords with image patterns to mitigate brute force and phishing. Features face-detection gating and automated email alerts.",
    ss: "", 
    tech: ["Python", "Django", "SQLite", "OpenCV", "SMTP"],
    code: "https://github.com/ShashankVakalapudi/Graphical-Password-Authentication.git",
  },
  {
    title: "Andhra Angel Networks (AAN) Web Portal",
    desc: "Developed a professional corporate web platform connecting entrepreneurs with investors. Implemented dynamic event showcases, categorized partnerships (School, College, Government), interactive galleries, logo scrollers, and inquiry workflows aligned with startup ecosystem growth.",
    ss: "", 
    tech: ["PHP", "HTML5", "CSS3", "JavaScript"],
    code: "https://github.com/ShashankVakalapudi/ Graphical-Password-Authentication.git",
  },
  {
    title: "Localhost Voice Assistant",
    desc: "Built a Python-based voice assistant capable of executing system commands, opening applications, and playing media through voice interaction.",
    ss: "",
    tech: ["Python","Speech Recognition Libraries"],
    code: "https://github.com/ShashankVakalapudi",
  },
  {
    title: "Revision App (147 Revision Master)",
    desc: "Spaced-repetition productivity application that automates revision schedules (Day 1, Day 4, Day 7). Enabled real-time data synchronization, secure authentication, and browser notifications to improve learning consistency.",
    ss: "",
    tech: ["HTML5", "Tailwind CSS", "JavaScript", "AOS"],
    code: "https://github.com/ShashankVakalapudi",
  },
  {
    title: "My Task App – Professional Task Manager",
    desc: " Secure multi-user SaaS task management application with JWT-based authentication, full CRUD functionality, strict user-level data isolation, and backend input validation.",
    ss: "",
    tech: ["MongoDB", "Express.js", "React, Node.js", "Tailwind CSS", "JWT"],
    code: "https://github.com/ShashankVakalapudi",
  },
  {
    title: "WELIVING – Housing Travel Platform (Freelance) ",
    desc: "Designed and developed a high-performance frontend featuring segmented service flows (WECATION / WEHOUSING), animated counters, testimonial carousels, responsive navigation, and lead-generation forms.",
    ss: "",
    tech: ["HTML5", "Tailwind CSS", "JavaScript", "AOS", "Lucide Icons"],
    code: "https://github.com/ShashankVakalapudi",
  },
  {
    title: "TechLearn Academy – LMS Database Project",
    desc: "Designed a scalable LMS with a normalized relational database schema, enforced referential integrity, and implemented MVC architecture for course,instructor, and student management. ",
    ss: "",
    tech: ["ASP.NET Core MVC", "C", "MySQL", "Entity Framework Core"],
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