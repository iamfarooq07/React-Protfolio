import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-40 bg-black px-6 h-[80vh]"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          About <span className="text-red-400">Me</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-400 leading-relaxed"
        >
          I'm a passionate Frontend / Full Stack Developer who enjoys building
          modern, responsive, and user-friendly web applications. I work mainly
          with JavaScript, React, and modern UI libraries, focusing on clean
          code and real-world problem solving.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-red-400">10+</h3>
            <p className="text-gray-400 mt-2">Projects</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-red-400">1+</h3>
            <p className="text-gray-400 mt-2">Year Learning</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-red-400">100%</h3>
            <p className="text-gray-400 mt-2">Passion</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
