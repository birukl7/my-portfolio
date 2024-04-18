import React from 'react'
import SecondaryBtn from '../components/SecondaryBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import PrimaryButton from '../components/PrimaryButton'
import benKolde from '/images/body-images/ben-kolde.jpg'
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
          <div className=' rounded-lg overflow-hidden outline outline-1'>
            <div className='h-60 w-full  bg-no-repeat  bg-center  hover bg-100% hover:bg-105% transition-all duration-150 ease-in-out' style={{backgroundImage: `url(${benKolde})`}}></div>
            <span className='flex justify-between py-4 px-4'> <h4 className='text-3xl font-semibold font-Truculenta text'>Link Builders</h4><span className='flex items-center gap-x-4 '><a href="#" className='underline hover:text-blue-400'>Visit Site</a><a href="#" className='text-2xl'><FontAwesomeIcon icon={faGithub} className='hover:text-yellow-300 dark:hover:text-blue-400 transition-all duration-150 ease-in-out'/></a></span></span>

            <p className='py-1 px-4 line-clamp-4 '>Link Building is a method SEO professionals use to generate backlinks that compel search engines to rank thier websited higher on search results LinkBuilders Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, fugiat. Ab, quod consectetur excepturi quasi expedita similique temporibus deleniti possimus!</p>

            <div className='flex justify-between items-center px-4 py-3 mt-2'>
              <button className='outline outline-1 p-2 rounded-md font-bold' >
                <a href="#" className='mr-2 flex items-center hover:gap-x-3 transition-all duration-300 ease-linear'>Read More<FontAwesomeIcon icon={faArrowRight} className='ml-2'/></a>
                
              </button>
              <span><Technology text={'Node js'} class={'bg-slate-300 text-black  uppercase  py-1 px-3 shadow-sm shadow-yellow-200'}/> <Technology text={'Mongo DB'} class={'bg-slate-300 shadow-sm shadow-yellow-200 text-black py-1 px-3 uppercase '}/></span>
            </div>

            
            
            
          </div>
          <WorkCard pic={benKolde} title={'Have a Dream'} firstTech={'laravel'} secondTech={'Mysql'}/>
          <WorkCard pic={benKolde} title={'Have a Dream'} firstTech={'laravel'} secondTech={'Mysql'}/>
          <WorkCard pic={benKolde} title={'Have a Dream'} firstTech={'laravel'} secondTech={'Mysql'}/>
          <WorkCard pic={benKolde} title={'Have a Dream'} firstTech={'laravel'} secondTech={'Mysql'}/>
          <WorkCard pic={benKolde} title={'Have a Dream'} firstTech={'laravel'} secondTech={'Mysql'}/>
        </div>
      </div>
    </section>
  )
}

export default RecentWorks
