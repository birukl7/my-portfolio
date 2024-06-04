import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Input from '../components/Input'
import PrimaryButton from '../components/PrimaryButton'

function Contact() {
  return (
    <section id='contact' className='mt-20'>
      <SectionTitle text={'Get In Touch'}/>
      <div className='flex md:flex-row flex-col justify-between gap-x-4 max-w-5xl mx-auto'>
        <div className='w-full'>
          <p>Let's Talk about everything!</p>
          <p>Don't like forms? send me an <span className='text-red-500'>email</span>✨</p>
        </div>

        <div className='md:w-full md:mt-0 mt-6'>
          <div className='flex  flex-col sm:flex-row px-3 '>
            <Input placeholder={'Your name'} class={'w-full mr-5 md:mb-0 mb-3 shadow-lg'}/>
            {/* <input type="text" name="" className='rounded-full focus:ring-0 ring-white focus:ring-white' id="" /> */}
           
            <Input placeholder={'Your email'} class={'w-full shadow-lg'}/>
          </div>
          <div className='flex flex-col gap-y-3 mt-3'>
            <div className='px-3 w-full'>
              <Input class={'w-full shadow-lg'} placeholder={'Subject'}/>
            </div>
            
            <textarea name="" id="" cols="30" rows="10" className='p-5 m-4 mt-0 rounded-md focus:outline-1 focus:outline-blue-400 text-black font-semibold shadow-lg' placeholder='Message '></textarea>
            <PrimaryButton text={'send message'}/>
          </div>

        </div>
          
      </div>
    </section>
  )
}

export default Contact
