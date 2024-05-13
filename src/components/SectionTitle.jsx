import React from 'react'

function SectionTitle(props) {
  return (
    <h2 className={`text-4xl font-Truculenta font-semibold py-4 pb-10  ${props.classes}`}>{!props.text ? 'Experience' : props.text}</h2>
  )
}

export default SectionTitle
