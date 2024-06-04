import React from 'react'
import benKolde from '/images/body-images/ben-kolde.jpg'
import webDev from '/images/body-images/webDev.jpg'
import moblieDev from '/images/body-images/mobileDev.jpg'
import uiUx from '/images/body-images/uiuximg.jpg'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'

function Service(props) {

  const listService = [
    'eCommerce webiste'
  ]

  return (
    <div className={`${props.class}`}>

      <section id='service' className={`${props.classSec}  pt-16 static`}>

        <SectionTitle text={'Services'} />

        <div className='flex justify-center items-center'>
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 p-3 max-w-5xl'>
              <ServiceCard image={uiUx} title={'Web Develpment'} text={'Passionate about creating responsive web applications with intuitive user interfaces. Ready to collaborare on your next project.'} />
              <ServiceCard image={webDev} title={'UI/UX'} text={'Ready to craft intuitive intefaces that enhance user satisfaction. Skilled in wireframing, protyping, and crating engaging user experiences.'}/>
              <ServiceCard image={moblieDev} title={'Mobile Application'} text={'With a focus on intuitive design and robust performance, I strive to create impactful solutions that enhance user experience.'}/>            
            </div>
            <p className='font-Truclenta text-center py-3'>Looking for a custom job? <a href="#contact " className='text-red-400'>Click here </a>to contact me ✨</p>
          </div>

        </div>

      </section>
    </div>

  )
}

export default Service
