import React, { useEffect, useState } from 'react';
import Progress from '../components/Progress';
import ScrollTrigger from 'react-scroll-trigger';
import PrimaryButton from '../components/PrimaryButton';
import Numbers from '../components/Numbers';
import myPicture from '/images/body-images/my-picture.svg';
import SectionTitle from '../components/SectionTitle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Blurhash } from 'react-blurhash';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function AboutPage() {
  const [progressVisible, setProgressVisible] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const handleProgressVisible = () => {
    setProgressVisible(true);
  };

  const handleDownload = () => {
    const documentUrl = '/documents/Biruk Lemma\'s Resume.pdf';
    const link = document.createElement('a');
    link.href = documentUrl;
    link.setAttribute('download', 'Biruk Lemma Resume');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(()=>{
    const img = new Image()
    img.onload = () => {
      setIsImageLoaded(true)
    }
    img.src = myPicture
  },[])

  return (
    <section id='about' className='h-auto pt-16 md:pt-20'>
      <div className='sm:mb-10'>
        {/* Trigger Progress visibility when it becomes visible */}
        <ScrollTrigger onEnter={handleProgressVisible}>
          <SectionTitle text={'About Me'} />
        </ScrollTrigger>
      </div>
      <div className='flex gap-x-6 '>
        <div className='hidden  bg-yellow-500 dark:bg-blue-500 rounded-full about-pic-css '>
          {!isImageLoaded && (
            // <Blurhash 
            //   hash='LGHok7Ri0wkD4-of.AjYIoa~-ooc'
            //   width={'100%'}
            //   height={'100%'}
            //   resolutionX={32}
            //   resolutionY={32}
            //   punch={1}
            // />
            <Skeleton circle={true} height={'100%'} width={'100%'}/>
          )}

          {
            isImageLoaded && (          <img src={myPicture} className='w-full h-full object-contain ' alt="profile" />)
          }

        </div>
        <div className='sm:flex gap-x-4 bg-inherit bg-white p-5 rounded-2xl sm:w-11/12 shadow-xl'>
          <div className='sm:w-1/2 pt-8 pl-3'>
            <p className=' pl-1 font-RobotoCondensed dark:font-semibold '>
            My passion for technology and innovation began when I joined college, where I quickly discovered my knack for programming and software development. These days, my main focus is on developing web-based products and impactful projects. I'm a fast learner, and whenever I'm not working on a project, I'm always learning something new.
            </p>

            <PrimaryButton text={'Download Resume'} class={'mt-6 text-white'} onclick={handleDownload} />
          </div>

          <div className='p-3 pt-8 flex-1 sm:w-1/2'>
            {/* Render Progress component conditionally based on visibility */}
            {progressVisible && (
              <>
                <Progress
                  name={'API Develpment'}
                  percent={90}
                  barColor={'bg-yellow-400'}
                  bgColor={'bg-slate-200'}
                />

                <Progress
                  name={'Frontend Development'}
                  percent={79}
                  class={'mt-3'}
                  barColor={'bg-red-500'}
                  bgColor={'bg-slate-200'}
                />

                <Progress
                  name={'UI/UX Principles'}
                  percent={75}
                  class={'mt-3'}
                  barColor={'bg-blue-500'}
                  bgColor={'bg-slate-200'}
                />
              </>
            )}
          </div>
        </div>
      </div>

      <div className='grid sm:grid-cols-2 gap-x-4 mt-5 md:grid-cols-4 sm:w-11/12 hidden'> 
        <Numbers icon={'bi bi-hand-thumbs-up'} number={'3'} message={'Projects Completed'} bgColor={'bg-slate-300'} id={'fire'}/>
        <Numbers icon={'bi bi-people'} number={'4'} message={'Satasfied Clients'} bgColor={'bg-slate-300'} />
        <Numbers icon={'bi bi-patch-check'} number={'1'} message={'Cup of Coffee'} bgColor={'bg-slate-300'} />
        <Numbers icon={'bi bi-patch-check'} number={'2'} message={'Qualification Certificates'} bgColor={'bg-slate-300'} />
      </div>
    </section>
  );
}

export default AboutPage;
