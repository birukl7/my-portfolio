import React from 'react'
import picOne from '/images/body-images/UIUX.jpg'
import picTwo from '/images/body-images/web-development.jpg'
import benKolde from '/images/body-images/ben-kolde.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa0, faUserInjured } from '@fortawesome/free-solid-svg-icons'
import { faUikit } from '@fortawesome/free-brands-svg-icons'

function Service(props) {
  return (
    <div className={`${props.class}`}>
      <section id='service' className={`${props.classSec}  pt-16 static`}>
        <h2 className='text-5xl font-Truculenta font-semibold py-3'>Services</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 p-3'>
          <div className='flex flex-col items-center rounded-xl overflow-hidden bg-gray-700 dark:bg-white '>
            <div className='   overflow-hidden '>
              <img src={picOne} alt="" className='' />
              </div>
            <div className='p-3'>
              <h3 className='font-semibold text-center py-2 font-Truculenta text-4xl'>UI/UX Design</h3>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, animi?</p>
            </div>

          </div>


          <div className='flex flex-col items-center rounded-xl overflow-hidden bg-gray-700 dark:bg-white'>
            <div className='h-60 w-full  bg-no-repeat bg-cover bg-center ' style={{backgroundImage: `url(${benKolde})`}}>
              </div>
            <div className='p-3'>
              <h3 className='font-semibold text-center py-2 font-Truculenta text-4xl'>Web Development</h3>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, animi?</p>
            </div>
          </div>

          <div className='flex flex-col items-center rounded-xl overflow-hidden bg-gray-700 dark:bg-white'>
            <div className='h-60 w-full  bg-no-repeat bg-cover bg-center ' style={{backgroundImage: `url(${benKolde})`}}>
              </div>
            <div className='p-3'>
              <h3 className='font-semibold text-center py-2 font-Truculenta text-4xl'>Web Development</h3>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, animi?</p>
            </div>
          </div>

          
        </div>
        <p className='font-Truclenta text-center py-3'>Looking for a custom job? <a href="#contact " className='text-red-400'>Click here </a>to contact me ✨</p>
      </section>
    </div>

  )
}

export default Service
