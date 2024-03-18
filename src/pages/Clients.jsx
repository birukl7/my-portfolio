import React from 'react'
import SectionTitle from '../components/SectionTitle'
import myPicture from '/images/body-images/my-picture.svg'
import Testimony from '../components/Testimony'

function Clients() {
  return (
    <section >
      <SectionTitle text={'Clients and Reviews'}/>
        <div className='grid sm:grid-cols-3 grid-cols-1 gap-x-3 gap-y-6'>
          <div className=''>
            <div className='flex flex-col items-center'>
              <div className='bg-yellow-300 dark:bg-blue-400 overflow-hidden ' id='client-img-container'>
                <img src={myPicture} alt="" />
              </div>
              <h5 className='font-Truculenta text-2xl  font-semibold my-1'>John Doe</h5>
              <p className='pb-3'>Product Designer at Dribble</p>
            </div>
            <div className='p-3 py-5 w-80 outline outline-1 rounded-md'>
              <p className=' line-clamp-5'>I enjoy working with the theme and learn so much. You guys make the process so fun and interesting. Good Luck 😊</p>
            </div>
          </div>
          <Testimony />
          <Testimony />
        </div>
    </section>
  )
}

export default Clients
