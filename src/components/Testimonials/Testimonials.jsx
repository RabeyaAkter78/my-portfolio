import { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../SectionTitle/SectionTitle";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content:
      "Rabeya delivered an exceptional frontend solution for our e-commerce platform. Her attention to detail and ability to translate complex requirements into clean, maintainable code was impressive. The project was completed on time and exceeded our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "Digital Ventures",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    content:
      "Working with Rabeya was a game-changer for our startup. She built our entire frontend from scratch using Next.js and TypeScript. Her expertise in React and modern web technologies helped us launch our product faster than planned.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer",
    company: "Creative Studio",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    content:
      "As a designer, I appreciate when developers can bring designs to life accurately. Rabeya has an excellent eye for detail and implemented my Figma designs pixel-perfectly. The animations and interactions she added made the experience even better.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Engineering Lead",
    company: "ScaleUp Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    content:
      "Rabeya's code quality and professionalism are outstanding. She optimized our web app's performance significantly, improving our Lighthouse scores by 40%. Her knowledge of best practices and modern frontend architecture is impressive.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Founder",
    company: "Wellness App",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    content:
      "Rabeya developed our fitness platform with multiple user roles and complex features. She handled everything from authentication to payment integration seamlessly. Highly recommend her for any serious web development project.",
    rating: 5,
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section id="testimonials" className="w-full py-20 px-4 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
      <SectionTitle
        subHeading="Client Feedback"
        heading="Happy Clients"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <FaQuoteLeft className="w-8 h-8 text-primary/40" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-500" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-700/50">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                    />
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-xs">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "25+", label: "Projects Completed" },
            { number: "15+", label: "Happy Clients" },
            { number: "1.5+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-gray-800/30 border border-gray-700/30"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
