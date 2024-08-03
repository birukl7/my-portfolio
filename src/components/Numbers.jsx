import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react'

function Numbers(props) {
  const [message, setMessage] = useState(props.number)

  return (
    <div className={`p-4 flex items-start pl-8 my-4 gap-x-3 bg-gray-800 dark:bg-white rounded-2xl shadow-lg ${props.bgColor}`}>
      <div className={`flex justify-start items-start pt-2 `}>
        <i className={`text-3xl font-light ${props.icon}`}></i>
        
      </div>
      <div className='pl-2'>
        <strong className={'text-2xl font-Truculenta font-semibold '}>{props.number}</strong>
        <p className='font-truclunta font-Truculenta font-semibold '>{props.message}</p>
      </div>
    </div>
  )
}

export default Numbers
