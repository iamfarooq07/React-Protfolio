import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI Clinic Management System",
    description:
      "MERN-based AI clinic system with real-time scheduling, automated patient records, and a sleek dark-mode UI.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind"],
    live: "https://opticlinic-ai.vercel.app/",
    github: "https://github.com/iamfarooq07/Frontend-Clinic",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "E-Commerce Website",
    description:
      "Full-featured e-commerce platform with product filtering, sorting, pagination, and cart management.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    live: "https://e-commerce-website-i8gz4bqui-iamfarooq07s-projects.vercel.app/",
    github: "https://github.com/iamfarooq07/E-Commerce-Website",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Weather App",
    description:
      "Real-time 5-day weather forecast app using OpenWeatherMap API with location search.",
    tech: ["JavaScript", "REST API", "CSS"],
    live: "https://iamfarooq07.github.io/21-day-5-Day-Weather-Forecast-/",
    github: "https://github.com/iamfarooq07/21-day-5-Day-Weather-Forecast-",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Todo App",
    description:
      "Task management app with add, delete, update, and filter features. Clean and minimal UI.",
    tech: ["React", "Tailwind CSS"],
    live: "https://react-todo-app-i15c.vercel.app/",
    github: "https://github.com/iamfarooq07/React-Todo-App",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Password Generator",
    description:
      "Generate secure passwords with custom length, symbols, numbers, and uppercase options.",
    tech: ["JavaScript", "Tailwind CSS"],
    live: "https://iamfarooq07.github.io/5-day-Password-Genrater/",
    github: "https://github.com/iamfarooq07/5-day-Password-Genrater",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    title: "REST API",
    description:
      "Full CRUD REST API built with Node.js and Express, following RESTful conventions.",
    tech: ["Node.js", "Express.js"],
    github: "https://github.com/iamfarooq07/Express-Js-RESTful-Api-",
    gradient: "from-teal-500 to-cyan-600",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <section className="relative py-28 bg-background px-6 overflow-hidden">
      <div className="absolute w-80 h-80 bg-pink-500/10 blur-3xl rounded-full top-10 right-10 pointer-events-none" />
      <div className="absolute w-80 h-80 bg-violet-500/10 blur-3xl rounded-full bottom-10 left-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-violet-400 uppercase tracking-widest">What I've Built</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-foreground">
            My <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ y: -6 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-violet-500/40 transition-all duration-300 flex flex-col"
            >
              {/* Gradient Banner */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-foreground group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs rounded-full bg-secondary text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-5 flex gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-pink-500 text-white text-sm font-medium hover:opacity-90 transition"
                    >
                      <FaExternalLinkAlt size={12} /> Live
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground text-sm hover:text-foreground hover:border-violet-500/50 transition"
                  >
                    <FaGithub size={14} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
