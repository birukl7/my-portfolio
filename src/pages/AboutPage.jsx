import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import Progress from '../components/Progress'
import Numbers from '../components/Numbers'
import { faCertificate, faCoffee, faPeopleCarry, faPeopleGroup, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import myPicture from '/images/body-images/my-picture.svg'
import SectionTitle from '../components/SectionTitle'
import CountUp from 'react-countup/build/'


function AboutPage() {

  const handleDownload = ()=>{
    const documentUrl = '/documents/Biruk Lemma\'s Resume.pdf'
    const link = document.createElement('a')
    link.href = documentUrl
    link.setAttribute('download', 'Biruk Lemma Resume')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }


  return (
    <section id='about' className='h-auto pt-16  md:pt-28'>
      <div className='sm:mb-10'>
        <SectionTitle text={'About Me'} />
      </div>
      <div className='flex gap-x-6 '>
        <div className='hidden sm:inline-block bg-yellow-500 dark:bg-blue-500 rounded-full about-pic-css'>
          <img src={myPicture} className='w-full h-full object-contain' alt="profile" />
        </div>
        <div className='sm:flex gap-x-4 bg-inherit bg-white p-5 rounded-2xl sm:w-11/12 shadow-xl'>
          <div className='sm:w-1/2 pt-8 pl-3'>
              <p className=' pl-1 font-RobotoCondensed dark:font-semibold '>
                My passion for technology and innovation began in my senior year of high school when I tried to build library management system for my highschool - turns out there's so much to you could do further more. Fast forward to today, and I've had the privilege of building software for  businesses, and startups.

                These days, my main focus is on developing web and mobile technology-based products and impactful projects.
              </p>

              <PrimaryButton text={'Download Resume'} class={'mt-6 text-white'} onclick={handleDownload}/>
            </div>

          <div className='p-3 pt-8 flex-1'>
            <Progress 
              name={'Development'} 
              percent={`${<CountUp start={0} end={85} />}%`} 
              width={'85%'} 
              barColor={'bg-yellow-400'}
              bgColor={'bg-slate-200'}/>

            <Progress 
              name={'UI/UX'} 
              percent={'79%'} 
              width={'79%'} 
              class={'mt-3'} 
              barColor={'bg-red-500'}
              bgColor={'bg-slate-200'}/>

            <Progress 
              name={'Mobile App'} 
              percent={'75%'} 
              width={'75%'} 
              class={'mt-3'} 
              barColor={'bg-blue-500'}
              bgColor={'bg-slate-200'}/>
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
