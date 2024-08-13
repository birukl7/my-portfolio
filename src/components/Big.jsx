import React from 'react'
import MotionCard from './MotionCard'
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import myPortfolio1 from '/images/body-images/my-portfolio/my-portfolio1.png'

import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";
import WorkCard from './WorkCard';

function Big() {
  return (
    <div>
            <div className='relative max-w-[1000px] mx-auto grid grid-cols-3 gap-x-5 gap-y-2 py-10'>
      <MotionCard />
      <MotionCard />
      <MotionCard />
      <MotionCard />
    </div>


    <SocialsBlock />


    </div>

  )
}

export default Big

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          rotate: "-2.5deg",
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        // animate: {
        //   scale: 1,
        //   y: 0,
        //   opacity: 1,
        // },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        " rounded-lg text-white dark:text-black",
        className
      )}
      {...rest}
    />
  );
};


const SocialsBlock = () => (
  <div className='grid grid-cols-3 max-w-[1000px] mx-auto gap-x-4'>
    <Block
      whileHover={{
        rotate: "0deg",
        scale: 1,
      }}
      className=" "
    >
      <a
        href="#"
        className=""
      >
            <WorkCard 
              title={'Selam'}
              firstTech={'edu'}
              secondTech={'framer'}
              description={'lorem he is nd d ldijkjl jklikjs sende yemiset aynet konkoa nw eyaweraw yalehut ende endea '}
              gitLink={''}
              category={['name','age']}
              siteLink={''}
              readLink={''}
              pics={myPortfolio1}
            />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className=" bg-green-600 "
    >
      <a
        href="#"
        className=" text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className=" bg-zinc-50 "
    >
      <a
        href="#"
        className=" text-3xl text-black"
      >
        <SiTiktok />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className=" bg-blue-500 "
    >
      <a
        href="#"
        className=" text-3xl text-white"
      >
        <SiTwitter />
      </a>
    </Block>
  </div>
);