import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faComputer, faDesktop, faHome, faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';

import profilePictureDark from '/images/home-images/logo.png';
import profilePictureLight from '/images/home-images/logo-dark.png';

function Homez() {
  const [theme, setTheme] = useState('light');
  const [dropDown, setDropDown] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // Add state for navbar visibility
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);

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

  useEffect(() => {
    // Add event listener to handle clicks outside navbar
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavbarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const systemTheme = () => {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(darkQuery ? 'light' : 'dark');
    setDropDown(false);
  };

  const toggleMobileNav = () => {
    setIsNavbarOpen(!isNavbarOpen); // Toggle navbar visibility
  };

  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#service', text: 'Service' },
    { href: '#expert', text: 'Experience' },
    { href: '#works', text: 'Works' },
    { href: '#blog', text: 'Blog' },
    { href: '#contact', text: 'Contact' }
  ];

  return (
    <>
      <header className='text-md font-semibold p-2 fixed w-full bg-pink-300 dark:bg-yellow-400'>
        <div className='flex justify-between items-center'>
          <img className='w-16' src={theme === 'dark' ? profilePictureLight : profilePictureDark} alt="" />
          <div className='w-9 h-1 bg-slate-900 dark:bg-slate-100 rounded-full relative after:bg-slate-900 after:dark:bg-slate-100 after:block after:w-full after:absolute after:top-2 after:h-1 after:rounded-full before:bg-slate-900 before:dark:bg-slate-100 before:block before:w-full before:absolute before:bottom-2 before:h-1 before:rounded-full cursor-pointer before:transition-all  before:ease-in-out before:duration-200 after:transition-all after:ease-in-out after:duration-200 ' onClick={toggleMobileNav} id='hamburger'/>
        </div>
        <nav ref={navbarRef} className={`fixed top-0 bottom-0 transition ease-in-out duration-300 overflow-hidden left-0 bg-slate-700 dark:bg-slate-300  flex flex-col justify-between items-center w-0${isNavbarOpen ? ' w-80 p-5' : ''}`} id='nav-bar'>
          <ul className='flex flex-col items-center justify-between pt-7'>
            {navLinks.map(navLink => (
              <li key={navLink.href} className='mb-10 w-full'>
                <a href={navLink.href} className={`px-7 py-2 rounded-md hover:bg-slate-600 dark:hover:bg-transparent transition ease-in-out duration-300 dark:hover:outline dark:hover:outline-1 hover:outline hover:outline-1 hover:outline-slate-200 dark:hover:outline-slate-900 hover:dark:bg-slate-200 ${navLink.href === `#${currentSection}` ? 'active-link' : ''}`}>
                  <FontAwesomeIcon className='mr-2' icon={faHome} />
                  {navLink.text}
                </a>
              </li>
            ))}
          </ul>
          <ul className='w-full -mt-8'>
            <li><hr className='w-28 my-0 mx-auto mb-2 bg-slate-800 h-0.5' /></li>
            <ul className='flex justify-center gap-5 text-xl'>
              <a href="#" className='hover:text-yellow-300 dark:hover:text-red-400 transition ease-in-out duration-300'><li><FontAwesomeIcon icon={faGithub} /></li></a>
              <a href="#" className='hover:text-yellow-300 dark:hover:text-red-400 transition ease-in-out duration-300'><li><FontAwesomeIcon icon={faLinkedinIn} /></li></a>
              <a href="#" className='hover:text-yellow-300 dark:hover:text-red-400 transition ease-in-out duration-300'><li><FontAwesomeIcon icon={faTelegram} /></li></a>
            </ul>
            <li><hr className='w-28 my-0 mx-auto mt-2 bg-slate-800 h-0.5' /></li>
          </ul>
          <ul className='flex items-center gap-2'>
            <span className='inline'>Themes: </span>
            <li>
              <div className='border dark:border-slate-950 p-1 relative px-4 rounded-xl hover:shadow-slate-00 hover:shadow-md dark:hover:bg-transparent transition ease-linear ' ref={dropdownRef}>
                {theme === 'dark' ?
                  <button title='Light theme' onClick={() => setDropDown(!dropDown)}>
                    <FontAwesomeIcon icon={faLightbulb} className='mr-2' /> Light <FontAwesomeIcon icon={dropDown ? faCaretUp : faCaretDown} className='ml-2' />
                  </button> :
                  <button onClick={() => setDropDown(!dropDown)}>
                    <FontAwesomeIcon icon={faMoon} className='mr-2' /> Dark <FontAwesomeIcon icon={dropDown ? faCaretUp : faCaretDown} className='ml-2' />
                  </button>}
                <div className={!dropDown ? 'hidden' : 'absolute flex flex-col bg-white text-black dark:text-slate-200 bottom-10 w-32 p-3 rounded-xl left-0 dark:border dark:w-36 outline outline-1 dark:outline-slate-800'}>
                  <button title='Light theme' onClick={() => { changeTheme(); setDropDown(false); }} className='border-b-1 hover:bg-slate-200 bg-slate-100 dark:text-black rounded-md border-slate-200 py-1 px-3 mb-2 outline outline-1 dark:outline dark:outline-1'>
                    {theme === 'dark' ? <DropDownBtn icon={faMoon} text={'Dark'} iconClass={'mr-4'} /> : <DropDownBtn icon={faLightbulb} text={'Light'} iconClass={'mr-4'} />}
                  </button>
                  <button onClick={systemTheme} className='border-b-1 hover:bg-slate-200 bg-slate-100 rounded-md border-slate-200 text-black py-1 px-3 dark:outline dark:outline-1 outline-1 outline'>
                    <FontAwesomeIcon icon={faComputer} className='mr-0.5' /> System
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <p className='text text-xs align-bottom font-extralight'>Biruk Lemma {formatArea('')} 2024</p>
        </nav>
      </header>
    </>
  )
}

const formatArea = (val) => {
  return (<span>{val}&copy;</span>);
}

const DropDownBtn = (props) => {
  return (
    <>
      <FontAwesomeIcon className={props.iconClass} icon={props.icon} />
      <span className={props.spanClass}>{props.text}</span>
    </>
  )
}

export default Homez;