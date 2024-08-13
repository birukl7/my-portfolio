import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'

function BorderAnimation({image, title, text}) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsImageLoaded(true);
    };
    img.src = image;
  }, [image]);

  return (
    <div className='' >
      <div  class="card-wrapper dark:bg-white  h-[360px] w-[320px] sm:h-[370px] ">
        <div class="card-content flex flex-col text-white bg-slate-800 dark:bg-white dark:text-black ">
          <div className='h-full w-full relative'>
          {!isImageLoaded && (
          <Skeleton className='h-full w-full' />
          )}
          {isImageLoaded && (
            <div className='h-full w-full bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${image})` }}>
            </div>
          )}
        </div>
        <div className='p-3 pb-5'>
          <h3 className='font-semibold text-center y-2 font-Truculenta text-3xl'>
          {!title ? 'Web Development' :title}
          </h3>
          <p className='px-3'>
            {!text ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, animi?' :text}
          </p>
        </div>
        </div>
      </div>
    </div>


   
  )
}

export default BorderAnimation
