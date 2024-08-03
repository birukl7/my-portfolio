import React from 'react'

function Input({placeholder, classes, name, change}) {
  return (
    <>
      <input type="text" name={name} id="" placeholder={!placeholder? 'Your name' : placeholder} className={` focus:ring-0 rounded-full p-4 py-3 pl-7 text-black  ${classes}`} onChange={change} />
    </>
  )
}

export default Input
