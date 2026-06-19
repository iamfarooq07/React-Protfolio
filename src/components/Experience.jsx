import { motion } from "motion/react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiJavascript } from "react-icons/si";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "DevelopersHub Corporation",
    duration: "2024 — Present",
    location: "Karachi, Pakistan (Remote)",
    type: "Internship",
    gradient: "from-violet-500 to-pink-500",
    tech: [
      { label: "React.js", Icon: SiReact, color: "text-cyan-400" },
      { label: "Tailwind CSS", Icon: SiTailwindcss, color: "text-sky-400" },
      { label: "JavaScript", Icon: SiJavascript, color: "text-yellow-400" },
    ],
    bullets: [
      "Engineered responsive, pixel-perfect UI components using React.js and Tailwind CSS, ensuring cross-device compatibility and consistent visual quality across all breakpoints.",
      "Optimized component architecture by refactoring reusable modules and eliminating redundant code, resulting in a cleaner codebase and measurable improvement in rendering performance.",
      "Collaborated directly with the Team Lead to translate Figma designs and feature requirements into production-ready frontend implementations, consistently meeting sprint deadlines.",
      "Delivered scalable JavaScript logic for dynamic data rendering and state management, applying industry-standard patterns that aligned with the team's coding conventions.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="relative py-28 bg-background px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute w-80 h-80 bg-violet-500/10 blur-3xl rounded-full top-10 left-10 pointer-events-none" />
      <div className="absolute w-80 h-80 bg-pink-500/10 blur-3xl rounded-full bottom-10 right-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-violet-400 uppercase tracking-widest">
            Work History
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-foreground">
            Professional{" "}
            <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Full-Stack MERN Developer based in Karachi with 6 years of diverse
            work experience — bringing a strong professional work ethic and
            technical depth to every role.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 border-4 border-background md:-translate-x-1/2 z-10" />

              {/* Left: Meta Info */}
              <div className="hidden md:flex flex-col items-end justify-start pt-4 pr-8">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <FaCalendarAlt size={13} />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                  <FaMapMarkerAlt size={13} />
                  <span>{exp.location}</span>
                </div>
                <span className="mt-3 px-3 py-1 text-xs font-semibold rounded-full border border-violet-500/40 text-violet-400 bg-violet-500/10">
                  {exp.type}
                </span>
              </div>

              {/* Right: Card */}
              <div className="md:pl-8 pt-0 md:pt-4">
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-violet-500/40 transition-all duration-300">
                  {/* Role & Company */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <FaBriefcase className="text-white" size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-violet-400 font-semibold text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Meta */}
                  <div className="flex flex-wrap gap-3 mb-5 md:hidden">
                    <span className="flex items-center gap-1.5 text-muted-foreground text-xs">
                      <FaCalendarAlt size={11} /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground text-xs">
                      <FaMapMarkerAlt size={11} /> {exp.location}
                    </span>
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-full border border-violet-500/40 text-violet-400 bg-violet-500/10">
                      {exp.type}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex-shrink-0" />
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-border flex flex-wrap gap-3">
                    {exp.tech.map(({ label, Icon, color }) => (
                      <div
                        key={label}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-sm font-medium text-foreground border border-border"
                      >
                        <Icon className={`${color} flex-shrink-0`} size={14} />
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
