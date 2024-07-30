import React from 'react'

function ButtonLink({readLink, icon}) {
  return (
    <button className='bg-[#1688e6] p-2 rounded-md  hover:bg-transparent hover:outline hover:outline-1 font-bold w-36 sm:w-auto shadow-xl'>
      <a href={readLink ? readLink : "#"} className='mr-2 flex items-center hover: transition-all duration-300 ease-linear text-white hover:dark:text-black rounded-full text-sm'>
        Read More<FontAwesomeIcon icon={icon} className='ml-2' />
      </a>
    </button>
  )
}

export default ButtonLink
