import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Experience() {
  return (
    <section id='expert' className='pt-12 '>
      <h2 className='text-5xl font-Truculenta font-semibold py-4 pb-10'>Experience</h2>
      <div className={'grid sm:grid-cols-2 gap-x-3 gap-y-3 pb-20'}>

        <ul id='education' className='bg-slate-800 dark:bg-white p-3 rounded-xl'> 
          <li>
            <div><FontAwesomeIcon icon={faGraduationCap} className='mr-10 dark:text-red-500'/><span>2019 - 2021</span></div>
              <div className='border-l-2 p-4 pl-10 ml-2 dark:border-red-500'>
                <h4 className='font-semibold py-2'>High School Diploma</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, mollitia!</p>
              </div>
          </li>

          <li>
            <div><FontAwesomeIcon icon={faGraduationCap} className='mr-10'/><span>2019 - 2021</span></div>
              <div className='border-l-2 p-4 pl-10 ml-2 '>
                <h4 className='font-semibold py-2'>High School Diploma</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, mollitia!</p>
              </div>
          </li>

          <li>
            <div><FontAwesomeIcon icon={faGraduationCap} className='mr-10'/><span>2019 - 2021</span></div>
              <div className='border-l-2 p-4 pl-10 ml-2 '>
                <h4 className='font-semibold py-2'>High School Diploma</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, mollitia!</p>
              </div>
          </li>

        </ul>

        <ul id='work' className='bg-slate-800 p-3 rounded-xl'>
        <li>
            <div><FontAwesomeIcon icon={faGraduationCap} className='mr-10'/><span>2019 - 2021</span></div>
              <div className='border-l-2 p-4 pl-10 ml-2 '>
                <h4 className='font-semibold'>High School Diploma</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, mollitia!</p>
              </div>
          </li>

          <li>
            <div><FontAwesomeIcon icon={faGraduationCap} className='mr-10'/><span>2019 - 2021</span></div>
              <div className='border-l-2 p-4 pl-10 ml-2 '>
                <h4 className='font-semibold'>High School Diploma</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, mollitia!</p>
              </div>
          </li>

          <li>
            <div><FontAwesomeIcon icon={faGraduationCap} className='mr-10'/><span>2019 - 2021</span></div>
              <div className='border-l-2 p-4 pl-10 ml-2 '>
                <h4 className='font-semibold'>High School Diploma</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, mollitia!</p>
              </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Experience
