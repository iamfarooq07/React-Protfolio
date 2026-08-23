import { motion } from "motion/react";
import { FaCertificate, FaExternalLinkAlt, FaStar } from "react-icons/fa";

const certifications = [
  {
    id: 5,
    title: "Web & Mobile App Development Diploma",
    issuer: "Certification Program",
    date: "2024 - 2026",
    description:
      "Comprehensive full-stack diploma program covering complete web architectures, scalable backend REST APIs, modern frontend frameworks (React/Next.js), state management, and cross-platform mobile app development practices.",
    link: "#",
    color: "from-purple-500 via-pink-500 to-indigo-500",
    featured: true, // Special flag for highlighting
  },
  {
    id: 1,
    title: "Frontend Developer Intern",
    issuer: "DevelopersHub",
    date: "2026",
    description:
      "Completed a 4-week remote frontend internship building responsive user interfaces, implementing component architectures, and integrating modern web designs using React and Tailwind CSS.",
    link: "#",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    issuer: "Cisco Networking Academy",
    date: "2025",
    description:
      "Mastered core JavaScript concepts, modern ES6+ features, asynchronous programming, and DOM manipulation for dynamic web development.",
    link: "#",
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: 3,
    title: "CSS & Modern Web Design",
    issuer: "Cisco Networking Academy",
    date: "2025",
    description:
      "Gained expertise in modern layout techniques using Flexbox and CSS Grid, responsive design principles, and custom styling.",
    link: "#",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 4,
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    date: "2026",
    description:
      "Learned foundational artificial intelligence concepts, modern machine learning workflows, and practical applications in software development.",
    link: "#",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 6,
    title: "Hackathon Participant (3x)",
    issuer: "Various Tech Competitions",
    date: "2025 - 2026",
    description:
      "Participated in 3 hackathons, collaborating under tight deadlines to design, develop, and present rapid full-stack web applications and innovative tech solutions.",
    link: "#",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 7,
    title: "Intermediate in Commerce",
    issuer: "Govt. Boys College Asifabad",
    date: "2023",
    description:
      "Higher secondary education focused on commercial accounting, business operations, and financial principles.",
    link: "#",
    color: "from-sky-500 to-blue-600",
  },
  {
    id: 8,
    title: "Matriculation in Computer Science",
    issuer: "Liberal Model School",
    date: "2021",
    description:
      "Secondary education foundation covering computer science fundamentals, logic building, and introductory programming concepts.",
    link: "#",
    color: "from-teal-500 to-emerald-600",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Certifications = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full translate-x-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-sm font-medium mb-6">
            <FaCertificate />
            <span>Achievements & Education</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Licenses & Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Professional certifications, diplomas, and academic background
            shaping my skills.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {certifications.map((cert) => {
            const isFeatured = cert.featured;

            return (
              <motion.div
                key={cert.id}
                variants={item}
                className={`relative group p-6 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-lg ${
                  isFeatured
                    ? "md:col-span-2 border-purple-500/40 bg-purple-500/5 hover:border-purple-500/80 shadow-purple-500/5"
                    : "border-border bg-card/50 backdrop-blur-sm hover:border-blue-500/50"
                }`}
              >
                {/* Top Border Highlight */}
                <div
                  className={`absolute top-0 left-0 w-full rounded-t-2xl transition-opacity ${
                    isFeatured
                      ? "h-1.5 bg-gradient-to-r " + cert.color + " opacity-100"
                      : "h-1 bg-gradient-to-r " +
                        cert.color +
                        " opacity-50 group-hover:opacity-100"
                  }`}
                />

                <div className="flex justify-between items-start mb-4 gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isFeatured
                          ? "bg-purple-500/20 text-purple-400"
                          : "bg-secondary text-blue-500"
                      }`}
                    >
                      {isFeatured ? (
                        <FaStar className="text-xl" />
                      ) : (
                        <FaCertificate className="text-xl" />
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-lg md:text-xl text-foreground group-hover:text-blue-500 transition-colors leading-tight">
                          {cert.title}
                        </h3>
                        {isFeatured && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                            Major Qualification
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm font-medium mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-blue-500 transition-colors rounded-full hover:bg-blue-500/10 flex-shrink-0"
                  >
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>

                <p
                  className={`text-muted-foreground text-sm mb-4 ${
                    isFeatured ? "text-base leading-relaxed" : "line-clamp-3"
                  }`}
                >
                  {cert.description}
                </p>

                <div className="flex items-center text-xs font-semibold text-muted-foreground">
                  <span
                    className={`px-2.5 py-1 rounded-md ${
                      isFeatured
                        ? "bg-purple-500/10 text-purple-400"
                        : "bg-secondary"
                    }`}
                  >
                    Issued: {cert.date}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
