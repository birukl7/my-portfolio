import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Technology from '../components/Technology'
import LanguageLinks from '../components/LanguageLinks'

function Footer() {
  return (
    <footer className='py-3 mt- flex sm:flex-row flex-col items-center justify-center gap-x-7 dark:text-black pt-16'>
      <div className='flex flex-col items-center'>
        <div className=' text-[17px] pb-2 sm:pb-0  font-Truculenta'>Build by Biruk with ❤️</div>
        {/* <h5>Inspired by Bolby website theme</h5>
        <h5></h5> */}
      </div>

      {/* <div>
        <a href="#home" className='rounded-full'>
        <FontAwesomeIcon icon={faArrowUp} className='outline outline-1   rounded-full p-3 bg-black dark:text-white' />
        </a>
      </div> */}

      <Technology text = {'Updated: April 20 2024'} class={'sm:p-3  rounded-none  bg-white text-black sm:uppercase p-3'} />

      <ul>
        {/* <LanguageLinks  /> */}
      </ul>
    </footer>
  )
}

export default Footer
