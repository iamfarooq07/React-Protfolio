import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "html5",
  "css3",
  "javascript",
  "typescript",
  "react",
  "nextdotjs",
  "tailwindcss",
  "bootstrap",
  "framer",
  "greensock",
  "nodedotjs",
  "express",
  "jsonwebtoken",
  "mongodb",
  "mongoose",
  "git",
  "github",
  "postman",
  "visualstudiocode",
  "npm",
  "vercel",
  "netlify",
];

const Hero = () => {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);

  return (
    <section className="min-h-screen bg-black px-6 flex flex-col lg:flex-row items-center justify-center gap-12">
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center lg:text-left max-w-xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          Hi, I'm <span className="text-red-400">Muhammad Farooq</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-lg md:text-2xl font-bold text-gray-300"
        >
          Frontend / Full Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-gray-400"
        >
          I build modern, responsive web applications using JavaScript, React,
          and modern UI frameworks. Passionate about clean code and performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex gap-4 justify-center lg:justify-start flex-wrap"
        >
          <Link
            to="/projects"
            className="px-6 py-3 border border-red-400 text-red-400 rounded-lg hover:bg-red-400 hover:text-white transition"
          >
            View Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 flex justify-center lg:justify-start gap-6 text-gray-400"
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

      {/* RIGHT ICON CLOUD */}
      <div className="relative w-full lg:w-[700px] h-[500px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="scale-125 lg:scale-150">
          <IconCloud images={images} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
