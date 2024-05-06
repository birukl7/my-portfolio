import React from 'react'

function PlusCard(props) {
  return (
    
      <div className={`absolute rounded-full p-5 pl-10 bg-white  items-center gap-4 shadow-2xl shadow-gray-800 ${props.top}`}>
        <img src={props.image} alt="" className={`${props.imageStyle}`}/>
        <p className={`text-xs text-black font-RocknRollOne uppercase ${props.width}`}>{!props.message ? 'Attention to details' : props.message}</p>
      </div>

  )
}

export default PlusCard
