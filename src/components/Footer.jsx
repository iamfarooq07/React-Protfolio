import { motion } from "framer-motion";
import { Link } from "react-router";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-gray-400 pt-16 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Farooq<span className="text-red-400">Dev</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Passionate Frontend / Full Stack Developer focused on building
            modern, scalable, and user-friendly web applications using
            JavaScript and React.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to={"/"} className="hover:text-red-400 cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="hover:text-red-400 cursor-pointer">
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/skills"}
                className="hover:text-red-400 cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to={"/projects"}
                className="hover:text-red-400 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="hover:text-red-400 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Technologies
          </h3>
          <ul className="space-y-3 text-sm">
            <li>HTML / CSS / JavaScript</li>
            <li>React.js / Tailwind CSS</li>
            <li>Node.js / Express.js</li>
            <li>MongoDB / Mongoose</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>
              {" "}
              <span className="text-white text-xl">Email</span> :
              mfarooq556678899@gmail.com
            </li>
            <li>
              {" "}
              <span className="text-white text-xl">Location</span> : Nazimabad
              Block.5 Karachi Pakistan
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-5 mt-6">
            <a
              href="https://github.com/iamfarooq07"
              target="_blank"
              className="hover:text-red-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-farooq-123f/"
              target="_blank"
              className="hover:text-red-400 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-red-400">Muhammad Farooq</span>. All rights
          reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
