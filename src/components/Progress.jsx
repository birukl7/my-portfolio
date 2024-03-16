import React from 'react'

function Progress(props) {
  return (
    <div className={props.class}>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium ">{props.name}</span>
        <span className="text-sm font-medium">{props.percent}</span>
      </div>

      <div className="w-full dark:bg-gray-200 rounded-full h-2.5 bg-gray-700">
        <div className={`${props.barColor} h-2.5 rounded-full`} style={{width: `${props.width}`}}></div>
      </div> 
    </div>
  )
}

export default Progress
