import { motion } from "framer-motion";

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  return (
    <section className="relative py-24 bg-black px-6 overflow-hidden">
      {/* Background Glow */}
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
          Contact <span className="text-red-400">Me</span>
        </motion.h2>

        <motion.p variants={item} className="mt-4 text-center text-gray-400">
          Feel free to reach out for collaborations or opportunities.
        </motion.p>

        {/* Form Card */}
        <motion.form
          variants={item}
          className="mt-10 bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-400"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-red-500 py-4 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
