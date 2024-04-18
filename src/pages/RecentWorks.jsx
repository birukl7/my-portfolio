import React from 'react'
import SecondaryBtn from '../components/SecondaryBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import PrimaryButton from '../components/PrimaryButton'
import benKolde from '/images/body-images/ben-kolde.jpg'
import healthGuard from '/images/body-images/health-guard-1.png'
import weather from '/images/body-images/weather.png'
import spaceInvaders from '/images/body-images/space-invaders.png'
import courseMate from '/images/body-images/course-mate.png'
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Technology from '../components/Technology'
import WorkCard from '../components/WorkCard'
import SectionTitle from '../components/SectionTitle'


function RecentWorks() {
  return (
    <section id='works'>
      <SectionTitle text={'Recent Work'} />
      <div>
        <ul className='flex justify-start gap-x-5 gap-y-3 flex-wrap'>
          <li><SecondaryBtn text={'Everything'}/></li>
          <li><SecondaryBtn text={'UI/UX'}/></li>
          <li><SecondaryBtn text={'Frontend'}/></li>
          <li><SecondaryBtn text={'Backend'}/></li>
          <li><SecondaryBtn text={'Database'}/></li>
          <li><SecondaryBtn text={'Mobile App'}/></li>
        </ul>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 mg:grid-cols-3 mt-2 p-3 gap-x-5 gap-y-5'>
          

          <WorkCard pic={healthGuard} title={'Health-Guard'} firstTech={'laravel'} secondTech={'Blade'} description={'Health Guard is a web application that is for college students who are suffering depression and pychological problems, connects them with health professionals. it is built by laravel usign blade templating engine.'} gitLink={'https://github.com/birukl7/health-guard'}/>

          <WorkCard pic={courseMate} title={'Have a Dream'} firstTech={'laravel'} secondTech={'Mysql'}/>
          <WorkCard pic={spaceInvaders} title={'Space Invaders'} firstTech={'Vanila JS'} secondTech={'css'}/>
          <WorkCard pic={weather} title={'Weather App'} firstTech={'Vanila Js'} secondTech={'Tailwind'} description={''}/>
          
          <WorkCard pic={benKolde} title={'Have a Dream'} firstTech={'laravel'} secondTech={'Mysql'}/>
        </div>
      </div>
    </section>
  )
}

export default RecentWorks
