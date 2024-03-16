import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //free Font Awesome Icons for the social media icons
import  { useEffect, useState } from 'react'
import myPicture from '/images/body-images/my-picture.svg' // The picture in the landing page
import { faGithub, faLinkedinIn, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function LandingPage() {
  const [screenH, setScreenH] =useState(window.innerHeight)
  useEffect(()=>{
    const handleResize= ()=>{
      setScreenH(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    return()=>{
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  return (
    <section className="mb-5 relative"  id='home'>
      {/* A div element to center a container */}
      <div className='h-screen  flex justify-center flex-col relative items-center '>
        <div className='flex flex-col items-centers'>
          <div className='  bg-yellow-400 dark:bg-blue-400' id='landing-pic-container'>
            <img src={myPicture} alt="" className='' id='landing-pic'/>
          </div>
          <div className='mt-3'>
            <h1 className='text-center sm:text-7xl text-6xl font-Truculenta font-extrabold '>Biruk Lemma</h1>
            <p className='text-center my-4 text-xl font-Truculenta'> I'm a UI/UX designer.</p>
          </div>
          <ul className='flex justify-around sm:my-5 my-4'>
          
            <a href="#"><FontAwesomeIcon className='text-3xl sm:text-3xl hover:text-yellow-300 dark:hover:text-blue-700 transition-all duration-200 ease-linear cursor-pointer' icon={faGithub}/></a>
            <a href="#"><FontAwesomeIcon className='text-3xl sm:text-3xl hover:text-yellow-300 dark:hover:text-blue-700 transition-all duration-200 ease-linear cursor-pointer' icon={faLinkedinIn}/></a>
            <a href="#"><FontAwesomeIcon className='text-3xl sm:text-3xl hover:text-yellow-300 dark:hover:text-blue-700 transition-all duration-200 ease-linear cursor-pointer' icon={faTwitter}/></a>
            <a href="#"><FontAwesomeIcon className='text-3xl sm:text-3xl hover:text-yellow-300 dark:hover:text-blue-700 transition-all duration-200 ease-linear cursor-pointer' icon={faWhatsapp}/></a>
            <a href="#"><FontAwesomeIcon className='text-3xl sm:text-3xl hover:text-yellow-300 dark:hover:text-blue-700 transition-all duration-200 ease-linear cursor-pointer' icon={faTelegram}/></a>
          </ul>
         
          <button className='bg-red-500 dark:text-white w-auto my-0 mx-auto px-8 py-3 font-semibold  rounded-full hover:bg-red-600 transition-all duration-300 ease-in-out'>Say Hi</button>
          
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
    </section>
  )
}

export default LandingPage
