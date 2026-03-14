import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card border-t border-border px-6 py-12"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-border">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
              FarooqDev
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed max-w-xs">
              Full Stack Developer focused on building modern, scalable, and user-friendly web applications.
            </p>
            <div className="flex gap-4 mt-5">
              <motion.a
                href="https://github.com/iamfarooq07"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaGithub size={22} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/muhammad-farooq-123f/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-muted-foreground hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={22} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-muted-foreground hover:text-violet-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "MongoDB", "Express", "Tailwind", "JavaScript", "Git"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Muhammad Farooq — Built with
          <FaHeart className="text-pink-500 mx-1" size={12} />
          using React & Tailwind CSS
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
