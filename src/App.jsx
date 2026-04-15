import { useEffect, useState } from 'react'
import {
  Activity,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  FolderGit2,
  GraduationCap,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Rocket,
  Server,
  Sun,
  X,
} from 'lucide-react'
import { motion } from 'framer-motion'
import heroImg from './assets/my-photo.jpeg'
import './App.css'

const navItems = [
  { label: 'About', href: '#about', icon: Code2 },
  { label: 'Skills', href: '#skills', icon: Layers3 },
  { label: 'Projects', href: '#projects', icon: BriefcaseBusiness },
  { label: 'Contact', href: '#contact', icon: Mail },
]

const links = [
  { label: 'GitHub', href: 'https://github.com/Akash-Adak', value: 'Akash-Adak', icon: FolderGit2 },
  { label: 'LeetCode', href: 'https://leetcode.com/u/akash0029', value: 'akash0029', icon: Code2 },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/akash-adak-b9334b2b9',
    value: 'akash-adak-b9334b2b9',
    icon: Globe2,
  },
]

const skills = [
  { group: 'Languages & Programming', items: 'Java, Python, JavaScript, C', icon: Code2 },
  {
    group: 'Backend & Frameworks',
    items: 'Spring Boot, Maven, JDBC, Spring Security, Spring Cloud, Hibernate, JPA',
    icon: Server,
  },
  {
    group: 'DevOps, Version Control & CI/CD',
    items: 'Git, GitHub, GitHub Actions, Docker, Kubernetes, Linux',
    icon: Rocket,
  },
  { group: 'Frontend', items: 'React.js, HTML5, CSS3, Tailwind CSS, Bootstrap', icon: Layers3 },
  { group: 'Databases', items: 'MySQL, MongoDB, Redis', icon: Database },
  { group: 'Monitoring', items: 'SonarQube, Swagger, Prometheus, Grafana', icon: Activity },
]

const projects = [
  {
    title: 'VASTA Bank - Enterprise-Grade Banking Management Platform',
    github: 'https://github.com/Akash-Adak/VASTA-Bank',
    timeline: '07/2025 - Present',
    stack:
      'Java, Spring Boot, Docker, Kubernetes, Apache Kafka, MySQL, Redis, Prometheus, Grafana',
    highlights: [
      'Built a scalable banking platform with 9+ microservices and independent deployments.',
      'Implemented JWT RS256, RBAC, Redis, and BCrypt in a zero-trust authentication model.',
      'Created asynchronous transaction processing with Kafka for high throughput and fault tolerance.',
      'Designed API gateway capabilities for routing, JWT validation, and rate limiting.',
      'Deployed with Docker and Kubernetes using auto-healing, rolling updates, and CloneSet HA patterns.',
      'Integrated Prometheus and Grafana for live monitoring and observability.',
    ],
  },
  {
    title: 'NotifyX - Event-Driven Notification Service',
    github: 'https://github.com/Akash-Adak/NotifyX',
    timeline: '03/2026 - 04/2026',
    stack: 'Spring Boot, Kafka, Kafka Streams, PostgreSQL, Java, Docker',
    highlights: [
      'Built a scalable Kafka-based event-driven notification system with Spring Boot.',
      'Implemented resilient retry handling and DLQ-based fault recovery.',
      'Developed real-time stream processing with filtering, branching, and windowed aggregations.',
      'Shipped production-ready REST APIs with PostgreSQL integration.',
    ],
  },
]

const trainings = [
  {
    title: 'PwC Launchpad Program',
    points: [
      'Completed industry-aligned curriculum in Java, GenAI, SAP, and modern data systems.',
      'Strengthened software engineering fundamentals, problem solving, and enterprise thinking.',
    ],
  },
  {
    title: 'Full Stack & Java Training - Haldia Institute of Technology',
    points: [
      'Completed hands-on MERN and Spring Boot training through practical application builds.',
      'Delivered full-stack projects with real-world use cases and deployment workflows.',
    ],
  },
]

const metrics = [
  { label: 'Microservices', value: '9+', icon: Layers3 },
  { label: 'Core Stack', value: 'Spring Boot / Kafka', icon: Server },
  { label: 'Delivery', value: 'Docker / K8s', icon: Rocket },
]

