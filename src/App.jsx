import './App.css'
import ParticlesComponent from './components/Particle';
import ProjectSection from './components/ProjectSection';
function App() {


  return (
    <>
      <section className='h-[100vh] w-100 realtive border-2 border-rose-500'>

        <div className='top-0 left-0 right-0 bottom-0 z-[-1] max-w-100 max-h-[100vh] absolute border-2 border-rose-900'>
          <ParticlesComponent id="particles" />
        </div>

        <h1 className="text-3xl font-bold underline ">
          Hello world!
        </h1>

      </section>


      <ProjectSection />


    </>
  )
}

export default App
