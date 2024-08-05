import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function ServiceCard(props) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsImageLoaded(true);
    };
    img.src = props.image;
  }, [props.image]);

  return (
    <div className='flex flex-col items-center rounded-xl overflow-hidden bg-slate-800 dark:bg-white transition duration-200 hover:-translate-y-3 shadow-xl'>
      <div className='h-48 w-full relative'>
        {!isImageLoaded && (
          <Skeleton className='h-full w-full' />
        )}
        {isImageLoaded && (
          <div className='h-full w-full bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${props.image})` }}>
          </div>
        )}
      </div>
      <div className='p-3 pb-5'>
        <h3 className='font-semibold text-center py-2 font-Truculenta text-3xl'>
          {!props.title ? 'Web Development' : props.title}
        </h3>
        <p className='px-3'>
          {!props.text ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, animi?' : props.text}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
