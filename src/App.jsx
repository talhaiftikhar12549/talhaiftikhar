import './App.css'
import ParticlesComponent from './components/Particle';
import ProjectSection from './components/ProjectSection';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import MyExperience from './components/MyExperience';
function App() {


  return (
    <>
{/* First section */}
      <section className='h-[100vh] w-100'>

        <div className='top-0 left-0 right-0 bottom-0 max-w-100 max-h-[85vh] absolute'>

          <NavBar/>

          <ParticlesComponent id="particles" />

        </div>

        <div>

          <HeroSection />

        </div>

      </section>

{/* First section */}

{/* About US section */}
     <AboutUs/>

{/* About US section */}


{/* Experience Section */}
<MyExperience/>
{/* Experience Section */}
    </>
  )
}

export default App
