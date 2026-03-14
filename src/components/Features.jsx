import { motion } from "motion/react";
import { FaLock, FaPlug, FaDatabase, FaEdit } from "react-icons/fa";
import { SiJsonwebtokens } from "react-icons/si";
import { MdSecurity } from "react-icons/md";

const features = [
  {
    icon: FaLock,
    title: "Authentication",
    description:
      "Secure user authentication using JWT tokens, bcrypt password hashing, and protected routes on both frontend and backend.",
    gradient: "from-violet-500 to-purple-600",
    tags: ["JWT", "bcrypt", "Sessions"],
  },
  {
    icon: FaPlug,
    title: "API Integration",
    description:
      "RESTful API design with proper HTTP methods, status codes, error handling, and third-party API consumption.",
    gradient: "from-cyan-500 to-blue-600",
    tags: ["REST", "Axios", "Fetch"],
  },
  {
    icon: FaDatabase,
    title: "Database Connection",
    description:
      "MongoDB integration via Mongoose with schema design, data validation, indexing, and efficient query patterns.",
    gradient: "from-green-500 to-emerald-600",
    tags: ["MongoDB", "Mongoose", "Schemas"],
  },
  {
    icon: FaEdit,
    title: "CRUD Operations",
    description:
      "Full Create, Read, Update, Delete functionality with proper validation, error handling, and real-time UI updates.",
    gradient: "from-pink-500 to-rose-600",
    tags: ["Create", "Read", "Update", "Delete"],
  },
  {
    icon: MdSecurity,
    title: "Security Best Practices",
    description:
      "Input sanitization, CORS configuration, rate limiting, environment variables, and secure HTTP headers.",
    gradient: "from-orange-500 to-amber-600",
    tags: ["CORS", "Helmet", "dotenv"],
  },
  {
    icon: SiJsonwebtokens,
    title: "Middleware & Routing",
    description:
      "Express middleware for logging, error handling, authentication guards, and clean modular route organization.",
    gradient: "from-teal-500 to-cyan-600",
    tags: ["Express", "Middleware", "Routes"],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Features = () => {
  return (
    <section className="relative py-28 bg-background px-6 overflow-hidden">
      <div className="absolute w-80 h-80 bg-green-500/10 blur-3xl rounded-full top-10 left-10 pointer-events-none" />
      <div className="absolute w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full bottom-10 right-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-violet-400 uppercase tracking-widest">Backend Capabilities</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-foreground">
            Core <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            The backend skills and patterns I apply to build secure, scalable, and production-ready applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map(({ icon: Icon, title, description, gradient, tags }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -5 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-violet-500/40 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="text-white" size={22} />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-full bg-secondary text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
