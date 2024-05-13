import React from 'react'
import myPicture from '/images/body-images/my-picture.svg'

function Testimony(props) {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center'>
        <div className='bg-yellow-300 dark:bg-blue-400 overflow-hidden ' id='client-img-container'>
          <img src={myPicture} alt="" />
        </div>
        <h5 className='font-Truculenta text-2xl  font-semibold my-1'> {!props.name ?'John Doe': props.name}</h5>
        <p className='pb-3'>{!props.workTitle ? 'Product Designer at Dribble' : props.workTitle}</p>
      </div>
      <div className='px-3 py-5 w-80 rounded-md shadow-xl bg-[#171c49] dark:bg-white'>
        <p>I enjoy working with the theme and learn so much. You guys make the process so fun and interesting. Good Luck 😊</p>
      </div>
    </div>
  )
}

export default Testimony
