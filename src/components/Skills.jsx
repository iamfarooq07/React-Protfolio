import { motion } from "motion/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiNetlify,
  SiVite,
  SiVercel,
  SiRailway,
  SiGithubcopilot,
  SiRender,
  SiShadcnui,
  SiMui,
  SiAntdesign,
  SiFramer,
  SiGreensock,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const categories = [
  {
    title: "Frontend",
    gradient: "from-cyan-500 to-blue-500",
    skills: [
      { name: "HTML5", Icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", Icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", Icon: FaJs, color: "text-yellow-400" },
      { name: "React", Icon: FaReact, color: "text-cyan-400" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-sky-400" },
      { name: "Bootstrap", Icon: FaBootstrap, color: "text-purple-500" },
    ],
  },
  {
    title: "Backend",
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", Icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", Icon: SiExpress, color: "text-gray-400" },
      { name: "MongoDB", Icon: SiMongodb, color: "text-green-400" },
      { name: "REST API", Icon: SiPostman, color: "text-orange-400" },
    ],
  },
  {
    title: "Frontend Tools",
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "VS Code", Icon: VscVscode, color: "text-blue-400" },
      { name: "Vite", Icon: SiVite, color: "text-violet-400" },
      {
        name: "GitHub Copilot",
        Icon: SiGithubcopilot,
        color: "text-green-400",
      },
    ],
  },
  {
    title: "Backend & DevOps",
    gradient: "from-violet-500 to-pink-500",
    skills: [
      { name: "Git", Icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", Icon: FaGithub, color: "text-foreground" },
      { name: "Netlify", Icon: SiNetlify, color: "text-teal-400" },
      { name: "Vercel", Icon: SiVercel, color: "text-black dark:text-white" },
      { name: "Railway", Icon: SiRailway, color: "text-purple-500" },
      { name: "Render", Icon: SiRender, color: "text-indigo-400" },
    ],
  },
  {
    title: "UI / Design Tools",
    gradient: "from-purple-500 to-indigo-500",
    skills: [
      {
        name: "Shadcn UI",
        Icon: SiShadcnui,
        color: "text-black dark:text-white",
      },
      { name: "Magic UI", Icon: SiShadcnui, color: "text-purple-400" },
      { name: "Material UI", Icon: SiMui, color: "text-blue-500" },
      { name: "Ant Design", Icon: SiAntdesign, color: "text-blue-400" },
      { name: "Framer Motion", Icon: SiFramer, color: "text-pink-500" },
      { name: "GSAP", Icon: SiGreensock, color: "text-green-500" },
      { name: "Figma", Icon: SiFigma, color: "text-pink-500" },
    ],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const Skills = () => {
  return (
    <section className="relative py-28 bg-background px-6 overflow-hidden">
      <div className="absolute w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full top-10 left-10 pointer-events-none" />
      <div className="absolute w-80 h-80 bg-violet-500/10 blur-3xl rounded-full bottom-10 right-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-violet-400 uppercase tracking-widest">
            What I Know
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-foreground">
            Tech{" "}
            <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-violet-500/40 transition-all duration-300"
            >
              <div
                className={`inline-block text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${cat.gradient} text-white mb-6`}
              >
                {cat.title}
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-3"
              >
                {cat.skills.map(({ name, Icon, color }) => (
                  <motion.div
                    key={name}
                    variants={item}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-200 cursor-default"
                  >
                    <Icon className={`${color} flex-shrink-0`} size={22} />
                    <span className="text-sm text-foreground font-medium">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
