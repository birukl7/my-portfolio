import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap-icons/font/bootstrap-icons.css';

function ExperienceCard(props) {
  return (
    <li className='pb-3'>
        <div><FontAwesomeIcon icon={faGraduationCap} className='mr-10 dark:text-red-500'/><span>{!props.year ? '2019 - 2021' : props.year}</span></div>
          <div className='border-l-2 p-4 pl-10 ml-2 dark:border-red-500'>
            <div className=' text-sm flex items-center gap-x-2 text-gray-400'><i className="bi bi-geo-alt"></i>{!props.location ? 'Addis Ababa, Ethiopia': props.location}</div>
          <h4 className='font-semibold py-2'>{!props.title ? 'High School Diploma': props.title} </h4>
          <p>{!props.description ? 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, mollitia!' : props.description}</p>
        </div>
    </li>
  )
}

export default ExperienceCard