const fadeUp = {
  hidden: { opacity: 1, y: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: 'easeOut', delay },
  }),
}

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const storedTheme = window.localStorage.getItem('portfolio-theme')
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isDark = theme === 'dark'

  return (
    <div className="site-shell relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="ambient-orb orb-a" />
        <div className="ambient-orb orb-b" />
        <div className="ambient-orb orb-c" />
        <div className="noise-layer absolute inset-0 opacity-25" />
      </div>

      <header className="mx-auto w-full max-w-6xl px-5 pt-5 sm:px-8 lg:px-12">
        <div className="surface rounded-[1.5rem] px-4 py-4 sm:rounded-full sm:px-5">
          <div className="flex items-center justify-between gap-3 md:gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white shadow-lg shadow-black/20">
                AA
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">Portfolio</p>
                <p className="truncate font-display text-[0.95rem] text-[var(--text)] sm:text-base">Akash Adak</p>
              </div>
            </div>

            <nav className="hidden items-center gap-1 whitespace-nowrap md:flex md:flex-nowrap">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="nav-link">
                  <item.icon className="inline-icon" aria-hidden="true" />
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="header-actions flex items-center gap-2 md:ml-auto">
              <button
                type="button"
                onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
                className="theme-toggle shrink-0"
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {isDark ? (
                  <Sun className="inline-icon" aria-hidden="true" />
                ) : (
                  <Moon className="inline-icon" aria-hidden="true" />
                )}
                <span className="hidden sm:inline">{isDark ? 'Light theme' : 'Dark theme'}</span>
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen((current) => !current)}
                className="menu-toggle inline-flex shrink-0 md:hidden"
                aria-expanded={menuOpen}
                aria-label="Toggle navigation menu"
              >
                {menuOpen ? <X className="inline-icon" aria-hidden="true" /> : <Menu className="inline-icon" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        <motion.nav
          initial={false}
          animate={menuOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, y: 0, height: 'auto', pointerEvents: 'auto' },
            closed: { opacity: 0, y: -8, height: 0, pointerEvents: 'none' },
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="mobile-nav surface mt-3 overflow-hidden rounded-[1.5rem] md:hidden"
        >
          <div className="flex flex-col gap-2 p-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                <item.icon className="inline-icon" aria-hidden="true" />
                {item.label}
              </a>
            ))}
          </div>
        </motion.nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pb-12 pt-6 sm:px-8 lg:px-12">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="surface rounded-[2rem] p-6 sm:p-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--muted)] sm:text-sm">
            Portfolio / 2026
          </p>

          <div className="mt-4 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex max-w-full rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Backend engineer / system builder / product thinker
              </div>

              <h1 className="font-display text-4xl leading-[0.92] tracking-[-0.04em] text-[var(--text)] sm:text-6xl lg:text-7xl">
                AKASH ADAK
              </h1>

              <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-lg">
                Backend-focused Java Developer building resilient microservices with Spring Boot, Kafka, and
                Kubernetes. I focus on secure architecture, clean APIs, and production-ready systems that scale with
                confidence.
              </p>

              <div className="hero-actions flex flex-wrap gap-3">
                <a href="#projects" className="button-primary">
                  Explore projects
                </a>
                <a href="#contact" className="button-secondary">
                  Contact me
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="metric-card rounded-2xl p-4">
                    <metric.icon className="metric-icon" aria-hidden="true" />
                    <p className="font-display text-2xl text-[var(--text)]">{metric.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-strong overflow-hidden rounded-[2rem] p-4 sm:p-5">
              <div className="grid gap-4">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-soft)] p-3.5 sm:p-4">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.16),transparent_34%)]" />
                  <div className="relative flex justify-center">
                    <div className="portrait-frame w-full max-w-[360px] lg:max-w-[400px]">
                      <img src={heroImg} alt="Akash Adak portrait" className="portrait-image" loading="eager" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="hero-summary-card rounded-[1.75rem] border border-[var(--border)] p-4 sm:p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--muted)]">
                Featured profile
              </p>
              <h2 className="mt-3 font-display text-2xl text-[var(--text)] sm:text-3xl">
                Enterprise Backend Engineering
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                Secure auth, event pipelines, observability, and stable production delivery.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                <li className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  Security-first architecture with JWT, RBAC, Redis, and BCrypt.
                </li>
                <li className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  Event-driven services using Kafka and Kafka Streams.
                </li>
                <li className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  Cloud-native delivery with Docker, Kubernetes, and observability tooling.
                </li>
              </ul>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-4 rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-5 text-sm text-[var(--text)] sm:p-6">
                <p className="flex items-start gap-3 leading-relaxed">
                  <Mail className="inline-icon" aria-hidden="true" />
                  <span className="font-mono text-[var(--accent)]">Email:</span> akashadak00023@gmail.com
                </p>
                <p className="flex items-start gap-3 leading-relaxed">
                  <Phone className="inline-icon" aria-hidden="true" />
                  <span className="font-mono text-[var(--accent)]">Phone:</span> +91 8653026878
                </p>
                <p className="flex items-start gap-3 leading-relaxed">
                  <MapPin className="inline-icon" aria-hidden="true" />
                  <span className="font-mono text-[var(--accent)]">Location:</span> Tamluk, West Bengal
                </p>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                custom={0.12 + index * 0.07}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-medium text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
              >
                <link.icon className="inline-icon" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">{link.label}</span>{' '}
                <span className="break-all">{link.value}</span>
              </motion.a>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0.05}
          className="surface rounded-[2rem] p-6 sm:p-10"
        >
          <p className="section-tag">Summary</p>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
           Backend-focused Java Developer with hands-on experience designing and deploying scalable, event-driven 
            microservices systems using Spring Boot, Apache Kafka, and Kubernetes. Strong in distributed systems, secure 
            authentication (JWT/RBAC), and cloud-native DevOps practices, with a focus on building reliable and production
            ready applications.
          </p>
        </motion.section>

        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          custom={0.1}
          className="surface rounded-[2rem] p-6 sm:p-10"
        >
          <div className="flex items-end justify-between gap-4">
            <p className="section-tag">Skills</p>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-2)]">Production Tooling</span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.article
                key={skill.group}
                custom={0.16 + index * 0.05}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="mini-surface rounded-2xl p-4"
              >
                <skill.icon className="skill-icon" aria-hidden="true" />
                <h3 className="font-display text-xl text-[var(--text)]">{skill.group}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{skill.items}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <section id="projects" className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0.15}
            className="surface rounded-[2rem] p-6 sm:p-10"
          >
            <p className="section-tag">Project Experience</p>
            <div className="mt-6 space-y-6">
              {projects.map((project, idx) => (
                <article key={project.title} className="project-card rounded-[1.75rem] p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-2xl leading-tight text-[var(--text)]">{project.title}</h3>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">{project.timeline}</p>
                  </div>

                  <div className="mt-3">
                    <a href={project.github} target="_blank" rel="noreferrer" className="button-secondary inline-flex px-3 py-1.5 text-xs uppercase tracking-[0.12em]">
                      <FolderGit2 className="inline-icon" aria-hidden="true" />
                      View on GitHub
                      <ExternalLink className="inline-icon" aria-hidden="true" />
                    </a>
                  </div>

                  <p className="mt-3 text-sm text-[var(--muted)]">
                    <span className="font-semibold text-[var(--text)]">Tech Stack:</span> {project.stack}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--muted)]">
                    {project.highlights.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {idx === 0 ? <div className="mt-4 h-px w-full bg-gradient-to-r from-[var(--accent)]/50 to-transparent" /> : null}
                </article>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.aside
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={0.2}
              className="surface rounded-[2rem] p-6"
            >
              <p className="section-tag">Education</p>
              <GraduationCap className="education-icon" aria-hidden="true" />
              <h3 className="mt-4 font-display text-2xl text-[var(--text)]">B.Tech in Computer Science & Engineering</h3>
              <p className="mt-2 text-[var(--muted)]">Haldia Institute of Technology, Haldia</p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">2023 - 2027</p>
              <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
                <p className="text-sm text-[var(--text)]">CGPA: 9.32 / 10.0</p>
              </div>
            </motion.aside>

            <motion.aside
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={0.25}
              className="surface rounded-[2rem] p-6"
            >
              <p className="section-tag">Training & Programs</p>
              <div className="mt-5 space-y-5">
                {trainings.map((training) => (
                  <article key={training.title} className="mini-surface rounded-2xl p-4">
                    <h3 className="font-display text-xl text-[var(--text)]">{training.title}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                      {training.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </motion.aside>
          </div>
        </section>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0.3}
          className="surface rounded-[2rem] p-6 sm:p-10"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="section-tag">Contact</p>
              <h2 className="mt-4 font-display text-3xl text-[var(--text)] sm:text-4xl">
                Let&apos;s build something production-ready.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                Available for backend-focused roles, internships, and collaboration on secure distributed systems.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a href="mailto:akashadak00023@gmail.com" className="button-primary justify-center">
                <Mail className="inline-icon" aria-hidden="true" />
                Email me
              </a>
              <a href="https://github.com/Akash-Adak" target="_blank" rel="noreferrer" className="button-secondary justify-center">
                <FolderGit2 className="inline-icon" aria-hidden="true" />
                GitHub profile
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default App
