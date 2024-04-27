import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ExperienceCard from '../components/ExperienceCard'
import SectionTitle from '../components/SectionTitle'

function Experience() {
  return (
    <section className='pt-12 ' id='expert'>
      <SectionTitle text={'Experience'} />
      <div className={'grid sm:grid-cols-2 gap-x-3 gap-y-3 pb-20'}>
        <ul id='education' className='bg-slate-800 dark:bg-white p-3 rounded-xl'> 
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </ul>

        <ul id='work' className='bg-slate-800 dark:bg-white p-3 rounded-xl'>
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </ul>
      </div>
    </section>
  )
}

export default Experience
