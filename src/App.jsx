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
import Carousel from './components/TestamonialSection';
import GallerySection from './components/GallerySection';
import { useEffect } from 'react';
function App() {
useEffect(() => {
    // 1. Get the current hostname
    const currentHost = window.location.hostname;

    // 2. Check if the user is on the OLD Netlify domain
    // (This ensures we don't break localhost or the new site)
    if (currentHost.includes("netlify.app")) {
      
      // 3. Force the redirect to the new domain
      window.location.replace("https://www.talhaiftikhar.com");
    }
  }, []);
  return (
    <>
      {/* First section */}
      <section className='h-[100vh] w-100'>

        <div id='Home' className='top-0 left-0 right-0 bottom-0 absolute max-w-100 max-h-[90vh] md:max-h-[85vh] '>

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

      {/* Gallery Section */}
      <GallerySection />
      {/* Gallery Section */}

      {/* Projects Section */}
      <ProjectSection />
      {/* Projects Section */}


      {/* Education & Skills */}
      <EducationSkills />
      {/* Education & Skills */}

      {/* Testamonial */}
      <Carousel />
      {/* Testamonial */}

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
