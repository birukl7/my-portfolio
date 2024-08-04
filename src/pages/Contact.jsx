import React, { useState, useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import PrimaryButton from '../components/PrimaryButton';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('An error occurred, please try again.');
    });

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id='contact' className='mt-20'>
      <SectionTitle text={'Get In Touch'} />
      <div className='flex md:flex-row flex-col justify-between max-w-6xl mx-auto'>
        <div className=''>
          <p>Let's talk about everything!</p>
          <p>Don't like forms? Send me an <a href='mailto:contact@biruklemma.com' target='_blank' className='text-red-500'>email</a>✨</p>
        </div>

        <form ref={formRef} onSubmit={sendEmail}>
          <div className='md:w-full md:mt-0 mt-6 w-full'>
            <div className='flex gap-x-2 flex-col sm:flex-row pl-3 pr-0 gap-y-3'>
              <div>
                <input
                  type='text'
                  placeholder='Your name *'
                  className='w-full md:mb-0 mb-3 shadow-lg rounded-full p-4 py-3 pl-7 text-black'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className='text-red-500 pl-5  text-xs'>{errors.name}</p>}
              </div>

              <div>
                <input
                  type='email'
                  placeholder='Your Email *'
                  className='w-full md:mb-0 mb-3 shadow-lg rounded-full p-4 py-3 pl-7 text-black'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className='text-red-500 pl-5  text-xs'>{errors.email}</p>}
              </div>
            </div>

            <div className='flex flex-col gap-y-3 mt-3'>
              <div className='px-3 w-full'>
                <input
                  type='text'
                  placeholder='Subject'
                  className='w-full md:mb-0 mb-3 shadow-lg rounded-full p-4 py-3 pl-7 text-black'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className='w-full flex flex-col'>
                <textarea
                  name='message'
                  cols='30'
                  rows='10'
                  className='p-5 m-4 mt-0 rounded-md focus:outline-1 focus:outline-blue-400 text-black font-semibold shadow-lg'
                  placeholder='Message *'
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className='text-red-500 pl-5 text-xs'>{errors.message}</p>}
              </div>
              <PrimaryButton text={'Send Message'} type='submit' />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
