import './App.css'
import ParticlesComponent from './components/Particle';
import ProjectSection from './components/ProjectSection';
import NavBar from './components/NavBar';
function App() {


  return (
    <>

      <NavBar/>


      <section className='h-[90vh] w-100 pt-4'>

        <div className='top-0 left-0 right-0 bottom-0 z-[-1] max-w-100 max-h-[90vh] absolute border-2 border-rose-900'>
          <ParticlesComponent id="particles" />
        </div>

      </section>


      <ProjectSection />


    </>
  )
}

export default App
