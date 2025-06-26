
import './App.css'
import Navbar from './components/Navbar'
import { Spotlight } from './components/Spotlight'
import Intro from './components/Intro'
import { SparklesCore } from './components/Sparkles'
import TechMarquee from './components/Techlogos'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'

function App() {

  return (
    <div className="App flex flex-col bg-black min-h-screen">

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60 z-20 pointer-events-none"
        fill="white"
      />

      <div className="w-full max-w-7xl">
        <Navbar/>
      </div>

      <div className="w-full absolute inset-0 h-screen pointer-events-none ">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div id='home' className='relative w-full max-w-7xl mx-auto pt-13 px-4 scroll-mt-[100px]'>
        <Intro/>
      </div>

      <div className="bg-black mt-15 text-white p-8">
        <div className='flex flex-col w-4/10 justify-center items-center mx-auto'>
          <h1 className="text-2xl max-sm:text-xl font-bold text-center mb-3 font-mont">Tools Used</h1>
          <div className="mt-1 h-0.5 w-60 bg-gradient-to-r from-black via-white to-black rounded-full" />
        </div>

        <TechMarquee />
      </div>

      {/* Project Section */}

      <div id='projects' className="bg-black min-h-screen text-white p-8 m-20 scroll-mt-[100px]">
        <div className='flex flex-col w-4/10 justify-center items-center mx-auto'>
          <h1 className="text-2xl max-sm:text-xl font-bold text-center mb-3 font-mont">Projects I have worked on</h1>
          <div className="mt-1 h-0.5 w-100 bg-gradient-to-r from-black via-white to-black rounded-full" />
        </div>

        <div className='mt-25'>
          <ProjectSection/>
          
        </div>

      </div>

      <div id='contact' className="bg-black min-h-screen text-white p-8 m-20 scroll-mt-[100px]">
        <div className='flex flex-col w-4/10 justify-center items-center mx-auto'>
          <h1 className="text-2xl max-sm:text-xl font-bold text-center mb-3 font-mont">Contact Me</h1>
          <div className="mt-1 h-0.5 w-100 bg-gradient-to-r from-black via-white to-black rounded-full" />
        </div>

        <div className='mt-25'>
          <ContactSection/>
          
        </div>

        <div className='mt-15 max-w-5xl mx-auto flex flex-col justify-center items-center italic text-[min(7vw,18px)] font-mont border-1 border-dashed rounded-2xl border-zinc-700 p-7'>
            <span className='pt-2 flex text-center'>"Ever tried ever failed no matter try again fail again"</span>
            <span className='block text-[min(7vw,20px)] text-center font-mont italic font-bold p-2'>"Fail Better Code Better"</span>
        </div>

        <div className="mt-20 h-0.5 w-full bg-gradient-to-r from-black via-white to-black rounded-full" />

        <div className='mt-15 max-w-5xl mx-auto flex flex-col text-zinc-200 justify-center items-center text-[min(7vw,14px)] font-mont'>
            ⓒ Developed with ❤️ by Nikhil Kalaskar
        </div>


      </div>




    </div>
  )
}

export default App
