import React, { useState, useEffect } from 'react';
import './App.css';
import Homey from './components/Homey';
import AboutPage from './pages/AboutPage';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Footer from './pages/Footer';
import LandingPage from './pages/LandingPage';
import RecentWorks from './pages/RecentWorks';
import Service from './pages/Service';
import Cursor from './components/Cursor';
import bgImage from '/images/body-images/bg-image-1.jpg';
import CenterMode from './components/AdaptiveHeight';

function App() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const handleTouchStart = () => {
      setIsTouchDevice(true);
      window.removeEventListener('touchstart', handleTouchStart); // Remove touch event listener after detecting touch
    };

    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart); // Cleanup event listener on unmount
    };
  }, []);

  const toggleMobileNav = () => {
    const navBar = document.querySelector('#nav-bar');
    const hamburger = document.querySelector('#hamburger');
    hamburger.classList.add('h-1')
    hamburger.classList.remove('h-0')
    hamburger.classList.remove('after:rotate-45')
    hamburger.classList.remove('after:-translate-y-2')
    hamburger.classList.remove('before:-rotate-45')
    hamburger.classList.remove('before:translate-y-3')

    // navBar.classList.remove('p-5');
    // navBar.classList.remove('w-80');
    // navBar.classList.add('w-0');
    navBar.classList.remove('left-0')
    navBar.classList.add('-left-full')
  };


  return (
    <>
      {/* {!isTouchDevice && <Cursor />} */}
      {/* <Cursor /> */}
      <section className=' '>
        <div>
          <Homey class={'text-slate-100 dark:text-slate-900'}/>
        </div>
        <div className=' md:pl-custom-p'>
          <main className='-z-20  ' onClick={toggleMobileNav}>

            <div className='max-w-screen-xl my-0 mx-auto w-11/12 text-slate-100 dark:text-slate-900' >
            <LandingPage />
            </div>
            
            <div className=' bg-slate-200 dark:bg-slate-100 text-slate-900 dark:text-slate-900 md:h-screen' >
              <div className='max-w-screen-xl my-0 mx-auto w-11/12 '>
                <AboutPage />
              </div>
            </div>
            
            <div className='text-slate-100 dark:text-slate-900 '>
              <div className='max-w-screen-xl my-0 mx-auto w-11/12 '>
                <Service class={''} classSec={''} />
              </div>
            </div>
            
            <section className='text-slate-100 dark:text-slate-900 ' >
              <div className='max-w-screen-xl my-0 mx-auto w-11/12 md:h-screen flex justify-center items-center'>
                <Experience />
              </div>
            </section>
            
            <div className='text-slate-100 dark:text-slate-900 '>
              <div className='max-w-screen-xl my-0 mx-auto w-11/12 '>
                <RecentWorks />
              </div>
            </div>
            
            <div className='text-slate-100 dark:text-slate-900 '>
              <div className='max-w-screen-xl my-0 mx-auto w-11/12 '>
                {/* <Clients /> */}
                <CenterMode />
              </div>
            </div>

            <div className='text-slate-100 dark:text-slate-900 '>
              <div className='max-w-screen-xl my-0 mx-auto w-11/12 '>
                <Contact />
              </div>
            </div>
            
            
          </main>

            <div className='text-slate-100 dark:text-slate-900 -z-30'>
              <div className='max-w-screen-xl my-0 mx-auto w-11/12 '>
                <Footer />
              </div>
            </div>

          
        </div>

      </section>
      

    </>
  );
}

export default App;
