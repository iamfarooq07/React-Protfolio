import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="min-h-screen flex justify-center items-center bg-black px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          Hi, I'm <span className="text-red-400">Muhammad Farooq</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-lg md:text-2xl font-bold text-gray-300"
        >
          Frontend / Full Stack Developer
        </motion.p>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 max-w-2xl text-gray-400"
        >
          I build modern, responsive web applications using JavaScript, React,
          and modern UI frameworks. Passionate about clean code and performance.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <Link
            to="/projects"
            className="px-6 py-3 bg-red-400 rounded-lg hover:bg-red-500 transition"
          >
            View Projects
          </Link>

          <a
            to="/resume.pdf"
            download
            className="px-6 py-3 border border-red-400 text-red-400 rounded-lg hover:bg-red-400 hover:text-white transition"
          >
            Download CV
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex justify-center gap-6 text-gray-400"
        >
          <a
            href="https://github.com/iamfarooq07"
            className="hover:text-red-400"
          >
            <FaGithub size={44} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-farooq-123f/"
            className="hover:text-red-400"
          >
            <FaLinkedin size={44} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
