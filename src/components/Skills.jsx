import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS / SCSS", level: 90 },
  { name: "JavaScript (ES6+)", level: 90 },
  { name: "React.js", level: 85 },
  { name: "Tailwind CSS / Bootstrap", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 80 },
  { name: "MongoDB / Mongoose", level: 75 },
  { name: "Git & GitHub", level: 85 },
  { name: "REST APIs / Postman", level: 80 },
  { name: "Authentication & JWT", level: 75 },
];

// Animation Variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Skills = () => {
  return (
    <section className="relative py-24 bg-black px-6 overflow-hidden">
      {/* Background Glow (same theme) */}
      <div className="absolute w-72 h-72 bg-red-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-red-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold text-center text-white"
        >
          My <span className="text-red-400">Skills</span>
        </motion.h2>

        {/* Skills Card */}
        <motion.div
          variants={item}
          className="mt-12 bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg"
        >
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.02 }}
              >
                {/* Skill Name */}
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="h-3 bg-red-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
