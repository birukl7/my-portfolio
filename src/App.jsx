import React, { useState, useEffect } from 'react';
import './App.css';

import AboutPage from './pages/AboutPage';
import Footer from './pages/Footer';
import LandingPage from './pages/LandingPage';
import RecentWorks from './pages/RecentWorks';
import { useTheme } from './components/ThemeContext';
import HomeNavBar from './components/homeNavBar';

function App() {
 
  const {theme, changeTheme, systemTheme}= useTheme()
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
    navBar.classList.remove('left-0')
    navBar.classList.add('-left-full')
  };

  const closeUnderDev = (e)=>{
    document.querySelector('#web').classList.add('hidden')
  }


  return (
    <>

      <section className=''>
        {/* <div className='fixed  p-4 right-4 rounded-lg  top-4  z-[50] bg-white dark:bg-gray-800 text-black dark:text-white flex items-center gap-x-5 shadow-xl max-w-[250px] sm:max-w-[100%] ' id='web'> <span className='text-xs sm:text-[14px]'>The Website is Under Develpment</span><button onClick={closeUnderDev}><FontAwesomeIcon icon={faX}/></button> </div> */}
        <div>
          <HomeNavBar theme={theme} changeTheme={changeTheme} systemTheme={systemTheme} classes={'text-slate-100 dark:text-slate-900'}/>
        </div>
        
        <div className=' cs:pl-custom-p'>
          <main className='-z-20  ' onClick={toggleMobileNav}>

            <div className='max-w-screen-xl my-0 mx-auto w-11/12 text-slate-100 dark:text-slate-900' >
            <LandingPage />
            </div>
            
            <div className=' bg-slate-200 dark:bg-slate-100 text-slate-900 dark:text-slate-900 pb-32' >
              <div className='max-w-screen-xl my-0 mx-auto w-11/12 '>
                <AboutPage />
              </div>
            </div>

            <div className='text-slate-100 dark:text-slate-900 mt-16'>
              <div className='max-w-screen-xl my-0 mx-auto w-11/12 '>
                <RecentWorks />
              </div>
            </div>
            
            {/* <div className='text-slate-100 dark:text-slate-900 mx-2'>
              <div className='max-w-[1250px] overflow-x-scrollauto my-0 mx-auto '>
                <Service class={''} classSec={''} />
              </div>
            </div> */}
            
            {/* <section className='text-slate-100 dark:text-slate-900 ' >
              <div className='max-w-screen-xl my-0 mx-auto w-11/12 cs:h-screen flex justify-center items-center'>
                <Experience />
              </div>
            </section> */}
            
            {/* <div className='text-slate-100 dark:text-slate-900 '>
              <div className='max-w-screen-xl my-0 mx-auto w-11/12 '>
                <Contact />
              </div>
            </div> */}

            {/* <div>
              <div className='max-w-screen-xl my-0 mx-auto max-w-4xl w-full mt-20 rounded-2xl overflow-hidden h-[400px] px-3' >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.0202980462!2d38.61333544125166!3d8.963479530449137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1715576975392!5m2!1sen!2set" 
                  className='w-full h-full'
                  >
                </iframe>
              </div>

            </div> */}
            
            
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
