
import './App.css'
import Homey from './components/Homey';
import AboutPage from './pages/AboutPage';
import Experience from './pages/Experience';
import Home from './pages/Home';


import LandingPage from './pages/LandingPage';
import RecentWorks from './pages/RecentWorks';
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
         <Experience/>
         <RecentWorks/>
      </main>
    </>
  )
}



export default App
