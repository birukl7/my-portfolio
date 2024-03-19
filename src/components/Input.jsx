import React from 'react'

function Input(props) {
  return (
    <>
      <input type="text" name="name" id="" placeholder={!props.placeholder? 'Your name' : props.placeholder} className={` rounded-full p-4 py-3 pl-7 focus:outline-blue-400 focus:outline-1 text-black  ${props.class}`} />
    </>
  )
}

export default Input
