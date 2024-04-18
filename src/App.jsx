import React, { useState, useEffect } from 'react';
import './App.css';
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
import Cursor from './components/Cursor';

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
      <Homey />
      <main className='max-w-screen-xl my-0 mx-auto w-11/12 -z-20 ' onClick={toggleMobileNav}>
        <LandingPage />
        <AboutPage />
        <Service class={''} classSec={''} />
        <Experience />
        <RecentWorks />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
