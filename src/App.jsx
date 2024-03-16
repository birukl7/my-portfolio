
import './App.css'
import Homey from './components/Homey';
import AboutPage from './pages/AboutPage';
import Home from './pages/Home';


import LandingPage from './pages/LandingPage';
import Service from './pages/Service';



function App() {
  return (
    <>
      <Homey />
      <main className='max-w-screen-xl my-0 mx-auto
      w-11/12 -z-20 '>
         <LandingPage/>
         <AboutPage/>
         <Service />
      </main>
    </>
  )
}



export default App
