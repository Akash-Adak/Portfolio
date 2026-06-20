import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useInView,
  useSpring,
} from "framer-motion";

// ─────────────────────────────────────────────
//  THEME
// ─────────────────────────────────────────────
const useTheme = () => {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      document.body.style.backgroundColor = "#06091A";
    } else {
      root.classList.remove("dark");
      document.body.style.backgroundColor = "#F0F2FF";
    }
  }, [dark]);
  return { dark, toggle: () => setDark((d) => !d) };
};

// ─────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────
const DATA = {
  name: "Akash Adak",
  taglines: ["Java & Spring Boot", "Distributed Systems", "Microservices", "AI Automation", "Cloud Native"],
  summary: "Backend Engineer specializing in Java, Spring Boot, and distributed systems. I build production-grade microservices, event-driven architectures, and secure cloud-native applications — and I ship live products, not just code.",
  email: "akashadak00023@gmail.com",
  phone: "+91 8653026878",
  location: "Tamluk, West Bengal",
  github: "https://github.com/Akash-Adak",
  linkedin: "https://linkedin.com/in/akash-adak-b9334b2b9",
  leetcode: "https://leetcode.com/u/akash0029",
  avatar: "src/assets/my-photo.jpeg",

  stats: [
    { label: "LeetCode Solved", value: "900+", icon: "⚡", color: "#F59E0B", bg: "rgba(245,158,11,0.12)" },
    { label: "CGPA", value: "9.32", icon: "🎯", color: "#10B981", bg: "rgba(16,185,129,0.12)" },
    { label: "NPTEL Score", value: "96%", icon: "🏅", color: "#6366F1", bg: "rgba(99,102,241,0.12)" },
    { label: "Live Projects", value: "5+", icon: "🚀", color: "#EC4899", bg: "rgba(236,72,153,0.12)" },
  ],

  skills: [
    {
      category: "Languages",
      icon: "{ }",
      color: "#F59E0B",
      gradient: "from-amber-500/20 to-orange-500/10",
      border: "border-amber-500/30",
      glow: "hover:shadow-amber-500/20",
      items: [
        { name: "Java", level: 95 },
        { name: "Python", level: 75 },
        { name: "JavaScript", level: 72 },
        { name: "C", level: 65 },
      ],
    },
    {
      category: "Backend & Frameworks",
      icon: "⚙️",
      color: "#6366F1",
      gradient: "from-indigo-500/20 to-violet-500/10",
      border: "border-indigo-500/30",
      glow: "hover:shadow-indigo-500/20",
      items: [
        { name: "Spring Boot", level: 92 },
        { name: "Spring Security", level: 85 },
        { name: "Spring Cloud", level: 80 },
        { name: "Hibernate/JPA", level: 82 },
        { name: "Maven", level: 88 },
        { name: "JDBC", level: 78 },
      ],
    },
    {
      category: "DevOps & CI/CD",
      icon: "🚀",
      color: "#10B981",
      gradient: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/30",
      glow: "hover:shadow-emerald-500/20",
      items: [
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 82 },
        { name: "GitHub Actions", level: 80 },
        { name: "Linux", level: 78 },
        { name: "Git", level: 92 },
      ],
    },
    {
      category: "Databases",
      icon: "🗄️",
      color: "#3B82F6",
      gradient: "from-blue-500/20 to-cyan-500/10",
      border: "border-blue-500/30",
      glow: "hover:shadow-blue-500/20",
      items: [
        { name: "MySQL", level: 88 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "PostgreSQL", level: 72 },
      ],
    },
    {
      category: "Frontend",
      icon: "🎨",
      color: "#EC4899",
      gradient: "from-pink-500/20 to-rose-500/10",
      border: "border-pink-500/30",
      glow: "hover:shadow-pink-500/20",
      items: [
        { name: "React.js", level: 78 },
        { name: "Tailwind CSS", level: 80 },
        { name: "HTML", level: 85 },
        { name: "TypeScript", level: 65 },
      ],
    },
    {
      category: "AI & Automation",
      icon: "🤖",
      color: "#8B5CF6",
      gradient: "from-violet-500/20 to-purple-500/10",
      border: "border-violet-500/30",
      glow: "hover:shadow-violet-500/20",
      items: [
        { name: "n8n", level: 90 },
        { name: "Claude API", level: 85 },
        { name: "Gemini API", level: 82 },
        { name: "Firebase", level: 75 },
      ],
    },
  ],

  projects: [
    {
      title: "VASTA Bank",
      subtitle: "Enterprise-Grade Banking Platform",
      period: "07/2025 – 05/2026",
      live: "https://www.vastabank.tech",
      github: "https://github.com/Akash-Adak/VASTA-Bank",
      stack: ["Java", "Spring Boot", "Kafka", "Docker", "Kubernetes", "MySQL", "Redis", "Prometheus", "Grafana"],
      bullets: [
        "Architected 9+ microservice system with JWT RS256/RBAC zero-trust authentication",
        "Built event-driven Kafka pipeline for async transaction processing with API Gateway",
        "Deployed on Docker & Kubernetes with auto-healing, rolling updates, high availability via CloneSet",
        "Integrated Prometheus & Grafana for real-time monitoring across all microservices",
      ],
      gradient: "from-indigo-600 via-violet-600 to-purple-700",
      accent: "#6366F1",
      tag: "Solo",
      tagColor: "#6366F1",
    },
    {
      title: "PlaceMate",
      subtitle: "AI-Powered Placement Prep Platform",
      period: "04/2026 – 05/2026",
      live: "https://placemate.app",
      github: "https://github.com/Akash-Adak/PlaceMate",
      stack: ["n8n", "Gemini API", "Claude API", "Firebase", "React", "Vercel"],
      bullets: [
        "Designed 4 core n8n automation workflows — question generation, evaluation, tracking, notifications",
        "Integrated Claude API to auto-score student answers with verdict, feedback, and weak area identification",
        "Built webhook-based communication layer between React frontend and n8n orchestration backend",
        "Backend automation owner · 2-member team · 24 releases · live on Vercel",
      ],
      gradient: "from-violet-600 via-purple-600 to-fuchsia-700",
      accent: "#8B5CF6",
      tag: "Team",
      tagColor: "#8B5CF6",
    },
    {
      title: "ReqNest",
      subtitle: "Cloud-Native Backend Automation Platform",
      period: "01/2026 – Present",
      live: "https://req-nest.vercel.app",
      github: "https://github.com/Akash-Adak/ReqNest",
      stack: ["Java", "Spring Boot", "React", "MySQL", "MongoDB", "Redis", "Docker", "Kubernetes", "OAuth2", "JWT", "Nginx"],
      bullets: [
        "Engineered a BaaS platform that auto-generates REST APIs, GraphQL endpoints, auth, docs and SDKs from schemas",
        "Built cloud-native architecture using Spring Boot, React, MySQL, MongoDB, Redis, Nginx Ingress, Kubernetes",
        "Implemented Google OAuth2 with JWT-based authorization and secure API access across distributed services",
        "Containerized with Docker and Kubernetes — automated deployments, ingress routing, cloud-ready infrastructure",
      ],
      gradient: "from-emerald-600 via-teal-600 to-cyan-700",
      accent: "#10B981",
      tag: "Solo",
      tagColor: "#10B981",
    },
    {
      title: "NotifyX",
      subtitle: "AI-Powered Real-Time Notification System",
      period: "03/2026 – 04/2026",
      live: "https://akash-adak.github.io/NotifyX",
      github: "https://github.com/Akash-Adak/NotifyX",
      stack: ["Java", "Spring Boot", "Apache Kafka", "Kafka Streams", "PostgreSQL", "WebSocket", "Gemini API"],
      bullets: [
        "Event-driven notification platform using Kafka, Kafka Streams, and WebSockets for ultra-low latency delivery",
        "Integrated Gemini AI to classify priorities, automate retry decisions, and intelligently route events",
        "Implemented fault-tolerant architecture using retry queues, DLQ, and persistent PostgreSQL storage",
        "Real-time Kafka Streams analytics for priority-based aggregation and routing of critical notifications",
      ],
      gradient: "from-amber-600 via-orange-600 to-red-700",
      accent: "#F59E0B",
      tag: "Solo",
      tagColor: "#F59E0B",
    },
    {
      title: "Algorithm Visualizer",
      subtitle: "Interactive DSA Learning Platform",
      period: "12/2025 – 01/2026",
      live: "https://algorithm-visualizer-three-eta.vercel.app",
      github: "https://github.com/Akash-Adak/Algorithm-Visualizer",
      stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "HTML5 Canvas"],
      bullets: [
        "Interactive visualization platform supporting 15+ sorting and graph algorithms with real-time animations",
        "Implemented Dijkstra, Bellman-Ford, Floyd-Warshall, A*, TSP, Prim's, Kruskal's, BFS, DFS",
        "Custom animation engine with playback controls, speed adjustment, and complexity analysis",
        "Optimized rendering using React hooks for smooth animations across desktop and mobile",
      ],
      gradient: "from-pink-600 via-rose-600 to-red-600",
      accent: "#EC4899",
      tag: "Solo",
      tagColor: "#EC4899",
    },
  ],

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Haldia Institute of Technology",
      period: "2023 – 2027",
      location: "Haldia, West Bengal",
      cgpa: "9.32 / 10.0",
    },
  ],

  certificates: [
    {
      title: "Programming in Java",
      issuer: "NPTEL",
      score: "96% — Elite Gold",
      desc: "National Programme on Technology Enhanced Learning",
      color: "#F59E0B",
      icon: "🏅",
    },
    {
      title: "SAP Launchpad Program",
      issuer: "PwC",
      score: "In Progress",
      desc: "Professional SAP technology training via PwC Launchpad",
      color: "#6366F1",
      icon: "🎓",
    },
  ],
};

