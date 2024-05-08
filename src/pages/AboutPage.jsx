import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import Progress from '../components/Progress'
import Numbers from '../components/Numbers'
import { faCertificate, faCoffee, faPeopleCarry, faPeopleGroup, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import myPicture from '/images/body-images/my-picture.svg'
import SectionTitle from '../components/SectionTitle'

function AboutPage() {
  return (
    <section id='about' className='h-auto pt-16  md:pt-28'>
      <div className='sm:mb-10'>
        <SectionTitle text={'About Me'} />
      </div>
      <div className='flex gap-x-6 '>
        <div className='hidden sm:inline-block bg-yellow-500 dark:bg-blue-500 rounded-full about-pic-css'>
          <img src={myPicture} className='w-full h-full object-contain' alt="profile" />
        </div>
        <div className=' bg-inherit dark:bg-white p-5 rounded-2xl sm:w-11/12 outline outline-1 '>
          <div className=' '>
              <p className=' pl-1 font-RobotoCondensed font-light dark:font-semibold  font-semibold'>
                My passion for technology and innovation began in my senior year of high school when I tried to build library management system for my highschool - turns out there's so much to you could do further more. Fast forward to today, and I've had the privilege of building software for  businesses, startups, and university.

                These days, my main focus is on developing web and mobile technology-based products and impactful projects.
              </p>

              <PrimaryButton text={'Download Resume'} class={'mt-6 text-white'}/>
            </div>
          <div className='p-3 pt-5'>
            <Progress name={'Development'} percent={'85%'} width={'85%'} barColor={'bg-yellow-400'} bgColor={'bg-slate-200'}/>
            <Progress name={'UI/UX'} percent={'79%'} width={'79%'} class={'mt-3'} barColor={'bg-red-500'} bgColor={'bg-slate-200'}/>
            <Progress name={'Mobile App'} percent={'75%'} width={'75%'} class={'mt-3'} barColor={'bg-blue-500'} bgColor={'bg-slate-200'}/>
          </div>
        </div>
      </div>
      <div className='grid sm:grid-cols-2 gap-x-4 mt-5 md:grid-cols-4'> 
        <Numbers icon={faThumbsUp} number={'3'} message={'Projects Completed'} bgColor={'bg-slate-300'}/>
        <Numbers icon={faPeopleGroup} number={'4'} message={'Satasfied Clients'} bgColor={'bg-slate-300'}/>
        <Numbers icon={faCoffee} number={'1'} message={'Cup of Coffee'} bgColor={'bg-slate-300'}/>
        <Numbers icon={faCertificate} number={'2'} message={'Qualification Certificates'} bgColor={'bg-slate-300'}/>
      </div>
    </section>
  )
}

export default AboutPage
