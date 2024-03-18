import React from 'react'

function Input(props) {
  return (
    <>
      <input type="text" name="name" id="" placeholder={!props.placeholder? 'Your name' : props.placeholder} />
    </>
  )
}

export default Input
