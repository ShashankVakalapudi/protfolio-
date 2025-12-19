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
        {/* About */}
        <h2 style={{ fontSize: "1.9rem", marginBottom: "1.2rem", color: "var(--accent)" }}>
          About Me
        </h2>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", marginBottom: "1rem" }}>
          I am <strong>Shashank Vakalapudi</strong>, a <strong>Full Stack Developer</strong> with a strong
          interest in building secure, scalable, and production-ready web applications.
        </p>

        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)" }}>
          🔭 I’m currently working on delivering <strong>full-stack freelance projects</strong>,
          building responsive UIs, and developing backend APIs using <strong>Flask</strong> and <strong>Django</strong>.
        </p>

        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)" }}>
          👯 I’m looking to collaborate on <strong>high-impact software teams</strong> and open-source projects.
        </p>

        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)" }}>
          🤝 I’m actively seeking <strong>job opportunities for freshers</strong>.
        </p>

        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)" }}>
          🌱 I’m currently learning and strengthening my skills in <strong>Full Stack Development</strong>.
        </p>

        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)" }}>
          💬 Ask me about <strong>React, Node.js, Django, Cybersecurity, Python, Java</strong>.
        </p>

        {/* Tech Stack – COLORFUL */}
        <h3 style={{ color: "var(--accent)", marginTop: "2.2rem", marginBottom: "0.8rem" }}>
          💻 Tech Stack
        </h3>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
          <img src="https://img.shields.io/badge/C-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" />
          <img src="https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
          <img src="https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" />
          <img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
          <img src="https://img.shields.io/badge/PHP-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white" />
          <img src="https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" />
          <img src="https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white" />
          <img src="https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white" />
          <img src="https://img.shields.io/badge/Bash_Script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" />
          <img src="https://img.shields.io/badge/LaTeX-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white" />
          <img src="https://img.shields.io/badge/Bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white" />
          <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
          <img src="https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white" />
          <img src="https://img.shields.io/badge/Vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" />
          <img src="https://img.shields.io/badge/Apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white" />
          <img src="https://img.shields.io/badge/SQLite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white" />
          <img src="https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" />
          <img src="https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=matplotlib&logoColor=black" />
          <img src="https://img.shields.io/badge/Pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" />
          <img src="https://img.shields.io/badge/NumPy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" />
          <img src="https://img.shields.io/badge/Git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" />
          <img src="https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
        </div>

        {/* Publications */}
        <h3 style={{ color: "var(--accent)", marginTop: "2.2rem" }}>
          Publications 📚
        </h3>

        <div
          style={{
            background: "rgba(0,255,200,0.05)",
            padding: "1.5rem",
            borderRadius: "10px",
            marginTop: "0.6rem",
          }}
        >
          <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            Signature-Based Antivirus Scanner for Effective Malware Detection and Security Analysis
          </p>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)" }}>
            Published at ICTMIM 2024 (IEEE), April 2024.
          </p>
        </div>

        {/* Education */}
        <h3 style={{ color: "var(--accent)", marginTop: "2rem" }}>
          Education
        </h3>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)" }}>
          <strong>B.Tech – Computer Science Engineering</strong><br />
          Vignan University, Guntur (2021–2025) | CGPA: 7.5 / 10
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
