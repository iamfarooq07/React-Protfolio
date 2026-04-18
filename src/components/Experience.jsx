import { motion } from "motion/react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Experience = () => {
  return (
    <section className="relative py-28 bg-background px-6 overflow-hidden">
      <div className="absolute w-80 h-80 bg-violet-500/15 blur-3xl rounded-full bottom-10 right-10 pointer-events-none" />
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Heading */}
        <motion.div variants={item} className="text-center mb-16">
          <span className="text-sm font-semibold text-violet-400 uppercase tracking-widest">My Journey</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-foreground">
            Professional <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">Experience</span>
          </h2>
        </motion.div>

        {/* Experience Card */}
        <motion.div 
          variants={item}
          className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden group hover:border-violet-500/50 transition-all duration-300"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 to-pink-500" />
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                <FaBriefcase className="text-violet-400" size={20} />
                Frontend Developer Intern
              </h3>
              <p className="text-lg text-violet-400 font-medium mt-1">DevelopersHub Corporation</p>
            </div>
            
            <div className="flex flex-col gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
              <span className="flex items-center gap-2">
                <FaCalendarAlt size={14} className="text-violet-500/70" />
                Recent
              </span>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt size={14} className="text-pink-500/70" />
                Karachi, Pakistan
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
             {["React.js", "JavaScript", "Tailwind CSS", "Frontend"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-violet-500/30 bg-violet-500/10 text-violet-400"
                >
                  {tech}
                </span>
              ))}
          </div>

          <ul className="space-y-4 text-muted-foreground leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
              <p><strong className="text-foreground">Engineered</strong> highly responsive, component-driven user interfaces using React.js and modern JavaScript, leveraging Tailwind CSS to rapidly implement scalable, pixel-perfect design systems.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
              <p><strong className="text-foreground">Optimized</strong> application performance and code maintainability by refactoring complex components, implementing efficient rendering strategies, and adhering to strict clean-code principles.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
              <p><strong className="text-foreground">Collaborated</strong> directly with the Team Lead to design and deploy critical frontend features, actively participating in code reviews, architectural discussions, and agile development cycles.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
              <p><strong className="text-foreground">Leveraged</strong> a 6-year foundation of diverse professional experience to bring a mature, results-oriented work ethic to the engineering team, bridging the gap between broad Full-Stack MERN knowledge and specialized frontend execution.</p>
            </li>
          </ul>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Experience;
