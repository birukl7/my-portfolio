import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Technology from './Technology';

function WorkCard({ pic, title, siteLink, gitLink, description, readLink, firstTech = 'Node js', secondTech = 'Mongo DB', category }) {
  return (
    <div className='rounded-lg overflow-hidden bg-[#0b1e38] dark:bg-white dark:text-black transition-all duration-300 ease-in-out shadow-xl'>
      {/* Image container */}
      <div className='h-60 w-full  bg-no-repeat  bg-center  bg-100% hover:bg-105% transition-all duration-150 ease-in-out' style={{backgroundImage: `url(${pic})`}}>
    </div>

      {/* Title and links */}
      <div className='flex justify-between py-4 px-4'>
        <h4 className='text-3xl font-semibold font-Truculenta text'>{title}</h4>
        <div className='flex items-center gap-x-4'>
          <a href={siteLink ? siteLink : '#'} className='underline hover:text-blue-400'>Visit Site</a>
          <a href={gitLink ? gitLink : "#"} className='text-2xl'><FontAwesomeIcon icon={faGithub} className='hover:text-yellow-300 dark:hover:text-blue-400 transition-all duration-150 ease-in-out' /></a>
        </div>
      </div>

      {/* Clamped text paragraph */}
      <p className='py-1 px-4 line-clamp-4'>{description ? description : 'Link Building is a method SEO professionals use to generate backlinks that compel search engines to rank thier websited higher on search results LinkBuilders makes it easier for ...'}</p>

      <div className='flex justify-between gap-x-1 sm:gap-auto items-center px-4 py-3 mt-2'>
        <button className='bg-[#1688e6] p-2 rounded-md  hover:bg-transparent hover:outline hover:outline-1 font-bold w-36 sm:w-auto shadow-xl'>
          <a href={readLink ? readLink : "#"} className='mr-2 flex items-center hover: transition-all duration-300 ease-linear text-white hover:dark:text-black rounded-full text-sm'>
            Read More<FontAwesomeIcon icon={faArrowRight} className='ml-2' />
          </a>
        </button>
        <div className='flex gap-x-2'>
          <Technology text={firstTech} class={'bg-slate-50 text-black  sm:uppercase text-sm py-1 px-3 shadow-sm shadow-yellow-200  capitalize'} />
          <Technology text={secondTech} class={'bg-slate-50 shadow-sm shadow-yellow-200 text-black py-1 px-3 sm:uppercase text-sm capitalize'} />
        </div>
      </div>

     
    </div>
  );
}

export default WorkCard;
