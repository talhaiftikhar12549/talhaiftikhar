import './App.css'
import ParticlesComponent from './components/Particle';
import ProjectSection from './components/ProjectSection';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import MyExperience from './components/MyExperience';
import EducationSkills from './components/Education&Skills';
import ContactUs from './components/ContactUs';
import FooterBar from './components/FooterBar';
function App() {


  return (
    <>
      {/* First section */}
      <section className='h-[100vh] w-100'>

        <div id='Home' className='top-0 left-0 right-0 bottom-0 max-w-100 max-h-[85vh] absolute'>

          <NavBar />

          <ParticlesComponent id="particles" />

        </div>

        <div>

          <HeroSection />

        </div>

      </section>

      {/* First section */}

      {/* About US section */}
      <AboutUs />

      {/* About US section */}


      {/* Experience Section */}
      <MyExperience />
      {/* Experience Section */}


      {/* Projects Section */}
      <ProjectSection />
      {/* Projects Section */}


      {/* Education & Skills */}
      <EducationSkills />
      {/* Education & Skills */}


      {/* Contact Us Section*/}
      <ContactUs />
      {/* Contact Us Section */}


      {/* Footer Bar  */}
      <FooterBar />
      {/* Footer Bar  */}

    </>
  )
}

export default App
