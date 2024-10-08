import React from 'react'

function SectionTitle(props) {
  return (
    <h2 className={`sm:text-4xl text-2xl font-Truculenta font-semibold py-4 pb-10  ${props.classes}`}>{!props.text ? 'Experience' : props.text}</h2>
  )
}

export default SectionTitle
