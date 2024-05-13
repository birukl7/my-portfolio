import React from 'react'
import benKolde from '/images/body-images/ben-kolde.jpg'
import webDev from '/images/body-images/webDev.jpg'
import moblieDev from '/images/body-images/mobileDev.jpg'
import uiUx from '/images/body-images/uiuximg.jpg'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'

function Service(props) {
  return (
    <div className={`${props.class}`}>

      <section id='service' className={`${props.classSec}  pt-16 static`}>

        <SectionTitle text={'Services'} />

        <div className='flex justify-center items-center'>
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 p-3 max-w-5xl'>
              <ServiceCard image={uiUx} />
              <ServiceCard image={webDev} title={'UI/UX'}/>
              <ServiceCard image={moblieDev} title={'Mobile Application'}/>            
            </div>
            <p className='font-Truclenta text-center py-3'>Looking for a custom job? <a href="#contact " className='text-red-400'>Click here </a>to contact me ✨</p>
          </div>

        </div>

      </section>
    </div>

  )
}

export default Service
