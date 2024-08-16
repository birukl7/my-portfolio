import React from 'react'

function PrimaryButton(props) {
  return (
    <>
     <button className={ `flex items-center gap-x-3 bg-red-500 dark:text-white w-auto my-0 mx-auto px-8 py-3 font-semibold text-sm  rounded-full hover:bg-red-700 cursor-pointer ${props.class}`} onClick={props.onclick} type={props.sumbmit ? props.sumbmit : ''}>
      {props.icon? props.icon : ''}
      {props.text}</button> 
    </>
  )
}

export default PrimaryButton
