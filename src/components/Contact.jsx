import { motion } from "motion/react";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiPaperAirplane } from "react-icons/hi";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "mfarooq556678899@gmail.com",
    href: "mailto:mfarooq556678899@gmail.com",
    gradient: "from-violet-500 to-pink-500",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/iamfarooq07",
    href: "https://github.com/iamfarooq07",
    gradient: "from-gray-600 to-gray-800",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "muhammad-farooq-123f",
    href: "https://www.linkedin.com/in/muhammad-farooq-123f/",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Karachi, Pakistan",
    href: null,
    gradient: "from-red-500 to-rose-600",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate send
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="relative py-28 bg-background px-6 overflow-hidden">
      <div className="absolute w-80 h-80 bg-violet-500/15 blur-3xl rounded-full top-10 right-10 pointer-events-none" />
      <div className="absolute w-80 h-80 bg-pink-500/15 blur-3xl rounded-full bottom-10 left-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-violet-400 uppercase tracking-widest">Get In Touch</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-foreground">
            Contact <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Contact Info */}
          <motion.div variants={item} className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href, gradient }) => (
              <motion.div
                key={label}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-2xl hover:border-violet-500/40 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-foreground font-medium hover:text-violet-400 transition-colors text-sm"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium text-sm">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            variants={item}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-8 space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-violet-500/50 border border-border transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-violet-500/50 border border-border transition"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-violet-500/50 border border-border transition resize-none"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition shadow-lg shadow-violet-500/25"
            >
              {sent ? "Message Sent!" : (
                <>
                  Send Message <HiPaperAirplane className="rotate-90" size={18} />
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
