import React, { useEffect } from 'react'
import Homey from '../components/homeNavBar'
import Footer from './Footer'
import Contact from './Contact';
import projects from '../projects-data/projectsCard'
import SectionTitle from '../components/SectionTitle'
import Technology from '../components/Technology'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link, ScrollRestoration, useLocation, useParams } from 'react-router-dom'
import NotFoundPage from './NotFoundPage';
import ProjectSlide from '../components/ProjectSlide';
import "@theme-toggles/react/css/Expand.css"
import { Expand } from "@theme-toggles/react"
import { useTheme } from '../components/ThemeContext';


function Project() {
  const {id} = useParams()
  const projectId = parseInt(id, 10); // Convert the id from string to number
  const project = projects.find((project) => project.id === projectId);
  const location = useLocation();
  const { theme, changeTheme } = useTheme();

  // console.log()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!project) {
    return <NotFoundPage />;
  }

  return (

    <div className='max-w-[1100px] mx-auto pt-10 text-slate-100 dark:text-slate-900 pb-10' id='' >

      <div>
        <div className=' px-4 py-1 sm:p-4 outline-1 fixed right-0 left-0 top-0 mb-6 z-[100] bg-[#020024AA]  dark:bg-slate-200 backdrop-blur-[100px]'>
          <div className='flex justify-between items-center max-w-[1100px] mx-auto'>
            <SectionTitle text={'Works'} classes={'pb-4 text-[30px] sm:text-4xl'} />
            <div className='flex items-center gap-x-5'>
              <Expand duration={750} toggled={theme === 'light'} toggle={changeTheme} className='text-2xl' />
              <Link className='sm:p-4 p-2  outline outline-1 rounded-lg' to={'/#works'}>Back To Works</Link>
            </div>

          </div>
        </div>

        <div className='pt-12'>
          <div className='grid grid-cols-1 gap-x-5'>
            <ProjectSlide pics={project.pics}/>
          </div>

          <div className='sm:px-20 px-5'>
            <SectionTitle text={project.name} />
            <div className='flex flex-col gap-y-5'>
              <p className='max-w-[750px]'><a href={project.siteLink} target='_blank' className='font-semibold underline'>{project.name}</a> {project.descriptions[0].split(' ').slice(2).join(' ')}</p>
            </div>

            <div>
              <div className='p-5 flex gap-x-4 flex-wrap gap-y-2'>
                <Technology text={project.firstTech} class={'p-2 px-4 text-[15px] bg-white text-black capitalize'} />  
                <Technology text={project.secondTech} class={'p-2 px-4 text-[15px] bg-white text-black capitalize'} />
                {
                  project.tags.map(tag => (
                    <Technology text={tag} class={'p-2 px-4 text-[15px] bg-white text-black capitalize'} />
                  ))
                }
              </div>
              <div className='flex gap-x-6'>
                <a className='p-2 px-6 rounded-full flex items-center gap-x-3 bg-transparent outline outline-1 hover:rounded-sm transition-all duration-300' href={project.siteLink} target='_blank'><FontAwesomeIcon icon={faLink}/>Vist Site </a>
                <a className='p-2 px-6 rounded-full flex items-center bg-transparent outline outline-1 hover:pr-8 transition-all duration-150' href={project.githubLink} target='_blank'><FontAwesomeIcon icon={faGithub}/></a>
              </div>

              <div className='text-slate-100 dark:text-slate-900 '>
                <div className='max-w-screen-xl my-0 mx-auto w-11/12 '>
                  <Contact />
                </div>
              </div>

              <div>
                <div className='max-w-screen-xl my-0 mx-auto max-w-4xl w-full mt-20 rounded-2xl overflow-hidden h-[400px] px-3' >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.0202980462!2d38.61333544125166!3d8.963479530449137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1715576975392!5m2!1sen!2set" 
                    className='w-full h-full'
                    >
                  </iframe>
                </div>

              </div>
          </div>


          </div>


        </div>

      </div>
    </div>
  )
}

export default Project
