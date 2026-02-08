import { motion } from "framer-motion";

const projects = [
  {
    title: "Todo App",
    description: "Task management app with add, delete, and update features.",
    tech: "React, Tailwind CSS",
    live: "#",
    github: "#",
  },
  {
    title: "Weather App",
    description: "Real-time weather app using external API.",
    tech: "JavaScript, API",
    live: "#",
    github: "#",
  },
  {
    title: "Food App",
    description: "Food ordering UI with filtering and categories.",
    tech: "React, CSS",
    live: "#",
    github: "#",
  },
  {
    title: "Collection Page",
    description: "Product filtering, sorting, and pagination system.",
    tech: "React, JavaScript",
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 bg-gray-800 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center text-white"
        >
          My <span className="text-red-400">Projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-400 text-sm">
                {project.description}
              </p>

              <p className="mt-4 text-sm text-red-400">{project.tech}</p>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 bg-red-500 rounded-md text-sm hover:bg-red-600 transition"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 border border-red-400 text-red-400 rounded-md text-sm hover:bg-red-400 hover:text-white transition"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
