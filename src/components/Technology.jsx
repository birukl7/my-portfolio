import React from 'react'

function Technology(props) {
  return (
    <button className={`bg-red-500 dark:text-black dark:bg-white dark:shadow-sm dark:shadow-black   font-semibold text-sm  rounded-full curso cursor-not-allowed ${props.class}`}>{props.text}</button> 
  
  )
}

export default Technology
