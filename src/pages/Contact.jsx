import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Input from '../components/Input'
import PrimaryButton from '../components/PrimaryButton'

function Contact() {
  return (
    <section id='contact mt-16'>
      <SectionTitle text={'Get In Touch'}/>
      <div className='flex justify-between gap-x-4'>
        <div>
          <p>Let's Talk about everything!</p>
          <p>Don't like forms? send me an <span className='text-red-500'>email</span>✨</p>
        </div>

        <div className='w-7/12'>
          <div className='flex  flex-col sm:flex-row'>
            <Input placeholder={'Your name'} class={'w-full mr-5'}/>
            <Input placeholder={'Your email'} class={'w-full'}/>
          </div>
          <div className='flex flex-col gap-y-3 mt-3'>
            <Input className={'w-full'} placeholder={'Subject'}/>
            <textarea name="" id="" cols="30" rows="10" className='p-5 m-4 mt-0 rounded-md focus:outline-1 focus:outline-blue-400 text-black font-semibold' placeholder='Message '></textarea>
            <PrimaryButton text={'send message'}/>
          </div>

        </div>
          
        <div>

        </div>
      </div>
    </section>
  )
}

export default Contact
