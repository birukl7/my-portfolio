import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ExperienceCard from '../components/ExperienceCard'
import SectionTitle from '../components/SectionTitle'

function Experience() {
  return (
    <div>
   
      <section className='pt-12 ' id='expert'>

      <SectionTitle text={'Experience'} classes = {''}/>
      <div className='grid cs:grid-cols-2 gap-x-3 gap-y-3 pb-20 max-w-5xl'>

        <ul id='education' className='bg-slate-800 dark:bg-white p-3 rounded-2xl shadow-lg shadow-slate-700'> 
          <ExperienceCard description={'Lideta Catholic Cathedral School'}/>
          <ExperienceCard />
          <ExperienceCard />
        </ul>

        <ul id='work' className='bg-slate-800 dark:bg-white p-3 rounded-2xl shadow-lg shadow-slate-700'>
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </ul>
      </div>
    </section>
    </div>

  )
}

export default Experience
