import React from 'react'
import Homey from '../components/Homey'
import Footer from './Footer'

function Project() {
  return (

    <div className='max-w-[1100px] mx-auto'>
      <div><Homey/></div>

      <div className='grid grid-cols-2'>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <article>
    
      </article>

      <div>
        
      </div>

      <div></div>

      <div className='text-slate-100 dark:text-slate-900 -z-30'>
        <div className='max-w-screen-xl my-0 mx-auto w-11/12 '>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Project
