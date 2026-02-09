import { motion } from "framer-motion";

const skills = [
  // Frontend
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

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 bg-black px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center text-white"
        >
          My <span className="text-red-400">Skills</span>
        </motion.h2>

        {/* Skills List */}
        <div className="mt-12 space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
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
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-3 bg-red-500 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
