import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faCaretDown, faCaretUp, faChartSimple, faComputer, faCubesStacked, faDesktop, faFeather, faHome, faLightbulb, faMoon, faPerson, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';

import profilePictureDark from '/images/home-images/logo.png';
import profilePictureLight from '/images/home-images/logo-dark.png';

function Homey() {
  const [theme, setTheme] = useState('light'); // changed here light->DARK
  const [dropDown, setDropDown] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.id;
        }
      });

      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const systemTheme = () => {
    const darkQuery = !window.matchMedia('(prefers-color-scheme: light)').matches; //changed here !
    setTheme(darkQuery ? 'light' : 'dark');
    setDropDown(false);
  };

  const toggleMobileNav = () => {
    const navBar = document.querySelector('#nav-bar');
    const hamburger = document.querySelector('#hamburger');
    hamburger.classList.toggle('h-1')
    hamburger.classList.toggle('h-0')
    hamburger.classList.toggle('after:rotate-45')
    hamburger.classList.toggle('after:-translate-y-2')
    hamburger.classList.toggle('before:-rotate-45')
    hamburger.classList.toggle('before:translate-y-3')

    // navBar.classList.toggle('p-5');
    navBar.classList.toggle('left-0')
    navBar.classList.toggle('-left-full')
    // navBar.classList.toggle('w-80');
    // navBar.classList.toggle('w-0');
  };

  const navLinks = [
    { href: '#home', text: 'Home', icon: faHome },
    { href: '#about', text: 'About', icon: faUser},
    { href: '#service', text: 'Service', icon: faChartSimple },
    { href: '#expert', text: 'Experience' , icon: faCubesStacked},
    { href: '#works', text: 'Works', icon: faSuitcase },
    // { href: '#blog', text: 'Blog', icon: faFeather },
    { href: '#contact', text: 'Contact', icon: faAddressCard }
  ];

  return (
    <div className='bg-dark-blue-1 dark:bg-slate-200 '>
      <header className='text-md font-semibold p-2 fixed w-full  dark:bg-slate-200 max-w-screen-xl my-0 mx-auto right-0 left-0 bg-bg-blue  backdrop-blur-3xl
      md:flex md:justify-between md:items-center md:pb-4 z-10'>
        <div className='flex justify-between items-center'>
          <img className='w-20 md:mt-3 ml-2 sm:ml-0' src={theme === 'dark' ? profilePictureLight : profilePictureDark} alt="" />
          
          <div className='w-7 h-1 mr-1 bg-slate-100 dark:bg-slate-900 rounded-full relative after:bg-slate-100 after:dark:bg-slate-900 after:block after:w-full after:absolute after:top-2 after:h-1 after:rounded-full 
           before:bg-slate-100 before:dark:bg-slate-900 before:block before:w-full before:absolute before:bottom-2 before:h-1 before:rounded-full cursor-pointer before:transition-all  before:ease-in-out before:duration-200 after:transition-all after:ease-in-out after:duration-200 
           md:hidden' onClick={toggleMobileNav} id='hamburger'></div>
        </div>

        <nav className='fixed h-screen top-0 -bottom-40 -left-full right-20 transition-left ease-in-out duration-500 p-5 overflow-hidden  bg-dark-blue-1  backdrop-blur-3xl  dark:bg-slate-300 flex flex-col  justify-between items-center w-80 text-sm font-light dark:font-semibold
        md:w-auto md:static md:flex-row md:items-center md:-mb-8 md:pt-0 md:px-7 md:top-0 md:h-16 md:overflow-visible md:-mt-4 md:bg-transparent md:dark:bg-transparent  md:pb-0 z-50 ' id='nav-bar'>
          <ul className='flex flex-col items-center justify-between pt-7
          md:flex-row md:pt-5 md:pl-3 '>
            {navLinks.map(navLink => (
              <li key={navLink.href} className='mb-5 w-full md:mr-3'>
                <a href={navLink.href} className={`px-7 py-1 rounded-md hover:bg-slate-600 md:hover:bg-transparent dark:hover:bg-transparent transition ease-in-out duration-300 dark:hover:outline dark:hover:outline-1 hover:outline hover:outline-1 hover:outline-slate-200 dark:hover:outline-slate-900 hover:dark:bg-slate-200 ${navLink.href === `#${currentSection}` ? 'active-link' : ''}`} onClick={toggleMobileNav}>
                  <FontAwesomeIcon className='mr-3 md:hidden' icon={navLink.icon} />
                  {navLink.text}
                </a>
              </li>
            ))}
          </ul>
          <ul className='w-full -mt-8 md:hidden '>
            <li><hr className='w-28 my-0 mx-auto mb-2 bg-slate-800 h-0.5' /></li>
            <ul className='flex justify-center gap-5 text-xl'>
              <a href="#" className='hover:text-yellow-300 dark:hover:text-red-400 transition ease-in-out duration-300'><li><FontAwesomeIcon icon={faGithub} /></li></a>
              <a href="#" className='hover:text-yellow-300 dark:hover:text-red-400 transition ease-in-out duration-300'><li><FontAwesomeIcon icon={faLinkedinIn} /></li></a>
              <a href="#" className='hover:text-yellow-300 dark:hover:text-red-400 transition ease-in-out duration-300'><li><FontAwesomeIcon icon={faTelegram} /></li></a>
            </ul>
            <li><hr className='w-28 my-0 mx-auto mt-2 bg-slate-800 h-0.5' /></li>
          </ul>
          <ul className='flex items-center gap-2 '>
            <span className='inline md:hidden'>Themes: </span>
            <li className=''>
              <div className='border dark:border-slate-950 p-1 relative px-2 rounded-xl hover:shadow-slate-00 hover:shadow-md dark:hover:bg-transparent transition ease-linear 
               ' ref={dropdownRef}>
                {theme === 'dark' ?
                  <button title='Light theme' onClick={() => setDropDown(!dropDown)}>
                    <FontAwesomeIcon icon={faLightbulb} className='mr-2' /> <span className='sm:hidden mg:inline-block'>{''}</span> <FontAwesomeIcon icon={dropDown ? faCaretUp : faCaretDown} className=' sm:hidden mg:inline-block' />
                  </button> :
                  <button onClick={() => setDropDown(!dropDown)}>
                    <FontAwesomeIcon icon={faMoon} className='mr-2' /> <span className='sm:hidden mg:inline-block'>{''}</span> <FontAwesomeIcon icon={dropDown ? faCaretUp : faCaretDown} className=' sm:hidden mg:inline-block' />
                  </button>}
                <div className={!dropDown ? 'hidden' : 'absolute flex flex-col bg-white text-black dark:text-slate-200 bottom-10 w-32 p-3 rounded-xl left-0 dark:border dark:w-36 outline outline-1 dark:outline-slate-800  md:-mb-36 '}>
                  <button title='Light theme' onClick={() => { changeTheme(); setDropDown(false); }} className='border-b-1 hover:bg-slate-200 bg-slate-100 dark:text-black rounded-md border-slate-200 py-1 px-3 mb-2 outline outline-1 dark:outline dark:outline-1'>
                    {theme === 'dark' ? <DropDownBtn icon={faMoon} text={'Dark'} iconClass={'mr-4'} /> : <DropDownBtn icon={faLightbulb} text={'Light'} iconClass={'mr-4'} />}
                  </button>
                  <button onClick={systemTheme} className='border-b-1 hover:bg-slate-200 bg-slate-100 rounded-md border-slate-200 text-black py-1 px-3 dark:outline dark:outline-1 outline-1 outline'>
                    <FontAwesomeIcon icon={faComputer} className='mr-0.5 ' /> System
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <p className='text text-xs align-bottom font-extralight md:hidden'>Biruk Lemma {formatArea('')} 2024</p>
        </nav>
      </header>
    </div>
  )
}

const formatArea = (val) => {
  return (<span>{val}&copy;</span>);
}

const DropDownBtn = (props) => {
  return (
    <>
      <FontAwesomeIcon className={props.iconClass} icon={props.icon} />
      <span className={props.spanClass}><span className=''>{props.text}</span></span>
    </>
  )
}

export default Homey;

