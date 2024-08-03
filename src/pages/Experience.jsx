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
        <ExperienceCard 
          description={'Attended my preparatory school at Lideta Catholic Cathedral School, where I participated and led in different clubs like the IT and Math clubs.'} 
          location={'Addis Ababa, Ethiopia'} 
        />

        <ExperienceCard  
          title={'Addis Ababa Science and Technology University'} 
          year={'2022 - Present'} 
          description={'I joined Addis Ababa Science and Technology University, where I am currently pursuing a bachelor\'s degree in Software Engineering.'} 
        />
          <ExperienceCard  year={'Nov 2023 - May 2024'} title={'Google Students Developers Club - Laravel Team Leader'} description={'I was a team leader and mentee in laravel sessions conduct by the club. I '}/>
        </ul>

        <ul id='work' className='bg-slate-800 dark:bg-white p-3 rounded-2xl shadow-lg shadow-slate-700'>
        <ExperienceCard 
          title={'Ahamenes Space Club'} 
          year={'2023 - Present'} 
          description={'I am a member of a selective group for rocket model development at the Space Tech Club at my school, where we are focused on developing a model rocket. This will be the first rocket launched at our university upon its completion.'} 
        />
        <ExperienceCard 
          title={'Softnet™️ Solutions - Internship (Hybrid)'} 
          year={'2024 - Summer'} 
          description={'Developed quality and scalable web applications, starting from design to finished production-level projects.'}
        />
        <ExperienceCard 
          title={'Kefita Technologies - Internship (Remote)'} 
          year={'2024 - Summer'} 
          description={'Developed API endpoints, maintained them, and made adjustments upon client requests.'}
        />
        </ul>
      </div>
    </section>
    </div>

  )
}

export default Experience
