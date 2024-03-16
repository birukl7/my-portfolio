import React from 'react'
import SecondaryBtn from '../components/SecondaryBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import PrimaryButton from '../components/PrimaryButton'

function RecentWorks() {
  return (
    <section id='works'>
      <h2 className='text-5xl font-Truculenta font-semibold py-4 pb-10'>Recent Works</h2>
      <div>
        <ul className='flex justify-start gap-x-5 gap-y-3 flex-wrap'>
          <li><SecondaryBtn text={'Everything'}/></li>
          <li><SecondaryBtn text={'UI/UX'}/></li>
          <li><SecondaryBtn text={'Frontend'}/></li>
          <li><SecondaryBtn text={'Backend'}/></li>
          <li><SecondaryBtn text={'Database'}/></li>
          <li><SecondaryBtn text={'Mobile App'}/></li>
        </ul>
        <div className='grid sm:grid-cols-3'>
          <div>
            <div>{/** bg */}</div>
            <span className='flex justify-between'> <h4>Link Builders</h4><span><a href="#">Visit Site</a><a href="#"><FontAwesomeIcon icon={faGithub}/></a></span></span>

            <p>Link Building is a method SEO professionals use to generate backlinks that compel search engines to rank thier websited higher on search results LinkBuilders makes it easier for ...</p>

            <div><strong>Read More</strong> <span><PrimaryButton text={'biruk'} className={'bg-white'}/> <PrimaryButton/></span></div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentWorks
