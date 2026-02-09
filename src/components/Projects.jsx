import { motion } from "framer-motion";
import { p } from "motion/react-client";
import { Link } from "react-router";

const projects = [
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
    title: "Password Generator App",
    description:
      "A React app to generate secure, random passwords with customizable options.",
    tech: "Html, Tailwindcss, JavaScript",
    live: "https://iamfarooq07.github.io/5-day-Password-Genrater/",
    github: "https://github.com/iamfarooq07/5-day-Password-Genrater",
  },
  {
    title: "E-Commerce Website",
    description:
      "A full-featured e-commerce platform with product filtering, sorting, pagination, and responsive UI built in React.",
    tech: "React, JavaScript, Frontend",
    live: "https://e-commerce-website-i8gz4bqui-iamfarooq07s-projects.vercel.app/",
    github: "https://github.com/iamfarooq07/E-Commerce-Website",
  },

  {
    title: "Calculator",
    description:
      "A React calculator with responsive design, smooth UI, and efficient state handling.",
    tech: "React, JavaScript",
    live: "https://react-assit-3.vercel.app/",
    github: "https://github.com/iamfarooq07/React-Calculator-App",
  },
  {
    title: "REST API Project",
    description:
      "A RESTful API built with Express.js and Node.js, supporting CRUD operations and structured routing for efficient backend management.",
    tech: "Express.js, Node.js",
    github: "https://github.com/iamfarooq07/Express-Js-RESTful-Api-",
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
      className="py-20 bg-black px-6"
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
                <Link
                  to={project.live}
                  target="_blank"
                  className="px-4 py-2 bg-red-400 rounded-md text-sm hover:bg-red-500 transition"
                >
                  Live
                </Link>

                <Link
                  to={project.github}
                  target="_blank"
                  className="px-4 py-2 border border-red-400 text-red-400 rounded-md text-sm hover:bg-red-400 hover:text-white transition"
                >
                  GitHub
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
