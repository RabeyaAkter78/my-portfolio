import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
// import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AllProjects from "./components/Projects/AllProjects";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
// import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <Navbar />
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Banner />
        <About />
        <Experience />
        <Skills />
        <Services />
        <AllProjects />
        {/* <Testimonials /> */}
        {/* <Blogs /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
