import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Clinic Management System",
    description:
      "MERN-based AI clinic system with real-time scheduling and automated patient records in a dark-mode UI.",
    tech: "MERN Stack (MongoDB, Express.js, React, Node.js), Tailwind CSS, JWT",
    live: "https://opticlinic-ai.vercel.app/",
    github: "https://github.com/iamfarooq07/Frontend-Clinic",
  },
  {
    title: "Todo App",
    description: "Task management app with add, delete, and update features.",
    tech: "React, Tailwind CSS",
    live: "https://react-todo-app-i15c.vercel.app/",
    github: "https://github.com/iamfarooq07/React-Todo-App",
  },
  {
    title: "Weather App",
    description: "Real-time weather app using external API.",
    tech: "JavaScript, API",
    live: "https://iamfarooq07.github.io/21-day-5-Day-Weather-Forecast-/",
    github: "https://github.com/iamfarooq07/21-day-5-Day-Weather-Forecast-",
  },
  {
    title: "E-Commerce Website",
    description:
      "Full-featured e-commerce platform with filtering, sorting, pagination.",
    tech: "React, JavaScript",
    live: "https://e-commerce-website-i8gz4bqui-iamfarooq07s-projects.vercel.app/",
    github: "https://github.com/iamfarooq07/E-Commerce-Website",
  },
  {
    title: "Password Generator",
    description: "Generate secure passwords with custom options.",
    tech: "JavaScript, Tailwind",
    live: "https://iamfarooq07.github.io/5-day-Password-Genrater/",
    github: "https://github.com/iamfarooq07/5-day-Password-Genrater",
  },
  {
    title: "Calculator",
    description: "Responsive calculator built with React.",
    tech: "React",
    live: "https://react-assit-3.vercel.app/",
    github: "https://github.com/iamfarooq07/React-Calculator-App",
  },
  {
    title: "REST API",
    description: "CRUD REST API using Node.js and Express.",
    tech: "Node.js, Express",
    github: "https://github.com/iamfarooq07/Express-Js-RESTful-Api-",
  },
];

// Animation Variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// ... (projects array and variants same rahengy)

const Projects = () => {
  return (
    <section className="relative py-24 bg-background px-6 overflow-hidden transition-colors duration-300">
      {/* Background Glows */}
      <div className="absolute w-72 h-72 bg-red-500/20 dark:bg-red-500/10 blur-3xl rounded-full top-20 left-10"></div>
      <div className="absolute w-72 h-72 bg-red-500/20 dark:bg-red-500/10 blur-3xl rounded-full bottom-20 right-10"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold text-center text-foreground"
        >
          My <span className="text-red-400">Projects</span>
        </motion.h2>

        {/* Grid Update: Added grid-rows-auto and items-stretch */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              /* Added: h-full flex flex-col to keep heights equal */
              className="bg-card border border-border rounded-xl p-6 shadow-lg hover:border-red-400 transition flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {project.title}
              </h3>

              {/* Added: flex-grow taake ye space le le aur buttons niche rahein */}
              <p className="mt-3 text-muted-foreground text-sm flex-grow">
                {project.description}
              </p>

              <p className="mt-4 text-sm text-red-400 font-medium">
                {project.tech}
              </p>

              {/* Buttons: Fixed at the bottom */}
              <div className="mt-6 flex gap-4 flex-wrap">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-red-400 text-white rounded-md text-sm font-medium hover:bg-red-500 transition"
                  >
                    Live
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-red-500 text-red-400 rounded-md text-sm hover:bg-red-400 hover:text-white transition"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
