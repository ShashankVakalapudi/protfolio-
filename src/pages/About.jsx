import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2 style={{ fontSize: "1.9rem", marginBottom: "1.2rem", color: "var(--accent)" }}>
          About Me
        </h2>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", marginBottom: "1rem" }}>
          I am <strong>Shashank Vakalapudi</strong>, a <strong>Full Stack Developer</strong> with expertise in 
          secure web application development and scalable SaaS platforms. I have a strong focus on cybersecurity-oriented 
          authentication systems and delivering production-ready applications across various domains.
        </p>

        <h3 style={{ color: "var(--accent)", marginTop: "2rem" }}>Publications 📚</h3>
        <div style={{ background: "rgba(0,255,200,0.05)", padding: "1.5rem", borderRadius: "10px", marginTop: "0.5rem" }}>
          <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            Signature-Based Antivirus Scanner for Effective Malware Detection and Security Analysis
          </p>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)" }}>
            Published at ICTMIM 2024 (IEEE), April 2024.
          </p>
        </div>

        <h3 style={{ color: "var(--accent)", marginTop: "2rem" }}>Education</h3>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)" }}>
          <strong>Bachelor of Technology, Computer Science Engineering</strong> <br />
          Vignan University, Guntur (2021-2025) | CGPA: 7.5/10
        </p>

        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", marginTop: "1.5rem" }}>
          Whether it’s building secure backends or responsive frontends, I care about structure, security, and clarity. 
          I am currently looking for opportunities where I can solve real-world problems and collaborate with engineering-driven teams.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;