import { motion } from "motion/react";
import { FaCode, FaServer, FaDatabase, FaRocket } from "react-icons/fa";

const stats = [
  { icon: FaRocket, value: "10+", label: "Projects Built" },
  { icon: FaCode, value: "2+", label: "Years Learning" },
  { icon: FaServer, value: "6+", label: "Certificates" },
  { icon: FaDatabase, value: "100%", label: "Passion" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <section className="relative py-28 bg-background px-6 overflow-hidden">
      <div className="absolute w-80 h-80 bg-violet-500/15 blur-3xl rounded-full top-10 right-10 pointer-events-none" />
      <div className="absolute w-80 h-80 bg-pink-500/15 blur-3xl rounded-full bottom-10 left-10 pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto relative z-10"
      >
        {/* Heading */}
        <motion.div variants={item} className="text-center mb-16">
          <span className="text-sm font-semibold text-violet-400 uppercase tracking-widest">Who I Am</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-foreground">
            About <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div variants={item} className="space-y-5">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a passionate <span className="text-foreground font-semibold">Full Stack Developer</span> who
              enjoys building modern, responsive, and user-friendly web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey started with HTML & CSS, and over the past 2+ years I've grown into
              the full MERN stack — building everything from REST APIs and authentication systems
              to polished React frontends.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I focus on clean code, performance, and real-world problem solving. Whether it's
              a pixel-perfect UI or a robust backend API, I bring the same level of care to every layer.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "JavaScript"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm border border-violet-500/30 bg-violet-500/10 text-violet-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={item} className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-violet-500/50 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-violet-500/30 group-hover:to-pink-500/30 transition">
                    <Icon className="text-violet-400" size={22} />
                  </div>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                  {value}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
