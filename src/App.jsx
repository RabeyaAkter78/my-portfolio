
import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import AllProjects from './components/Projects/AllProjects'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-screen-xl mx-auto'>

        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        {/* <Projects></Projects> */}
        <AllProjects></AllProjects>
        <Contact></Contact>
        <Footer></Footer>


      </div>


    </div>
  )
}

export default App
