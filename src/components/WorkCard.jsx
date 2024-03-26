import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Technology from './Technology'

function WorkCard(props) {
  return (
  <div className=' rounded-lg overflow-hidden outline outline-1'>
    <div className='h-60 w-full  bg-no-repeat  bg-center  hover bg-100% hover:bg-105% transition-all duration-150 ease-in-out' style={{backgroundImage: `url(${props.pic})`}}></div>
    <span className='flex justify-between py-4 px-4'> <h4 className='text-3xl font-semibold font-Truculenta text'>{props.title}</h4><span className='flex items-center gap-x-4 '><a href={props.siteLink ? props.siteLink : '#'} className='underline hover:text-blue-400'>Visit Site</a><a href={props.gitLink? props.gitLink : "#"} className='text-2xl'><FontAwesomeIcon icon={faGithub} className='hover:text-yellow-300 dark:hover:text-blue-400 transition-all duration-150 ease-in-out'/></a></span></span>

    <p className='py-1 px-4 line-clamp-4 '>Link Building is a method SEO professionals use to generate backlinks that compel search engines to rank thier websited higher on search results LinkBuilders makes it easier for ...</p>

    <div className='flex justify-between gap-x-1 sm:gap-auto items-center px-4 py-3 mt-2'>
      <button className='outline outline-1 p-2 rounded-md font-bold w-36 sm:w-auto' >
        <a href= {!props.readLink ? "#" : props.readLink} className='mr-2 flex items-center hover:gap-x-3 transition-all duration-300 ease-linear'>Read More<FontAwesomeIcon icon={faArrowRight} className='ml-2'/></a>
      </button>
      <span className='flex gap-x-2'><Technology text={!props.firstTech?'Node js': props.firstTech} class={'bg-slate-50 text-black  sm:uppercase text-sm py-1 px-3 shadow-sm shadow-yellow-200  capitalize'}/> <Technology text={!props.secondTech ? 'Mongo DB' : props.secondTech} class={'bg-slate-50 shadow-sm shadow-yellow-200 text-black py-1 px-3 sm:uppercase text-sm capitalize'}/></span>
    </div>
    
    
  </div>
  )
}

export default WorkCard
