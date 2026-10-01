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
  "Backend Developer",
  "UI/UX Designer",
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
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-background px-4 pt-24 pb-16 sm:px-6">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:48px_48px]" />

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
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-10rem)] w-full max-w-7xl flex-col items-center justify-center gap-10 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* LEFT SIDE - Hero Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="z-10 w-full max-w-3xl text-center lg:text-left"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for work
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-[1.08] text-foreground min-[420px]:text-5xl md:text-6xl xl:text-7xl"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Muhammad Farooq
            </span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-4 min-h-8 text-lg font-semibold text-muted-foreground sm:text-xl md:text-2xl"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {displayed}
            </span>

            <span className="animate-pulse text-blue-400">|</span>
          </motion.div>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
          >
            I build modern, responsive web applications using JavaScript, React,
            and the MERN stack. Passionate about clean code, performance, and
            creating user-friendly experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start"
          >
            <motion.a
              href="/M-Farooq.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg border border-emerald-500/50 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-emerald-500/10 sm:text-base"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={item}
            className="mt-8 flex justify-center gap-5 lg:justify-start"
          >
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

        {/* RIGHT SIDE */}
        <div className="flex w-full justify-center lg:justify-end">
          <img
            src="/profile.jpeg"
            alt="Muhammad Farooq"
            className="h-56 w-56 rounded-full border-4 border-cyan-500/30 object-cover shadow-[0_20px_80px_-24px_rgba(6,182,212,0.45)] sm:h-72 sm:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96"
          />
        </div>
      </div>
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
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground sm:bottom-6"
        aria-label="Scroll down"
      >
        <HiArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default Hero;