// ─────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

// ─────────────────────────────────────────────
//  TYPEWRITER
// ─────────────────────────────────────────────
function Typewriter({ words }) {
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[idx];
    const t = setTimeout(() => {
      if (!del) {
        setTxt(word.slice(0, txt.length + 1));
        if (txt.length + 1 === word.length) setTimeout(() => setDel(true), 1400);
      } else {
        setTxt(word.slice(0, txt.length - 1));
        if (txt.length - 1 === 0) { setDel(false); setIdx((i) => (i + 1) % words.length); }
      }
    }, del ? 38 : 80);
    return () => clearTimeout(t);
  }, [txt, del, idx, words]);
  return (
    <span style={{ color: "#818CF8" }}>
      {txt}<span className="animate-pulse">|</span>
    </span>
  );
}

// ─────────────────────────────────────────────
//  CURSOR ORB
// ─────────────────────────────────────────────
function CursorOrb() {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  useEffect(() => {
    const h = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);
  return (
    <div
      className="pointer-events-none fixed z-0 rounded-full"
      style={{
        width: 500, height: 500,
        left: pos.x - 250, top: pos.y - 250,
        background: "radial-gradient(circle, rgba(99,102,241,0.08), rgba(139,92,246,0.06), transparent 70%)",
        filter: "blur(40px)",
        transition: "left 0.1s, top 0.1s",
      }}
    />
  );
}

// ─────────────────────────────────────────────
//  SCROLL PROGRESS
// ─────────────────────────────────────────────
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{ scaleX, background: "linear-gradient(90deg,#6366F1,#EC4899,#F59E0B)", transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-0.5 z-[60]"
    />
  );
}

