import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaArrowLeft,
  FaSearch,
  FaUser,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with Next.js",
    excerpt:
      "Learn how to leverage Next.js features like SSR, SSG, and ISR to build performant and scalable React applications. We'll explore best practices and optimization techniques.",
    content: `
Next.js has revolutionized the way we build React applications. With features like Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR), developers can create blazing-fast web applications that scale effortlessly.

## Why Next.js?

Next.js provides an excellent developer experience with features like:
- Automatic routing based on file system
- API routes for backend functionality
- Image optimization
- Built-in CSS and Sass support
- Fast Refresh for instant feedback

## Getting Started

To start a new Next.js project, run:
\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

## Best Practices

1. Use Static Generation when possible
2. Implement proper error handling
3. Optimize images using the Next.js Image component
4. Leverage API routes for server-side logic
    `,
    category: "React & Next.js",
    date: "Jan 15, 2024",
    author: "Rabeya Akter",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    tags: ["Next.js", "React", "Performance", "SSR", "SSG"],
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS: From Basics to Advanced",
    excerpt:
      "A comprehensive guide to Tailwind CSS covering utility-first approach, custom configurations, dark mode implementation, and creating reusable component patterns.",
    content: `
Tailwind CSS has changed the way we write CSS. Instead of writing custom CSS, you use pre-defined utility classes to build your designs directly in your markup.

## The Utility-First Approach

Tailwind provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.

## Custom Configuration

You can customize Tailwind by editing the tailwind.config.js file:

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#4e179b',
      },
    },
  },
}
\`\`\`

## Dark Mode

Tailwind supports dark mode out of the box:
\`\`\`html
<div class="bg-white dark:bg-gray-900">
  <p class="text-gray-900 dark:text-white">Hello</p>
</div>
\`\`\`
    `,
    category: "CSS & Styling",
    date: "Jan 8, 2024",
    author: "Rabeya Akter",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop",
    tags: ["Tailwind CSS", "CSS", "UI Design", "Dark Mode"],
  },
  {
    id: 3,
    title: "State Management in Modern React Applications",
    excerpt:
      "Comparing Redux Toolkit, Zustand, and React Context API. When to use each approach and how to implement them effectively in your React projects.",
    content: `
State management is a crucial aspect of React development. Let's explore the most popular solutions available today.

## Redux Toolkit

Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development.

## Zustand

A small, fast and scalable bearbones state-management solution using simplified flux principles.

## Context API

React's built-in state management solution, perfect for simpler applications.

## Which one to choose?

- Small app: Context API
- Medium app: Zustand
- Large app: Redux Toolkit
    `,
    category: "React Architecture",
    date: "Dec 28, 2023",
    author: "Rabeya Akter",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    tags: ["React", "Redux", "State Management", "Zustand"],
  },
  {
    id: 4,
    title: "TypeScript Best Practices for Frontend Developers",
    excerpt:
      "Essential TypeScript patterns and practices to write safer, more maintainable code. Learn about generics, type guards, and advanced type definitions.",
    content: `
TypeScript has become the standard for large-scale JavaScript applications. Here are the best practices you should follow.

## Strict Mode

Always enable strict mode in your tsconfig.json:
\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

## Type Inference

Let TypeScript infer types when possible:
\`\`\`typescript
// Good
const name = 'John'; // inferred as string

// Not necessary
const name: string = 'John';
\`\`\`

## Generics

Use generics for reusable components:
\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`
    `,
    category: "TypeScript",
    date: "Dec 20, 2023",
    author: "Rabeya Akter",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
  },
  {
    id: 5,
    title: "Implementing Secure Authentication in Next.js",
    excerpt:
      "A step-by-step guide to implementing JWT authentication, OAuth providers, and role-based access control in your Next.js applications.",
    content: `
Security is paramount in modern web applications. Let's implement secure authentication in Next.js.

## JWT Authentication

JSON Web Tokens provide a secure way to authenticate users.

## NextAuth.js

NextAuth.js is a complete open-source authentication solution for Next.js applications.

## Implementation Steps

1. Install next-auth
2. Configure providers
3. Set up callbacks
4. Protect routes
5. Handle sessions
    `,
    category: "Security",
    date: "Dec 12, 2023",
    author: "Rabeya Akter",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
    tags: ["Next.js", "Security", "Authentication", "JWT"],
  },
  {
    id: 6,
    title: "Optimizing React Performance: A Deep Dive",
    excerpt:
      "Learn advanced techniques for optimizing React app performance including code splitting, memoization, virtualization, and bundle optimization.",
    content: `
Performance optimization is crucial for providing a smooth user experience.

## Code Splitting

Split your code into smaller chunks:
\`\`\`javascript
const LazyComponent = React.lazy(() => import('./Component'));
\`\`\`

## Memoization

Use React.memo and useMemo to prevent unnecessary re-renders:
\`\`\`javascript
const MemoizedComponent = React.memo(MyComponent);
\`\`\`

## Virtualization

For long lists, use virtualization libraries like react-window.

## Bundle Analysis

Use webpack-bundle-analyzer to identify large dependencies.
    `,
    category: "Performance",
    date: "Dec 5, 2023",
    author: "Rabeya Akter",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedBlog(null);
    window.scrollTo(0, 0);
  };

  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-gray-950 text-white pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
          >
            <FaArrowLeft /> Back to Blogs
          </motion.button>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
            />

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                {selectedBlog.category}
              </span>
              <span className="flex items-center gap-2 text-gray-400 text-sm">
                <FaCalendarAlt /> {selectedBlog.date}
              </span>
              <span className="flex items-center gap-2 text-gray-400 text-sm">
                <FaClock /> {selectedBlog.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {selectedBlog.title}
            </h1>

            <div className="flex items-center gap-3 mb-8 p-4 rounded-xl bg-gray-800/50">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <FaUser className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">{selectedBlog.author}</p>
                <p className="text-sm text-gray-400">Frontend Developer</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {selectedBlog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                {selectedBlog.excerpt}
              </p>
              <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                {selectedBlog.content}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-6"
          >
            <FaArrowLeft /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Blogs</h1>
          <p className="text-gray-400 text-lg">
            Explore my thoughts on web development, programming tips, and
            technology insights.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* Search */}
          <div className="relative max-w-md">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <p className="text-gray-400 mb-6">
          Showing {filteredPosts.length} of {blogPosts.length} blogs
        </p>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => handleBlogClick(post)}
              className="group cursor-pointer"
            >
              <div className="h-full rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 hover:border-primary/30 transition-all overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/80 text-white text-xs">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    Read More <FaArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No blogs found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
