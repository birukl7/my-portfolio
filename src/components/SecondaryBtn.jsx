import React from 'react'

function SecondaryBtn(props) {
  return (
    <button className={` bg-slate-800 py-2 dark:bg-white px-4 rounded-lg  ${props.class}`}>
      {props.text}
    </button>
  )
}

export default SecondaryBtn