// ─────────────────────────────────────────────
//  NAV
// ─────────────────────────────────────────────
function Nav({ dark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["About", "Skills", "Projects", "Education", "Contact"];
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: scrolled
          ? dark ? "rgba(6,9,26,0.85)" : "rgba(240,242,255,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)"}` : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
       <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-space font-bold text-4xl md:text-5xl lg:text-6xl" // Very large
          style={{ color: dark ? "#fff" : "#0f172a", background: "none", border: "none", cursor: "pointer" }}
        >
          AA<span style={{ color: "#6366F1" }}>.</span>
        </motion.button>
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{ background: "none", border: "none", cursor: "pointer", color: dark ? "#94a3b8" : "#475569", fontSize: 14, fontWeight: 500 }}
              className="hover-nav-link"
            >
              {l}
            </button>
          ))}
          <ThemeToggle dark={dark} toggle={toggleTheme} />
        </div>
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle dark={dark} toggle={toggleTheme} />
          <button onClick={() => setMenuOpen((o) => !o)} style={{ background: "none", border: "none", cursor: "pointer", color: dark ? "#cbd5e1" : "#475569" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>}
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: dark ? "#0D1224" : "#fff", borderTop: `1px solid ${dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}` }}
            className="md:hidden px-6 py-4 flex flex-col gap-4"
          >
            {links.map((l) => (
              <button key={l} onClick={() => scrollTo(l)} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", color: dark ? "#cbd5e1" : "#334155", fontWeight: 500, fontSize: 15 }}>
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function ThemeToggle({ dark, toggle }) {
  return (
    <motion.button
      whileTap={{ scale: 0.88 }}
      onClick={toggle}
      style={{
        width: 38, height: 38, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
        background: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)",
        border: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
        cursor: "pointer", fontSize: 16,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span key={dark ? "m" : "s"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
          {dark ? "🌙" : "☀️"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

// ─────────────────────────────────────────────
//  HERO
// ─────────────────────────────────────────────
function Hero({ dark }) {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background mesh */}
      <div className="absolute inset-0" style={{
        backgroundImage: dark
          ? "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(139,92,246,0.12) 0%, transparent 60%)"
          : "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(236,72,153,0.08) 0%, transparent 60%)",
      }} />
      {/* Grid */}
      <div className="absolute inset-0 bg-grid-pattern" style={{ opacity: dark ? 0.04 : 0.035 }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.3)", color: "#818CF8" }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6EE7B7", display: "inline-block", animation: "pulse 2s infinite" }} />
              Open to opportunities · Fresher
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-space font-bold leading-none mb-3"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", color: dark ? "#fff" : "#0f172a" }}
            >
              Akash<br />
              <span style={{ background: "linear-gradient(135deg, #6366F1, #818CF8, #A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Adak</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.38 }}
              className="font-space font-medium mb-2"
              style={{ fontSize: 22, color: dark ? "#94a3b8" : "#64748b" }}
            >
              Backend Engineer /&nbsp;
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.44 }}
              className="font-space font-bold mb-8"
              style={{ fontSize: 22 }}
            >
              <Typewriter words={DATA.taglines} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.52 }}
              style={{ color: dark ? "#94a3b8" : "#475569", lineHeight: 1.75, maxWidth: 480, marginBottom: 32 }}
            >
              {DATA.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.62 }}
              className="flex flex-wrap gap-3"
            >
              <a href={DATA.github} target="_blank" rel="noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg,#6366F1,#8B5CF6)", boxShadow: "0 4px 24px rgba(99,102,241,0.35)" }}
              >
                <GitHubIcon size={15} /> GitHub
              </a>
              <a href={`mailto:${DATA.email}`}
                className="btn-ghost inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                style={{ border: "1px solid rgba(99,102,241,0.4)", color: dark ? "#c7d2fe" : "#4338CA" }}
              >
                ✉ Hire Me
              </a>
              <a href={DATA.linkedin} target="_blank" rel="noreferrer"
                className="btn-ghost inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                style={{ border: `1px solid ${dark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"}`, color: dark ? "#cbd5e1" : "#334155" }}
              >
                in LinkedIn
              </a>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6"
          >
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }}
              style={{ position: "relative", width: 200, height: 200 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                style={{
                  position: "absolute", inset: -3, borderRadius: "50%",
                  background: "conic-gradient(from 0deg, #6366F1, #EC4899, #F59E0B, #10B981, #6366F1)",
                  padding: 3,
                }}
              />
              <div style={{
                position: "absolute", inset: 2, borderRadius: "50%", overflow: "hidden",
                border: "3px solid rgba(255,255,255,0.1)",
                background: "linear-gradient(135deg, #1E1B4B, #0F172A)",
                boxShadow: "0 0 60px rgba(99,102,241,0.3)",
              }}>
                {DATA.avatar ? (
                  <img src={DATA.avatar} alt="Akash Adak" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                ) : (
                  <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#1E1B4B,#0D1224)", color: "#818CF8" }}>
                    <div style={{ fontSize: 42, fontWeight: 700, fontFamily: "Space Grotesk" }}>AA</div>
                    <div style={{ fontSize: 10, color: "#6366F1", fontFamily: "monospace", marginTop: 4 }}>add photo →</div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {DATA.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.55 + i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  style={{
                    borderRadius: 16, padding: "16px",
                    background: dark ? `linear-gradient(135deg, ${s.bg}, rgba(255,255,255,0.03))` : `linear-gradient(135deg, ${s.bg}, rgba(255,255,255,0.7))`,
                    border: `1px solid ${s.color}30`,
                    boxShadow: `0 4px 20px ${s.color}15`,
                    cursor: "default",
                  }}
                >
                  <div style={{ fontSize: 22, marginBottom: 4 }}>{s.icon}</div>
                  <div style={{ fontFamily: "Space Grotesk", fontSize: 26, fontWeight: 700, color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: dark ? "#94a3b8" : "#64748b", marginTop: 2 }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }}
              style={{
                width: "100%", borderRadius: 16, padding: "18px 20px",
                background: dark ? "#0D1117" : "#1A1F35",
                border: "1px solid rgba(99,102,241,0.2)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                fontFamily: "'Fira Code', 'SF Mono', monospace", fontSize: 12,
              }}
            >
              <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                {["#FF5F56", "#FFBD2E", "#27C93F"].map((c) => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
              </div>
              <div><span style={{ color: "#10B981" }}>$ </span><span style={{ color: "#e2e8f0" }}>whoami</span></div>
              <div style={{ color: "#94a3b8", marginBottom: 6 }}>akash-adak · backend-engineer · HIT 2027</div>
              <div><span style={{ color: "#10B981" }}>$ </span><span style={{ color: "#e2e8f0" }}>top-skills</span></div>
              <div style={{ color: "#818CF8", marginBottom: 6 }}>Java · Spring Boot · Kafka · K8s · n8n</div>
              <div><span style={{ color: "#10B981" }}>$ </span><span style={{ color: "#e2e8f0" }}>status</span></div>
              <div style={{ color: "#FDE047" }}>🟡 Actively seeking backend roles</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
      >
        <span style={{ fontSize: 11, color: dark ? "#475569" : "#94a3b8", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} style={{ color: "#6366F1", fontSize: 18 }}>↓</motion.div>
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────
//  SKILLS
// ─────────────────────────────────────────────
function Skills({ dark }) {
  return (
    <section id="skills" style={{ padding: "100px 0", position: "relative" }}>
      {/* Section bg tint */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: dark
          ? "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.05) 0%, transparent 70%)"
          : "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)",
      }} />
      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionLabel label="What I Know" title="Technical Skills" dark={dark} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {DATA.skills.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                borderRadius: 20, padding: "24px",
                background: dark
                  ? `linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`
                  : `linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.7))`,
                border: `1px solid ${cat.color}30`,
                boxShadow: dark ? `0 4px 30px ${cat.color}10` : `0 4px 20px rgba(0,0,0,0.06)`,
                transition: "all 0.3s ease",
                cursor: "default",
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                  background: `${cat.color}18`, fontSize: 18, border: `1px solid ${cat.color}25`,
                }}>
                  {cat.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 14, color: dark ? "#e2e8f0" : "#1e293b" }}>
                    {cat.category}
                  </div>
                  <div style={{ fontSize: 11, color: cat.color, fontWeight: 600, marginTop: 1 }}>
                    {cat.items.length} skills
                  </div>
                </div>
              </div>

              {/* Skill bars */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {cat.items.map((skill, si) => (
                  <div key={skill.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: dark ? "#cbd5e1" : "#334155" }}>{skill.name}</span>
                      <span style={{ fontSize: 11, color: cat.color, fontWeight: 700 }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: 5, borderRadius: 99, background: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)" }}>
                      <motion.div
                        initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: si * 0.08 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        style={{ height: "100%", borderRadius: 99, background: `linear-gradient(90deg, ${cat.color}, ${cat.color}99)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
//  PROJECTS
// ─────────────────────────────────────────────
function Projects({ dark }) {
  return (
    <section id="projects" style={{ padding: "100px 0", position: "relative" }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: dark
          ? "linear-gradient(180deg, transparent, rgba(99,102,241,0.04) 50%, transparent)"
          : "linear-gradient(180deg, transparent, rgba(99,102,241,0.04) 50%, transparent)",
      }} />
      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionLabel label="What I've Built" title="Projects" dark={dark} />

        <div className="grid lg:grid-cols-2 gap-6 mt-12">
          {DATA.projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} dark={dark} />
          ))}
        </div>

        <motion.div {...fadeUp(0.2)} className="mt-10 text-center">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 24px",
            borderRadius: 99, border: "1px dashed rgba(99,102,241,0.35)",
            background: "rgba(99,102,241,0.05)",
            color: dark ? "#94a3b8" : "#64748b", fontSize: 13,
          }}>
            <span style={{ color: "#818CF8" }}>✦</span>
            More projects coming soon — actively building
            <span style={{ color: "#EC4899" }}>✦</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, dark }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: (index % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      style={{
        borderRadius: 20, overflow: "hidden",
        background: dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.9)",
        border: `1px solid ${project.accent}25`,
        boxShadow: dark ? `0 4px 30px ${project.accent}12` : `0 4px 24px rgba(0,0,0,0.07)`,
        transition: "all 0.3s ease",
        display: "flex", flexDirection: "column",
      }}
    >
      {/* Gradient header banner */}
      <div style={{
        padding: "20px 24px",
        background: `linear-gradient(135deg, ${project.gradient.includes("indigo") ? "#3730a3" : project.gradient.includes("emerald") ? "#065f46" : project.gradient.includes("amber") ? "#92400e" : project.gradient.includes("pink") ? "#9d174d" : "#4c1d95"}, ${project.accent}cc)`,
        position: "relative", overflow: "hidden",
      }}>
        {/* decorative circles */}
        <div style={{ position: "absolute", right: -20, top: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", right: 20, bottom: -30, width: 70, height: 70, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", position: "relative" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <h3 style={{ fontFamily: "Space Grotesk", fontSize: 18, fontWeight: 700, color: "#fff", margin: 0 }}>{project.title}</h3>
              <span style={{
                padding: "2px 8px", borderRadius: 99, fontSize: 10, fontWeight: 700,
                background: "rgba(255,255,255,0.2)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)",
              }}>{project.tag}</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, margin: 0 }}>{project.subtitle}</p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginTop: 4, fontFamily: "monospace" }}>{project.period}</p>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <a href={project.github} target="_blank" rel="noreferrer"
              style={{ padding: "6px 10px", borderRadius: 10, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", display: "flex", alignItems: "center" }}
            ><GitHubIcon size={14} /></a>
            <a href={project.live} target="_blank" rel="noreferrer"
              style={{ padding: "6px 12px", borderRadius: 10, background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", gap: 4, textDecoration: "none" }}
            >Live ↗</a>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Stack pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
          {project.stack.map((t) => (
            <span key={t} style={{
              padding: "3px 10px", borderRadius: 8, fontSize: 11, fontFamily: "monospace",
              background: `${project.accent}12`,
              border: `1px solid ${project.accent}25`,
              color: project.accent,
              fontWeight: 600,
            }}>{t}</span>
          ))}
        </div>

        {/* Bullets */}
        <div style={{ flex: 1 }}>
          {(expanded ? project.bullets : project.bullets.slice(0, 2)).map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
              style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 }}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: project.accent, marginTop: 6, flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: dark ? "#94a3b8" : "#475569", lineHeight: 1.6 }}>{b}</span>
            </motion.div>
          ))}
        </div>

        {project.bullets.length > 2 && (
          <button
            onClick={() => setExpanded((e) => !e)}
            style={{ background: "none", border: "none", cursor: "pointer", color: project.accent, fontSize: 12, fontWeight: 600, marginTop: 6, textAlign: "left", padding: 0 }}
          >
            {expanded ? "Show less ↑" : `+ ${project.bullets.length - 2} more ↓`}
          </button>
        )}
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
//  EDUCATION
// ─────────────────────────────────────────────
function Education({ dark }) {
  return (
    <section id="education" style={{ padding: "100px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="Background" title="Education & Certificates" dark={dark} />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Degree */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6366F1", marginBottom: 16 }}>Degree</div>
            {DATA.education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
                whileHover={{ y: -4 }}
                style={{
                  borderRadius: 20, padding: "24px",
                  background: dark ? "linear-gradient(145deg, rgba(99,102,241,0.1), rgba(139,92,246,0.06))" : "linear-gradient(145deg, rgba(99,102,241,0.08), rgba(139,92,246,0.04))",
                  border: "1px solid rgba(99,102,241,0.25)",
                  boxShadow: "0 4px 30px rgba(99,102,241,0.1)",
                }}
              >
                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: "linear-gradient(135deg,#6366F1,#8B5CF6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0, boxShadow: "0 4px 14px rgba(99,102,241,0.4)" }}>🎓</div>
                  <div>
                    <h4 style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 15, color: dark ? "#e2e8f0" : "#1e293b", margin: "0 0 4px" }}>{e.degree}</h4>
                    <p style={{ fontSize: 13, color: dark ? "#94a3b8" : "#475569", margin: "0 0 2px" }}>{e.institution}</p>
                    <p style={{ fontSize: 11, color: dark ? "#64748b" : "#94a3b8", margin: "0 0 12px" }}>{e.location}</p>
                    <div style={{ display: "flex", gap: 8 }}>
                      <span style={{ padding: "4px 12px", borderRadius: 99, background: "rgba(16,185,129,0.15)", color: "#10B981", fontSize: 12, fontWeight: 700, border: "1px solid rgba(16,185,129,0.3)" }}>
                        CGPA: {e.cgpa}
                      </span>
                      <span style={{ padding: "4px 12px", borderRadius: 99, background: "rgba(255,255,255,0.07)", color: dark ? "#94a3b8" : "#64748b", fontSize: 12, fontFamily: "monospace", border: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}` }}>
                        {e.period}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certificates */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F59E0B", marginBottom: 16 }}>Certificates</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {DATA.certificates.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  style={{
                    borderRadius: 20, padding: "20px",
                    background: dark ? `linear-gradient(145deg, ${c.color}12, ${c.color}06)` : `linear-gradient(145deg, ${c.color}10, ${c.color}04)`,
                    border: `1px solid ${c.color}25`,
                    boxShadow: `0 4px 20px ${c.color}10`,
                  }}
                >
                  <div style={{ display: "flex", gap: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: `${c.color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, border: `1px solid ${c.color}30` }}>{c.icon}</div>
                    <div>
                      <h4 style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 14, color: dark ? "#e2e8f0" : "#1e293b", margin: "0 0 2px" }}>{c.title}</h4>
                      <p style={{ fontSize: 12, color: dark ? "#94a3b8" : "#475569", margin: "0 0 2px" }}>{c.issuer} · <span style={{ color: dark ? "#64748b" : "#94a3b8", fontSize: 11 }}>{c.desc}</span></p>
                      <span style={{ display: "inline-block", marginTop: 8, padding: "3px 10px", borderRadius: 99, background: `${c.color}18`, color: c.color, fontSize: 11, fontWeight: 700, border: `1px solid ${c.color}30` }}>
                        {c.score}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
//  CONTACT
// ─────────────────────────────────────────────
function Contact({ dark }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const socials = [
    { label: "GitHub", href: DATA.github, icon: <GitHubIcon size={18} />, sub: "Akash-Adak", color: "#e2e8f0", bg: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)" },
    { label: "LinkedIn", href: DATA.linkedin, icon: <span style={{ fontWeight: 900, fontSize: 15 }}>in</span>, sub: "akash-adak", color: "#0EA5E9", bg: "rgba(14,165,233,0.1)" },
    { label: "LeetCode", href: DATA.leetcode, icon: "⚡", sub: "900+ solved", color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
  ];

  return (
    <section id="contact" style={{ padding: "100px 0", position: "relative" }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: dark
          ? "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(99,102,241,0.08) 0%, transparent 70%)"
          : "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(99,102,241,0.06) 0%, transparent 70%)",
      }} />
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <SectionLabel label="Get In Touch" title="Let's Connect" dark={dark} centered />

        <motion.p {...fadeUp(0.1)} style={{ marginTop: 16, color: dark ? "#64748b" : "#94a3b8", maxWidth: 420, margin: "16px auto 0", lineHeight: 1.75, fontSize: 15 }}>
          I'm actively looking for backend engineering roles. Have an opportunity or just want to talk tech?
        </motion.p>

        {/* Email copy bar */}
        <motion.div {...fadeUp(0.2)} style={{ marginTop: 36, display: "flex", justifyContent: "center" }}>
          <div style={{
            display: "flex", borderRadius: 16, overflow: "hidden",
            border: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
            background: dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.9)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          }}>
            <span style={{ padding: "14px 20px", fontFamily: "monospace", fontSize: 13, color: dark ? "#cbd5e1" : "#334155" }}>
              {DATA.email}
            </span>
            <button onClick={copy} style={{
              padding: "14px 20px", background: "linear-gradient(135deg,#6366F1,#8B5CF6)", color: "#fff",
              fontSize: 13, fontWeight: 700, cursor: "pointer", border: "none", minWidth: 80,
            }}>
              <AnimatePresence mode="wait">
                <motion.span key={copied ? "done" : "copy"} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>
                  {copied ? "✓ Done" : "Copy"}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.3)} style={{ marginTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
          {socials.map((s) => (
            <motion.a
              key={s.label} href={s.href} target="_blank" rel="noreferrer"
              whileHover={{ y: -4, scale: 1.04 }} whileTap={{ scale: 0.96 }}
              style={{
                display: "flex", alignItems: "center", gap: 10, padding: "12px 20px", borderRadius: 14,
                background: s.bg, border: `1px solid ${s.color}22`,
                textDecoration: "none", color: "inherit",
                boxShadow: `0 4px 16px ${s.color}12`,
              }}
            >
              <span style={{ color: s.color, display: "flex", alignItems: "center" }}>{s.icon}</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: dark ? "#e2e8f0" : "#1e293b" }}>{s.label}</div>
                <div style={{ fontSize: 11, color: dark ? "#64748b" : "#94a3b8", fontFamily: "monospace" }}>{s.sub}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Location / phone */}
        <motion.div {...fadeUp(0.4)} style={{ marginTop: 24, display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
          {[`📍 ${DATA.location}`, `📞 ${DATA.phone}`].map((t) => (
            <span key={t} style={{
              padding: "8px 18px", borderRadius: 99, fontSize: 13,
              background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
              border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
              color: dark ? "#94a3b8" : "#64748b",
            }}>{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
//  FOOTER
// ─────────────────────────────────────────────
function Footer({ dark }) {
  return (
    <footer style={{ padding: "28px 0", borderTop: `1px solid ${dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)"}` }}>
      <div className="max-w-6xl mx-auto px-6" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <span style={{ fontFamily: "Space Grotesk", fontWeight: 700, color: dark ? "#475569" : "#94a3b8" }}>
          Akash Adak<span style={{ color: "#6366F1" }}>.</span>
        </span>
        <span style={{ fontSize: 12, color: dark ? "#334155" : "#cbd5e1" }}>
          Built with React + Framer Motion · {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────
//  SHARED COMPONENTS
// ─────────────────────────────────────────────
function SectionLabel({ label, title, dark, centered = false }) {
  return (
    <motion.div {...fadeUp()} style={{ textAlign: centered ? "center" : "left" }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
        background: "linear-gradient(90deg,#6366F1,#EC4899)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        marginBottom: 12,
      }}>
        <span style={{ width: 20, height: 1.5, background: "linear-gradient(90deg,#6366F1,#EC4899)", display: "inline-block" }} />
        {label}
        <span style={{ width: 20, height: 1.5, background: "linear-gradient(90deg,#EC4899,#F59E0B)", display: "inline-block" }} />
      </div>
      <h2 style={{
        fontFamily: "Space Grotesk", fontWeight: 800, margin: 0,
        fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
        color: dark ? "#f1f5f9" : "#0f172a",
      }}>{title}</h2>
    </motion.div>
  );
}

function GitHubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

// ─────────────────────────────────────────────
//  APP
// ─────────────────────────────────────────────
export default function Portfolio() {
  const { dark, toggle } = useTheme();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: dark ? "#06091A" : "#F0F2FF", color: dark ? "#f1f5f9" : "#0f172a", transition: "background-color 0.35s, color 0.35s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=Fira+Code:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; }
        .font-space { font-family: 'Space Grotesk', sans-serif; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(#6366F1,#EC4899); border-radius: 99px; }
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(99,102,241,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.12) 1px, transparent 1px);
          background-size: 64px 64px;
        }
        a { text-decoration: none; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(99,102,241,0.5) !important; }
        .btn-ghost:hover { transform: translateY(-2px); }
        .hover-nav-link:hover { color: #6366F1 !important; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
      `}</style>

      <ScrollProgress />
      <CursorOrb />
      <Nav dark={dark} toggleTheme={toggle} />

      <main>
        <Hero dark={dark} />
        <Skills dark={dark} />
        <Projects dark={dark} />
        <Education dark={dark} />
        <Contact dark={dark} />
      </main>

      <Footer dark={dark} />
    </div>
  );
}