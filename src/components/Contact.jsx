import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 bg-black px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Contact <span className="text-red-400">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-gray-400"
        >
          Feel free to reach out for collaborations or opportunities.
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 space-y-6 text-left"
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
      </div>
    </motion.section>
  );
};

export default Contact;
