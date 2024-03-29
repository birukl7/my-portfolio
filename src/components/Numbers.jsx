import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function Numbers(props) {
  const [message, setMessage] = useState(props.number)

  

  return (
    <div className='p-4 flex items-start pl-10 my-4 gap-x-3 bg-gray-800 dark:bg-white rounded-2xl'>
      <div className={`flex justify-start items-start pt-2 `}>
        <FontAwesomeIcon className={'text-4xl font-light'} icon={props.icon}/>
      </div>
      <div className='pl-2'>
        <strong className={'text-4xl font-Truculenta font-semibold'}>{message}</strong>
        <p className='font-truclunta font-Truculenta font-semibold '>{props.message}</p>
      </div>
    </div>
  )
}

export default Numbers
