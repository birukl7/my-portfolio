import React from 'react'

function SectionTitle(props) {
  return (
    <h2 className='text-5xl font-Truculenta font-semibold py-4 pb-10'>{!props.text ? 'Experience' : props.text}</h2>
  )
}

export default SectionTitle
