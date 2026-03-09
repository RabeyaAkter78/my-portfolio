import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaArrowRight, FaUser } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with Next.js",
    excerpt:
      "Learn how to leverage Next.js features like SSR, SSG, and ISR to build performant and scalable React applications. We'll explore best practices and optimization techniques.",
    category: "React & Next.js",
    date: "Jan 15, 2024",
    author: "Rabeya Akter",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    tags: ["Next.js", "React", "Performance"],
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS: From Basics to Advanced",
    excerpt:
      "A comprehensive guide to Tailwind CSS covering utility-first approach, custom configurations, dark mode implementation, and creating reusable component patterns.",
    category: "CSS & Styling",
    date: "Jan 8, 2024",
    author: "Rabeya Akter",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=250&fit=crop",
    tags: ["Tailwind CSS", "CSS", "UI Design"],
  },
  {
    id: 3,
    title: "State Management in Modern React Applications",
    excerpt:
      "Comparing Redux Toolkit, Zustand, and React Context API. When to use each approach and how to implement them effectively in your React projects.",
    category: "React Architecture",
    date: "Dec 28, 2023",
    author: "Rabeya Akter",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    tags: ["React", "Redux", "State Management"],
  },
  {
    id: 4,
    title: "TypeScript Best Practices for Frontend Developers",
    excerpt:
      "Essential TypeScript patterns and practices to write safer, more maintainable code. Learn about generics, type guards, and advanced type definitions.",
    category: "TypeScript",
    date: "Dec 20, 2023",
    author: "Rabeya Akter",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
  },
  {
    id: 5,
    title: "Implementing Secure Authentication in Next.js",
    excerpt:
      "A step-by-step guide to implementing JWT authentication, OAuth providers, and role-based access control in your Next.js applications.",
    category: "Security",
    date: "Dec 12, 2023",
    author: "Rabeya Akter",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
    tags: ["Next.js", "Security", "Authentication"],
  },
  {
    id: 6,
    title: "Optimizing React Performance: A Deep Dive",
    excerpt:
      "Learn advanced techniques for optimizing React app performance including code splitting, memoization, virtualization, and bundle optimization.",
    category: "Performance",
    date: "Dec 5, 2023",
    author: "Rabeya Akter",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    tags: ["React", "Performance", "Optimization"],
  },
];

const categories = [
  "All",
  "React & Next.js",
  "CSS & Styling",
  "React Architecture",
  "TypeScript",
  "Security",
  "Performance",
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section id="blogs" className="w-full py-20 px-4">
      <SectionTitle subHeading="Latest Articles" heading="My Blog" />

      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700/50 hover:border-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              custom={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="h-full rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-primary/30 transition-all duration-300 overflow-hidden backdrop-blur-sm">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs rounded-full bg-primary/80 text-white backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUser className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-md bg-gray-700/50 text-gray-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    <span>Read More</span>
                    <FaArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.linkedin.com/in/rabeya-akter-bb5921285/recent-activity/articles/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300"
          >
            View All Articles on LinkedIn
            <FaArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
