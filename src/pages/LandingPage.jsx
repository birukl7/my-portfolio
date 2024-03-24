import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //free Font Awesome Icons for the social media icons
import  { useEffect, useState } from 'react'
import myPicture from '/images/body-images/my-picture.svg' // The picture in the landing page
import { faGithub, faLinkedinIn, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

/**
 * 
 * Shapes
 */
import polygon1 from '/images/home-images/Polygon 1.svg'
import polygon2 from '/images/home-images/Polygon 2.svg'
import polygon3 from '/images/home-images/Vector 5.svg'
import polygon4 from '/images/home-images/Vector 6.svg'
import polygon5 from '/images/home-images/Vector 7.svg'
import polygon6 from '/images/home-images/Vector 8.svg'
import polygon7 from '/images/home-images/Vector 9.svg'
import polygon8 from '/images/home-images/Vector 10.svg'
import polygon9 from '/images/home-images/Vector 11.svg'
import polygon10 from '/images/home-images/Vector 12.svg'

function LandingPage() {
  const [screenH, setScreenH] =useState(window.innerHeight)
  // const [text, setText]= useState('')
  useEffect(()=>{
    const handleResize= ()=>{
      setScreenH(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    return()=>{
      window.removeEventListener('resize', handleResize);
    }
  }, [])

    // const textload=()=>{
    //   setTimeout(()=>{
    //     setText('UI/UX designer.')
    //   }, 0);
    //   setTimeout(()=>{
    //     setText('enthusiast learner.')
    //   }, 4000);
    //   setTimeout(()=>{
    //     setText('web developer.')
    //   }, 8000);
    // }

    // textload()
    // setInterval(textload, 12000);
    // useEffect(()=>{
    //   const textChange = document.querySelector('.js-text');
    //   textChange.textContent = text; 
    // },[text])


  return (
    <section className="mb-5 relative"  id='home'>
      {/* A div element to center a container */}
      <div className='h-screen  flex justify-center flex-col relative items-center '>
        <div className='flex flex-col items-centers'>
          <div className='  bg-yellow-400 dark:bg-blue-400' id='landing-pic-container'>
            <img src={myPicture} alt="" className='' id='landing-pic'/>
          </div>
          <div className='mt-3 flex flex-col '>
            <h1 className='text-center sm:text-7xl text-6xl font-Truculenta font-extrabold '>Biruk Lemma</h1>
            <div className='flex items-start justify-center '>
              <p className=' my-4 text-xl font-Truculenta'> I'm </p>
              <ul className='my-4 text-xl font-Truculenta dynamic-texts'>
                <li><span className='js-text css-text'>&nbsp; an Enthusiast Learner.</span></li>
                <li><span className='js-text css-text'>&nbsp; a web developer.</span></li>
                <li><span className='js-text css-text'>&nbsp; a UI/UX designer.</span> </li>
                 
              </ul>
            </div>
 
          </div>
          <ul className='flex justify-around sm:my-5 my-4'>
          
            <a href="#"><FontAwesomeIcon className='text-3xl sm:text-3xl hover:text-yellow-300 dark:hover:text-blue-700 transition-all duration-200 ease-linear cursor-pointer' icon={faGithub}/></a>
            <a href="#"><FontAwesomeIcon className='text-3xl sm:text-3xl hover:text-yellow-300 dark:hover:text-blue-700 transition-all duration-200 ease-linear cursor-pointer' icon={faLinkedinIn}/></a>
            <a href="#"><FontAwesomeIcon className='text-3xl sm:text-3xl hover:text-yellow-300 dark:hover:text-blue-700 transition-all duration-200 ease-linear cursor-pointer' icon={faTwitter}/></a>
            <a href="#"><FontAwesomeIcon className='text-3xl sm:text-3xl hover:text-yellow-300 dark:hover:text-blue-700 transition-all duration-200 ease-linear cursor-pointer' icon={faWhatsapp}/></a>
            <a href="#"><FontAwesomeIcon className='text-3xl sm:text-3xl hover:text-yellow-300 dark:hover:text-blue-700 transition-all duration-200 ease-linear cursor-pointer' icon={faTelegram}/></a>
          </ul>
         
          <button className='bg-red-500 dark:text-white w-auto my-0 mx-auto px-7 py-2 font-semibold text-sm  rounded-full hover:bg-red-600 transition-all duration-300 ease-in-out'>Say Hi</button>
          
        </div>
        {screenH >= 760 ? (
          <div className='flex flex-col items-center absolute bottom-3 ' >
            <div className='p-3 outline outline-1 rounded-full w-5 h-10' >
              <div className='w-1 h-1 bg-white rounded-full dark:bg-black scroll-css' id='scroll'></div>
            </div>
            <p className='mt-2 text-sm font-extralight'>Scroll Down</p>
          </div>  
        ) : null}
      </div>   
        <img src={polygon1} alt="" className=' -z-20 absolute w-10 sm:top-80  sm:left-60 top-40 left-12 rotate-12 transition-all  duration-1000 ease-in-out' />
        <img src={polygon2} alt="" className=' -z-20 absolute w-10  sm:right-36 sm:bottom-10 top-16 right-20 rotate-6 transition-all  duration-1000 ease-in-out' />
        <img src={polygon3} alt="" className=' -z-20 absolute w-10 sm:top-32 top-32 transition-all  duration-1000 ease-in-out' />
        <img src={polygon4} alt="" className=' -z-20 absolute w-10 sm:bottom-20 top-56 right-0 transition-all  duration-1000 ease-in-out' />
        <img src={polygon5} alt="" className=' -z-20 absolute w-10 sm:top-60 sm:right-3/4 bottom-32 transition-all  duration-1000 ease-in-out' />
        <img src={polygon6} alt="" className=' -z-20 absolute w-10 sm:top-32 sm:right-80 bottom-80 right-0  -rotate-45 transition-all  duration-1000 ease-in-out' />
        <img src={polygon7} alt="" className=' -z-20 absolute w-10  sm:right-3/4 sm:bottom-80  left-0 bottom-80 transition-all  duration-1000 ease-in-out' />
        <img src={polygon8} alt="" className=' -z-20 absolute w-10 sm:bottom-80 sm:right-0 hidden sm:inline-block transition-all  duration-1000 ease-in-out' />
        <img src={polygon9} alt="" className=' -z-20 absolute w-10 sm:top-1/2 sm:right-80 hidden sm:inline-block transition-all  duration-1000 ease-in-out' />
        <img src={polygon10} alt="" className=' -z-20 absolute w-10 sm:bottom-32 sm:right-72 hidden sm:inline-block  transition-all  duration-1000 ease-in-out' />
    </section>
  )
}

export default LandingPage
