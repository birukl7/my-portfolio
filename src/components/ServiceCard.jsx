import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion'
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
   
      <motion.div 
      initial={{width: 'auto', scale: 1}}
      whileHover={{ scale: 1.05,}}
      transition={{duration: 0.20}}

      className=" flex flex-col items-center  overflow-hidden rounded-lg translate-y-1 bg-slate-800 dark:bg-white transition duration-200  shadow-xl"
      i
      >
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
    </motion.div>
   

  );
}

export default ServiceCard;
