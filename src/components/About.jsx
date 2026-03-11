import { motion } from "framer-motion";

// Stagger Animation
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

const About = () => {
  return (
    <section className="relative py-40 bg-background px-6 min-h-screen overflow-hidden transition-colors duration-300">
      {/* Background Glow (Same as Hero) */}
      <div className="absolute w-72 h-72 bg-red-500/20 dark:bg-red-500/10 blur-3xl rounded-full top-20 left-10"></div>
      <div className="absolute w-72 h-72 bg-red-500/20 dark:bg-red-500/10 blur-3xl rounded-full bottom-20 right-10"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold text-foreground"
        >
          About <span className="text-red-400">Me</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-6 text-muted-foreground leading-relaxed"
        >
          I'm a passionate Frontend / Full Stack Developer who enjoys building
          modern, responsive, and user-friendly web applications. I work mainly
          with JavaScript, React, and the MERN stack, focusing on clean code,
          performance, and real-world problem solving.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={item}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-card p-6 rounded-xl border border-border hover:border-red-400 transition"
          >
            <h3 className="text-2xl font-bold text-red-400">10+</h3>
            <p className="text-muted-foreground mt-2">Projects</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-card p-6 rounded-xl border border-border hover:border-red-400 transition"
          >
            <h3 className="text-2xl font-bold text-red-400">2+</h3>
            <p className="text-muted-foreground mt-2">Year Learning</p>
          </motion.div>

          {/* Card 3 - Certificates */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-card p-6 rounded-xl border border-border hover:border-red-400 transition"
          >
            <h3 className="text-2xl font-bold text-red-400">6+</h3>
            <p className="text-muted-foreground mt-2">Certificates</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-card p-6 rounded-xl border border-border hover:border-red-400 transition"
          >
            <h3 className="text-2xl font-bold text-red-400">100%</h3>
            <p className="text-muted-foreground mt-2">Passion</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
