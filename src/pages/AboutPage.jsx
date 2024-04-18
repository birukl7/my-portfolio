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
              <p className=' pl-1 font-RobotoCondensed font-light dark:font-semibold  '>I am Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nemo! Lorem ipsum dolor sit amet.lorem10  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, culpa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit architecto repellat harum obcaecati! Libero voluptates perferendis blanditiis animi quaerat maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consectetur fugiat ipsum ad explicabo cupiditate labore? Amet blanditiis quibusdam dolorum, modi earum porro beatae est reiciendis aspernatur, pariatur obcaecati accusantium?</p>

              <PrimaryButton text={'Download Resume'} class={'mt-6 '}/>
            </div>
          <div className='p-3 pt-5'>
            <Progress name={'Development'} percent={'85%'} width={'85%'} barColor={'bg-yellow-400'}/>
            <Progress name={'UI/UX'} percent={'79%'} width={'79%'} class={'mt-3'} barColor={'bg-red-500'}/>
            <Progress name={'Mobile App'} percent={'75%'} width={'75%'} class={'mt-3'} barColor={'bg-blue-500'}/>
          </div>
        </div>
      </div>
      <div className='grid sm:grid-cols-2 gap-x-4 mt-5 md:grid-cols-4'> 
        <Numbers icon={faThumbsUp} number={'12'} message={'Projects Completed'}/>
        <Numbers icon={faPeopleGroup} number={'5'} message={'Satasfied Clients'}/>
        <Numbers icon={faCoffee} number={'3'} message={'Cup of Coffee'}/>
        <Numbers icon={faCertificate} number={'4'} message={'Qualification Certificates'}/>
      </div>
    </section>
  )
}

export default AboutPage
