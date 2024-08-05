import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //free Font Awesome Icons for the social media icons
import  { useEffect, useState } from 'react'
import myPicture from '/images/body-images/my-picture.svg' // The picture in the landing page
import { faGithub, faLinkedinIn, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


function LandingPage() {
  const [screenH, setScreenH] =useState(window.innerHeight)
  const [isImageLoaded, setIsImageLoaded] = useState(false);
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

    useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsImageLoaded(true);
    };
    img.src = myPicture;
  }, []);


  return (
    <section className="mb-5 relative"  id='home'>
      {/* A div element to center a container */}
      
      <div className='h-screen  flex justify-center flex-col relative items-center mx-auto'>
        <div className='flex flex-col items-centers relative justify-center mx-auto'>
          <div className='mx-auto bg-yellow-400 dark:bg-blue-400 relative sm:w-[370px] sm:h-[333px] overflow-hidden' id='landing-pic-container'>
          {!isImageLoaded && (
            <Skeleton circle={true} height={'100%'} width={'100%'} />
          )}
          {isImageLoaded && (
            <img src={myPicture} className='w-full h-full object-contain' alt="profile" />
          )}

          </div>

          <div className='mt-3 flex flex-col mx-auto'>
            <h1 className='text-center sm:text-6xl text-4xl font-Truculenta font-extrabold '>Full-Stack Developer<span className='text-4xl animate-wiggle hover:cursor-pointer'>👋</span></h1>
            <div className='flex items-start justify-center '>
              <p className=' my-4 md:text-xl font-Truculenta sm:w-[310px] align-middle  w-[250px]' style={{textAlign: 'center'}}> Hi, I'm Biruk Lemma. A passionate Full-Stack Developer based in Ethiopia, Addis Ababa 📍.</p>
              <ul className='my-4 text-xl font-Truculenta dynamic-texts hidden'>
              </ul>
            </div>
 
          </div>
          <ul className='flex justify-evenly sm:justify-around sm:my-5 my-4'>
            <a href="https://github.com/birukl7" target='_blank'><FontAwesomeIcon className='md:text-3xl text-2xl  sm:text-3xl hover:text-yellow-300 dark:hover:text-blue-700 transition-all duration-200 ease-linear cursor-pointer' icon={faGithub}/></a>
            <a href="https://linkedin.com/in/biruk-lemma" target='_blank'><FontAwesomeIcon className='md:text-3xl text-2xl  sm:text-3xl hover:text-yellow-300 dark:hover:text-blue-700 transition-all duration-200 ease-linear cursor-pointer' icon={faLinkedinIn}/></a>
            <a href="https://twitter.com/biruk_777?t=ncFmziryKXbgwMzOcFuRxw&s=09" target='_blank'><FontAwesomeIcon className='md:text-3xl text-2xl  sm:text-3xl hover:text-yellow-300 dark:hover:text-blue-700 transition-all duration-200 ease-linear cursor-pointer' icon={faTwitter}/></a>
            <a href="https://wa.me/+251944055361" target='_blank'><FontAwesomeIcon className='md:text-3xl text-2xl  sm:text-3xl hover:text-yellow-300 dark:hover:text-blue-700 transition-all duration-200 ease-linear cursor-pointer' icon={faWhatsapp}/></a>
            <a href="https://t.me/birukl_777" target='_blank'><FontAwesomeIcon className='md:text-3xl text-2xl  sm:text-3xl hover:text-yellow-300 dark:hover:text-blue-700 transition-all duration-200 ease-linear cursor-pointer' icon={faTelegram}/></a>
          </ul>
         
          <a href="#contact" className='bg-red-500 dark:text-white w-auto my-0 mx-auto px-7 py-2 font-semibold text-sm  rounded-full hover:bg-red-600 transition-all duration-300 ease-in-out sm:mt-1 mt-7'>
            Say Hi
          </a>

          
        </div>
        {screenH >= 760 ? (
          <div className='md:flex flex-col items-center absolute bottom-3 mx-auto hidden' >
            <div className='p-3 outline outline-1 rounded-full w-5 h-10' >
              <div className='w-1 h-1 bg-white rounded-full dark:bg-black scroll-css' id='scroll'></div>
            </div>
            <p className='mt-2 text-sm font-extralight'>Scroll Down</p>
          </div>  
        ) : null}
      </div>   
        {/* <img src={polygon1} alt="" className='animate-[wiggle_30s_ease-in-out_infinite]  -z-20 absolute w-10 sm:top-80  sm:left-60 top-40 left-12 rotate-12 transition-all  duration-1000 ease-in-out ' />
        <img src={polygon2} alt="" className='animate-[wiggle_20s_ease-in-out_infinite] -z-20 absolute w-10  sm:right-36 sm:bottom-10 top-16 right-20 rotate-6 transition-all  duration-1000 ease-in-out' />
        <img src={polygon3} alt="" className=' -z-20 absolute w-10 sm:top-32 top-32 transition-all  duration-1000 ease-in-out' />
        <img src={polygon4} alt="" className='  -z-20 absolute w-10 sm:bottom-20 top-56 right-0 transition-all  duration-1000 ease-in-out' />
        <img src={polygon5} alt="" className='  -z-20 absolute w-10 sm:top-60 sm:right-3/4 bottom-32 transition-all  duration-1000 ease-in-out' />
        <img src={polygon6} alt="" className='  -z-20 absolute w-10 sm:top-32 sm:right-80 bottom-80 right-0  -rotate-45 transition-all  duration-1000 ease-in-out' />
        <img src={polygon7} alt="" className='  -z-20 absolute w-10  sm:right-3/4 sm:bottom-80  left-0 bottom-80 transition-all  duration-1000 ease-in-out' />
        <img src={polygon8} alt="" className='  -z-20 absolute w-10 sm:bottom-80 sm:right-0 hidden sm:inline-block transition-all  duration-1000 ease-in-out' />
        <img src={polygon9} alt="" className='  -z-20 absolute w-10 sm:top-1/2 sm:right-80 hidden sm:inline-block transition-all  duration-1000 ease-in-out' />
        <img src={polygon10} alt="" className='  -z-20 absolute w-10 sm:bottom-32 sm:right-72 hidden sm:inline-block  transition-all  duration-1000 ease-in-out' /> */}
    </section>
  )
}

export default LandingPage
