
import './App.css'
import Homey from './components/Homey';
import AboutPage from './pages/AboutPage';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Footer from './pages/Footer';
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
         <Clients/>
         <Contact/>
        
      </main>
      <Footer/>
    </>
  )
}



export default App
