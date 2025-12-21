import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const PROJECTS = [
  {
    title: "Graphical Password Authentication",
    ss: "/GPA image.png",
    desc: "Cybersecurity-focused system replacing text passwords with image patterns to mitigate brute force and phishing. Features face-detection gating and automated email alerts.",
    tech: ["Python", "Django", "SQLite", "OpenCV", "SMTP"],
    code: "https://github.com/ShashankVakalapudi/Graphical-Password-Authentication.git",
    demo: "",
  },
  {
    title: "Freelance project - Website",
    ss: "/freelance project - corparate project image.png",
    desc: "Developed a professional corporate web platform connecting entrepreneurs with investors. Implemented dynamic event showcases, categorized partnerships (School, College, Government), interactive galleries, logo scrollers, and inquiry workflows aligned with startup ecosystem growth.",
    tech: ["PHP", "HTML5", "CSS3", "JavaScript"],
    code: "https://github.com/ShashankVakalapudi/AAC.git",
    demo: "",
  },
  {
    title: "Localhost Voice Assistant",
    ss: "/local voice assistent image.png",
    desc: "Built a Python-based voice assistant capable of executing system commands, opening applications, and playing media through voice interaction.",
    tech: ["Python", "Speech Recognition"],
    code: "https://github.com/ShashankVakalapudi",
    demo: "",
  },
  {
    title: "Revision App (147 Revision Master)",
    ss: "/147 revision image.png",
    desc: "Spaced-repetition productivity application that automates revision schedules (Day 1, Day 4, Day 7). Enabled real-time data synchronization, secure authentication, and browser notifications to improve learning consistency.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript", "AOS"],
    live: "https://gorgeous-wisp-a28265.netlify.app/",
    code: "https://github.com/ShashankVakalapudi/revision-app.git",
    demo: "",
  },
  {
    title: "My Task App – Professional Task Manager",
    ss: "/my task app image.png",
    desc: "Secure multi-user SaaS task management application with JWT-based authentication, full CRUD functionality, strict user-level data isolation, and backend input validation.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    live: "https://my-task-app-tan.vercel.app/",
    code: "https://github.com/ShashankVakalapudi/my-task-app.git",
    demo: "",
  },
  {
    title: "WELIVING – Housing Travel Platform (Freelance)",
    ss: "/weliving image.png",
    desc: "Designed and developed a high-performance frontend featuring segmented service flows (WECATION / WEHOUSING), animated counters, testimonial carousels, responsive navigation, and lead-generation forms.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript", "AOS", "Lucide Icons"],
    live: "https://shashankvakalapudi.github.io/freelance-project/",
    code: "https://github.com/ShashankVakalapudi/freelance-project.git",
    demo: "",
  },
  {
    title: "TechLearn Academy – LMS Database Project",
    ss: "/TechLearn Academy image.png",
    desc: "Designed a scalable LMS with a normalized relational database schema, enforced referential integrity, and implemented MVC architecture for course, instructor, and student management.",
    tech: ["ASP.NET Core MVC", "C", "MySQL", "Entity Framework Core"],
    code: "https://github.com/ShashankVakalapudi/database-project.git",
  },
  {
    title: "📸 Wedding Photography Studio Website",
    ss: "/wedding photo.png",
    desc: "A fully responsive, brand-first website built for a photography studio. Includes a cinematic UI, custom quotation builder flow, PDF generation, AWS S3 storage, and email automation using Flask + SendGrid.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Flask", "SendGrid", "AWS S3"],
    live: "https://toohspans.netlify.app",
    code: "https://github.com/vaishu0803",
  },
  {
    title: "🎓 Pick N Learn – Tutor Selection Platform",
    ss: "/pic n learn image.png",
    desc: "Pick N Learn is a full-stack educational platform where students can watch demo lectures from multiple tutors and then choose whom they want to learn from.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
    code: "https://github.com/vaishu0803/Pick_N_Learn",
  },
  {
    title: "AbleShare – Collaborative Task Management Platform",
    ss: "/ableshare image.png",
    desc: "A real-time collaborative task manager featuring secure auth, task assignment, live updates via Socket.io, and a dashboard.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
    live: "https://able-share1.vercel.app/",
    code: "https://github.com/vaishu0803/AbleShare1",
  },
];

export default function Projects() {
  return (
    <motion.section className="container" id="projects" style={{ padding: "40px 20px" }}>
      <h2 className="text-4xl font-semibold text-cyan-400 mb-2">🚀 My Projects</h2>
      <p className="text-gray-400 mb-10">
        A showcase of full stack development and cybersecurity projects.
      </p>

      <div
        className="projects-grid"
        style={{
          display: "grid",
          gap: 24,
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        }}
      >
        {PROJECTS.map((p, idx) => (
          <ProjectCard key={idx} project={p} />
        ))}
      </div>
    </motion.section>
  );
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const limit = 120;

  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.03 }}
      style={{
        background: "rgba(20,20,20,0.9)",
        border: "1px solid rgba(0,255,255,0.1)",
        borderRadius: 16,
        padding: 16,
      }}
    >
      <div
        style={{
          height: "200px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: 12,
          marginBottom: 15,
          overflow: "hidden",
        }}
      >
        <img
          src={project.ss}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <h3 style={{ color: "#0ea5e9", fontSize: 20 }}>{project.title}</h3>

      <p style={{ color: "#bbb", fontSize: 14, margin: "10px 0", lineHeight: 1.6 }}>
        {expanded || project.desc.length <= limit
          ? project.desc
          : project.desc.slice(0, limit) + "..."}
      </p>

      {project.desc.length > limit && (
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: "none",
            border: "none",
            color: "#0ea5e9",
            fontSize: 13,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 4,
            marginBottom: 10,
          }}
        >
          {expanded ? <>Read Less <ChevronUp size={14} /></> : <>Read More <ChevronDown size={14} /></>}
        </button>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 15 }}>
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontSize: 11,
              background: "rgba(0,255,255,0.1)",
              color: "#aaf",
              padding: "2px 8px",
              borderRadius: 4,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
        <a href={project.code} target="_blank" rel="noreferrer" className="btn code-btn">
          <Github size={16} /> GitHub
        </a>

        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="btn live-btn">
            <ExternalLink size={16} /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
}
