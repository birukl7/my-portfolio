import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Input from '../components/Input'
import PrimaryButton from '../components/PrimaryButton'

function Contact() {
  return (
    <section id='contact'>
      <SectionTitle text={'Get In Touch'}/>
      <div>
        <div>
          <p>Let's Talk about everything!</p>
          <p>Don't like forms? send me an <span className='text-red-500'>email</span>✨</p>
        </div>
          <div>
            <div className='flex justify-between flex-col sm:flex-row'>
              <Input/>
              <Input/>
            </div>
            <Input />
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <PrimaryButton text={'send message'}/>
        <div>

        </div>
      </div>
    </section>
  )
}

export default Contact
