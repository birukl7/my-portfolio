import React from 'react'
import benKolde from '/images/body-images/ben-kolde.jpg'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'

function Service(props) {
  return (
    <div className={`${props.class}`}>
      <section id='service' className={`${props.classSec}  pt-16 static`}>
        <SectionTitle text={'Services'} />
        <div className='flex justify-center items-center'>
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 p-3'>
              <ServiceCard image={benKolde} />
              <ServiceCard image={benKolde} title={'web'}/>
              <ServiceCard image={benKolde} title={'web'}/>            
            </div>
            <p className='font-Truclenta text-center py-3'>Looking for a custom job? <a href="#contact " className='text-red-400'>Click here </a>to contact me ✨</p>
          </div>

        </div>

      </section>
    </div>

  )
}

export default Service
