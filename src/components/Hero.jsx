import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
} from "react-icons/si";
import { HiArrowDown } from "react-icons/hi";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "React Developer",
  "Node.js Developer",
];

const floatingIcons = [
  { Icon: FaReact, color: "text-cyan-400", x: "10%", y: "20%", delay: 0 },
  { Icon: FaNodeJs, color: "text-green-400", x: "85%", y: "15%", delay: 0.5 },
  { Icon: SiMongodb, color: "text-green-500", x: "8%", y: "70%", delay: 1 },
  {
    Icon: SiTailwindcss,
    color: "text-sky-400",
    x: "88%",
    y: "65%",
    delay: 1.5,
  },
  {
    Icon: SiJavascript,
    color: "text-yellow-400",
    x: "75%",
    y: "80%",
    delay: 0.8,
  },
  { Icon: SiExpress, color: "text-gray-400", x: "20%", y: "85%", delay: 1.2 },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          80,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-6 pt-20">
      {/* Gradient Orbs */}
      <div className="absolute w-96 h-96 bg-violet-500/20 blur-3xl rounded-full -top-20 -left-20 pointer-events-none" />
      <div className="absolute w-96 h-96 bg-pink-500/20 blur-3xl rounded-full -bottom-20 -right-20 pointer-events-none" />
      <div className="absolute w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Floating Tech Icons */}
      {floatingIcons.map(({ Icon, color, x, y, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:block ${color} opacity-30`}
          style={{ left: x, top: y }}
          animate={{ y: [0, -15, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3 + i * 0.4,
            delay,
            ease: "easeInOut",
          }}
        >
          <Icon size={36} />
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center max-w-3xl z-10 "
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for work
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold text-foreground leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Muhammad Farooq
          </span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-4 text-xl md:text-2xl font-semibold text-muted-foreground h-8"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            {displayed}
          </span>
          <span className="animate-pulse text-violet-400">|</span>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed"
        >
          I build modern, responsive web applications using JavaScript, React,
          and the MERN stack. Passionate about clean code, performance, and
          creating user-friendly experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-shadow"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 rounded-xl border border-violet-500/50 text-foreground font-semibold hover:bg-violet-500/10 transition"
          >
            Contact Me
          </motion.a>
          <motion.a
            href="/Muhammad_Farooq_CV.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 rounded-xl border border-pink-500/50 text-foreground font-semibold hover:bg-pink-500/10 transition"
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={item} className="mt-10 flex justify-center gap-5">
          <motion.a
            href="https://github.com/iamfarooq07"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaGithub size={28} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/muhammad-farooq-123f/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            className="text-muted-foreground hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={28} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <HiArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default Hero;
