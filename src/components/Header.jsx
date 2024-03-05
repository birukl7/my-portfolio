import React, { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faComputer, faDesktop, faHome, faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';

import profilePictureDark from '/images/home-images/logo.png';
import profilePictureLight from '/images/home-images/logo-dark.png';



function Header() {
  const [theme, setTheme] = useState('light');
  const [dropDown, setDropDown] = useState(false);
  const dropdownRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDown(!dropDown);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [dropDown]);


  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // what a shame
  //dark:bg-slate-900 bg-slate-100 dark:text-slate-100 text-slate-900
  //

  const bg = 'dark:bg-slate-900';

  const changeTheme = ()=>{
    setTheme(theme === 'dark' ? 'light': 'dark');
  }

  const systemTheme = ()=>{
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(darkQuery){ setTheme('light')}
    else {setTheme('dark')}
    setDropDown(!dropDown);
  }



 

  const navLinkClasses = 'sm:after:block transition-all duration-300 ease-linear sm:after:w-0 after:transition-all after:duration-200 after:ease-linear sm:after:h-0.5 sm:after:rounded-sm sm:hover:after:bg-yellow-300 sm:hover:after:w-full hover:text-yellow-300 dark:hover:text-red-600 dark:hover:after:bg-red-600 hover:bg-slate-600 sm:hover:bg-transparent dark:hover:bg-slate-200 sm:dark:hover:bg-transparent py-4 sm:py-0 px-5 sm:px-0 rounded-xl';
  return (
    <>
      <header className='text-md font-semibold p-2 fixed w-full bg-pink-300 dark:bg-yellow-400'>
        <div className='flex justify-between items-center'>
            <img className='w-16' src={theme === 'dark' ? profilePictureLight : profilePictureDark} alt="" />
            <div className='w-9 h-1 bg-slate-900 dark:bg-slate-100 rounded-full relative
            after:bg-slate-900 after:dark:bg-slate-100 after:block after:w-full after:absolute after:top-2 after:h-1 after:rounded-full
            before:bg-slate-900 before:dark:bg-slate-100 before:block before:w-full before:absolute before:bottom-2 before:h-1 before:rounded-full
            '></div>
        </div>
        <nav className=' fixed top-0 bottom-0 right-20 left-0 bg-slate-700 dark:bg-slate-300  flex flex-col justify-between items-center p-5 '>
          <ul className='flex flex-col items-center justify-between pt-7'>
            <li className='mb-10 w-full'><a href="#home" className='px-7 py-2 rounded-md hover:bg-slate-600 dark:hover:bg-slate-100 hover:text-yellow-300 dark:hover:text-red-400 w-full'><FontAwesomeIcon className='mr-2' icon={faHome}/>Home</a></li>
            <li className='mb-10 w-full'><a href="#about" className='px-7 py-2 rounded-md hover:bg-slate-600 dark:hover:bg-slate-100 hover:text-yellow-300 dark:hover:text-red-400 '><FontAwesomeIcon className='mr-2' icon={faHome}/>About</a></li>
            <li className='mb-10 w-full'><a href="#service" className='px-7 py-2 rounded-md hover:bg-slate-600 dark:hover:bg-slate-100 hover:text-yellow-300 dark:hover:text-red-400 '><FontAwesomeIcon className='mr-2' icon={faHome}/>Service</a></li>
            <li className='mb-10 w-full'><a href="#expert" className='px-7 py-2 rounded-md hover:bg-slate-600 dark:hover:bg-slate-100 hover:text-yellow-300 dark:hover:text-red-400 '><FontAwesomeIcon className='mr-2' icon={faHome}/>Experience</a></li>
            <li className='mb-10 w-full'><a href="#works" className='px-7 py-2 rounded-md hover:bg-slate-600 dark:hover:bg-slate-100 hover:text-yellow-300 dark:hover:text-red-400 '><FontAwesomeIcon className='mr-2' icon={faHome}/>Works</a></li>
            <li className='mb-10 w-full'><a href="#blog" className='px-7 py-2 rounded-md hover:bg-slate-600 dark:hover:bg-slate-100 hover:text-yellow-300 dark:hover:text-red-400 '><FontAwesomeIcon className='mr-2' icon={faHome}/>Blog</a></li>
            <li className='mb-10 w-full'><a href="#contact" className='px-7 py-2 rounded-md hover:bg-slate-600 dark:hover:bg-slate-100 hover:text-yellow-300 dark:hover:text-red-400 '><FontAwesomeIcon className='mr-2' icon={faHome}/>Contact</a></li>
            {/* <li><Dropdown class={'hidden sm:relative'} onclick={changeTheme} icon1={faMoon} icon2={faLightbulb} icon3={faDesktop}/></li> */}
          </ul>
          
          <ul className='w-full -mt-8'>
            <li><hr className='w-28 my-0 mx-auto mb-2 bg-slate-800 h-0.5 '/></li>
              <ul className='flex justify-center gap-5 text-xl'>
                <a href="#"><li><FontAwesomeIcon icon={faGithub}/></li></a>
                <a href=""><li><FontAwesomeIcon icon={faLinkedinIn}/></li></a>
                <a href=""><li><FontAwesomeIcon icon={faTelegram} /></li></a>
              </ul>
            <li><hr className='w-28 my-0 mx-auto mt-2 bg-slate-800 h-0.5'/></li>
          </ul>

          <ul className='flex items-center gap-2'>
            <span className='inline'>Themes: </span>
            <li className=''>
              <div  className=' border dark:border-slate-950 p-1 relative px-4 rounded-xl'> 
                {theme === 'dark'? 
                <button title='Light theme' onClick={()=>{
                  setDropDown(!dropDown)
                }}><FontAwesomeIcon icon={faLightbulb} className='mr-2'/> Light <FontAwesomeIcon  /></button> :
               <button onClick={()=>{
                setDropDown(!dropDown)
              }} ><FontAwesomeIcon icon={faMoon} className='mr-2' /> Dark</button>} 

                <div className={!dropDown ? 'hidden' : 'absolute flex flex-col bg-white text-black dark:text-slate-200 bottom-10 w-32 p-3 rounded-xl left-0 ' }>
                  <button title='Light theme' onClick={
                    ()=>{
                      changeTheme()
                      setDropDown(!dropDown)
                    }} className='border-b-1 bg-slate-200 dark:bg-slate-800 rounded-md border-slate-200 py-1 px-3 mb-2'>
                    {theme === 'dark'?<DropDownBtn icon={faMoon} text={'Dark'} iconClass={'mr-4'}/>: <DropDownBtn icon={faLightbulb} text={'Light'} iconClass={'mr-4'}/> }</button>
                  <button onClick={systemTheme} className='border-b-1 bg-slate-200 rounded-md border-slate-200 dark:bg-slate-800 py-1 px-3'><FontAwesomeIcon icon={faComputer} className='mr-0.5'/> System</button>
                </div> 
             </div>
            </li>
          </ul>
          
            <p className='text text-xs  align-bottom font-extralight'>Biruk Lemma {formatArea('')} 2024</p>
        </nav>
      </header>
    </>
  )
}

const formatArea = (val) => {
  return (<span>{val}&copy;</span>);
}

const DropDownBtn= (props)=>{
  return(
    <>
      <FontAwesomeIcon className={props.iconClass} icon={props.icon}/>
      <span className={props.spanClass}>{props.text}</span>
    </>
  )
}



{/* function Dropdown(props){
  return(
    <div className={props.class}>
    <button onClick={props.onclick}>
      {theme === 'dark'? <FontAwesomeIcon icon={faLightbulb} /> props.message : </button>
    <button onClick={systemTheme}><FontAwesomeIcon icon={faComputer}/> System</button>
  </div>
  )
} */}

export default Header
