import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

// Framer Motion Variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background px-6 flex flex-col items-center justify-center overflow-hidden transition-colors duration-300">
      {/* Background Glow Effects */}
      <div className="absolute w-72 h-72 bg-red-500/20 dark:bg-red-500/10 blur-3xl rounded-full top-20 left-10"></div>
      <div className="absolute w-72 h-72 bg-red-500/20 dark:bg-red-500/10 blur-3xl rounded-full bottom-20 right-10"></div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center max-w-2xl z-10"
      >
        {/* Name */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-bold text-foreground"
        >
          Hi, I'm <span className="text-red-400">Muhammad Farooq</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          className="mt-4 text-lg md:text-2xl font-bold text-muted-foreground"
        >
          Frontend / Full Stack Developer
        </motion.p>

        {/* Description */}
        <motion.p variants={item} className="mt-6 text-muted-foreground">
          I build modern, responsive web applications using JavaScript, React,
          and the MERN stack. Passionate about clean code, performance, and
          creating user-friendly experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={item} className="mt-8 flex gap-4 justify-center flex-wrap">
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-red-400 text-red-400 rounded-lg hover:bg-red-400 hover:text-white transition"
            >
              View Projects
            </motion.button>
          </Link>
          
          <motion.a
            href="/Muhammad_Farooq_CV.pdf"
            download="Muhammad_Farooq_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-red-400 text-white rounded-lg hover:bg-red-500 transition"
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={item}
          className="mt-10 flex justify-center gap-6 text-muted-foreground"
        >
          <a
            href="https://github.com/iamfarooq07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400"
          >
            <FaGithub size={36} />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-farooq-123f/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400"
          >
            <FaLinkedin size={36} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
