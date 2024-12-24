import './App.css'
import ParticlesComponent from './components/Particle';
import ProjectSection from './components/ProjectSection';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
function App() {


  return (
    <>

      <section className='h-[100vh] w-100'>

        <div className='top-0 left-0 right-0 bottom-0 max-w-100 max-h-[85vh] absolute'>

          <NavBar/>

          <ParticlesComponent id="particles" />

        </div>

        <div>

          <HeroSection />

        </div>

      </section>


      <ProjectSection />


    </>
  )
}

export default App
