import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,

  FaArrowUp,
} from "react-icons/fa";

const footerLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "blogs", label: "Blogs" },
  { to: "contact", label: "Contact" },
];

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/RabeyaAkter78",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rabeya-akter-52662622a/",
  },
  {
    icon: FaTwitter,
    label: "Twitter",
    href: "https://twitter.com/rabeyariya96859",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    href: "mailto:rabeyaakter7876@gmail.com",
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Rabeya Akter
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Frontend Developer passionate about creating beautiful, 
              functional, and user-friendly web applications with modern technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-300"
                    aria-label={link.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaEnvelope className="w-4 h-4 text-primary" />
                rabeyaakter7876@gmail.com
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <span className="w-4 h-4 flex items-center justify-center text-primary">📞</span>
                +88 01969-687876
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <span className="w-4 h-4 flex items-center justify-center text-primary">📍</span>
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <FaHeart className="w-4 h-4 text-red-500" /> by Rabeya Akter
          </p> */}
          <p className="text-gray-500 text-sm">
            {new Date().getFullYear()} All rights reserved @ Rabeya Akter.
          </p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Back to top"
          >
            <FaArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;